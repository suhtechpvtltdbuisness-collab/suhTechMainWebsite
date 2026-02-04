import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Invoice from '@/models/Invoice';
import Project from '@/models/Project';
import { NextResponse } from 'next/server';
import { corsHeaders, handleCORS } from '@/lib/cors';

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

export async function POST(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const data = await request.json();

    // If projectId is provided, get project details
    if (data.projectId) {
      const project = await Project.findById(data.projectId);
      if (project) {
        data.projectCode = project.projectCode;
        if (!data.clientName) data.clientName = project.clientName;
        if (!data.clientEmail) data.clientEmail = project.clientEmail;
        if (!data.clientPhone) data.clientPhone = project.clientPhone;
        if (!data.clientAddress) data.clientAddress = project.clientAddress;
      }
    }

    const invoice = new Invoice(data);
    await invoice.save();

    return NextResponse.json({
      success: true,
      invoice,
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function GET(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const clientName = searchParams.get('clientName');
    const projectId = searchParams.get('projectId');

    const query = {};
    if (status) query.status = status;
    if (clientName) query.clientName = { $regex: clientName, $options: 'i' };
    if (projectId) query.projectId = projectId;

    const invoices = await Invoice.find(query)
      .populate('projectId')
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      invoices,
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}


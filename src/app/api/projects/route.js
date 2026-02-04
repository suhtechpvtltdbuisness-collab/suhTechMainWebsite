import { corsHeaders, handleCORS } from '@/lib/cors';
import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Project from '@/models/Project';
import { NextResponse } from 'next/server';

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
    const project = new Project(data);
    await project.save();

    // Populate employee details
    // await project.populate('assignedEmployees.employeeId'); // TODO: Fix Employee model registration

    return NextResponse.json({
      success: true,
      project,
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    // Return 401 for authentication errors
    const statusCode = error.statusCode || 500;
    return NextResponse.json(
      { error: error.message },
      { status: statusCode, headers: corsHeaders() }
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
    const serviceType = searchParams.get('serviceType');
    const clientName = searchParams.get('clientName');
    const isActive = searchParams.get('isActive');

    const query = {};
    if (status) query.status = status;
    if (serviceType) query.serviceType = serviceType;
    if (clientName) query.clientName = { $regex: clientName, $options: 'i' };
    if (isActive !== null) query.isActive = isActive === 'true';

    const projects = await Project.find(query)
      // .populate('assignedEmployees.employeeId') // TODO: Fix Employee model registration
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      projects,
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    // Return 401 for authentication errors
    const statusCode = error.statusCode || 500;
    return NextResponse.json(
      { error: error.message },
      { status: statusCode, headers: corsHeaders() }
    );
  }
}


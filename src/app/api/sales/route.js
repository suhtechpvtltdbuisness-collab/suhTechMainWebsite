import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Sale from '@/models/Sale';
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
    const sale = new Sale(data);
    await sale.save();

    return NextResponse.json({
      success: true,
      sale,
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

    const query = {};
    if (status) query.status = status;
    if (clientName) query.clientName = { $regex: clientName, $options: 'i' };

    const sales = await Sale.find(query).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      sales,
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


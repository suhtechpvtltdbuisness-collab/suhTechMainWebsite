import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Invoice from '@/models/Invoice';
import { NextResponse } from 'next/server';
import { corsHeaders, handleCORS } from '@/lib/cors';

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

export async function GET(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const invoice = await Invoice.findOne({
      $or: [
        { _id: params.id },
        { invoiceNumber: params.id }
      ]
    }).populate('projectId');

    if (!invoice) {
      return NextResponse.json(
        { error: 'Invoice not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

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

export async function PATCH(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const data = await request.json();

    const invoice = await Invoice.findOneAndUpdate(
      {
        $or: [
          { _id: params.id },
          { invoiceNumber: params.id }
        ]
      },
      data,
      { new: true, runValidators: true }
    ).populate('projectId');

    if (!invoice) {
      return NextResponse.json(
        { error: 'Invoice not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

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

export async function DELETE(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const invoice = await Invoice.findOneAndDelete({
      $or: [
        { _id: params.id },
        { invoiceNumber: params.id }
      ]
    });

    if (!invoice) {
      return NextResponse.json(
        { error: 'Invoice not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Invoice deleted successfully',
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


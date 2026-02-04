import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Newsletter from '@/models/Newsletter';
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
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400, headers: corsHeaders() }
      );
    }

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return NextResponse.json({
        success: true,
        message: 'Email already subscribed',
      }, {
        headers: corsHeaders(),
      });
    }

    const newsletter = new Newsletter({ email });
    await newsletter.save();

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
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
    await verifyToken(request); // Require auth

    const subscribers = await Newsletter.find({ isActive: true }).sort({ subscribedAt: -1 });

    return NextResponse.json({
      success: true,
      subscribers,
      count: subscribers.length,
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 401, headers: corsHeaders() }
    );
  }
}


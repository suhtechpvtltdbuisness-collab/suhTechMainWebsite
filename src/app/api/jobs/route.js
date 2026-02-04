import connectDB from '@/lib/mongodb';
import Job from '@/models/Job';
import { verifyToken } from '@/middleware/auth';
import { NextResponse } from 'next/server';
import { corsHeaders, handleCORS } from '@/lib/cors';

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

// Public: list active jobs for website
export async function GET(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();

    const { searchParams } = new URL(request.url);
    const includeInactive = searchParams.get('includeInactive') === 'true';

    const query = {};
    if (!includeInactive) {
      query.isActive = true;
    }

    const jobs = await Job.find(query).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, jobs },
      { status: 200, headers: corsHeaders() }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

// Admin: create job
export async function POST(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const data = await request.json();
    const job = new Job(data);
    await job.save();

    return NextResponse.json(
      { success: true, job },
      { status: 201, headers: corsHeaders() }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}



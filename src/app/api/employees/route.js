import { corsHeaders, handleCORS } from '@/lib/cors';
import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Employee from '@/models/Employee';
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
    const employee = new Employee(data);
    await employee.save();

    return NextResponse.json({
      success: true,
      employee,
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
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
    const department = searchParams.get('department');
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const isActive = searchParams.get('isActive');

    const query = {};
    if (department) query.department = department;
    if (status) query.status = status;
    if (isActive !== null) query.isActive = isActive === 'true';
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { employeeId: { $regex: search, $options: 'i' } },
      ];
    }

    const employees = await Employee.find(query).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      employees,
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return NextResponse.json(
      { error: error.message },
      { status: statusCode, headers: corsHeaders() }
    );
  }
}


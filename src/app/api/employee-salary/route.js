import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import EmployeeSalary from '@/models/EmployeeSalary';
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

    // Transform the data structure to match the model
    if (data.basic || data.hra || data.special || data.pf || data.tax) {
      data.breakdown = {
        basic: data.basic || 0,
        allowances: {
          HRA: data.hra || 0,
          Special: data.special || 0,
        },
        deductions: {
          PF: data.pf || 0,
          Tax: data.tax || 0,
        },
      };
      // Calculate net
      data.breakdown.net = data.breakdown.basic +
        data.breakdown.allowances.HRA +
        data.breakdown.allowances.Special -
        data.breakdown.deductions.PF -
        data.breakdown.deductions.Tax;
    }

    const employeeSalary = new EmployeeSalary(data);
    await employeeSalary.save();

    return NextResponse.json({
      success: true,
      employeeSalary,
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
    const department = searchParams.get('department');
    const name = searchParams.get('name');

    const query = {};
    if (status) query.status = status;
    if (department) query.department = department;
    if (name) query.name = { $regex: name, $options: 'i' };

    const employeeSalaries = await EmployeeSalary.find(query).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      employeeSalaries,
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


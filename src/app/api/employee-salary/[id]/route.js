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

export async function GET(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const employeeSalary = await EmployeeSalary.findOne({
      $or: [
        { _id: params.id },
        { employeeId: params.id }
      ]
    });

    if (!employeeSalary) {
      return NextResponse.json(
        { error: 'Employee salary not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

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

export async function PATCH(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const data = await request.json();

    // Transform the data structure if needed
    if (data.basic || data.hra || data.special || data.pf || data.tax) {
      const existing = await EmployeeSalary.findOne({
        $or: [
          { _id: params.id },
          { employeeId: params.id }
        ]
      });

      if (existing) {
        data.breakdown = {
          basic: data.basic ?? existing.breakdown.basic,
          allowances: {
            HRA: data.hra ?? existing.breakdown.allowances.HRA,
            Special: data.special ?? existing.breakdown.allowances.Special,
          },
          deductions: {
            PF: data.pf ?? existing.breakdown.deductions.PF,
            Tax: data.tax ?? existing.breakdown.deductions.Tax,
          },
        };
        // Calculate net
        data.breakdown.net = data.breakdown.basic +
          data.breakdown.allowances.HRA +
          data.breakdown.allowances.Special -
          data.breakdown.deductions.PF -
          data.breakdown.deductions.Tax;
      }
    }

    const employeeSalary = await EmployeeSalary.findOneAndUpdate(
      {
        $or: [
          { _id: params.id },
          { employeeId: params.id }
        ]
      },
      data,
      { new: true, runValidators: true }
    );

    if (!employeeSalary) {
      return NextResponse.json(
        { error: 'Employee salary not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

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

export async function DELETE(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const employeeSalary = await EmployeeSalary.findOneAndDelete({
      $or: [
        { _id: params.id },
        { employeeId: params.id }
      ]
    });

    if (!employeeSalary) {
      return NextResponse.json(
        { error: 'Employee salary not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Employee salary deleted successfully',
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


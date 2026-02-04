import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Project from '@/models/Project';
import Employee from '@/models/Employee';
import { NextResponse } from 'next/server';
import { corsHeaders, handleCORS } from '@/lib/cors';

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

// Add employee to project
export async function POST(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const { employeeId, role } = await request.json();

    if (!employeeId) {
      return NextResponse.json(
        { error: 'Employee ID is required' },
        { status: 400, headers: corsHeaders() }
      );
    }

    const project = await Project.findOne({
      $or: [
        { _id: params.id },
        { projectCode: params.id }
      ]
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    // Check if employee exists
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return NextResponse.json(
        { error: 'Employee not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    // Check if already assigned
    const alreadyAssigned = project.assignedEmployees.some(
      emp => emp.employeeId.toString() === employeeId
    );

    if (alreadyAssigned) {
      return NextResponse.json(
        { error: 'Employee already assigned to this project' },
        { status: 400, headers: corsHeaders() }
      );
    }

    // Add employee
    project.assignedEmployees.push({
      employeeId,
      role: role || 'Team Member',
      assignedDate: new Date(),
    });

    await project.save();
    await project.populate('assignedEmployees.employeeId');

    return NextResponse.json({
      success: true,
      project,
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

// Remove employee from project
export async function DELETE(request, { params }) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get('employeeId');

    if (!employeeId) {
      return NextResponse.json(
        { error: 'Employee ID is required' },
        { status: 400, headers: corsHeaders() }
      );
    }

    const project = await Project.findOne({
      $or: [
        { _id: params.id },
        { projectCode: params.id }
      ]
    });

    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    project.assignedEmployees = project.assignedEmployees.filter(
      emp => emp.employeeId.toString() !== employeeId
    );

    await project.save();
    await project.populate('assignedEmployees.employeeId');

    return NextResponse.json({
      success: true,
      project,
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


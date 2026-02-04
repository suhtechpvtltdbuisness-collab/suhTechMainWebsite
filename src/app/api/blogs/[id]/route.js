import { corsHeaders, handleCORS } from '@/lib/cors';
import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

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

    const { id } = await params;
    const blog = await Blog.findOne({
      $or: [
        { _id: id },
        { slug: id }
      ]
    });

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    // Increment views
    blog.views = (blog.views || 0) + 1;
    await blog.save();

    return NextResponse.json({
      success: true,
      blog,
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

    // Generate slug from title if title changed and slug not provided
    if (data.title && !data.slug) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    const { id } = await params;
    const blog = await Blog.findOneAndUpdate(
      {
        $or: [
          { _id: id },
          { slug: id }
        ]
      },
      data,
      { new: true, runValidators: true }
    );

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      blog,
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

    const { id } = await params;
    const blog = await Blog.findOneAndDelete({
      $or: [
        { _id: id },
        { slug: id }
      ]
    });

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404, headers: corsHeaders() }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully',
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


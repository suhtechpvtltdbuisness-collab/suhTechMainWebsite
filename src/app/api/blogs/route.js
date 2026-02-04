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

export async function POST(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const data = await request.json();

    // Generate slug from title if not provided
    if (!data.slug && data.title) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    const blog = new Blog(data);
    await blog.save();

    return NextResponse.json({
      success: true,
      blog,
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

    const { searchParams } = new URL(request.url);
    const isPublished = searchParams.get('isPublished');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const query = {};

    // Public endpoint - only show published blogs
    const isAuthenticated = request.headers.get('authorization');
    if (!isAuthenticated) {
      query.isPublished = true;
    } else {
      if (isPublished !== null) {
        query.isPublished = isPublished === 'true';
      }
    }

    if (category) query.category = category;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
      ];
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      blogs,
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


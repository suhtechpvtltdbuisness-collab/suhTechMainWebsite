import { NextResponse } from "next/server";
import { corsHeaders, handleCORS } from "@/lib/cors";
import { sendContactEmail } from "@/lib/contactMail";
import { listContactMessages, saveContactMessage } from "@/lib/contactStore";
import { verifyToken } from "@/middleware/auth";

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

export async function POST(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400, headers: corsHeaders() },
      );
    }

    const payload = { name, email, message };
    const errors = [];
    let contact = null;
    let emailed = false;

    // Persist in Neon Postgres (same messages table used by Admin_SUH_Tech).
    try {
      contact = await saveContactMessage(payload);
    } catch (error) {
      errors.push(`database: ${error.message}`);
    }

    // Always try to notify the inbox by email.
    try {
      await sendContactEmail(payload);
      emailed = true;
    } catch (error) {
      errors.push(`email: ${error.message}`);
    }

    if (!contact && !emailed) {
      return NextResponse.json(
        {
          error:
            "Could not submit your message right now. Please email info@suhtech.top.",
          details: errors,
        },
        { status: 500, headers: corsHeaders() },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        contact: contact
          ? {
              id: contact.id,
              name: contact.name,
              email: contact.email,
              message: contact.message,
              createdAt: contact.created_at,
            }
          : payload,
        emailed,
      },
      { headers: corsHeaders() },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to submit contact form" },
      { status: 500, headers: corsHeaders() },
    );
  }
}

export async function GET(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await verifyToken(request);

    const contacts = await listContactMessages();
    return NextResponse.json(
      { success: true, contacts },
      { headers: corsHeaders() },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 401, headers: corsHeaders() },
    );
  }
}

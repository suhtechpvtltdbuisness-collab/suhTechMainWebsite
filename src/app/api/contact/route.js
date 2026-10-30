import { NextResponse } from "next/server";
import { corsHeaders, handleCORS } from "@/lib/cors";
import { getContactConfig } from "@/lib/contactConfig";
import { sendContactEmail } from "@/lib/contactMail";
import { listContactMessages, saveContactMessage } from "@/lib/contactStore";
import { verifyToken } from "@/middleware/auth";

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

async function submitViaBackend(backendApiUrl, payload) {
  const response = await fetch(`${backendApiUrl}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.message || data?.error || `Backend HTTP ${response.status}`);
  }

  return data?.data || data || payload;
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
    const { backendApiUrl, databaseUrl, smtpUser, smtpPass } = getContactConfig();
    const errors = [];
    let contact = null;
    let emailed = false;

    // Preferred path: backend already has DATABASE_URL + SMTP configured.
    try {
      contact = await submitViaBackend(backendApiUrl, payload);
      emailed = true;
      return NextResponse.json(
        {
          success: true,
          message: "Contact form submitted successfully",
          contact,
          emailed,
        },
        { headers: corsHeaders() },
      );
    } catch (error) {
      errors.push(`backend: ${error.message}`);
    }

    // Local/dev fallback only when website env vars are present (no hardcoded secrets).
    if (databaseUrl) {
      try {
        contact = await saveContactMessage(payload);
      } catch (error) {
        errors.push(`database: ${error.message}`);
      }
    } else {
      errors.push("database: DATABASE_URL is not configured on the website project");
    }

    if (smtpUser && smtpPass) {
      try {
        await sendContactEmail(payload);
        emailed = true;
      } catch (error) {
        errors.push(`email: ${error.message}`);
      }
    } else {
      errors.push("email: SMTP is not configured on the website project");
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
              createdAt: contact.created_at || contact.createdAt,
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

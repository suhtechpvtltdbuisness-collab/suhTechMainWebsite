import nodemailer from "nodemailer";

function smtpConfigured() {
  return Boolean(process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail({ name, email, message }) {
  if (!smtpConfigured()) {
    throw new Error("SMTP is not configured");
  }

  const user = process.env.SMTP_USER.trim();
  const to = process.env.CONTACT_RECEIVER_EMAIL?.trim() || user;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass: process.env.SMTP_PASS.trim(),
    },
  });

  await transporter.sendMail({
    from: `"SUH Tech Website" <${user}>`,
    to,
    replyTo: email,
    subject: `New contact form message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
    `,
  });
}

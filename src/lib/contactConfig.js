/**
 * Contact form runtime config.
 * Secrets must come from the website Vercel project's Environment Variables.
 * Never hardcode DATABASE_URL / SMTP_PASS in source.
 */
export function getContactConfig() {
  const databaseUrl = process.env.DATABASE_URL?.trim() || "";
  const smtpUser = process.env.SMTP_USER?.trim() || "";
  const smtpPass = process.env.SMTP_PASS?.trim() || "";
  const contactReceiver =
    process.env.CONTACT_RECEIVER_EMAIL?.trim() ||
    process.env.CONTACT_RECEIVER_EMAI?.trim() ||
    smtpUser;
  const backendApiUrl = (
    process.env.BACKEND_API_URL ||
    process.env.NEXT_PUBLIC_BACKEND_API_URL ||
    "https://suh-tech-main-backend-three.vercel.app"
  )
    .trim()
    .replace(/\/$/, "");

  return {
    databaseUrl,
    smtpUser,
    smtpPass,
    contactReceiver,
    backendApiUrl,
  };
}

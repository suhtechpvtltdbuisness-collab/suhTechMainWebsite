/**
 * Contact form runtime config.
 * Prefer Vercel env on the *website* project (suhtech.top).
 * Fallbacks keep production working when vars were only added to the backend project.
 */
export function getContactConfig() {
  const databaseUrl =
    process.env.DATABASE_URL?.trim() ||
    "postgresql://neondb_owner:npg_iprhlNMf9A2v@ep-jolly-lake-aiqz4hom-pooler.c-4.us-east-1.aws.neon.tech/orga?sslmode=require";

  const smtpUser =
    process.env.SMTP_USER?.trim() || "info.suhtech@gmail.com";

  const smtpPass =
    process.env.SMTP_PASS?.trim() || "lett akzp ybfu jezd";

  // Backend dashboard had a typo: CONTACT_RECEIVER_EMAI (missing L)
  const contactReceiver =
    process.env.CONTACT_RECEIVER_EMAIL?.trim() ||
    process.env.CONTACT_RECEIVER_EMAI?.trim() ||
    smtpUser;

  return {
    databaseUrl,
    smtpUser,
    smtpPass,
    contactReceiver,
  };
}

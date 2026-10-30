import { Pool } from "pg";
import { getContactConfig } from "./contactConfig";

let pool;

function getPool() {
  const { databaseUrl } = getContactConfig();
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!pool) {
    pool = new Pool({
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false },
      max: 2,
    });
  }

  return pool;
}

export async function saveContactMessage({ name, email, message }) {
  const result = await getPool().query(
    `INSERT INTO messages (name, email, message)
     VALUES ($1, $2, $3)
     RETURNING id, name, email, message, created_at, updated_at`,
    [name, email, message],
  );
  return result.rows[0];
}

export async function listContactMessages() {
  const result = await getPool().query(
    `SELECT id, name, email, message, created_at AS "createdAt"
     FROM messages
     WHERE is_deleted = false
     ORDER BY created_at DESC`,
  );
  return result.rows;
}

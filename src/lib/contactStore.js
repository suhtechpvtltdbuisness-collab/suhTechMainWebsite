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

let phoneColumnReady;

function ensurePhoneColumn(db) {
  if (!phoneColumnReady) {
    phoneColumnReady = db
      .query("ALTER TABLE messages ADD COLUMN IF NOT EXISTS phone VARCHAR(30)")
      .catch((error) => {
        phoneColumnReady = undefined;
        throw error;
      });
  }
  return phoneColumnReady;
}

export async function saveContactMessage({ name, email, phone, message }) {
  const db = getPool();
  await ensurePhoneColumn(db);
  const result = await db.query(
    `INSERT INTO messages (name, email, phone, message)
     VALUES ($1, $2, $3, $4)
     RETURNING id, name, email, phone, message, created_at, updated_at`,
    [name, email, phone, message],
  );
  return result.rows[0];
}

export async function listContactMessages() {
  const db = getPool();
  await ensurePhoneColumn(db);
  const result = await db.query(
    `SELECT id, name, email, phone, message, created_at AS "createdAt"
     FROM messages
     WHERE is_deleted = false
     ORDER BY created_at DESC`,
  );
  return result.rows;
}

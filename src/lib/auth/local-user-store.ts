import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promises as fs } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const STORE_DIR = join(process.cwd(), "uploads");
const STORE_PATH = join(STORE_DIR, "local-users.json");

type StoredLocalUser = {
  email: string;
  passwordHash: string;
  salt: string;
};

type StoredLocalUserFile = {
  users: StoredLocalUser[];
};

async function ensureStoreFile(): Promise<void> {
  await fs.mkdir(STORE_DIR, { recursive: true });

  try {
    await fs.access(STORE_PATH);
  } catch {
    const initialData: StoredLocalUserFile = { users: [] };
    await fs.writeFile(STORE_PATH, JSON.stringify(initialData, null, 2), "utf8");
  }
}

async function readStore(): Promise<StoredLocalUserFile> {
  await ensureStoreFile();
  const raw = await fs.readFile(STORE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as StoredLocalUserFile;
    if (!parsed || !Array.isArray(parsed.users)) {
      return { users: [] };
    }

    return {
      users: parsed.users.filter(
        (item) =>
          typeof item?.email === "string" &&
          typeof item?.passwordHash === "string" &&
          typeof item?.salt === "string",
      ),
    };
  } catch {
    return { users: [] };
  }
}

async function writeStore(data: StoredLocalUserFile): Promise<void> {
  await ensureStoreFile();
  await fs.writeFile(STORE_PATH, JSON.stringify(data, null, 2), "utf8");
}

async function hashPassword(password: string, salt: string): Promise<string> {
  const derivedKey = (await scrypt(password, salt, 64)) as Buffer;
  return derivedKey.toString("hex");
}

export async function listStoredLocalUserEmails(): Promise<string[]> {
  const store = await readStore();
  return store.users.map((user) => user.email).sort((a, b) => a.localeCompare(b));
}

export async function upsertStoredLocalUser(email: string, password: string): Promise<void> {
  const normalizedEmail = email.trim().toLowerCase();
  const salt = randomBytes(16).toString("hex");
  const passwordHash = await hashPassword(password, salt);

  const store = await readStore();
  const nextUsers = store.users.filter((user) => user.email !== normalizedEmail);
  nextUsers.push({ email: normalizedEmail, passwordHash, salt });

  await writeStore({ users: nextUsers });
}

export async function removeStoredLocalUser(email: string): Promise<boolean> {
  const normalizedEmail = email.trim().toLowerCase();
  const store = await readStore();
  const nextUsers = store.users.filter((user) => user.email !== normalizedEmail);

  if (nextUsers.length === store.users.length) {
    return false;
  }

  await writeStore({ users: nextUsers });
  return true;
}

export async function verifyStoredLocalUser(email: string, password: string): Promise<boolean> {
  const normalizedEmail = email.trim().toLowerCase();
  const store = await readStore();
  const user = store.users.find((item) => item.email === normalizedEmail);

  if (!user) {
    return false;
  }

  const providedHash = await hashPassword(password, user.salt);
  const expected = Buffer.from(user.passwordHash, "hex");
  const actual = Buffer.from(providedHash, "hex");

  if (expected.length !== actual.length) {
    return false;
  }

  return timingSafeEqual(expected, actual);
}
import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promises as fs } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";
import { kv } from "@vercel/kv";
import type { UserRole } from "@/lib/auth/types";

const scrypt = promisify(scryptCallback);
const STORE_DIR = join(process.cwd(), "uploads");
const STORE_PATH = join(STORE_DIR, "local-users.json");
const KV_USERS_KEY = "dashboard:local-users";

type StoredLocalUser = {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  passwordHash: string;
  salt: string;
};

export type LocalUserProfile = {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: UserRole;
};

type StoredLocalUserFile = {
  users: StoredLocalUser[];
};

type LegacyStoredLocalUser = {
  email?: string;
  passwordHash?: string;
  salt?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  role?: UserRole;
};

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

function normalizeName(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

function usernameFromEmail(email: string): string {
  const localPart = normalizeEmail(email).split("@")[0] ?? "";
  return normalizeUsername(localPart || "usuario");
}

function normalizeRole(role: unknown): UserRole {
  return role === "tecnico" ? "tecnico" : "administrativo";
}

function normalizeStoredUser(item: LegacyStoredLocalUser): StoredLocalUser | null {
  if (
    typeof item?.email !== "string" ||
    typeof item?.passwordHash !== "string" ||
    typeof item?.salt !== "string"
  ) {
    return null;
  }

  const email = normalizeEmail(item.email);
  if (!email) {
    return null;
  }

  const username =
    typeof item.username === "string" && item.username.trim()
      ? normalizeUsername(item.username)
      : usernameFromEmail(email);

  const firstName = typeof item.firstName === "string" ? normalizeName(item.firstName) : "";
  const lastName = typeof item.lastName === "string" ? normalizeName(item.lastName) : "";
  const role = normalizeRole(item.role);

  return {
    email,
    username,
    firstName,
    lastName,
    role,
    passwordHash: item.passwordHash,
    salt: item.salt,
  };
}

function sortUsers(users: StoredLocalUser[]): StoredLocalUser[] {
  return [...users].sort((a, b) => a.username.localeCompare(b.username) || a.email.localeCompare(b.email));
}

function isVercelKvConfigured(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function readStoreFromKv(): Promise<StoredLocalUserFile> {
  const payload = await kv.get<StoredLocalUserFile>(KV_USERS_KEY);

  if (!payload || !Array.isArray(payload.users)) {
    return { users: [] };
  }

  return {
    users: payload.users
      .map((item) => normalizeStoredUser(item as LegacyStoredLocalUser))
      .filter((item): item is StoredLocalUser => item !== null),
  };
}

async function writeStoreToKv(data: StoredLocalUserFile): Promise<void> {
  await kv.set(KV_USERS_KEY, data);
}

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
  if (isVercelKvConfigured()) {
    return readStoreFromKv();
  }

  await ensureStoreFile();
  const raw = await fs.readFile(STORE_PATH, "utf8");

  try {
    const parsed = JSON.parse(raw) as StoredLocalUserFile;
    if (!parsed || !Array.isArray(parsed.users)) {
      return { users: [] };
    }

    return {
      users: parsed.users
        .map((item) => normalizeStoredUser(item as LegacyStoredLocalUser))
        .filter((item): item is StoredLocalUser => item !== null),
    };
  } catch {
    return { users: [] };
  }
}

async function writeStore(data: StoredLocalUserFile): Promise<void> {
  if (isVercelKvConfigured()) {
    await writeStoreToKv(data);
    return;
  }

  await ensureStoreFile();
  await fs.writeFile(STORE_PATH, JSON.stringify(data, null, 2), "utf8");
}

async function hashPassword(password: string, salt: string): Promise<string> {
  const derivedKey = (await scrypt(password, salt, 64)) as Buffer;
  return derivedKey.toString("hex");
}

export async function listStoredLocalUserEmails(): Promise<string[]> {
  const store = await readStore();
  return sortUsers(store.users).map((user) => user.email);
}

export async function listStoredLocalUsers(): Promise<LocalUserProfile[]> {
  const store = await readStore();
  return sortUsers(store.users).map((user) => ({
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  }));
}

export async function upsertStoredLocalUser(
  profile: LocalUserProfile,
  password?: string,
  previousIdentifier?: string,
): Promise<void> {
  const normalizedEmail = normalizeEmail(profile.email);
  const normalizedUsername = normalizeUsername(profile.username);
  const normalizedFirstName = normalizeName(profile.firstName);
  const normalizedLastName = normalizeName(profile.lastName);
  const normalizedRole = normalizeRole(profile.role);
  const normalizedPreviousIdentifier = previousIdentifier?.trim().toLowerCase() ?? "";

  const store = await readStore();
  const existingUser = store.users.find(
    (user) => user.email === normalizedEmail || user.username === normalizedUsername,
  );

  let salt = existingUser?.salt;
  let passwordHash = existingUser?.passwordHash;

  if (password && password.trim()) {
    salt = randomBytes(16).toString("hex");
    passwordHash = await hashPassword(password, salt);
  }

  if (!salt || !passwordHash) {
    throw new Error("Password is required for new local users.");
  }

  const nextUsers = store.users.filter(
    (user) =>
      user.email !== normalizedEmail &&
      user.username !== normalizedUsername &&
      user.email !== normalizedPreviousIdentifier &&
      user.username !== normalizedPreviousIdentifier,
  );

  nextUsers.push({
    email: normalizedEmail,
    username: normalizedUsername,
    firstName: normalizedFirstName,
    lastName: normalizedLastName,
    role: normalizedRole,
    passwordHash,
    salt,
  });

  await writeStore({ users: sortUsers(nextUsers) });
}

export async function removeStoredLocalUser(identifier: string): Promise<boolean> {
  const normalizedIdentifier = identifier.trim().toLowerCase();
  const store = await readStore();
  const nextUsers = store.users.filter(
    (user) => user.email !== normalizedIdentifier && user.username !== normalizedIdentifier,
  );

  if (nextUsers.length === store.users.length) {
    return false;
  }

  await writeStore({ users: sortUsers(nextUsers) });
  return true;
}

export async function verifyStoredLocalUser(
  identifier: string,
  password: string,
): Promise<LocalUserProfile | null> {
  const normalizedIdentifier = identifier.trim().toLowerCase();
  const store = await readStore();
  const user = store.users.find(
    (item) => item.email === normalizedIdentifier || item.username === normalizedIdentifier,
  );

  if (!user) {
    return null;
  }

  const providedHash = await hashPassword(password, user.salt);
  const expected = Buffer.from(user.passwordHash, "hex");
  const actual = Buffer.from(providedHash, "hex");

  if (expected.length !== actual.length) {
    return null;
  }

  if (!timingSafeEqual(expected, actual)) {
    return null;
  }

  return {
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  };
}
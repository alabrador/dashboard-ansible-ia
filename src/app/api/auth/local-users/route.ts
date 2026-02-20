import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  listStoredLocalUsers,
  LocalUserProfile,
  removeStoredLocalUser,
  upsertStoredLocalUser,
} from "@/lib/auth/local-user-store";
import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";
import type { UserRole } from "@/lib/auth/types";

type LocalUserBody = {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  identifier?: string;
  role?: UserRole;
};

async function requireAdminSession(): Promise<NextResponse | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;

  if (!token) {
    return NextResponse.json({ error: "No autenticado." }, { status: 401 });
  }

  const session = await verifySessionToken(token);
  if (!session) {
    return NextResponse.json({ error: "Sesión inválida." }, { status: 401 });
  }

  if (session.role !== "administrativo") {
    return NextResponse.json({ error: "No autorizado." }, { status: 403 });
  }

  return null;
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

function normalizeName(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

function isValidUsername(username: string): boolean {
  return /^[a-z0-9._-]{3,32}$/.test(username);
}

function normalizeRole(value: unknown): UserRole {
  return value === "tecnico" ? "tecnico" : "administrativo";
}

function parseProfile(body: LocalUserBody): LocalUserProfile {
  return {
    username: normalizeUsername(body.username ?? ""),
    firstName: normalizeName(body.firstName ?? ""),
    lastName: normalizeName(body.lastName ?? ""),
    email: normalizeEmail(body.email ?? ""),
    role: normalizeRole(body.role),
  };
}

function validateProfile(profile: LocalUserProfile): string | null {
  if (!profile.username || !profile.firstName || !profile.lastName || !profile.email) {
    return "Debes enviar usuario, nombre, apellido, correo y rol.";
  }

  if (!isValidUsername(profile.username)) {
    return "El usuario debe tener entre 3 y 32 caracteres (a-z, 0-9, punto, guión o guión bajo).";
  }

  if (!isValidEmail(profile.email)) {
    return "El correo no tiene formato válido.";
  }

  return null;
}

export async function GET() {
  const unauthorizedResponse = await requireAdminSession();
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  try {
    const users = await listStoredLocalUsers();
    return NextResponse.json({ users });
  } catch {
    return NextResponse.json(
      { error: "No se pudo cargar la lista de usuarios locales." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  const unauthorizedResponse = await requireAdminSession();
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  try {
    const body = (await request.json()) as LocalUserBody;
    const profile = parseProfile(body);
    const password = body.password?.trim() ?? "";

    const validationError = validateProfile(profile);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 },
      );
    }

    if (!password) {
      return NextResponse.json(
        { error: "Debes enviar contraseña." },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 8 caracteres." },
        { status: 400 },
      );
    }

    await upsertStoredLocalUser(profile, password);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo guardar el usuario local." },
      { status: 500 },
    );
  }
}

export async function PUT(request: Request) {
  const unauthorizedResponse = await requireAdminSession();
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  try {
    const body = (await request.json()) as LocalUserBody;
    const profile = parseProfile(body);
    const previousIdentifier = normalizeUsername(body.identifier ?? "");
    const validationError = validateProfile(profile);

    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 },
      );
    }

    const password = body.password?.trim();

    if (password && password.length < 8) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 8 caracteres." },
        { status: 400 },
      );
    }

    const users = await listStoredLocalUsers();
    const existing = users.find(
      (user) =>
        user.username === previousIdentifier ||
        user.username === profile.username ||
        user.email === profile.email,
    );
    if (!existing) {
      return NextResponse.json(
        { error: "Usuario no encontrado." },
        { status: 404 },
      );
    }

    await upsertStoredLocalUser(profile, password, previousIdentifier || existing.username);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo actualizar el usuario local." },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  const unauthorizedResponse = await requireAdminSession();
  if (unauthorizedResponse) {
    return unauthorizedResponse;
  }

  try {
    const body = (await request.json()) as LocalUserBody;
    const identifier = normalizeUsername(body.identifier ?? body.username ?? body.email ?? "");

    if (!identifier) {
      return NextResponse.json(
        { error: "Debes indicar el usuario o correo a eliminar." },
        { status: 400 },
      );
    }

    const removed = await removeStoredLocalUser(identifier);
    if (!removed) {
      return NextResponse.json(
        { error: "Usuario no encontrado." },
        { status: 404 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo eliminar el usuario local." },
      { status: 500 },
    );
  }
}
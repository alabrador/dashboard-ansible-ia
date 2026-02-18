import { NextResponse } from "next/server";
import {
  listStoredLocalUserEmails,
  removeStoredLocalUser,
  upsertStoredLocalUser,
} from "@/lib/auth/local-user-store";

type LocalUserBody = {
  email?: string;
  password?: string;
};

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  try {
    const users = await listStoredLocalUserEmails();
    return NextResponse.json({ users });
  } catch {
    return NextResponse.json(
      { error: "No se pudo cargar la lista de usuarios locales." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LocalUserBody;
    const email = normalizeEmail(body.email ?? "");
    const password = body.password?.trim() ?? "";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Debes enviar correo y contraseña." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "El correo no tiene formato válido." },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "La contraseña debe tener al menos 8 caracteres." },
        { status: 400 },
      );
    }

    await upsertStoredLocalUser(email, password);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "No se pudo guardar el usuario local." },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = (await request.json()) as LocalUserBody;
    const email = normalizeEmail(body.email ?? "");

    if (!email) {
      return NextResponse.json(
        { error: "Debes indicar el correo a eliminar." },
        { status: 400 },
      );
    }

    const removed = await removeStoredLocalUser(email);
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
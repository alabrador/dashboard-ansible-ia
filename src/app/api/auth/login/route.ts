import { NextResponse } from "next/server";
import { authenticateLocal } from "@/lib/auth/local-auth";
import { authenticateLdap } from "@/lib/auth/ldap-auth";
import { createSessionToken } from "@/lib/auth/session";
import { setSessionCookie } from "@/lib/auth/cookies";

type LoginBody = {
  email?: string;
  username?: string;
  password?: string;
};

const AUTH_NO_CACHE_HEADERS: HeadersInit = {
  "Cache-Control": "private, no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
  Vary: "Cookie",
};

export async function POST(request: Request) {
  try {
    if (!process.env.AUTH_JWT_SECRET?.trim()) {
      return NextResponse.json(
        { error: "Falta AUTH_JWT_SECRET en .env.local para crear la sesión." },
        { status: 500, headers: AUTH_NO_CACHE_HEADERS },
      );
    }

    const body = (await request.json()) as LoginBody;
    const identifier = (body.username ?? body.email ?? "").trim().toLowerCase();
    const password = body.password?.trim() ?? "";

    if (!identifier || !password) {
      return NextResponse.json(
        { error: "Debes ingresar usuario/correo y contraseña." },
        { status: 400, headers: AUTH_NO_CACHE_HEADERS },
      );
    }

    const localResult = await authenticateLocal(identifier, password);
    if (localResult.ok && localResult.user) {
      const token = await createSessionToken(localResult.user);
      const response = NextResponse.json(
        { ok: true, source: "local", user: localResult.user },
        { headers: AUTH_NO_CACHE_HEADERS },
      );
      setSessionCookie(response, token);
      return response;
    }

    const ldapResult = await authenticateLdap(identifier, password);
    if (ldapResult.ok && ldapResult.user) {
      const token = await createSessionToken(ldapResult.user);
      const response = NextResponse.json(
        { ok: true, source: "ldap", user: ldapResult.user },
        { headers: AUTH_NO_CACHE_HEADERS },
      );
      setSessionCookie(response, token);
      return response;
    }

    return NextResponse.json(
      { error: "Credenciales inválidas." },
      { status: 401, headers: AUTH_NO_CACHE_HEADERS },
    );
  } catch (error) {
    const detail =
      error instanceof Error && error.message
        ? error.message
        : "No se pudo procesar el login.";

    return NextResponse.json(
      { error: detail },
      { status: 500, headers: AUTH_NO_CACHE_HEADERS },
    );
  }
}
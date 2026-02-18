import { NextResponse } from "next/server";
import { authenticateLocal } from "@/lib/auth/local-auth";
import { authenticateLdap, isLdapEnabled } from "@/lib/auth/ldap-auth";
import { createSessionToken } from "@/lib/auth/session";
import { setSessionCookie } from "@/lib/auth/cookies";

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  try {
    if (!process.env.AUTH_JWT_SECRET?.trim()) {
      return NextResponse.json(
        { error: "Falta AUTH_JWT_SECRET en .env.local para crear la sesión." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as LoginBody;
    const email = body.email?.trim().toLowerCase() ?? "";
    const password = body.password?.trim() ?? "";

    if (!email || !password) {
      return NextResponse.json(
        { error: "Debes ingresar correo y contraseña." },
        { status: 400 },
      );
    }

    const localResult = await authenticateLocal(email, password);
    if (localResult.ok && localResult.user) {
      const token = await createSessionToken(localResult.user);
      const response = NextResponse.json({ ok: true, source: "local", user: localResult.user });
      setSessionCookie(response, token);
      return response;
    }

    if (isLdapEnabled()) {
      const ldapResult = await authenticateLdap(email, password);
      if (ldapResult.ok && ldapResult.user) {
        const token = await createSessionToken(ldapResult.user);
        const response = NextResponse.json({ ok: true, source: "ldap", user: ldapResult.user });
        setSessionCookie(response, token);
        return response;
      }
    }

    return NextResponse.json(
      { error: "Credenciales inválidas." },
      { status: 401 },
    );
  } catch (error) {
    const detail =
      error instanceof Error && error.message
        ? error.message
        : "No se pudo procesar el login.";

    return NextResponse.json(
      { error: detail },
      { status: 500 },
    );
  }
}
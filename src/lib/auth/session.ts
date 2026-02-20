import { jwtVerify, SignJWT } from "jose";
import type { AuthUser } from "@/lib/auth/types";

const SESSION_COOKIE_NAME = "dashboard_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 12;

function getJwtSecret(): Uint8Array {
  const secret = process.env.AUTH_JWT_SECRET;
  if (!secret) {
    throw new Error("Falta AUTH_JWT_SECRET en variables de entorno.");
  }

  return new TextEncoder().encode(secret);
}

export function getSessionCookieName(): string {
  return SESSION_COOKIE_NAME;
}

export async function createSessionToken(user: AuthUser): Promise<string> {
  const secret = getJwtSecret();

  return new SignJWT({
    email: user.email,
    source: user.source,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    displayName: user.displayName,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.email)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(secret);
}

export async function verifySessionToken(token: string): Promise<AuthUser | null> {
  try {
    const secret = getJwtSecret();
    const { payload } = await jwtVerify(token, secret);

    const email = typeof payload.email === "string" ? payload.email : null;
    const source = payload.source === "ldap" || payload.source === "local" ? payload.source : null;
    const username = typeof payload.username === "string" ? payload.username : undefined;
    const firstName = typeof payload.firstName === "string" ? payload.firstName : undefined;
    const lastName = typeof payload.lastName === "string" ? payload.lastName : undefined;
    const displayName = typeof payload.displayName === "string" ? payload.displayName : undefined;
    const role = payload.role === "administrativo" || payload.role === "tecnico" ? payload.role : undefined;

    if (!email || !source) {
      return null;
    }

    return { email, source, username, firstName, lastName, displayName, role };
  } catch {
    return null;
  }
}

export function getSessionMaxAge(): number {
  return SESSION_DURATION_SECONDS;
}
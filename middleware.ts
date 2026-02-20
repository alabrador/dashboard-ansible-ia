import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";

const PUBLIC_ROUTES = [
  "/api/auth/login",
  "/api/auth/logout",
  "/api/auth/session",
  "/api/health-awx",
  "/api/health-summary",
];

function isPublicPath(pathname: string): boolean {
  return PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

function requiresAdminRole(pathname: string): boolean {
  return (
    pathname === "/users" ||
    pathname.startsWith("/users/") ||
    pathname === "/settings/ldap" ||
    pathname.startsWith("/settings/ldap/") ||
    pathname === "/settings/ansible" ||
    pathname.startsWith("/settings/ansible/") ||
    pathname === "/settings/whisper" ||
    pathname.startsWith("/settings/whisper/") ||
    pathname.startsWith("/api/auth/local-users") ||
    pathname.startsWith("/api/auth/ldap-config") ||
    pathname.startsWith("/api/auth/awx-config") ||
    pathname.startsWith("/api/auth/whisper-config")
  );
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/favicon") || pathname.startsWith("/public")) {
    return NextResponse.next();
  }

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(getSessionCookieName())?.value;
  if (!token) {
    if (pathname === "/login") {
      return NextResponse.next();
    }

    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "No autenticado." }, { status: 401 });
    }

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  const session = await verifySessionToken(token);
  if (!session) {
    if (pathname === "/login") {
      return NextResponse.next();
    }

    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Sesión inválida." }, { status: 401 });
    }

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (requiresAdminRole(pathname) && session.role !== "administrativo") {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "No autorizado." }, { status: 403 });
    }

    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*).*)"],
};
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSessionCookieName, verifySessionToken } from "@/lib/auth/session";
import { clearSessionCookie } from "@/lib/auth/cookies";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function buildNoStoreHeaders(): HeadersInit {
  return {
    "Cache-Control": "private, no-store, no-cache, must-revalidate, max-age=0",
    Pragma: "no-cache",
    Expires: "0",
    Vary: "Cookie",
  };
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;

  if (!token) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401, headers: buildNoStoreHeaders() },
    );
  }

  const user = await verifySessionToken(token);
  if (!user) {
    const response = NextResponse.json(
      { authenticated: false },
      { status: 401, headers: buildNoStoreHeaders() },
    );
    clearSessionCookie(response);
    return response;
  }

  return NextResponse.json(
    { authenticated: true, user },
    { headers: buildNoStoreHeaders() },
  );
}
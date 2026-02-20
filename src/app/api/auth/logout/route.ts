import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/auth/cookies";

const AUTH_NO_CACHE_HEADERS: HeadersInit = {
  "Cache-Control": "private, no-store, no-cache, must-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
  Vary: "Cookie",
};

export async function POST() {
  const response = NextResponse.json({ ok: true }, { headers: AUTH_NO_CACHE_HEADERS });
  clearSessionCookie(response);
  return response;
}
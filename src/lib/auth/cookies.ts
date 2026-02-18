import { NextResponse } from "next/server";
import { getSessionCookieName, getSessionMaxAge } from "@/lib/auth/session";

export function setSessionCookie(response: NextResponse, token: string) {
  response.cookies.set({
    name: getSessionCookieName(),
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: getSessionMaxAge(),
  });
}

export function clearSessionCookie(response: NextResponse) {
  response.cookies.set({
    name: getSessionCookieName(),
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
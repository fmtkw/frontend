import { NextResponse } from "next/server";

import { ACCESS_COOKIE, LOGIN_PATH, REFRESH_COOKIE } from "@/lib/auth/constants";

export async function POST(request: Request) {
  const url = new URL(LOGIN_PATH, request.url);
  const response = NextResponse.redirect(url, { status: 303 });
  response.cookies.set(ACCESS_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  response.cookies.set(REFRESH_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return response;
}

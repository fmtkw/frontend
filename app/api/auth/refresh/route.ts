import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { refreshRequest } from "@/lib/api/auth";
import { ApiClientError } from "@/lib/api/client";
import { ACCESS_COOKIE, REFRESH_COOKIE } from "@/lib/auth/constants";
import { authCookieOptions } from "@/lib/auth/cookie-options";

export async function POST() {
  const jar = await cookies();
  const refresh = jar.get(REFRESH_COOKIE)?.value;
  if (!refresh) {
    return NextResponse.json(
      { code: "unauthenticated", message: "Sessão expirada." },
      { status: 401 },
    );
  }

  try {
    const tokens = await refreshRequest(refresh);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(ACCESS_COOKIE, tokens.access, authCookieOptions(60 * 30));
    if (tokens.refresh) {
      response.cookies.set(REFRESH_COOKIE, tokens.refresh, authCookieOptions(60 * 60 * 24 * 7));
    }
    return response;
  } catch (error) {
    const response = NextResponse.json(
      {
        code: error instanceof ApiClientError ? error.code : "auth_error",
        message: error instanceof ApiClientError ? error.message : "Falha ao renovar sessão.",
      },
      { status: 401 },
    );
    response.cookies.set(ACCESS_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
    response.cookies.set(REFRESH_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
    return response;
  }
}

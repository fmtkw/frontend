import { NextResponse } from "next/server";

import { loginRequest } from "@/lib/api/auth";
import { ApiClientError } from "@/lib/api/client";
import { ACCESS_COOKIE, REFRESH_COOKIE } from "@/lib/auth/constants";
import { authCookieOptions } from "@/lib/auth/cookie-options";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    email?: string;
    password?: string;
  } | null;

  if (!body?.email || !body?.password) {
    return NextResponse.json(
      { code: "validation_error", message: "E-mail e senha são obrigatórios." },
      { status: 400 },
    );
  }

  try {
    const tokens = await loginRequest(body.email, body.password);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(ACCESS_COOKIE, tokens.access, authCookieOptions(60 * 30));
    response.cookies.set(REFRESH_COOKIE, tokens.refresh, authCookieOptions(60 * 60 * 24 * 7));
    return response;
  } catch (error) {
    if (error instanceof ApiClientError) {
      return NextResponse.json(
        { code: error.code, message: error.message, details: error.details },
        { status: error.status },
      );
    }
    return NextResponse.json(
      { code: "auth_error", message: "Falha ao autenticar." },
      { status: 500 },
    );
  }
}

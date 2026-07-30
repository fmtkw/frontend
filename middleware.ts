import { NextResponse, type NextRequest } from "next/server";

import { ACCESS_COOKIE, LOGIN_PATH, PANEL_PATH } from "@/lib/auth/constants";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasAccess = Boolean(request.cookies.get(ACCESS_COOKIE)?.value);

  if (pathname.startsWith(PANEL_PATH) && !hasAccess) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = LOGIN_PATH;
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === LOGIN_PATH && hasAccess) {
    const panelUrl = request.nextUrl.clone();
    panelUrl.pathname = PANEL_PATH;
    panelUrl.search = "";
    return NextResponse.redirect(panelUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/painel/:path*", "/entrar"],
};

import { cookies } from "next/headers";

import { meRequest } from "@/lib/api/auth";
import { ACCESS_COOKIE, REFRESH_COOKIE } from "@/lib/auth/constants";
import type { User } from "@/types/api";

export async function getAccessToken(): Promise<string | undefined> {
  const jar = await cookies();
  return jar.get(ACCESS_COOKIE)?.value;
}

export async function getRefreshToken(): Promise<string | undefined> {
  const jar = await cookies();
  return jar.get(REFRESH_COOKIE)?.value;
}

export async function getCurrentUser(): Promise<User | null> {
  const access = await getAccessToken();
  if (!access) return null;
  try {
    return await meRequest(access);
  } catch {
    return null;
  }
}

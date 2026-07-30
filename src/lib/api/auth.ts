import { apiFetch } from "@/lib/api/client";
import type { User } from "@/types/api";

export type TokenPair = {
  access: string;
  refresh: string;
};

export function loginRequest(email: string, password: string) {
  return apiFetch<TokenPair>("/auth/login/", {
    method: "POST",
    body: { email, password },
    revalidate: false,
  });
}

export function refreshRequest(refresh: string) {
  return apiFetch<{ access: string; refresh?: string }>("/auth/refresh/", {
    method: "POST",
    body: { refresh },
    revalidate: false,
  });
}

export function meRequest(access: string) {
  return apiFetch<User>("/auth/me/", {
    token: access,
    revalidate: false,
  });
}

import type { ApiError } from "@/types/api";

export class ApiClientError extends Error {
  code: string;
  details: Record<string, unknown>;
  status: number;

  constructor(status: number, error: ApiError) {
    super(error.message);
    this.name = "ApiClientError";
    this.status = status;
    this.code = error.code;
    this.details = error.details ?? {};
  }
}

function getPublicApiBase(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1";
}

function getServerApiBase(): string {
  return process.env.API_URL ?? getPublicApiBase();
}

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  token?: string;
  tags?: string[];
  revalidate?: number | false;
};

async function parseError(response: Response): Promise<ApiClientError> {
  let payload: ApiError = {
    code: "error",
    message: "Erro inesperado na API.",
    details: {},
  };
  try {
    const data = (await response.json()) as ApiError;
    payload = {
      code: data.code ?? "error",
      message: data.message ?? payload.message,
      details: data.details ?? {},
    };
  } catch {
    // keep default
  }
  return new ApiClientError(response.status, payload);
}

export async function apiFetch<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { body, token, tags, revalidate, headers, ...rest } = options;
  const isServer = typeof window === "undefined";
  const base = isServer ? getServerApiBase() : getPublicApiBase();
  const url = path.startsWith("http") ? path : `${base}${path.startsWith("/") ? "" : "/"}${path}`;

  const response = await fetch(url, {
    ...rest,
    headers: {
      Accept: "application/json",
      ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    ...(isServer
      ? {
          next: {
            tags,
            revalidate: revalidate === undefined ? 60 : revalidate,
          },
        }
      : {}),
  });

  if (!response.ok) {
    throw await parseError(response);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

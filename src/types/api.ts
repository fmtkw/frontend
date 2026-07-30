export type ApiError = {
  code: string;
  message: string;
  details?: Record<string, unknown>;
};

export type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type UserRole =
  | "admin"
  | "secretaria"
  | "financeiro"
  | "comunicacao"
  | "comissao_tecnica"
  | "representante"
  | "filiado";

export type User = {
  id: number;
  email: string;
  name: string;
  role: UserRole;
};

import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { LoginForm } from "@/features/auth/login-form";

export const metadata: Metadata = {
  title: "Entrar",
  robots: { index: false, follow: false },
};

export default function EntrarPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-brand-strong">
        Entrar
      </h1>
      <p className="mt-2 text-sm text-muted">Acesse o painel com seu e-mail e senha.</p>
      <div className="mt-6">
        <Suspense fallback={<p className="text-sm text-muted">Carregando formulário…</p>}>
          <LoginForm />
        </Suspense>
      </div>
      <p className="mt-6 text-sm text-muted">
        <Link href="/recuperar-senha" className="font-medium text-brand underline-offset-2 hover:underline">
          Recuperar senha
        </Link>
      </p>
    </div>
  );
}

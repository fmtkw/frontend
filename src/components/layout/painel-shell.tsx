import Link from "next/link";

import { can, type Capability } from "@/lib/auth/capabilities";
import type { User } from "@/types/api";

type NavItem = {
  href: string;
  label: string;
  capability?: Capability;
};

const navItems: NavItem[] = [
  { href: "/painel", label: "Dashboard" },
  { href: "/painel/minha-filiacao", label: "Minha filiação", capability: "viewOwnMembership" },
  { href: "/painel/admin/filiacoes", label: "Filiações", capability: "approveMembership" },
  { href: "/painel/admin/documentos", label: "Documentos", capability: "manageDocuments" },
  { href: "/painel/admin/noticias", label: "Notícias", capability: "publishNews" },
];

export function PainelShell({ user, children }: { user: User; children: React.ReactNode }) {
  const items = navItems.filter((item) => !item.capability || can(user.role, item.capability));

  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto flex max-w-[var(--content-max)] flex-col gap-6 px-4 py-6 md:flex-row md:px-6">
        <aside className="w-full shrink-0 rounded-[var(--radius-lg)] border border-line bg-surface p-4 md:w-64">
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-brand">
            Painel
          </p>
          <p className="mt-1 text-sm text-muted">{user.name}</p>
          <nav aria-label="Painel" className="mt-6 flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium text-ink hover:bg-bg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <form action="/api/auth/logout" method="post" className="mt-8">
            <button
              type="submit"
              className="text-sm font-medium text-muted underline-offset-2 hover:text-brand hover:underline"
            >
              Sair
            </button>
          </form>
        </aside>
        <main id="conteudo" className="min-w-0 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

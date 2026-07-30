import Link from "next/link";

const nav = [
  { href: "/federacao", label: "A Federação" },
  { href: "/wushu", label: "Wushu" },
  { href: "/onde-treinar", label: "Onde treinar" },
  { href: "/noticias", label: "Notícias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/transparencia", label: "Transparência" },
  { href: "/filie-se", label: "Filie-se" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line/80 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-[var(--content-max)] items-center justify-between gap-6 px-4 py-4 md:px-6">
        <Link href="/" className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-brand">
          FKF-MT
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contato"
          className="rounded-[var(--radius-md)] bg-brand px-3 py-2 text-sm font-medium text-white hover:bg-brand-strong"
        >
          Contato
        </Link>
      </div>
    </header>
  );
}

import Link from "next/link";

const columns = [
  {
    title: "Federação",
    links: [
      { href: "/federacao", label: "Quem somos" },
      { href: "/federacao/organizacao", label: "Diretoria" },
      { href: "/federacao/estatuto", label: "Estatuto" },
      { href: "/transparencia", label: "Transparência" },
    ],
  },
  {
    title: "Competição",
    links: [
      { href: "/eventos", label: "Calendário 2026" },
      { href: "/noticias", label: "Notícias" },
      { href: "/wushu/modalidades", label: "Modalidades" },
      { href: "/documentos", label: "Documentos" },
    ],
  },
  {
    title: "Contato",
    links: [
      { href: "/contato", label: "Fale conosco" },
      { href: "/ouvidoria", label: "Ouvidoria" },
      { href: "/faq", label: "FAQ" },
      { href: "/privacidade", label: "Privacidade" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div
        className="mx-auto grid gap-12 border-b border-white/16 py-20 md:grid-cols-[1.6fr_1fr_1fr_1fr]"
        style={{ paddingInline: "var(--page-pad)", maxWidth: "var(--content-max)" }}
      >
        <div>
          <p className="text-4xl font-black tracking-[-0.05em]">FMTKW</p>
          <p className="mt-3.5 max-w-[34ch] text-sm leading-relaxed text-white/62">
            Federação Mato-grossense de Kung Fu / Wushu. Cuiabá — MT. Filiada à Confederação
            Brasileira de Kung Fu/Wushu (CBKW).
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-white/45">
              {col.title}
            </p>
            {col.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/85 transition-colors hover:text-accent-soft"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div
        className="mx-auto flex flex-col justify-between gap-3 py-6 font-[family-name:var(--font-mono)] text-[10.5px] uppercase tracking-[0.12em] text-white/42 sm:flex-row"
        style={{ paddingInline: "var(--page-pad)", maxWidth: "var(--content-max)" }}
      >
        <span>© 2026 FMTKW — CNPJ a definir</span>
        <span>Cuiabá · Mato Grosso · Brasil</span>
      </div>
    </footer>
  );
}

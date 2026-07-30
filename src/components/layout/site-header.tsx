"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/** Links do MVP; CTA principal segue o design (Filiar academia). */
const nav = [
  { href: "/federacao", label: "A Federação" },
  { href: "/wushu", label: "Wushu" },
  { href: "/onde-treinar", label: "Onde treinar" },
  { href: "/noticias", label: "Notícias" },
  { href: "/eventos", label: "Eventos" },
  { href: "/transparencia", label: "Transparência" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white/82 backdrop-blur-[14px]">
      <div
        className="mx-auto flex items-center justify-between gap-4 py-[18px] xl:gap-6"
        style={{ paddingInline: "var(--page-pad)", maxWidth: "var(--content-max)" }}
      >
        <Link href="/" className="flex items-baseline gap-2.5 text-ink" onClick={() => setOpen(false)}>
          <span className="text-[22px] font-black tracking-[-0.04em]">FMTKW</span>
          <span className="hidden font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-ink/50 sm:inline">
            Mato Grosso
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-5 xl:gap-6 min-[1100px]:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-semibold tracking-[0.02em] text-ink transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/filie-se"
            className="inline-flex items-center gap-2 bg-brand px-5 py-[11px] text-[13px] font-bold text-white transition-colors hover:bg-ink hover:text-white"
          >
            <span>Filiar academia</span>
            <span className="font-[family-name:var(--font-mono)] text-xs text-inherit" aria-hidden>
              →
            </span>
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-ink/20 p-2 min-[1100px]:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-ink/10 bg-white px-[var(--page-pad)] py-4 min-[1100px]:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/filie-se"
              className="mt-2 bg-brand px-4 py-3 text-center text-sm font-bold text-white hover:bg-ink hover:text-white"
              onClick={() => setOpen(false)}
            >
              Filiar academia
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

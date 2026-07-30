"use client";

import Link from "next/link";
import { useRef } from "react";

import { Reveal } from "@/components/motion/reveal";

function GlowPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`home-panel ${className ?? ""}`}
      onPointerMove={(event) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        node.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
        node.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      }}
    >
      <div className="home-panel-glow" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function HomeShortcuts() {
  return (
    <section
      className="border-b border-ink/14"
      style={{ paddingBlock: "var(--space-section)", paddingInline: "var(--page-pad)" }}
    >
      <div
        className="mx-auto grid gap-0 border border-ink/18 lg:grid-cols-2"
        style={{ maxWidth: "var(--content-max)" }}
      >
        <Reveal>
          <GlowPanel className="border-b border-ink/18 p-10 md:p-14 lg:border-b-0 lg:border-r">
            <div className="home-section-line mb-4" />
            <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-brand">
              03 — Rede filiada
            </p>
            <h2 className="text-[clamp(2.25rem,4.4vw,4.25rem)] font-black uppercase leading-[0.92] tracking-[-0.045em]">
              Onde
              <br />
              treinar
            </h2>
            <p className="mt-6 max-w-[40ch] text-[15px] leading-relaxed text-muted">
              Diretório público de academias e associações com filiação aprovada e vigente no ano
              corrente.
            </p>
            <Link
              href="/onde-treinar"
              className="home-btn home-btn--solid-brand mt-8 inline-flex items-center gap-3 px-7 py-4 text-sm font-bold"
            >
              <span>Buscar academias</span>
              <span className="font-[family-name:var(--font-mono)]" aria-hidden>
                →
              </span>
            </Link>
          </GlowPanel>
        </Reveal>

        <Reveal delayMs={80}>
          <GlowPanel className="bg-brand p-10 text-white md:p-14">
            <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/78">
              04 — Filiação 2026
            </p>
            <h2 className="text-[clamp(2.25rem,4.4vw,4.25rem)] font-black uppercase leading-[0.92] tracking-[-0.045em]">
              Traga sua academia para{" "}
              <span className="font-[family-name:var(--font-serif)] font-normal normal-case italic tracking-[-0.02em]">
                a competição.
              </span>
            </h2>
            <p className="mt-6 max-w-[40ch] text-[15px] leading-relaxed text-white/80">
              Cadastro, documentos, cobrança por Pix e aprovação — tudo pelo site, sem Google Forms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/filie-se"
                className="home-btn home-btn--on-brand px-7 py-4 text-sm font-extrabold"
              >
                <span>Iniciar filiação</span>
              </Link>
              <Link
                href="/filie-se/pessoa"
                className="home-btn home-btn--ghost-light border px-7 py-4 text-sm font-bold"
              >
                <span>Sou atleta / professor</span>
              </Link>
            </div>
          </GlowPanel>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { nextEvent } from "@/features/cms/home/data";

export function HomeNextEvent() {
  return (
    <section
      className="border-b border-ink/14"
      style={{ paddingBlock: "var(--space-section)", paddingInline: "var(--page-pad)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <div className="home-section-line mb-4" />
              <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-brand">
                01 — Próximo evento
              </p>
              <h2 className="text-[clamp(2.5rem,5.6vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                Temporada
                <br />
                <span className="font-[family-name:var(--font-serif)] font-normal normal-case italic tracking-[-0.02em] text-brand">
                  2026
                </span>
              </h2>
            </div>
            <p className="max-w-[34ch] text-[15px] leading-relaxed text-muted md:mb-2">
              Destaque do calendário oficial. Em breve, o painel publica e atualiza este bloco sem
              intervenção técnica.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <Link
            href={nextEvent.href}
            className="home-event-link group grid grid-cols-1 items-center gap-5 border-y-2 border-ink py-7 transition-colors duration-300 hover:text-white md:grid-cols-[108px_1.5fr_1fr_auto] md:gap-6 md:px-3"
          >
            <div className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] transition-transform duration-500 group-hover:translate-x-1">
              {nextEvent.dateLabel}
            </div>
            <div className="text-[clamp(1.35rem,2.2vw,1.9rem)] font-extrabold tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1">
              {nextEvent.title}
            </div>
            <div className="text-sm opacity-70">
              {nextEvent.city}
              <span className="mt-1 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em]">
                {nextEvent.modality}
              </span>
            </div>
            <div className="home-event-status justify-self-start border border-current px-3.5 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em] md:justify-self-end">
              {nextEvent.status}
            </div>
          </Link>
          <div className="mt-6">
            <Link
              href="/eventos"
              className="group inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 transition-colors hover:text-brand"
            >
              Ver calendário completo
              <span
                className="font-[family-name:var(--font-mono)] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

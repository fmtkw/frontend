"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        section.style.setProperty("--mx", `${x}%`);
        section.style.setProperty("--my", `${y}%`);

        if (watermarkRef.current) {
          const ox = (x - 50) * -0.18;
          const oy = (y - 50) * -0.12;
          watermarkRef.current.style.transform = `translate3d(${ox}px, ${oy}px, 0)`;
        }
      });
    };

    section.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden border-b border-ink/14"
      style={{ ["--mx" as string]: "72%", ["--my" as string]: "32%" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-ink"
        style={{
          backgroundImage: `
            linear-gradient(115deg, rgba(20,18,15,.94) 0%, rgba(20,18,15,.62) 46%, rgba(176,31,38,.42) 100%),
            radial-gradient(ellipse at 80% 20%, rgba(176,31,38,.45), transparent 50%),
            repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 2px, transparent 2px 14px)
          `,
        }}
      />

      <div className="home-spotlight" aria-hidden />
      <div
        className="home-orb"
        aria-hidden
        style={{
          width: "42vw",
          height: "42vw",
          maxWidth: 520,
          maxHeight: 520,
          right: "-8%",
          top: "10%",
          background: "rgba(176,31,38,.45)",
        }}
      />
      <div
        className="home-orb"
        aria-hidden
        style={{
          width: "28vw",
          height: "28vw",
          maxWidth: 340,
          maxHeight: 340,
          left: "-6%",
          bottom: "8%",
          background: "rgba(255,255,255,.08)",
          animationDelay: "1.4s",
        }}
      />
      <div className="home-sweep" aria-hidden />
      <div className="home-grain" aria-hidden />

      <div ref={watermarkRef} className="home-watermark" aria-hidden>
        MT
      </div>

      <div
        className="relative z-10 mx-auto flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32"
        style={{ paddingInline: "var(--page-pad)", maxWidth: "var(--content-max)" }}
      >
        <div className="mb-7 flex items-center gap-3.5 overflow-hidden">
          <span className="anim-wipe block h-0.5 w-11 bg-brand" style={{ animationDelay: "0.1s" }} />
          <span
            className="anim-rise font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/70"
            style={{ animationDelay: "0.2s" }}
          >
            Entidade estadual de administração do desporto
          </span>
        </div>

        <p
          className="anim-rise home-brand-shimmer font-[family-name:var(--font-display)] text-[clamp(3.5rem,12vw,9.5rem)] font-black uppercase leading-[0.82] tracking-[-0.05em]"
          style={{ animationDelay: "0.22s" }}
        >
          FMTKW
        </p>

        <h1 className="mt-5 max-w-[18ch] text-[clamp(1.75rem,4.2vw,3.75rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:mt-6">
          <span className="block overflow-hidden">
            <span className="anim-rise block" style={{ animationDelay: "0.32s" }}>
              O kung fu de Mato Grosso
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="anim-rise block font-[family-name:var(--font-serif)] text-[clamp(1.9rem,4.6vw,4rem)] font-normal normal-case italic tracking-[-0.02em] text-brand"
              style={{ animationDelay: "0.45s" }}
            >
              compete para vencer.
            </span>
          </span>
        </h1>

        <p
          className="anim-rise mt-7 max-w-[46ch] text-[17px] leading-[1.55] text-white/75"
          style={{ animationDelay: "0.58s" }}
        >
          Sanda, Taolu e Kung Fu tradicional sob uma única bandeira. Calendário estadual, filiação e
          transparência — no mesmo lugar.
        </p>

        <div
          className="anim-rise mt-9 flex flex-wrap items-center gap-3.5"
          style={{ animationDelay: "0.7s" }}
        >
          <Link
            href="/eventos"
            className="home-btn home-btn--solid-light inline-flex items-center gap-3 px-[30px] py-[17px] text-sm font-bold"
          >
            <span>Ver o calendário 2026</span>
            <span className="font-[family-name:var(--font-mono)]" aria-hidden>
              →
            </span>
          </Link>
          <Link
            href="/onde-treinar"
            className="home-btn home-btn--ghost-light inline-flex items-center gap-3 border px-[30px] py-[17px] text-sm font-bold"
          >
            <span>Encontrar uma academia</span>
          </Link>
        </div>

        <div
          className="anim-rise mt-12 hidden md:flex"
          style={{ animationDelay: "0.9s" }}
          aria-hidden
        >
          <div className="home-scroll-cue">
            <span>Scroll</span>
            <div className="home-scroll-cue__track">
              <div className="home-scroll-cue__dot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

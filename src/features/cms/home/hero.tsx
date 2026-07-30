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
          const ox = (x - 50) * -0.12;
          const oy = (y - 50) * -0.08;
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
      {/* Fundo opaco e limpo — sem grain / camadas leitadas */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "linear-gradient(125deg, #16598a 0%, #2a86c8 52%, #0f9d66 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(125,211,252,.55), transparent 60%)",
        }}
      />
      <div className="home-spotlight home-spotlight--crisp" aria-hidden />

      <div
        className="home-orb home-orb--soft"
        aria-hidden
        style={{
          width: "36vw",
          height: "36vw",
          maxWidth: 420,
          maxHeight: 420,
          right: "-6%",
          top: "12%",
          background: "rgba(18,160,106,.35)",
        }}
      />

      <div ref={watermarkRef} className="home-watermark home-watermark--crisp" aria-hidden>
        MT
      </div>

      <div
        className="relative z-10 mx-auto flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32"
        style={{ paddingInline: "var(--page-pad)", maxWidth: "var(--content-max)" }}
      >
        <div className="mb-7 flex items-center gap-3.5 overflow-hidden">
          <span className="anim-wipe block h-0.5 w-11 bg-white" style={{ animationDelay: "0.1s" }} />
          <span
            className="anim-rise font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/90"
            style={{ animationDelay: "0.2s" }}
          >
            Entidade estadual de administração do desporto
          </span>
        </div>

        <p
          className="anim-rise font-[family-name:var(--font-display)] text-[clamp(3.5rem,12vw,9.5rem)] font-black uppercase leading-[0.82] tracking-[-0.05em] text-white"
          style={{
            animationDelay: "0.22s",
            textShadow: "0 2px 24px rgba(10,40,70,.25)",
          }}
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
              className="anim-rise block font-[family-name:var(--font-serif)] text-[clamp(1.9rem,4.6vw,4rem)] font-normal normal-case italic tracking-[-0.02em] text-[#d4ffe8]"
              style={{ animationDelay: "0.45s" }}
            >
              compete para vencer.
            </span>
          </span>
        </h1>

        <p
          className="anim-rise mt-7 max-w-[46ch] text-[17px] leading-[1.55] text-white/90"
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

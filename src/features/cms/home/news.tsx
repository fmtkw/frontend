import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { latestNews } from "@/features/cms/home/data";

export function HomeNews() {
  const [featured, ...rest] = latestNews;

  return (
    <section
      className="relative overflow-hidden border-b border-ink bg-ink text-white"
      style={{ paddingBlock: "var(--space-section)", paddingInline: "var(--page-pad)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 text-[clamp(6rem,18vw,14rem)] font-black uppercase leading-none tracking-[-0.06em] text-white/[0.03]"
      >
        NEWS
      </div>

      <div className="relative mx-auto" style={{ maxWidth: "var(--content-max)" }}>
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <div className="home-section-line mb-4 bg-accent-soft" />
              <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-accent-soft">
                02 — Notícias
              </p>
              <h2 className="text-[clamp(2.5rem,5.6vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
                Do tatame
                <br />
                para a capa
              </h2>
            </div>
            <Link
              href="/noticias"
              className="group border-b border-white/40 pb-1 text-sm font-semibold transition-colors hover:border-accent-soft hover:text-accent-soft md:mb-2"
            >
              Todas as notícias
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                {" "}
                →
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-7 lg:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal>
            <article className="home-news-card flex flex-col">
              <div className="home-news-media photo-placeholder-dark relative flex aspect-[4/3] items-end border border-white/20 p-[18px]">
                <div
                  className="home-news-media__bg"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(176,31,38,.55), transparent 50%), repeating-linear-gradient(135deg, rgba(255,255,255,.09) 0 2px, transparent 2px 11px)",
                  }}
                />
                <span className="relative z-10 font-[family-name:var(--font-mono)] text-[11px] text-white/70">
                  [foto — pódio do Mato-grossense]
                </span>
              </div>
              <p className="mt-5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-accent-soft">
                {featured.meta}
              </p>
              <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
                <Link
                  href={`/noticias/${featured.slug}`}
                  className="transition-colors hover:text-accent-soft"
                >
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-3.5 text-[15px] leading-relaxed text-white/68">{featured.excerpt}</p>
            </article>
          </Reveal>

          {rest.map((item, index) => (
            <Reveal key={item.slug} delayMs={(index + 1) * 90}>
              <article className="home-news-card flex flex-col">
                <div className="home-news-media photo-placeholder-dark relative flex aspect-[4/3] items-end border border-white/20 p-4">
                  <div
                    className="home-news-media__bg"
                    style={{
                      background:
                        "radial-gradient(circle at 70% 30%, rgba(224,106,99,.35), transparent 45%), repeating-linear-gradient(135deg, rgba(255,255,255,.09) 0 2px, transparent 2px 11px)",
                    }}
                  />
                  <span className="relative z-10 font-[family-name:var(--font-mono)] text-[10px] text-white/55">
                    [foto]
                  </span>
                </div>
                <p className="mt-[18px] font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-white/50">
                  {item.meta}
                </p>
                <h3 className="mt-2.5 text-[21px] font-extrabold leading-[1.15] tracking-[-0.025em]">
                  <Link
                    href={`/noticias/${item.slug}`}
                    className="transition-colors hover:text-accent-soft"
                  >
                    {item.title}
                  </Link>
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/motion/reveal";
import { partnerLogos } from "@/features/cms/home/data";

export function HomePartners() {
  return (
    <section
      className="border-b border-ink/14"
      style={{ paddingBlock: "clamp(3rem, 6vw, 4.5rem)", paddingInline: "var(--page-pad)" }}
    >
      <div className="mx-auto" style={{ maxWidth: "var(--content-max)" }}>
        <Reveal>
          <div className="home-section-line mb-4" />
          <p className="mb-8 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-brand">
            Entidades reconhecedoras e parceiros
          </p>
          <ul className="grid grid-cols-2 gap-px bg-ink/14 md:grid-cols-4">
            {partnerLogos.map((name, index) => (
              <li key={name}>
                <Reveal delayMs={index * 70}>
                  <div className="home-partner flex min-h-[96px] items-center justify-center bg-white px-4 py-6 text-center">
                    <span className="text-sm font-extrabold tracking-[-0.02em]">{name}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

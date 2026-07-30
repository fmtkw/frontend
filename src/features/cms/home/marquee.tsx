import { modalities } from "@/features/cms/home/data";

function Track({ prefix }: { prefix: string }) {
  return (
    <div className="flex items-center gap-[34px] pr-[34px] font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em]">
      {modalities.map((item) => (
        <span key={`${prefix}-${item}`} className="flex items-center gap-[34px]">
          <span className="transition-colors duration-300 hover:text-brand">{item}</span>
          <span className="text-brand" aria-hidden>
            ◆
          </span>
        </span>
      ))}
    </div>
  );
}

export function HomeMarquee() {
  return (
    <div className="home-marquee-row overflow-hidden border-b border-ink bg-ink text-white" aria-hidden>
      <div className="anim-marquee flex w-max py-[15px]">
        <Track prefix="a" />
        <Track prefix="b" />
      </div>
      <div className="home-marquee-rev flex w-max border-t border-white/10 py-2.5 text-white/45">
        <Track prefix="c" />
        <Track prefix="d" />
      </div>
    </div>
  );
}

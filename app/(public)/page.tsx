import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-strong text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, #1d6b4f 0%, transparent 45%), radial-gradient(circle at 80% 0%, #c2410c55 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-[var(--content-max)] flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-20">
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Federação Matogrossense de Kung Fu
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            FKF-MT
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
            Instituição, transparência e filiação do wushu mato-grossense em uma plataforma só.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/filie-se"
              className="rounded-[var(--radius-md)] bg-white px-5 py-3 text-sm font-semibold text-brand-strong"
            >
              Filie-se
            </Link>
            <Link
              href="/onde-treinar"
              className="rounded-[var(--radius-md)] border border-white/40 px-5 py-3 text-sm font-semibold text-white"
            >
              Onde treinar
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--content-max)] px-4 py-14 md:px-6">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-brand-strong">
          Próximos passos do site
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          A base do frontend está pronta: rotas do MVP, painel autenticado, tokens de design e cliente
          de API. O conteúdo editorial e os fluxos de filiação entram conectados ao Django.
        </p>
      </section>
    </div>
  );
}

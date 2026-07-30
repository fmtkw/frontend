import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-brand-strong text-white">
      <div className="mx-auto grid max-w-[var(--content-max)] gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr] md:px-6">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold">FKF-MT</p>
          <p className="mt-2 max-w-md text-sm text-white/80">
            Federação Matogrossense de Kung Fu — filiada à CBKW. Conteúdo institucional e operações
            de filiação em um só lugar.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-white/85">
          <p>CNPJ: a definir</p>
          <p>Sede: Cuiabá / MT</p>
          <Link href="/privacidade" className="underline-offset-2 hover:underline">
            Aviso de privacidade
          </Link>
          <Link href="/ouvidoria" className="underline-offset-2 hover:underline">
            Ouvidoria
          </Link>
          <Link href="/faq" className="underline-offset-2 hover:underline">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <div className="mx-auto w-full max-w-md px-4 py-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-semibold text-brand"
        >
          FKF-MT
        </Link>
        <main id="conteudo" className="mt-8 rounded-[var(--radius-lg)] border border-line bg-surface p-6 shadow-[var(--shadow-soft)]">
          {children}
        </main>
      </div>
    </div>
  );
}

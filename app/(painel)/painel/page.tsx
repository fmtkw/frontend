import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { getCurrentUser } from "@/lib/auth/session";

export const metadata: Metadata = {
  title: "Painel",
  robots: { index: false, follow: false },
};

export default async function PainelPage() {
  const user = await getCurrentUser();

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description={`Olá, ${user?.name ?? "usuário"}. Os indicadores do MVP (filiados, inadimplência, fila de análise) entram aqui.`}
      />
    </div>
  );
}

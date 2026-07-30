import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Recuperar senha",
  robots: { index: false, follow: false },
};

export default function RecuperarSenhaPage() {
  return (
    <div>
      <PageHeader
        title="Recuperar senha"
        description="O fluxo completo (e-mail com link de uso único) será ligado ao endpoint Django na próxima etapa."
      />
    </div>
  );
}

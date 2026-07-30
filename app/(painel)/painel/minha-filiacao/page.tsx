import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Minha filiação",
  robots: { index: false, follow: false },
};

export default function MinhaFiliacaoPage() {
  return (
    <PageHeader
      title="Minha filiação"
      description="Situação da anuidade, documentos pendentes e histórico aparecerão conectados à API de membership."
    />
  );
}

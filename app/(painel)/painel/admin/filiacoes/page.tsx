import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Filiações",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PageHeader title="Filiações" description="Fila de análise e aprovação de solicitações." />;
}

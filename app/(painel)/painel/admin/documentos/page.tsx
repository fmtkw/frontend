import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Documentos",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PageHeader title="Documentos" description="Publicação na área de transparência." />;
}

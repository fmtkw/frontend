import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Documentos",
};

export default function Page() {
  return <PlaceholderPage title="Documentos" description="Repositório público de arquivos." />;
}

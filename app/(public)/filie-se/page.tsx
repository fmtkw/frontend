import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Filie-se",
};

export default function Page() {
  return <PlaceholderPage title="Filie-se" description="Informações e tabela de anuidades." />;
}

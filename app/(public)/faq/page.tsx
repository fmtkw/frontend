import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function Page() {
  return <PlaceholderPage title="FAQ" description="Perguntas frequentes gerenciáveis." />;
}

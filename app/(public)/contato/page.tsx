import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Contato",
};

export default function Page() {
  return <PlaceholderPage title="Contato" description="Endereço, canais e formulário protegido." />;
}

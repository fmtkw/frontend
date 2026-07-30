import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Filiação de entidade",
};

export default function Page() {
  return <PlaceholderPage title="Filiação de entidade" description="Formulário multi-step com upload e cobrança." />;
}

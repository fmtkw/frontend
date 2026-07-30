import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Filiação de pessoa",
};

export default function Page() {
  return <PlaceholderPage title="Filiação de pessoa" description="Formulário por categoria com regra de adimplência." />;
}

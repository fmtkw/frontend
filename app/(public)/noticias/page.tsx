import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Notícias",
};

export default function Page() {
  return <PlaceholderPage title="Notícias" description="Listagem paginada com filtros na URL." />;
}

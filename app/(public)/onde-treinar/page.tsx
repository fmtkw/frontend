import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Onde treinar",
};

export default function Page() {
  return <PlaceholderPage title="Onde treinar" description="Diretório de entidades filiadas e adimplentes." />;
}

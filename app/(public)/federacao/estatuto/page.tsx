import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Estatuto e normativas",
};

export default function Page() {
  return <PlaceholderPage title="Estatuto e normativas" description="Documentos versionados da federação." />;
}

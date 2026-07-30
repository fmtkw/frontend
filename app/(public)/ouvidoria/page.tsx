import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Ouvidoria",
};

export default function Page() {
  return <PlaceholderPage title="Ouvidoria" description="Manifestação identificada ou anônima com protocolo." />;
}

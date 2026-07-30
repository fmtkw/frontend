import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Eventos",
};

export default function Page() {
  return <PlaceholderPage title="Eventos" description="Calendário e listagem de eventos." />;
}

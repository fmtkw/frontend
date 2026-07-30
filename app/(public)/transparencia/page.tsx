import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Transparência",
};

export default function Page() {
  return <PlaceholderPage title="Transparência" description="Portal de acesso irrestrito sem login." />;
}

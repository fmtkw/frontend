import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Privacidade",
};

export default function Page() {
  return <PlaceholderPage title="Privacidade" description="Aviso de privacidade e cookies." />;
}

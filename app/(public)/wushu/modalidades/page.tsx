import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Modalidades",
};

export default function Page() {
  return <PlaceholderPage title="Modalidades" description="Fichas cadastráveis de modalidades." />;
}

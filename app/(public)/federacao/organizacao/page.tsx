import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "Organização",
};

export default function Page() {
  return <PlaceholderPage title="Organização" description="Diretoria, conselhos e mandatos." />;
}

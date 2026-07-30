import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "O que é Wushu",
};

export default function Page() {
  return <PlaceholderPage title="O que é Wushu" description="Conteúdo institucional do esporte." />;
}

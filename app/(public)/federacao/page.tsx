import type { Metadata } from "next";

import { PlaceholderPage } from "@/features/cms/placeholder-page";

export const metadata: Metadata = {
  title: "A Federação",
};

export default function Page() {
  return <PlaceholderPage title="A Federação" description="História, missão e vínculo com a CBKW." />;
}

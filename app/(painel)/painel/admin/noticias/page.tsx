import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Notícias",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PageHeader title="Notícias" description="CRUD editorial com agendamento e preview." />;
}

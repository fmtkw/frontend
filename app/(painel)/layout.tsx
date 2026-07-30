import { redirect } from "next/navigation";

import { PainelShell } from "@/components/layout/painel-shell";
import { LOGIN_PATH } from "@/lib/auth/constants";
import { getCurrentUser } from "@/lib/auth/session";

export default async function PainelLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) {
    redirect(`${LOGIN_PATH}?next=/painel`);
  }

  return <PainelShell user={user}>{children}</PainelShell>;
}

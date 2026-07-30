import type { Metadata } from "next";
import { IBM_Plex_Sans, Sora } from "next/font/google";

import { QueryProvider } from "@/components/providers/query-provider";
import "@/styles/globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "FKF-MT — Federação Matogrossense de Kung Fu",
    template: "%s | FKF-MT",
  },
  description:
    "Site oficial da Federação Matogrossense de Kung Fu: institucional, transparência, eventos e filiação.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

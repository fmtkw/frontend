import type { Metadata } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";

import { QueryProvider } from "@/components/providers/query-provider";
import "@/styles/globals.css";

const body = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "FMTKW — Federação Mato-grossense de Kung Fu",
    template: "%s | FMTKW",
  },
  description:
    "Site oficial da Federação Mato-grossense de Kung Fu / Wushu: institucional, transparência, eventos e filiação.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${body.variable} ${display.variable} ${serif.variable} ${mono.variable} antialiased`}
      >
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

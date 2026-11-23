import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/layout.css";
import "@/styles/components.css";
import "@/styles/sections.css";

export const metadata: Metadata = {
  title: "Luís Henrique Gava Junior — Engenheiro de Software",
  description:
    "Portfólio de Luís Henrique Gava Junior: engenheiro de software fullstack focado em IA aplicada.",
  authors: [{ name: "Luís Henrique Gava Junior" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Luís Henrique Gava Junior — Portfólio",
    description: "Engenheiro de software fullstack com foco em IA aplicada, LLMs e agentes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

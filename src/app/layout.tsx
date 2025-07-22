// Arquivo: src/app/layout.tsx
// Propósito: Define o layout raiz da aplicação Next.js, configurando fontes e estrutura base.

import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/PageHome/Footer";
import { Header } from "@/components/PageHome/Header";

// Configuração de fontes otimizada pelo Next.js
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap", // Evita FOUT
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Metadados para SEO
export const metadata: Metadata = {
  title: "Dental Uni - Plano Odontológico",
  description: "Dental Uni - Plano Odontológico",
  icons: {
    icon: "/favicon.ico",
  },
};

// Configuração da viewport conforme recomendação do Next.js
export const viewport = {
  width: "device-width",
  initialScale: 1,
  // Adicione outras propriedades da viewport se necessário, ex:
  // maximumScale: 1,
  // userScalable: false,
};

// Componente de layout raiz (Server Component)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" >
      <body>
        {/* Header - Componente essencial presente em todas as páginas */}
        <Header />

        {/* Conteúdo principal */}
        <main className="min-h-screen ">{children}</main>

        {/*  {/* Footer - Componente essencial presente em todas as páginas */}
        <Footer />
      </body>
    </html>
  );
}

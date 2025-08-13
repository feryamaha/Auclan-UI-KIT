import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/PageHome/Header";
import { Sidebar } from "@/components/PageHome/Sidebar";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Auclan UI Kit",
  description: "Documentação e playground de componentes Auclan",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${lato.variable}`}>
      <body>
        {/* Header fixo */}
        <Header />

        {/* pt-16 para espaço do header fixo */}
        <div className="pt-16 flex w-full">
          {/* Sidebar fixo */}
          <Sidebar active="" />

          {/* Main: ajuste a largura da sidebar (ml-56 = 224px) */}
          <main className="flex-1 ml-56 p-6 bg-white h-[calc(100vh-4rem)] overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

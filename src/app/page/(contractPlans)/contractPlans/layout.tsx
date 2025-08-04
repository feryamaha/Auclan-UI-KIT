"use client";
import { ReactNode, Suspense } from "react";
import { Icon } from "@/scripts/Icon";
import { useRouter, useSearchParams } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
  sideContent: ReactNode; // Obrigatório, não opcional
}

// Componente que usa useSearchParams
function LayoutContent({ children, sideContent }: LayoutProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "0";
  const isFirstPage = step === "0";

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="w-screen h-screen fixed inset-0 flex flex-col items-center justify-center bg-gray950 bg-opacity-50 z-50">
      {/* Header fixo */}
      <div className="fixed top-0 w-full h-[80px] py-[16px] px-[32px] flex items-center justify-between bg-transparent">
        <a href="/" className="w-[154px] h-[24px]">
          <Icon
            name={isFirstPage ? "IconLogoinstitucional" : "IconLogoDocolMekal"}
            className="w-full h-full"
          />
        </a>
        <button
          className="w-[48px] p-[12px] bg-white border border-gray100 rounded-full flex justify-center"
          onClick={handleClose}
        >
          <Icon name="IconClose" />
        </button>
      </div>

      {/* Conteúdo principal mainContent lateral esquerda 68% da viewport*/}
      <div className="w-full h-full flex">
        <div className="w-[68%] bg-white">
          <div className="w-full mx-auto px-[32px] pt-[112px] flex justify-center">
            {children} {/* Renderiza prop children para a célula de 68% */}
          </div>
        </div>
        {/* Conteúdo secundario sideContent lateral direta 32% da viewport*/}
        <div className="w-[32%] h-full px-[32px] pt-[112px] bg-gray50 overflow-y-auto">
          {sideContent} {/* Renderiza prop sideContent para a célula de 32% */}
        </div>
      </div>
    </div>
  );
}

export default function Layout({ children, sideContent }: LayoutProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center">
          Carregando...
        </div>
      }
    >
      <LayoutContent children={children} sideContent={sideContent} />
    </Suspense>
  );
}

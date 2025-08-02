"use client";

// Importações de dependências e componentes
import { ReactNode } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation"; // Hook useRouter para navegação

export default function ContractPlansLayout({
  children,
  sideContent,
  isFirstPage = false, // Prop opcional (tipo: boolean) para controlar a logo dinâmica
}: {
  children: ReactNode; // Prop children (tipo: ReactNode) para conteúdo principal da célula de 68%
  sideContent: ReactNode; // Prop sideContent (tipo: ReactNode) para conteúdo secundário da célula de 32%
  isFirstPage?: boolean; // Prop opcional isFirstPage (tipo: boolean) para definir a logo inicial
}) {
  // Hook useRouter (tipo: UseRouter) para gerenciar navegação entre rotas
  const router = useRouter();

  // Função handleClose (tipo: Function) para fechar o overlay e redirecionar à página inicial
  const handleClose = () => {
    router.push("/");
  };

  // Estrutura principal do layout com props e overlay (tipo: JSX.Element)
  return (
    <div className="w-screen h-screen fixed inset-0 flex items-center justify-center bg-red25 bg-opacity-50 z-50 ">
      {/* // Header fixo com prop isFirstPage e botão de fechar */}
      <div className="fixed top-0 w-full h-[80px] py-[16px] px-[32px] flex items-center justify-between bg-transparent">
        <a href="/" className="w-[154px] h-[24px]">
          <Icon
            name={isFirstPage ? "IconLogoinstitucional" : "IconLogoDocolMekal"}
            className="w-full h-full"
          />{" "}
        </a>
        <button
          className="w-[48px] h-auto p-[12px] bg-white border border-gray100 rounded-full flex justify-center"
          onClick={handleClose}
        >
          <Icon name="IconClose" />
        </button>
      </div>

      {/*  Bloco estático para o conteúdo dinâmico com props children e sideContent */}
      <div className="w-full h-full flex ">
        <div className="w-[68%] bg-white  ">
          <div className="w-full mx-auto px-[32px] pt-[112px] flex justify-center">
            {children}{" "}
            {/* // Renderiza prop children (tipo: ReactNode) para a célula de 68% */}
          </div>
        </div>
        <div className="w-[32%] h-full px-[32px] pt-[112px]  bg-gray50 overflow-y-auto ">
          {sideContent}{" "}
          {/* // Renderiza prop sideContent (tipo: ReactNode) para a célula de 32% */}
        </div>
      </div>
    </div>
  );
}

// Adicionada esta função para compatibilidade com Next.js
export function generateMetadata() {
  return {
    title: "Contratação de Planos - Dental Uni",
  };
}

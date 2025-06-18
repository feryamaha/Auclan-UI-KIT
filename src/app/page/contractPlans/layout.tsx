"use client";

import { ReactNode } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function ContractPlansLayout({
  children,
  sideContent,
  isFirstPage = false, // Prop para controlar a logo (true para StepA0, false para os demais)
}: {
  children: ReactNode;
  sideContent: ReactNode;
  isFirstPage?: boolean;
}) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/"); // Redireciona para a página inicial
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 overflow-auto">
      <div className="w-full h-full border bg-gray50 flex flex-col items-center">
        <div className="fixed w-full h-[80px] py-[16px] px-[32px] flex items-center justify-between bg-white">
          <a href="/" className="w-[154px] h-[24px]">
            <Icon
              name={
                isFirstPage ? "IconLogoinstitucional" : "IconLogoDocolMekal"
              }
              className="w-full h-full"
            />
          </a>
          <button
            className="w-[48px] h-auto p-[12px] bg-white border rounded-full flex justify-center"
            onClick={handleClose}
          >
            X
          </button>
        </div>
        <div className="w-full h-full flex mt-[80px]">
          <div className="w-[68%] bg-white pt-[112px]">
            <div className="max-w-[427px] mx-auto">
              {children} {/* Conteúdo dinâmico para a célula de 68% */}
            </div>
          </div>
          <div className="w-[32%] bg-gray100">
            {sideContent} {/* Conteúdo dinâmico para a célula de 32% */}
          </div>
        </div>
      </div>
    </div>
  );
}

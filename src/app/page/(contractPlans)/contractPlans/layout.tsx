"use client";

import { ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@/scripts/Icon";

// Definir as props do layout para rotas paralelas
interface LayoutProps {
  children: ReactNode;
  sideContent: ReactNode;
}

export default function ContractPlansLayout({
  children,
  sideContent,
}: LayoutProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "0";
  const isFirstPage = step === "0";

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-fulll fixed inset-0 flex flex-col items-center bg-gray50 justify-center z-50">
      {/* Header fixo */}
      <div className="fixed top-0 w-full h-[80px] py-[16px] px-[32px] flex items-center justify-between bg-transparent z-50">
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

      {/* Conteúdo principal e secundário */}
      <div className="w-full h-full flex pt-[80px]">
        <div className="w-[68%] h-full bg-white">
          <div className="w-full h-full mx-auto px-[32px] pt-[32px] flex justify-center">
            {children}
          </div>
        </div>
        <div className="w-[32%] h-full px-[32px] pt-[32px] bg-gray50 overflow-y-auto">
          {sideContent}
        </div>
      </div>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Icon } from "@/scripts/Icon";

type LayoutProps = {
  children: ReactNode;
};

export default function ContractPlansLayoutSucessfully({
  children,
}: LayoutProps) {
  const pathname = usePathname();

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full h-screen fixed inset-0 flex flex-col bg-white z-50">
      {/* Header fixo */}
      <div className="fixed top-0 w-full h-[80px] py-[16px] px-[32px] flex items-center justify-between bg-transparent z-50">
        <a href="/" className="w-[154px] h-[24px]">
          <Icon name="IconLogoinstitucional" className="w-full h-full" />
        </a>
        <button
          className="w-[48px] p-[12px] bg-white border border-gray100 rounded-full flex justify-center"
          onClick={handleClose}
        >
          <Icon name="IconClose" />
        </button>
      </div>

      {/* Conteúdo ocupando 100% */}
      <div className="w-full h-full flex items-center justify-center pt-[112px] px-[32px]">
        {children}
      </div>
    </div>
  );
}

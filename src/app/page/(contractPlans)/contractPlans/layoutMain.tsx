"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { Icon } from "@/scripts/Icon";
import LayoutMobile from "./layoutMobile";

interface ContractPlansLayoutProps {
  children: ReactNode;
  sideContent: ReactNode;
  currentStep?: number;
  totalSteps?: number;
  stepTitle?: string;
  completedSteps?: number[];
  onMenuClick?: (step: number) => void;
}

export default function ContractPlansLayout({
  children,
  sideContent,
  currentStep,
  totalSteps,
  stepTitle,
  completedSteps,
  onMenuClick,
}: ContractPlansLayoutProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const hiddenRoutes = ["/contratar-planos"];
  const shouldHideLayout = hiddenRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const handleClose = () => {
    window.location.href = "/";
  };

  // 🔹 MOBILE — Agora sempre passa currentStep e totalSteps definidos,
  // para garantir que o header de Step apareça
  if (isMobile) {
    return (
      <LayoutMobile
        sideContent={sideContent}
        currentStep={currentStep ?? 0}
        totalSteps={totalSteps ?? 0}
        stepTitle={stepTitle ?? ""}
        completedSteps={completedSteps}
        onMenuClick={onMenuClick}
      >
        {children}
      </LayoutMobile>
    );
  }

  // 🔹 DESKTOP
  return (
    <div className="w-full h-screen fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-50 z-50">
      {!shouldHideLayout && (
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
      )}
      <div className="w-full h-full">
        <div className="w-[68%] h-full bg-white absolute top-0 left-0">
          <div className="w-full mx-auto px-[32px] pt-[112px] flex justify-center">
            {children}
          </div>
        </div>
        <div className="min-w-[32%] h-full px-[32px] pt-[112px] bg-gray50 overflow-y-auto absolute top-0 right-0 ">
          {sideContent}
        </div>
      </div>
    </div>
  );
}

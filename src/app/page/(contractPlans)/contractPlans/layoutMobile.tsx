"use client";

import React from "react";
import { Icon } from "@/scripts/Icon";

interface LayoutMobileProps {
  children: React.ReactNode;
  sideContent?: React.ReactNode;
  currentStep?: number;
  totalSteps?: number;
  stepTitle?: string;
  completedSteps?: number[];
  onMenuClick?: (step: number) => void;
  shouldHideLayout?: boolean; // 🔹 Novo para controlar se o menu global deve aparecer
}

export default function LayoutMobile({
  children,
  sideContent,
  currentStep = 0,
  totalSteps = 0,
  stepTitle = "",
  completedSteps,
  onMenuClick,
  shouldHideLayout = false,
}: LayoutMobileProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const isStepMode = totalSteps > 0;
  const formattedScore = `${String(currentStep + 1).padStart(
    2,
    "0"
  )} / ${String(totalSteps).padStart(2, "0")}`;

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white relative">
      {/* 🔹 HEADER FIXO GLOBAL (logo + botão fechar) */}
      {!shouldHideLayout && (
        <div className="fixed top-0 w-full h-[80px] py-[16px] px-[32px] flex items-center justify-between bg-white z-50">
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

      {/* 🔹 Header específico do Step */}
      {isStepMode ? (
        <header
          className="w-full bg-white border-b border-t px-4 py-3 flex justify-between items-center cursor-pointer mt-[8px] " // <-- margem para não cobrir o header fixo
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex flex-row gap-[12px]">
            {currentStep === 0 ? (
              <span className="TypographyPlato16">Resumo e detalhes</span>
            ) : (
              <div className="flex gap-[12px]">
                <span className="TypographyPinter12R w-max ">
                  {formattedScore}{" "}
                </span>
                <span className="TypographyPlato20">{stepTitle}</span>
              </div>
            )}
          </div>
          <Icon
            name="IconArrowDowCoverage"
            className={`w-5 h-5 transition-transform duration-200 ${
              menuOpen ? "rotate-180" : ""
            }`}
          />
        </header>
      ) : (
        // 🔹 Header genérico se não estiver em modo Step
        <header className="w-full bg-white border-b px-4 py-3 mt-[80px]">
          <Icon name="IconLogoinstitucional" className="w-[154px] h-[24px]" />
        </header>
      )}

      {/* 🔹 Dropdown (conteúdo do sideContent no mobile) */}
      {menuOpen && isStepMode && sideContent && (
        <div className="w-full border-b bg-white px-4 py-4 animate-slide-down">
          {sideContent}
        </div>
      )}

      {/* 🔹 Conteúdo principal */}
      <main className="flex-1 w-full h-full px-4 py-4">{children}</main>
    </div>
  );
}

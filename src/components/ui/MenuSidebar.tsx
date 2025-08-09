"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/scripts/Icon";

export interface MenuSidebarProps {
  onMenuClick: (step: number) => void;
  currentStep: number;
  completedSteps: number[];
  isMobile?: boolean; // 🔹 Nova prop opcional
}

const menuItems = [
  { number: "1", text: "Identificação Inicial", pageStep: 0 },
  { number: "2", text: "Titular do Plano", pageStep: 1 },
  { number: "3", text: "Contato", pageStep: 2 },
  { number: "4", text: "Endereço", pageStep: 3 },
  { number: "5", text: "Dependentes", pageStep: 4 },
  { number: "6", text: "Aceite e conclusão", pageStep: 5 },
];

export function MenuSidebar({
  onMenuClick,
  currentStep,
  completedSteps,
  isMobile = false,
}: MenuSidebarProps) {
  const [savedSteps, setSavedSteps] = useState<number[]>([]);

  useEffect(() => {
    setSavedSteps([]);
  }, [currentStep]);

  return (
    <div
      className={`${isMobile ? "w-full" : "w-[233px]"} flex flex-col gap-[8px]`}
    >
      {menuItems.map((item, index) => {
        const isCompleted = currentStep > item.pageStep;
        const isActive = item.pageStep === currentStep;
        const isDisabled = item.pageStep > currentStep;

        return (
          <button
            key={index}
            className={`w-full flex gap-[5px] items-center py-[6px] px-[8px] ${
              isCompleted || isActive
                ? "Typography14hoversidebarOK"
                : "Typography14STDsidebar"
            } ${isActive ? "bg-red25 rounded-[6px]" : ""} ${
              isDisabled ? "cursor-not-allowed opacity-50" : ""
            }`}
            onClick={!isDisabled ? () => onMenuClick(item.pageStep) : undefined}
            disabled={isDisabled}
          >
            {isCompleted && <Icon name="IconSidebar" className="mr-2" />}
            {!isCompleted && item.number}
            <span>{item.text}</span>
          </button>
        );
      })}
    </div>
  );
}

export default MenuSidebar;

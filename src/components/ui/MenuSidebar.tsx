"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/scripts/Icon";

// Definindo a interface de props para o MenuSidebar
interface MenuSidebarProps {
  onMenuClick: (step: number) => void; // Função para lidar com o clique no menu
  currentStep: number; // Passo atual do processo
  completedSteps: number[]; // Etapas já concluídas
}

// Definindo os itens do menu com os estados da propriedade 'pageStep' para controle de navegação
const menuItems = [
  { number: "1", text: "Identificação Inicial", pageStep: 0 },
  { number: "2", text: "Titular do Plano", pageStep: 1 },
  { number: "3", text: "Contato", pageStep: 2 },
  { number: "4", text: "Endereço", pageStep: 3 },
  { number: "5", text: "Aceite e Conclusão", pageStep: 4 },
  { number: "6", text: "Sucesso", pageStep: 5 },
];

export function MenuSidebar({
  onMenuClick,
  currentStep,
  completedSteps,
}: MenuSidebarProps) {
  const [savedSteps, setSavedSteps] = useState<number[]>([]);

  // Carrega os dados salvos do localStorage ao montar e sempre que mudar
  useEffect(() => {
    const storedData = localStorage.getItem("mockDataStorage");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const stepsWithData = parsedData
        .map((item: { step: number; data: object }) => item.step)
        .filter(
          (step: number) => Object.keys(parsedData[step].data).length > 0
        );
      setSavedSteps(stepsWithData);
    }
  }, [currentStep]); // Reexecuta quando currentStep mudar

  return (
    <div className="w-[233px] flex flex-col gap-[8px]">
      {menuItems.map((item, index) => {
        const isCompleted =
          completedSteps.includes(item.pageStep) ||
          savedSteps.includes(item.pageStep);
        const isActive = item.pageStep === currentStep;
        const isDisabled = item.pageStep > currentStep && !isCompleted;

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

"use client";

// Importações de dependências e componentes
import React from "react";
import { Icon } from "@/scripts/Icon";
import Link from "next/link";

interface MenuSidebarProps {
  activeStep: number; // Passo atual (0 a 5)
  onStepChange: (step: number) => void; // Função para mudar o passo
}

export function MenuSidebar({ activeStep, onStepChange }: MenuSidebarProps) {
  // Lista de itens do menu com estados iniciais
  const steps = [
    { id: 1, label: "Identificação Inicial", isCompleted: true },
    { id: 2, label: "Titular do plano", isCompleted: false },
    { id: 3, label: "Contato", isCompleted: false },
    { id: 4, label: "Endereço", isCompleted: false },
    { id: 5, label: "Dependentes", isCompleted: false },
    { id: 6, label: "Aceite e conclusão", isCompleted: false },
  ];

  return (
    <nav className="w-[250px] bg-white p-4">
      {steps.map((step) => (
        <Link
          key={step.id}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onStepChange(step.id - 1);
          }}
          className="block"
        >
          <span
            className={`flex items-center gap-2 py-2 px-2 rounded-md ${
              step.id - 1 === activeStep && !step.isCompleted
                ? "bg-red25 Typography14hoversidebarOK"
                : step.isCompleted
                ? "Typography14hoversidebarOK"
                : "Typography14STDsidebar"
            } hover:bg-gray-100`}
          >
            {step.isCompleted ? (
              <Icon name="IconChack" />
            ) : step.id - 1 === activeStep ? (
              <span className="text-redSTD">{step.id}</span>
            ) : (
              <span>{step.id}</span>
            )}
            <span>{step.label}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}

export default MenuSidebar;

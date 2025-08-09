"use client";

// Importações de dependências e componentes
import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";

// Definição de tipos para ícones válidos (ajuste conforme Icon.tsx)
type ValidIconNames =
  | "IconIncludPlans"
  | "IconNotCoverage"
  | "IconArrowCoverage"
  | "IconProcedure"
  | "IconFlagPlan";

interface CoverageItem {
  text: string;
  icon?: ValidIconNames; // Tipo restrito aos ícones válidos
}

interface PlanDetailsCardProps {
  planName?: string;
  planPrice?: string;
  coverageItems?: CoverageItem[];
}

// Componente React para renderizar o card de detalhes do plano
export function PlanDetailsCard({
  planName = "Plano Prata",
  planPrice = "R$ 25,40",
  coverageItems = [
    { text: "6 atos cobertos", icon: "IconIncludPlans" },
    { text: "6 atos complementares", icon: "IconNotCoverage" },
    /* { text: "166 procedimentos", icon: "IconProcedure" }, */
  ],
}: PlanDetailsCardProps) {
  return (
    <div className="w-full h-max ">
      <div className="flex flex-col items-start border-b pb-[24px] ">
        <div className="w-full flex justify-between">
          <p className="TypographyPinter16w500g900">Valor do Plano</p>
          <div className="w-[106px] h-[29px] relative">
            <Icon name="IconFlagPlan" />{" "}
            {/* Componente Icon (tipo: ReactNode) para o tipo de plano */}
            <p className="h-full absolute inset-0 flex items-center justify-center TypographyPinter14w500g95">
              {planName}
            </p>
          </div>
        </div>
        <div className="w-max flex items-end gap-[8px]">
          <p className="TypographyH1">{planPrice}</p>
          <p className="TypographyPinter14w400 pb-1">/mês por beneficiário</p>
        </div>
      </div>
      <div className="flex flex-col gap-[16px] py-[24px]  ">
        <h2 className="TypographyPlato20">Cobertura</h2>
        <div className="flex flex-col gap-[8px] ">
          {coverageItems.map((item, index) => (
            <Button
              key={index}
              variant="btnCoverageList"
              className="w-full flex items-center justify-between "
            >
              <div className="flex items-center gap-[8px]">
                <Icon name={item.icon || "IconIncludPlans"} />
                <span className="TypographyPinter16w400">{item.text}</span>
              </div>
            </Button>
          ))}
        </div>
        <Button
          variant="btnCoverage"
          className="w-full flex items-center justify-between "
        >
          {" "}
          Ver cobertura completa
          <Icon name="IconArrowCoverage" />
        </Button>
      </div>
    </div>
  );
}

export default PlanDetailsCard;

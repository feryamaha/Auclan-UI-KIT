"use client";

// Importações de dependências e componentes
import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/contractPlans/layout";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeItemsPlans from "@/components/ui/IncludeItemsPlans";

// import { MenuSidebar } from "../ui/MenuSidebar";
// Update the import path below if MenuSidebar exists elsewhere:
import { MenuSidebar } from "@/components/ui/MenuSidebar";

export function StepA1HolderData() {
  // Constante React com conteúdo principal (tipo: ReactNode) para a célula de 68%
  const mainContent = (
    <div className="w-full flex flex-col items-start gap-[12px] mb-[24px]  ">
      <MenuSidebar activeStep={0} onStepChange={() => {}} />
    </div>
  );

  // Constante React com conteúdo secundário (tipo: ReactNode) para a célula de 32%
  const sideContent = (
    <div className="w-full h-max flex flex-col ">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <Icon name="IconFaviconDental" />{" "}
        {/* Componente Icon (tipo: ReactNode) para o favicon da Dental Uni */}
        <div>
          <p className="TypographyPinter16g950">Dental Uni</p>
          <p className="TypographyPinter16w400">Sorria, a gente garante!</p>
        </div>
      </div>
      {/* Card list coverage plans */}
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        <PlanDetailsCard />
        <IncludeItemsPlans />
      </div>
      <div className="max-w-[359px] h-max justify-between flex items-center mx-auto gap-[26px] "></div>
    </div>
  );

  // Renderiza o layout com props children e sideContent (tipo: ReactNode)
  return (
    <ContractPlansLayout children={mainContent} sideContent={sideContent} />
  );
}

export default StepA1HolderData;

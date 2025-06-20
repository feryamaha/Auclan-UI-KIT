"use client";

// Importações de dependências e componentes
import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/contractPlans/layout";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeItemsPlans from "@/components/ui/IncludeItemsPlans";

export function StepA0Welcome() {
  // Constante React com conteúdo principal (tipo: ReactNode) para a célula de 68%
  const mainContent = (
    <div className="max-w-[366px] flex flex-col items-start gap-[12px] mb-[24px]">
      <p className="TypographyPinter14w500">DOCOL MEKAL - 38004</p>
      <h2 className="TypographyPlato24">
        Olá! Vamos começar pela identificação da empresa
      </h2>
      <p className="max-w-[300px] TypographyPinter16w400">
        Para iniciar o processo, insira abaixo o número da matrícula vinculado a
        empresa.
      </p>
      <input
        type="text"
        placeholder="Número da matrícula"
        className="w-full p-2 border rounded-md mb-4"
      />
      <div className="flex w-full flex-col mt-[32px] gap-[24px]">
        <Button href="/sobre-nos" variant="btnSecondary">
          Iniciar
        </Button>
        <Button
          href="https://www.planosdentaluni.com.br/"
          target="_blank"
          variant="btnLink"
          className="textbtnLink"
        >
          Não sei o número da matrícula
        </Button>
      </div>
    </div>
  );

  // Constante React com conteúdo secundário (tipo: ReactNode) para a célula de 32%
  const sideContent = (
    <div className="w-full h-max flex flex-col">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <Icon name="IconFaviconDental" />{" "}
        {/* Componente Icon (tipo: ReactNode) para o favicon da Dental Uni */}
        <div>
          <p className="TypographyPinter16g950">Dental Uni</p>
          <p className="TypographyPinter16w400">Sorria, a gente garante!</p>
        </div>
      </div>
      {/* Card list coverage plans */}
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px] shadow-sm">
        <PlanDetailsCard />
        <IncludeItemsPlans />
      </div>
    </div>
  );

  // Renderiza o layout com props children e sideContent (tipo: ReactNode)
  return (
    <ContractPlansLayout children={mainContent} sideContent={sideContent} />
  );
}

export default StepA0Welcome;

"use client";
import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layoutMain";
import MenuSidebar from "@/components/ui/MenuSidebar";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeBeneficiaryCard from "@/components/ui/IncludeBeneficiaryCard";
import { useFormContext } from "@/context/FormContext";

interface StepB4AddCompletionDataProps {
  onNext: () => void;
  onBack: () => void;
  onAddDependent: () => void;
}

export function StepB4AddCompletionData({
  onNext,
  onBack,
  onAddDependent,
}: StepB4AddCompletionDataProps) {
  const { onMenuClick, currentStep, completedSteps } = useFormContext();

  const mainContent = (
    <div className="w-full h-full flex gap-[24px]">
      <div className="w-max">
        <MenuSidebar
          onMenuClick={onMenuClick || (() => {})}
          currentStep={currentStep}
          completedSteps={Array.from(completedSteps)}
        />
      </div>

      <div className="w-full flex flex-col gap-[32px] items-start">
        <div className="w-full h-max pb-[32px] border-b flex justify-between">
          <div className="w-max flex flex-col">
            <Button
              variant="btnLink"
              className="textbtnLink w-max"
              onClick={onBack}
            >
              <Icon name="IconArrowright" className="w-5 h-5 rotate-180" />
              Voltar
            </Button>
            <div className="w-[302px] pt-[8px]">
              <h2 className="TypographyPlato24 pb-[8px]">Dados de Conclusão</h2>
              <p className="TypographyPinter16w400">
                Revise e finalize a adição dos dependentes.
              </p>
            </div>
          </div>
        </div>

        {/* Aqui entra o conteúdo específico desse step */}
        <Button variant="btnFormHover" className="w-full" onClick={onNext}>
          Avançar
          <Icon name="IconArrowright" className="w-5 h-5" />
        </Button>

        <Button variant="btnLink" className="w-max" onClick={onAddDependent}>
          + Adicionar outro dependente
        </Button>
      </div>
    </div>
  );

  const sideContent = (
    <div className="w-full h-max flex flex-col gap-[8px]">
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        <PlanDetailsCard />
      </div>
      <IncludeBeneficiaryCard />
    </div>
  );

  return (
    <ContractPlansLayout sideContent={sideContent}>
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepB4AddCompletionData;

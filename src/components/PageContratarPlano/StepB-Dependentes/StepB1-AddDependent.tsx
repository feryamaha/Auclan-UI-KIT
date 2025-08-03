// src/components/PageContratarPlano/StepB-Dependentes/StepB1-AddDependent.tsx
"use client";

import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../../ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../../ui/docolMekal";
import IncludeBeneficiaryCard from "../../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import { useFormContext } from "@/context/FormContext";

export function StepB1AddDependent() {
  const { handleNext, handleBack, currentStep, completedSteps } =
    useFormContext();

  const mainContent = (
    <div className="w-full h-full flex gap-[24px]">
      <div className="w-max">
        <MenuSidebar
          onMenuClick={() => {}}
          currentStep={currentStep}
          completedSteps={Array.from(completedSteps)}
        />
      </div>
      <div className="w-full flex flex-col gap-[32px] items-end">
        <div className="w-full h-max pb-[32px] border-b flex justify-between">
          <div className="w-max flex flex-col">
            <Button
              variant="btnLink"
              className="textbtnLink w-max"
              onClick={handleBack}
            >
              <Icon name="IconArrowright" className="w-5 h-5 rotate-180" />
              Voltar
            </Button>
            <div className="w-[302px] pt-[8px]">
              <h2 className="TypographyPlato24 pb-[8px]">
                Adicionar dependentes
              </h2>
              <p className="TypographyPinter16w400">
                Adicione abaixo os dependentes que irão usufruir do plano Dental
                Uni.
              </p>
            </div>
          </div>
          <div className="w-max flex">
            <DocolMekal />
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="TypographyPlato20">Dependentes</p>
          <Button
            variant="btnLink"
            className="textbtnLink w-max"
            onClick={handleNext}
          >
            <Icon name="IconADDITION" className="w-5 h-5 rotate-180" />
            Adicionar dependente
          </Button>
        </div>
        <div className="w-[442px] flex flex-col gap-[32px] items-center">
          <div className="max-w-[309px] flex flex-col items-center justify-center text-center gap-[16px]">
            <div className="w-[48px] h-[48px] bg-red25 flex items-center justify-center rounded-full">
              <Icon name="IconADDITIONicon" className="w-5 h-5 rotate-180" />
            </div>
            <p className="TypographyPinter16w500g950">
              Nenhum dependente adicionado
            </p>
            <p className="TypographyPinter16w400">
              Clique no botão “+ adicionar dependente” para iniciar o processo
              de inclusão.
            </p>
            <Button
              variant="btnLink"
              className="textbtnLink w-max"
              onClick={handleNext}
            >
              <Icon name="IconADDITION" className="w-5 h-5 rotate-180" />
              Adicionar dependente
            </Button>
          </div>
          <Button
            variant="btnFormHover"
            className="w-full"
            onClick={handleNext}
          >
            Avançar
            <Icon name="IconArrowright" className="w-5 h-5" />
          </Button>
        </div>
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
    <ContractPlansLayout>
      {mainContent}
      {/* {sideContent} */}
    </ContractPlansLayout>
  );
}

export default StepB1AddDependent;

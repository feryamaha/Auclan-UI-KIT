"use client";
import React, { useState } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layoutMain";
import MenuSidebar from "@/components/ui/MenuSidebar";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeBeneficiaryCard from "@/components/ui/IncludeBeneficiaryCard";
import { useFormContext } from "@/context/FormContext";

interface StepA4AcceptTermsProps {
  onNext: () => void;
  onBack: () => void;
}

export function StepA4AcceptTerms({ onNext, onBack }: StepA4AcceptTermsProps) {
  const { onMenuClick, currentStep, completedSteps } = useFormContext();
  const [isFormValid, setIsFormValid] = useState(false);

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
              <h2 className="TypographyPlato24 pb-[8px]">Aceite e Conclusão</h2>
              <p className="TypographyPinter16w400">
                Por favor, confirme que você aceita os termos do plano.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          {/* Checkbox */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => setIsFormValid(e.target.checked)}
              className="w-5 h-5 border rounded-md border-gray-300"
            />
            <span className="TypographyPinter16w400">
              Aceito os termos e condições
            </span>
          </label>

          {/* Botão Avançar */}
          {isFormValid ? (
            <Button
              variant="btnFormHover"
              className="w-full"
              type="button"
              onClick={onNext} // Chama direto, garantindo avanço
            >
              Avançar
              <Icon name="IconArrowright" className="w-5 h-5" />
            </Button>
          ) : (
            <Button variant="btnForm" className="w-full" type="button" disabled>
              Avançar
              <Icon name="IconArrowright" className="w-5 h-5" />
            </Button>
          )}

          {/* Botão Voltar */}
          <Button variant="btnLink" className="w-max" onClick={onBack}>
            Voltar
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
    <ContractPlansLayout sideContent={sideContent}>
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA4AcceptTerms;

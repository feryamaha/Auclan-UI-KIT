"use client";

import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { useFormContext } from "@/context/FormContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface StepB0IncludeDependentProps {
  onIncludeNow: () => void;
  onIncludeLater: () => void;
}

export function StepB0IncludeDependent({
  onIncludeNow,
  onIncludeLater,
}: StepB0IncludeDependentProps) {
  const { onMenuClick, currentStep, completedSteps } = useFormContext();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="w-max h-max relative">
        <div className="w-[1062px] h-[662px] flex items-start justify-center gap-[32px] rounded-2xl p-[24px] bg-BGStepB0 bg-cover hidden @tablet:block">
          <div className="w-full">
            <h2 className="TypographyPlato20">
              Pode sorrir. <br /> A gente garante.
            </h2>
          </div>
        </div>
        <div className="w-[360px] @tablet:w-[498px] h-[614px] bg-BGCardStepB0 bg-cover px-[16px] @tablet:px-[48px] py-[40px] flex flex-col justify-between @tablet:absolute @tablet:top-[24px] @tablet:right-[24px] rounded-[8px] ">
          <button
            className="w-[48px] h-auto p-[12px] bg-white border border-gray100 rounded-full flex justify-center absolute top-[16px] @tablet:top-[40px] right-[16px] @tablet:right-[40px]"
            onClick={() => {
              console.log("Close button clicked, going to StepA4");
              onIncludeLater();
            }}
          >
            <Icon name="IconClose" />
          </button>
          <div className="w-full h-max flex flex-col gap-[32px]">
            <h2 className="w-[257px] @tablet:w-[297px] TypographyPlato20">
              Cuide da saúde bucal de quem você ama, aproveite e inclua os
              dependentes agora.
            </h2>
            <div className="flex justify-between">
              <div className="w-[150px] text-start">
                <p className="TypographyPinter14w500g95">Período</p>
                <h2 className="TypographyPlato24 pt-[4px] pb-[8px]">
                  12 meses
                </h2>
                <p className="TypographyPinter16w400">
                  A partir da inscrição dos beneficiários
                </p>
              </div>
              <div className="w-[150px] text-start">
                <p className="TypographyPinter14w500g95">Imediato</p>
                <h2 className="TypographyPlato24 pt-[4px] pb-[8px]">
                  12 meses
                </h2>
                <p className="TypographyPinter16w400">
                  Ao ser desligado da empresa
                </p>
              </div>
            </div>
            <p className="max-w-[280px] TypographyPinter16g950">
              Garanta agora os benefícios Dental Uni aos seus entes queridos!
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <Button
              variant="btnPrimary"
              className="w-full"
              onClick={onIncludeNow}
            >
              Incluir dependentes agora
            </Button>
            <Button
              variant="btnLink"
              className="w-full"
              onClick={onIncludeLater}
            >
              Incluir dependentes depois
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepB0IncludeDependent;

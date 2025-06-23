//src/components/PageContratarPlano/StepB-Dependentes/StepB0-IncludeDependent.tsx

"use client";
import React from "react";
import { Button } from "@/components/ui/Button";

export function StepB0IncludeDependent({
  onIncludeNow,
  onIncludeLater,
  onBack,
}: {
  onIncludeNow: () => void;
  onIncludeLater: () => void;
  onBack: () => void;
}) {
  const mainContent = (
    <>
      <div className="w-screen h-screen absolute inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
        <div className="w-[1062px] h-[662px] flex  items-start justify-center gap-[32px] z-50  rounded-2xl p-[24px] bg-BGStepB0 bg-cover">
          <div className="w-[50%]">
            <h2 className="TypographyPlato20">
              Pode sorrir. <br /> A gente garante.
            </h2>
          </div>
          <div className="w-[50%] h-full bg-BGCardStepB0 bg-cover px-[48px] py-[40px] flex flex-col justify-between ">
            <div className="w-full h-max flex flex-col gap-[32px] ">
              <h2 className="max-w-[297px] TypographyPlato20 ">
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
    </>
  );

  const sideContent = <div>Conteúdo lateral placeholder</div>;
  return mainContent;
}

export default StepB0IncludeDependent;

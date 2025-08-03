//src/components/PageContratarPlano/StepB-Dependentes/StepB0-IncludeDependent.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import { useFormContext } from "@/context/FormContext";

export function StepB0IncludeDependent() {
  const { handleIncludeNow, handleIncludeLater } = useFormContext();

  return (
    <div className="w-[40%] h-max mx-auto bg-white rounded-[16px] flex flex-col justify-between">
      <div className="w-full flex items-center justify-between border-b">
        <div className="w-full py-[16px] px-[32px] flex items-center justify-between">
          <h2 className="TypographyPlato20"> Incluir dependentes </h2>
        </div>
      </div>
      <div className="w-full h-full flex flex-col py-[16px] px-[32px] items-center gap-[24px]">
        <div className="w-full">
          <div className="flex flex-col gap-[8px]">
            <h2 className="TypographyPlato20">Deseja incluir dependentes?</h2>
            <p className="TypographyPinter14w400">
              Você pode adicionar dependentes agora ou depois.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-[16px] px-[32px] flex items-center justify-between border-t">
        <Button variant="btnPrimary" onClick={handleIncludeNow}>
          Incluir agora
        </Button>
        <Button variant="btnLink" onClick={handleIncludeLater}>
          Incluir depois
        </Button>
      </div>
    </div>
  );
}

export default StepB0IncludeDependent;

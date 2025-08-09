"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import ContractPlansLayoutSucessfully from "@/app/page/(contractPlans)/contractPlans/layoutSucessfully";

export function StepA5Sucessfully() {
  return (
    <ContractPlansLayoutSucessfully>
      <div className="flex flex-col items-center justify-center gap-6 max-w-lg text-center">
        <h2 className="TypographyPlato24">🎉 Sucesso!</h2>
        <p className="TypographyPinter16w400">
          Sua contratação foi concluída com sucesso!
        </p>
        <div className="w-full flex flex-col gap-4">
          <Button variant="btnPrimary" className="w-full">
            Acessar portal beneficiário
          </Button>
          <Button variant="btnLink">Ir para a página inicial</Button>
        </div>
      </div>
    </ContractPlansLayoutSucessfully>
  );
}

export default StepA5Sucessfully;

// src/components/PageContratarPlano/StepB-Dependentes/StepB1-AddDependent.tsx

"use client";
import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";

export function StepB1AddDependent({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const mainContent = (
    <div className="w-screen flex items-start ">
      <h2>Pagina teste Incluir dependentes </h2>
      <p>
        Esta é uma seção generica para testar a inclusao de dependentes antes do
        usuario aceitar os termos e finalizar a contratacao do plano.
      </p>
      <Button variant="btnLink" className="w-full" onClick={onNext}>
        + Adicionar dependente
      </Button>
      <Button variant="btnPrimary" className="w-full" onClick={onBack}>
        Avançar
      </Button>
    </div>
  );
  return mainContent;
}

export default StepB1AddDependent;

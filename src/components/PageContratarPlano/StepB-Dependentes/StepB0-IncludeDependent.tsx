//src/components/PageContratarPlano/StepB-Dependentes/StepB0-IncludeDependent.tsx

"use client";
import React from "react";
import { Icon } from "@/scripts/Icon";
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
    <div className="w-full flex flex-col items-start justify-center gap-[32px] z-9999 bg-red200  ">
      <h2>Pagina teste Incluir dependentes </h2>
      <p>
        Esta é uma seção generica para testar a inclusao de dependentes antes do
        usuario aceitar os termos e finalizar a contratacao do plano.
      </p>
      <Button variant="btnPrimary" className="w-full" onClick={onIncludeNow}>
        Incluir dependentes agora
      </Button>
      <Button variant="btnLink" className="w-full" onClick={onIncludeLater}>
        Incluir dependetes depois
      </Button>
      <Button variant="btnLink" className="w-full" onClick={onBack}>
        Voltar
      </Button>
    </div>
  );
  return mainContent;
}

export default StepB0IncludeDependent;

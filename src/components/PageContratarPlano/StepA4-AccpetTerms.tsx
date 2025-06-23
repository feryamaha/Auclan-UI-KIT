//src/components/PageContratarPlano/StepA4-AccpetTerms.tsx

"use client";

// Importações de dependências e componentes
import React from "react";
import ContractPlansLayout from "@/app/page/contractPlans/layout";
import { Button } from "@/components/ui/Button";

export function StepA4AcceptTerms({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const mainContent = (
    <div className="w-full flex flex-col items-start gap-[12px] mb-[24px]">
      <h2>Aceite e Conclusão - Placeholder</h2>
      <p>Esta é uma seção temporária para aceitação dos termos.</p>
      <Button variant="btnPrimary" onClick={onNext}>
        Avançar
      </Button>
      <Button variant="btnLink" onClick={onBack}>
        Voltar
      </Button>
    </div>
  );

  const sideContent = <div>Conteúdo lateral placeholder</div>;

  return (
    <ContractPlansLayout children={mainContent} sideContent={sideContent} />
  );
}

export default StepA4AcceptTerms;

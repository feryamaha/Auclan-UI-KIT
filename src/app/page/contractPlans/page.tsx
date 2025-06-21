//src/page/contractPlans/page.tsx
"use client";

// Importação do componente principal
import React, { useState } from "react";
import StepA0Welcome from "@/components/PageContratarPlano/StepA0-Welcome";
import StepA1HolderData from "@/components/PageContratarPlano/StepA1-HolderData";

export default function PagecontractPlans() {
  const [step, setStep] = useState(0); // 0 para StepA0, 1 para StepA1

  // Função para avançar o passo (pode ser passada como prop para StepA0)
  const handleNextStep = (matricula: string) => {
    if (matricula) {
      localStorage.setItem("matricula", matricula);
      const matriculaValida =
        require("@/data/mockContracPlans/matriculas.json").matriculas.find(
          (m: { numero: string }) => m.numero === matricula
        );
      if (matriculaValida) {
        localStorage.setItem("nome", matriculaValida.nome);
        setStep(1); // Avança para StepA1
      }
    }
  };

  // Renderiza o componente principal dentro do layout com main como container
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      {step === 0 && <StepA0Welcome onIniciar={handleNextStep} />}
      {step === 1 && <StepA1HolderData />}
    </main>
  );
}

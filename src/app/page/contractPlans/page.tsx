"use client";

import React, { useState } from "react";
import StepA0Welcome from "@/components/PageContratarPlano/StepA0-Welcome";
import { StepA1HolderData } from "@/components/PageContratarPlano/StepA1-HolderData";
import StepA2ContactData from "@/components/PageContratarPlano/StepA2-ContactData";
import StepA3LocationData from "@/components/PageContratarPlano/StepA3-LocationData";
import StepA4AcceptTerms from "@/components/PageContratarPlano/StepA4-AccpetTerms";
import StepA5Sucessfully from "@/components/PageContratarPlano/StepA5-Successfully";
import MenuSidebar from "@/components/ui/MenuSidebar";

export default function PagecontractPlans() {
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNextStep = (matricula: string) => {
    if (matricula) {
      localStorage.setItem("matricula", matricula);
      const matriculaValida =
        require("@/data/mockContracPlans/matriculas.json").matriculas.find(
          (m: { numero: string }) => m.numero === matricula
        );
      if (matriculaValida) {
        localStorage.setItem("nome", matriculaValida.nome);
        setCompletedSteps([...completedSteps, step]);
        setStep(1);
      }
    }
  };

  const handleMenuClick = (newStep: number) => {
    if (completedSteps.includes(newStep) || newStep === step) {
      setStep(newStep);
    }
  };

  const handleNext = () => {
    setCompletedSteps([...completedSteps, step]);
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <MenuSidebar
        currentStep={step}
        completedSteps={completedSteps}
        onMenuClick={handleMenuClick}
      />
      {step === 0 && <StepA0Welcome onIniciar={handleNextStep} />}
      {step === 1 && (
        <StepA1HolderData onNext={handleNext} onBack={handleBack} />
      )}
      {step === 2 && (
        <StepA2ContactData onNext={handleNext} onBack={handleBack} />
      )}
      {step === 3 && (
        <StepA3LocationData onNext={handleNext} onBack={handleBack} />
      )}
      {step === 4 && <StepA4AcceptTerms />}
      {step === 5 && <StepA5Sucessfully />}
    </main>
  );
}

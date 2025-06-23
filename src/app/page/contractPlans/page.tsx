"use client";

import React, { useState } from "react";
import StepA0Welcome from "@/components/PageContratarPlano/StepA0-Welcome";
import StepA1HolderData from "@/components/PageContratarPlano/StepA1-HolderData";
import StepA2ContactData from "@/components/PageContratarPlano/StepA2-ContactData";
import StepA3LocationData from "@/components/PageContratarPlano/StepA3-LocationData";
import StepA4AcceptTerms from "@/components/PageContratarPlano/StepA4-AccpetTerms";
import StepA5Sucessfully from "@/components/PageContratarPlano/StepA5-Successfully";
import StepB0IncludeDependent from "@/components/PageContratarPlano/StepB-Dependentes/StepB0-IncludeDependent";
import StepB1AddDependent from "@/components/PageContratarPlano/StepB-Dependentes/StepB1-AddDependent";
import StepB2InitialData from "@/components/PageContratarPlano/StepB-Dependentes/StepB2-AddInitialData";
import StepB3BasicData from "@/components/PageContratarPlano/StepB-Dependentes/StepB3-AddBasicData";
import StepB4AddCompletionData from "@/components/PageContratarPlano/StepB-Dependentes/StepB4-AddCompletionData";
import MenuSidebar from "@/components/ui/MenuSidebar";

export default function ContractPlansPage() {
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());

  const handleNextStep = (matricula: string) => {
    if (matricula) {
      localStorage.setItem("matricula", matricula);
      const matriculaValida =
        require("@/data/mockContracPlans/matriculas.json").matriculas.find(
          (m: { numero: string }) => m.numero === matricula
        );
      if (matriculaValida) {
        localStorage.setItem("nome", matriculaValida.nome);
        setCompletedSteps((prev) => new Set(prev).add(step));
        setStep(1);
      }
    }
  };

  const handleNext = () => {
    setCompletedSteps((prev) => new Set(prev).add(step));
    if (step === 3) {
      setStep(30); // Vai para StepB0IncludeDependent como modal
    } else if (step >= 30 && step < 34) {
      setStep(step + 1); // Avança nas seções de dependentes
    } else if (step === 34) {
      setStep(4); // Vai para StepA4AcceptTerms após concluir dependentes
    } else {
      setStep(step + 1); // Avança nos outros steps
    }
  };

  const handleBack = () => {
    if (step === 4 && completedSteps.has(34)) {
      setStep(34); // Volta para StepB4 se veio de lá
    } else if (step > 30 && step <= 34) {
      setStep(step - 1); // Volta nas seções de dependentes
    } else if (step === 30) {
      setStep(3); // Volta para StepA3LocationData
    } else if (step > 0) {
      setStep(step - 1); // Volta nos outros steps
    }
  };

  const handleIncludeDependentsNow = () => {
    setStep(31); // Vai para StepB1AddDependent
    setCompletedSteps((prev) => new Set(prev).add(30));
  };

  const handleIncludeDependentsLater = () => {
    setStep(4); // Vai diretamente para StepA4AcceptTerms
    setCompletedSteps((prev) => new Set(prev).add(30));
  };

  const handleMenuClick = (newStep: number) => {
    if (completedSteps.has(newStep) || newStep === step) {
      setStep(newStep);
    }
  };

  // Renderiza o MenuSidebar apenas para steps principais (1 a 5)
  const shouldShowSidebar = step >= 1 && step <= 5;

  return (
    <main className="w-full h-full flex flex-col items-center justify-center relative">
      {shouldShowSidebar && (
        <MenuSidebar
          currentStep={step}
          completedSteps={Array.from(completedSteps)}
          onMenuClick={handleMenuClick}
        />
      )}
      {step === 0 && <StepA0Welcome onIniciar={handleNextStep} />}
      {step === 1 && (
        <StepA1HolderData onNext={handleNext} onBack={handleBack} />
      )}
      {step === 2 && (
        <StepA2ContactData onNext={handleNext} onBack={handleBack} />
      )}
      {(step === 3 || step === 30) && (
        <>
          <StepA3LocationData onNext={handleNext} onBack={handleBack} />
          {step === 30 && (
            <div className="fixed inset-0 bg-gray950 bg-opacity-70 flex items-center justify-center z-50">
              <StepB0IncludeDependent
                onIncludeNow={handleIncludeDependentsNow}
                onIncludeLater={handleIncludeDependentsLater}
                onBack={handleBack}
              />
            </div>
          )}
        </>
      )}
      {step === 31 && (
        <StepB1AddDependent onNext={handleNext} onBack={handleBack} />
      )}
      {step === 32 && (
        <StepB2InitialData onNext={handleNext} onBack={handleBack} />
      )}
      {step === 33 && (
        <StepB3BasicData onNext={handleNext} onBack={handleBack} />
      )}
      {step === 34 && (
        <StepB4AddCompletionData onNext={handleNext} onBack={handleBack} />
      )}
      {step === 4 && (
        <StepA4AcceptTerms onNext={handleNext} onBack={handleBack} />
      )}
      {step === 5 && <StepA5Sucessfully onBack={handleBack} />}
    </main>
  );
}

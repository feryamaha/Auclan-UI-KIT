"use client";

import React, { useState } from "react";
import { FormContext, FormContextType } from "@/context/FormContext";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "@/lib/formSchema";

// Componentes
import StepA0Welcome from "@/components/PageContratarPlano/StepA0-Welcome";
import StepA1HolderData from "@/components/PageContratarPlano/StepA1-HolderData";
import StepA2ContactData from "@/components/PageContratarPlano/StepA2-ContactData";
import StepA3LocationData from "@/components/PageContratarPlano/StepA3-LocationData";
import StepB0IncludeDependent from "@/components/PageContratarPlano/StepB-Dependentes/StepB0-IncludeDependent";
import StepB1AddDependent from "@/components/PageContratarPlano/StepB-Dependentes/StepB1-AddDependent";
import StepB2InitialData from "@/components/PageContratarPlano/StepB-Dependentes/StepB2-AddInitialData";
import StepB3BasicData from "@/components/PageContratarPlano/StepB-Dependentes/StepB3-AddBasicData";
import StepB4AddCompletionData from "@/components/PageContratarPlano/StepB-Dependentes/StepB4-AddCompletionData";
import StepA4AcceptTerms from "@/components/PageContratarPlano/StepA4-AccpetTerms";
import StepA5Sucessfully from "@/components/PageContratarPlano/StepA5-Successfully";

export default function ContractPlansPage() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [steps, setSteps] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleNext = () => {
    console.log("handleNext called, currentStep:", currentStep);
    if (currentStep === 0) {
      setCompletedSteps((prev) => new Set([...prev, 0]));
      setCurrentStep(1);
    } else if (currentStep === 1) {
      setCompletedSteps((prev) => new Set([...prev, 1]));
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCompletedSteps((prev) => new Set([...prev, 2]));
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCompletedSteps((prev) => new Set([...prev, 3]));
      setCurrentStep(4);
    } else if (currentStep === 5) {
      setCompletedSteps((prev) => new Set([...prev, 5]));
      setCurrentStep(6);
    } else if (currentStep === 6) {
      setCompletedSteps((prev) => new Set([...prev, 6]));
      setCurrentStep(7);
    } else if (currentStep === 7) {
      setCompletedSteps((prev) => new Set([...prev, 7]));
      setCurrentStep(8);
    } else if (currentStep === 8) {
      setCompletedSteps((prev) => new Set([...prev, 8]));
      setCurrentStep(9);
    } else if (currentStep === 9) {
      setCompletedSteps((prev) => new Set([...prev, 9]));
      setCurrentStep(10); // Avança para o StepA5
    } else if (currentStep === 10) {
      setCompletedSteps((prev) => new Set([...prev, 10]));
      // Aqui pode ser conclusão final (ex: redirect, confirmação)
    }
  };

  const handleBack = () => {
    console.log("handleBack called, currentStep:", currentStep);
    if (currentStep === 1) {
      setCurrentStep(0);
    } else if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    } else if (currentStep === 4) {
      setCurrentStep(3);
    } else if (currentStep === 5) {
      setCurrentStep(4);
    } else if (currentStep === 6) {
      setCurrentStep(5);
    } else if (currentStep === 7) {
      setCurrentStep(6);
    } else if (currentStep === 8) {
      setCurrentStep(7);
    } else if (currentStep === 9) {
      setCurrentStep(8);
    }
  };

  const onMenuClick = (step: number) => {
    if (completedSteps.has(step) || step === 0) {
      setCurrentStep(step);
    }
  };

  const handleNextStep = (matricula: string) => {
    console.log("Matrícula recebida:", matricula);
    handleNext();
  };

  const handleIncludeNow = () => {
    console.log("handleIncludeNow called, going to StepB1");
    setCompletedSteps((prev) => new Set([...prev, 4]));
    setCurrentStep(5); // Direciona para StepB1
  };

  const handleIncludeLater = () => {
    console.log("handleIncludeLater called, going to StepA4");
    setCompletedSteps((prev) => new Set([...prev, 4]));
    setCurrentStep(9); // Direciona para StepA4
  };

  const handleSubmit = () => {
    console.log("Formulário submetido");
  };

  const handleAddDependent = () => {
    console.log("handleAddDependent called, going to StepB2");
    setCurrentStep(6); // StepB2
  };

  const form = undefined as unknown as UseFormReturn<FormData>;

  const formContextValue: FormContextType = {
    form,
    currentStep,
    completedSteps,
    onMenuClick,
    handleNext,
    handleBack,
    handleNextStep,
    handleIncludeNow,
    handleIncludeLater,
    handleSubmit,
    setStep: setCurrentStep,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      <div className={currentStep === 4 ? "relative blur-sm" : ""}>
        {currentStep === 0 && <StepA0Welcome onNext={handleNext} />}
        {currentStep === 1 && (
          <StepA1HolderData onNext={handleNext} onBack={handleBack} />
        )}
        {currentStep === 2 && (
          <StepA2ContactData onNext={handleNext} onBack={handleBack} />
        )}
        {currentStep === 3 && (
          <StepA3LocationData onNext={handleNext} onBack={handleBack} />
        )}
        {currentStep === 5 && (
          <StepB1AddDependent onNext={handleNext} onBack={handleBack} />
        )}
        {currentStep === 6 && (
          <StepB2InitialData onNext={handleNext} onBack={handleBack} />
        )}
        {currentStep === 7 && (
          <StepB3BasicData onNext={handleNext} onBack={handleBack} />
        )}
        {currentStep === 8 && (
          <StepB4AddCompletionData
            onNext={handleNext}
            onBack={handleBack}
            onAddDependent={handleAddDependent}
          />
        )}
        {currentStep === 9 && (
          <StepA4AcceptTerms onNext={handleNext} onBack={handleBack} />
        )}
        {currentStep === 10 && <StepA5Sucessfully />}
      </div>
      {currentStep === 4 && (
        <StepB0IncludeDependent
          onIncludeNow={handleIncludeNow}
          onIncludeLater={handleIncludeLater}
        />
      )}
    </FormContext.Provider>
  );
}

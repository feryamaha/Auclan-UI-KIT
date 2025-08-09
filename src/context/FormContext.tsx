//src/context/FormContext.tsx
"use client";

import { createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "../lib/formSchema"; // Assuma que isso existe

// Exportada para ser importável em outros arquivos
export interface FormContextType {
  form?: UseFormReturn<FormData>;
  handleNext: () => void;
  handleBack: () => void;
  handleIncludeNow: () => void;
  handleIncludeLater: () => void;
  handleSubmit: () => void;
  handleNextStep: (matricula: string) => void; // Mantido com parâmetro matricula
  currentStep: number;
  completedSteps: Set<number>;
  setStep: (step: number) => void;
  onMenuClick?: (step: number) => void; // Adicionado para suportar sidebar
}

export const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within a FormProvider");
  return context;
};

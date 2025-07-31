"use client";

import { createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "../lib/formSchema";

interface FormContextType {
  form: UseFormReturn<FormData>;
  handleNext: () => Promise<void>;
  handleBack: () => void;
  handleIncludeNow: () => void;
  handleIncludeLater: () => void;
  currentStep: number;
  completedSteps: Set<number>;
  setStep: (step: number) => void;
}

export const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within a FormProvider");
  return context;
};


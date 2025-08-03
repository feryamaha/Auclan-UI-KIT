"use client";
export const dynamic = "force-dynamic";
import React, { useState, useEffect, Suspense } from "react";
import { FormProvider, useForm, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "@/lib/formSchema";
import { FormContext } from "@/context/FormContext";
import { useSearchParams } from "next/navigation";

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
import matriculasData from "@/data/mockContracPlans/matriculas.json";
import { UseFormReturn } from "react-hook-form";

// Componente separado para usar useSearchParams
function ContractPlansContent() {
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const [isProcessing, setIsProcessing] = useState(false);
  const searchParams = useSearchParams();

  const form: UseFormReturn<FormData> = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      matricula: "",
      holder: {
        cpf: "",
        beneficiaryName: "",
        motherName: "",
        sex: "",
        civilStatus: "",
      },
      contact: { email: "", confirmEmail: "", celular: "", telefone: "" },
      address: {
        cep: "",
        address: "",
        number: "",
        complement: "",
        state: "",
        city: "",
      },
      dependents: [],
      terms: false,
    },
  });

  // Recupera step da URL e localStorage
  useEffect(() => {
    const stepParam = searchParams.get("step");
    if (!stepParam) return;

    const newStep = parseInt(stepParam, 10);
    const matricula = localStorage.getItem("matricula") || "";
    form.setValue("matricula", matricula);

    if (newStep >= 2) {
      try {
        const holderData = JSON.parse(
          localStorage.getItem("holderData") || "{}"
        );
        if (holderData.cpf) {
          form.setValue("holder.cpf", holderData.cpf);
          form.setValue("holder.beneficiaryName", holderData.beneficiaryName);
          form.setValue("holder.motherName", holderData.motherName);
          form.setValue("holder.sex", holderData.sex);
          form.setValue("holder.civilStatus", holderData.civilStatus);
        }
      } catch (e) {
        console.error("Erro ao carregar dados do titular:", e);
      }
    }

    if (newStep >= 3) {
      try {
        const contactData = JSON.parse(
          localStorage.getItem("contactData") || "{}"
        );
        if (contactData.email) {
          form.setValue("contact.email", contactData.email);
          form.setValue("contact.confirmEmail", contactData.confirmEmail);
          form.setValue("contact.celular", contactData.celular);
          form.setValue("contact.telefone", contactData.telefone);
        }
      } catch (e) {
        console.error("Erro ao carregar dados de contato:", e);
      }
    }

    setStep(newStep);
    const prev = new Set<number>();
    for (let i = 0; i < newStep; i++) prev.add(i);
    setCompletedSteps(prev);

    window.history.replaceState({}, document.title, window.location.pathname);
  }, [searchParams, form]);

  // Próximo passo
  const handleNext = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    let fieldsToValidate: Path<FormData>[] = [];

    switch (step) {
      case 0:
        setCompletedSteps((prev) => new Set(prev).add(step));
        setStep(1);
        setIsProcessing(false);
        return;
      case 1:
        fieldsToValidate = [
          "holder.cpf",
          "holder.beneficiaryName",
          "holder.motherName",
          "holder.sex",
          "holder.civilStatus",
        ];
        break;
      case 2:
        fieldsToValidate = [
          "contact.email",
          "contact.confirmEmail",
          "contact.celular",
          "contact.telefone",
        ];
        break;
      case 3:
        fieldsToValidate = [
          "address.cep",
          "address.address",
          "address.number",
          "address.complement",
          "address.state",
          "address.city",
        ];
        break;
      case 32:
      case 33:
        const deps = form.getValues("dependents") || [];
        const idx = deps.length - 1;
        fieldsToValidate =
          step === 32
            ? ([
                `dependents.${idx}.cpf`,
                `dependents.${idx}.fullName`,
                `dependents.${idx}.birthDate`,
              ] as Path<FormData>[])
            : ([
                `dependents.${idx}.motherName`,
                `dependents.${idx}.sex`,
                `dependents.${idx}.parentesco`,
                `dependents.${idx}.rg`,
                `dependents.${idx}.orgaoEmissor`,
                `dependents.${idx}.cns`,
              ] as Path<FormData>[]);
        break;
      case 4:
        fieldsToValidate = ["terms"];
        break;
    }

    let isValid = true;
    let errorCount = 0;

    for (const field of fieldsToValidate) {
      const value = form.getValues(field);
      try {
        let schema: any = (formSchema as any).shape;
        for (const part of field.split(".")) {
          if (schema && schema[part]) schema = schema[part];
        }
        if (schema) {
          const result = schema.safeParse(value);
          if (!result.success) {
            form.setError(field, { message: result.error.errors[0].message });
            isValid = false;
            if (++errorCount > 10) break;
          }
        }
      } catch (e) {
        console.error(`Erro ao validar ${field}:`, e);
        isValid = false;
      }
    }

    if (isValid) {
      setCompletedSteps((prev) => new Set(prev).add(step));
      if (step === 3) setStep(30);
      else if (step >= 30 && step < 34) setStep(step + 1);
      else if (step === 34) setStep(4);
      else setStep(step + 1);
    }

    setIsProcessing(false);
  };

  // Voltar passo
  const handleBack = () => {
    if (step === 4 && completedSteps.has(34)) setStep(34);
    else if (step > 30 && step <= 34) setStep(step - 1);
    else if (step === 30) setStep(3);
    else if (step > 0) setStep(step - 1);
  };

  // Adicionar dependente agora
  const handleIncludeNow = () => {
    setStep(31);
    setCompletedSteps((prev) => new Set(prev).add(30));
  };

  // Adicionar dependente depois
  const handleIncludeLater = () => {
    setStep(4);
    setCompletedSteps((prev) => new Set(prev).add(30));
  };

  // Clique no menu lateral
  const handleMenuClick = (newStep: number) => {
    if (completedSteps.has(newStep) || newStep === step) {
      setStep(newStep);
    }
  };

  // Enviar formulário final
  const handleSubmit = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    try {
      const data = form.getValues();
      const res = await fetch("/api/contract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro na API");
      setStep(5);
    } catch (e) {
      console.error("Erro ao enviar:", e);
      form.setError("root", {
        message: "Erro ao enviar os dados. Tente novamente.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const shouldShowSidebar = step >= 1 && step <= 5;

  return (
    <FormProvider {...form}>
      <FormContext.Provider
        value={{
          form,
          handleNext,
          handleBack,
          handleIncludeNow,
          handleIncludeLater,
          handleSubmit,
          currentStep: step,
          completedSteps,
          setStep,
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          {shouldShowSidebar && (
            <MenuSidebar
              currentStep={step}
              completedSteps={Array.from(completedSteps)}
              onMenuClick={handleMenuClick}
            />
          )}

          {step === 0 && <StepA0Welcome />}
          {step === 1 && <StepA1HolderData />}
          {step === 2 && <StepA2ContactData />}

          {(step === 3 || step === 30) && (
            <>
              <StepA3LocationData />
              {step === 30 && (
                <div className="fixed inset-0 bg-gray950 bg-opacity-70 flex items-center justify-center z-50">
                  <StepB0IncludeDependent />
                </div>
              )}
            </>
          )}

          {(step === 31 || step === 32 || step === 33) && (
            <>
              <StepB1AddDependent />
              {step === 32 && (
                <div className="fixed inset-0 bg-gray950 bg-opacity-70 flex items-center justify-center z-50">
                  <StepB2InitialData />
                </div>
              )}
              {step === 33 && (
                <div className="fixed inset-0 bg-gray950 bg-opacity-70 flex items-center justify-center z-50">
                  <StepB3BasicData />
                </div>
              )}
            </>
          )}

          {step === 34 && <StepB4AddCompletionData />}
          {step === 4 && <StepA4AcceptTerms />}
          {step === 5 && <StepA5Sucessfully />}
        </div>
      </FormContext.Provider>
    </FormProvider>
  );
}

// Componente principal que envolve o conteúdo com Suspense
export default function ContractPlansPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ContractPlansContent />
    </Suspense>
  );
}

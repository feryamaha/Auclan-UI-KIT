"use client";

import React, { useState, useEffect } from "react";
import { FormProvider, useForm, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "@/lib/formSchema";
import { FormContext } from "@/context/FormContext";
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

export default function ContractPlansPage() {
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  // Adicionar estado para evitar cliques múltiplos
  const [isProcessing, setIsProcessing] = useState(false);

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

  // Verificar parâmetros de URL e recuperar dados do localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Verificar parâmetro de step na URL
      const params = new URLSearchParams(window.location.search);
      const stepParam = params.get("step");

      if (stepParam) {
        const newStep = parseInt(stepParam);

        // Recuperar todos os dados salvos no localStorage
        const matricula = localStorage.getItem("matricula") || "";
        form.setValue("matricula", matricula);

        // Recuperar dados do titular se estivermos no step 2 ou posterior
        if (newStep >= 2) {
          try {
            const holderData = JSON.parse(
              localStorage.getItem("holderData") || "{}"
            );
            if (holderData.cpf) {
              form.setValue("holder.cpf", holderData.cpf);
              form.setValue(
                "holder.beneficiaryName",
                holderData.beneficiaryName
              );
              form.setValue("holder.motherName", holderData.motherName);
              form.setValue("holder.sex", holderData.sex);
              form.setValue("holder.civilStatus", holderData.civilStatus);
            }
          } catch (e) {
            console.error("Erro ao carregar dados do titular:", e);
          }
        }

        // Recuperar dados de contato se estivermos no step 3 ou posterior
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

        // Configurar o estado do componente
        setStep(newStep);

        // Marcar passos anteriores como concluídos
        const newCompletedSteps = new Set<number>();
        for (let i = 0; i < newStep; i++) {
          newCompletedSteps.add(i);
        }
        setCompletedSteps(newCompletedSteps);

        // Limpar o parâmetro da URL para não repetir esta lógica em recarregamentos
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    }
  }, [form]);

  // handleNext modificado para evitar loops e problemas de validação
  const handleNext = async () => {
    // Prevenir cliques múltiplos
    if (isProcessing) return;

    try {
      setIsProcessing(true);

      let fieldsToValidate: Path<FormData>[] = [];
      switch (step) {
        case 0:
          // Pular validação para step 0 - matrícula já foi validada no StepA0Welcome
          // Avançamos diretamente
          setCompletedSteps((prev) => new Set(prev).add(step));
          setStep(step + 1);
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
          const dependents = form.getValues("dependents") || [];
          const currentIndex = dependents.length - 1;
          fieldsToValidate =
            step === 32
              ? [
                  `dependents.${currentIndex}.cpf` as Path<FormData>,
                  `dependents.${currentIndex}.fullName` as Path<FormData>,
                  `dependents.${currentIndex}.birthDate` as Path<FormData>,
                ]
              : [
                  `dependents.${currentIndex}.motherName` as Path<FormData>,
                  `dependents.${currentIndex}.sex` as Path<FormData>,
                  `dependents.${currentIndex}.parentesco` as Path<FormData>,
                  `dependents.${currentIndex}.rg` as Path<FormData>,
                  `dependents.${currentIndex}.orgaoEmissor` as Path<FormData>,
                  `dependents.${currentIndex}.cns` as Path<FormData>,
                ];
          break;
        case 4:
          fieldsToValidate = ["terms"];
          break;
      }

      // Validação síncrona com safeParse
      let isValid = true;
      // Limitar número de erros para evitar loop
      let errorCount = 0;

      for (const field of fieldsToValidate) {
        const value = form.getValues(field);

        try {
          // Helper para schemas aninhados
          const fieldParts = field.split(".");
          let currentSchema = formSchema.shape as any;

          fieldParts.forEach((part) => {
            if (currentSchema && currentSchema[part]) {
              currentSchema = currentSchema[part];
            }
          });

          if (currentSchema) {
            const result = currentSchema.safeParse(value);
            if (!result.success) {
              form.setError(field, { message: result.error.errors[0].message });
              isValid = false;
              errorCount++;

              // Limitar o número de erros processados para evitar loops
              if (errorCount > 10) break;
            }
          }
        } catch (error) {
          console.error(`Erro ao validar campo ${field}:`, error);
          isValid = false;
        }
      }

      if (isValid) {
        setCompletedSteps((prev) => new Set(prev).add(step));
        if (step === 3) {
          setStep(30);
        } else if (step >= 30 && step < 34) {
          setStep(step + 1);
        } else if (step === 34) {
          setStep(4);
        } else {
          setStep(step + 1);
        }
      }
    } catch (error) {
      console.error("Erro ao processar próximo passo:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBack = () => {
    if (step === 4 && completedSteps.has(34)) {
      setStep(34);
    } else if (step > 30 && step <= 34) {
      setStep(step - 1);
    } else if (step === 30) {
      setStep(3);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleIncludeNow = () => {
    setStep(31);
    setCompletedSteps((prev) => new Set(prev).add(30));
  };

  const handleIncludeLater = () => {
    setStep(4);
    setCompletedSteps((prev) => new Set(prev).add(30));
  };

  const handleMenuClick = (newStep: number) => {
    if (completedSteps.has(newStep) || newStep === step) {
      setStep(newStep);
    }
  };

  const handleSubmit = async () => {
    if (isProcessing) return;

    try {
      setIsProcessing(true);
      const data = form.getValues();

      const response = await fetch("/api/contract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erro na API");

      console.log("Sucesso:", await response.json());
      setStep(5);
    } catch (error) {
      console.error("Erro ao enviar:", error);
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
          currentStep: step,
          completedSteps,
          setStep,
        }}
      >
        <main className="w-full h-full flex flex-col items-center justify-center relative">
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
                <div className="fixed inset-0 Angstroms bg-opacity-70 flex items-center justify-center z-50">
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
        </main>
      </FormContext.Provider>
    </FormProvider>
  );
}

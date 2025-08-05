"use client";

import React, { useEffect, useState } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "@/lib/formSchema"; // Assuma que isso existe
import { FormContext, useFormContext } from "@/context/FormContext"; // Seu FormContext
import matriculasData from "@/data/mockContracPlans/matriculas.json";
import { useSearchParams } from "next/navigation"; // Para ler params iniciais opcionalmente

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

export default function ContractPlansPage() {
  const searchParams = useSearchParams();
  const initialStep = Number(searchParams.get("step")) || 0; // Lê param opcional para step inicial

  const [step, setStep] = useState(initialStep);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
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

  // Carrega dados do localStorage uma vez no mount e atualiza form
  useEffect(() => {
    // Carrega de "mockDataStorage" para consistência com StepA0
    const storedData = localStorage.getItem("mockDataStorage");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const step0Data =
        parsedData.find((item: any) => item.step === 0)?.data || {};
      if (step0Data.matricula) {
        form.setValue("matricula", step0Data.matricula);
      }
    }

    // Carrega chaves separadas (para compatibilidade)
    const matricula = localStorage.getItem("matricula") || "";
    if (matricula) {
      form.setValue("matricula", matricula);
    }

    try {
      const holderData = JSON.parse(localStorage.getItem("holderData") || "{}");
      if (holderData.cpf) {
        form.setValue("holder", holderData);
      }
    } catch (e) {
      console.error("Erro ao carregar dados do titular:", e);
    }

    try {
      const contactData = JSON.parse(
        localStorage.getItem("contactData") || "{}"
      );
      if (contactData.email) {
        form.setValue("contact", contactData);
      }
    } catch (e) {
      console.error("Erro ao carregar dados de contato:", e);
    }

    try {
      const addressData = JSON.parse(
        localStorage.getItem("addressData") || "{}"
      );
      if (addressData.cep) {
        form.setValue("address", addressData);
      }
    } catch (e) {
      console.error("Erro ao carregar dados de endereço:", e);
    }

    // Carregue outros campos se necessário (ex.: dependents)
  }, [form]);

  // Função de validação por step
  const validateStep = async (currentStep: number): Promise<boolean> => {
    switch (currentStep) {
      case 0:
        await form.trigger("matricula");
        return form.formState.isValid && !!form.getValues("matricula");
      case 1:
        await form.trigger("holder");
        return form.formState.isValid;
      case 2:
        await form.trigger("contact");
        return form.formState.isValid;
      case 3:
        await form.trigger("address");
        return form.formState.isValid;
      case 4:
        await form.trigger("terms");
        return form.formState.isValid;
      default:
        return true;
    }
  };

  // Função para validar matrícula e avançar do StepA0
  const handleNextStep = (matricula: string) => {
    if (isProcessing) return;
    setIsProcessing(true);

    console.log("handleNextStep chamado com matrícula:", matricula);

    const matriculaValida = matriculasData.matriculas.find(
      (m) => m.numero === matricula
    );

    if (matriculaValida) {
      form.setValue("matricula", matricula);
      localStorage.setItem("matricula", matricula);
      localStorage.setItem("nome", matriculaValida.nome);
      setCompletedSteps((prev) => new Set([...prev, 0]));
      setStep(1);
      console.log("Matrícula válida! Avançando para Step 1.");
    } else {
      form.setError("matricula", {
        message: "Matrícula inválida. Por favor, verifique e tente novamente.",
      });
      console.error("Matrícula inválida no handleNextStep:", matricula);
    }

    setIsProcessing(false);
  };

  // Função para avançar, com depuração reforçada
  const handleNext = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    console.log(
      `handleNext iniciado. Step atual: ${step}, Tipo: ${typeof step}`
    ); // Depuração: Confirma valor e tipo de step

    const isValid = await validateStep(step);
    if (!isValid) {
      console.log(
        `Validação FALHOU no step ${step}. Erros:`,
        form.formState.errors
      ); // Depuração
      setIsProcessing(false);
      return;
    }

    console.log(`Validação PASSOU no step ${step}. Salvando dados.`); // Depuração

    // Persiste dados no localStorage
    if (step === 1) {
      localStorage.setItem(
        "holderData",
        JSON.stringify(form.getValues("holder"))
      );
    } else if (step === 2) {
      localStorage.setItem(
        "contactData",
        JSON.stringify(form.getValues("contact"))
      );
    } else if (step === 3) {
      localStorage.setItem(
        "addressData",
        JSON.stringify(form.getValues("address"))
      );
    }

    // Adiciona step a completedSteps
    setCompletedSteps((prev) => new Set([...prev, step]));

    // Lógica de avanço com depuração
    console.log(`Verificando branches. Step atual após validação: ${step}`); // Depuração
    if (step === 3) {
      console.log(
        "Entrando no branch para step 3: Transição para StepB0 (setStep(30))."
      ); // Depuração
      setStep(30);
    } else if (step >= 30 && step < 34) {
      console.log(
        `Entrando no branch para dependentes: Avançando de ${step} para ${
          step + 1
        }.`
      ); // Depuração
      setStep(step + 1);
    } else if (step === 34) {
      console.log(
        "Entrando no branch para step 34: Retornando para StepA4 (setStep(4))."
      ); // Depuração
      setStep(4);
    } else {
      console.log(
        `Entrando no branch default: Avançando de ${step} para ${step + 1}.`
      ); // Depuração: Se cair aqui para step=3, é o problema!
      setStep(step + 1);
    }

    setIsProcessing(false);
  };

  // Função para voltar
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

  // Funções para dependentes
  const handleIncludeNow = () => {
    setStep(31);
    setCompletedSteps((prev) => new Set([...prev, 30]));
  };

  const handleIncludeLater = () => {
    setStep(4);
    setCompletedSteps((prev) => new Set([...prev, 30]));
  };

  // Função para submissão final
  const onFormSubmit = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const isValid = await validateStep(4);
    if (!isValid) {
      setIsProcessing(false);
      return;
    }

    try {
      const data = form.getValues();
      const res = await fetch("/api/contract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erro na API");
      setStep(5);
      setCompletedSteps((prev) => new Set([...prev, 4]));
    } catch (e) {
      console.error("Erro ao enviar:", e);
      form.setError("root", {
        message: "Erro ao enviar os dados. Tente novamente.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Função para cliques no menu/sidebar
  const onMenuClick = (targetStep: number) => {
    if (completedSteps.has(targetStep) || targetStep === step) {
      setStep(targetStep);
    }
  };

  return (
    <FormProvider {...form}>
      <FormContext.Provider
        value={{
          form,
          handleNext,
          handleBack,
          handleIncludeNow,
          handleIncludeLater,
          handleSubmit: onFormSubmit,
          handleNextStep,
          currentStep: step,
          completedSteps,
          setStep,
          onMenuClick, // Para sidebar
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          {step === 0 && <StepA0Welcome onIniciar={handleNextStep} />}
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

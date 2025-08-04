"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal";
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import { useFormContext } from "@/context/FormContext";
import { Path } from "react-hook-form";
import { FormData } from "@/lib/formSchema";

export function StepA2ContactData() {
  const { form, handleNext, handleBack, currentStep, completedSteps } =
    useFormContext();
  const {
    register,
    formState: { errors, dirtyFields },
    trigger,
    watch,
    getValues,
    setValue,
  } = form;

  // Estado para controlar o processamento
  const [isProcessing, setIsProcessing] = useState(false);

  const watchedFields = watch([
    "contact.email",
    "contact.confirmEmail",
    "contact.celular",
    "contact.telefone",
  ]);

  // Versão mais segura da função de efeito
  useEffect(() => {
    // Limitar a frequência de validação para evitar travamentos
    const timer = setTimeout(() => {
      trigger([
        "contact.email",
        "contact.confirmEmail",
        "contact.celular",
        "contact.telefone",
      ]).catch((e) => console.error("Erro ao validar campos:", e));
    }, 200);

    return () => clearTimeout(timer);
  }, [watchedFields, trigger]);

  const isStepValid =
    !errors.contact?.email &&
    !errors.contact?.confirmEmail &&
    !errors.contact?.celular;

  // Função para avançar com segurança contra múltiplos cliques
  const handleAdvanceWithSafety = async () => {
    if (isProcessing || !isStepValid) return;

    try {
      setIsProcessing(true);

      // Salvar dados no localStorage como backup
      const contactData = {
        email: getValues("contact.email"),
        confirmEmail: getValues("contact.confirmEmail"),
        celular: getValues("contact.celular"),
        telefone: getValues("contact.telefone"),
      };
      localStorage.setItem("contactData", JSON.stringify(contactData));

      // Método alternativo de navegação para evitar loops
      window.location.href = "?step=3";
    } catch (error) {
      console.error("Erro ao processar:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Formatação de telefones - CORRIGIDO
  useEffect(() => {
    // Formatação para celular
    const celular = getValues("contact.celular");
    if (celular && typeof celular === "string") {
      const numericValue = celular.replace(/\D/g, "");
      if (numericValue.length <= 11) {
        let formattedPhone = "";

        if (numericValue.length > 0) {
          formattedPhone = "(" + numericValue.substring(0, 2);

          if (numericValue.length > 2) {
            formattedPhone +=
              ") " +
              numericValue.substring(2, numericValue.length <= 10 ? 6 : 7);

            if (numericValue.length > (numericValue.length <= 10 ? 6 : 7)) {
              formattedPhone +=
                "-" + numericValue.substring(numericValue.length <= 10 ? 6 : 7);
            }
          }
        }

        if (formattedPhone !== celular && formattedPhone.length > 0) {
          setValue("contact.celular" as Path<FormData>, formattedPhone);
        }
      }
    }

    // Formatação para telefone
    const telefone = getValues("contact.telefone");
    if (telefone && typeof telefone === "string") {
      const numericValue = telefone.replace(/\D/g, "");
      if (numericValue.length <= 11) {
        let formattedPhone = "";

        if (numericValue.length > 0) {
          formattedPhone = "(" + numericValue.substring(0, 2);

          if (numericValue.length > 2) {
            formattedPhone +=
              ") " +
              numericValue.substring(2, numericValue.length <= 10 ? 6 : 7);

            if (numericValue.length > (numericValue.length <= 10 ? 6 : 7)) {
              formattedPhone +=
                "-" + numericValue.substring(numericValue.length <= 10 ? 6 : 7);
            }
          }
        }

        if (formattedPhone !== telefone && formattedPhone.length > 0) {
          setValue("contact.telefone" as Path<FormData>, formattedPhone);
        }
      }
    }
  }, [watchedFields, getValues, setValue]);

  const mainContent = (
    <div className="w-full h-full flex gap-[24px]">
      <div className="w-max">
        <MenuSidebar
          onMenuClick={() => {}}
          currentStep={currentStep}
          completedSteps={Array.from(completedSteps)}
        />
      </div>
      <div className="w-full flex flex-col gap-[32px]">
        <div className="w-full h-max pb-[32px] border-b flex justify-between">
          <div className="w-max flex flex-col">
            <Button
              variant="btnLink"
              className="textbtnLink w-max"
              onClick={handleBack}
            >
              <Icon name="IconArrowright" className="w-5 h-5 rotate-180" />
              Voltar
            </Button>
            <div className="w-[210px] pt-[8px]">
              <h2 className="TypographyPlato24 pb-[8px]">Contato</h2>
              <p className="TypographyPinter16w400">
                Agora precisamos de alguns dados para contato.
              </p>
            </div>
          </div>
          <div className="w-max flex">
            <DocolMekal />
          </div>
        </div>
        <div className="w-full justify-between flex">
          <p className="TypographyPlato20">Dados contato</p>
          <div className="max-w-[542px]">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                {...register("contact.email")}
                placeholder="Digite o e-mail (ex: exemplo@dominio.com)"
                className={`w-full p-2 border rounded-md ${
                  errors.contact?.email
                    ? "border-red-300"
                    : dirtyFields.contact?.email && !errors.contact?.email
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.contact?.email && (
                <p className="text-red-500">{errors.contact.email.message}</p>
              )}
              <input
                type="email"
                {...register("contact.confirmEmail")}
                placeholder="Confirme o e-mail (ex: exemplo@dominio.com)"
                className={`w-full p-2 border rounded-md ${
                  errors.contact?.confirmEmail
                    ? "border-red-300"
                    : dirtyFields.contact?.confirmEmail &&
                      !errors.contact?.confirmEmail
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.contact?.confirmEmail && (
                <p className="text-red-500">
                  {errors.contact.confirmEmail.message}
                </p>
              )}
              <div className="flex gap-4">
                <input
                  type="text"
                  {...register("contact.celular")}
                  placeholder="Digite o celular (ex: (11) 99999-9999)"
                  className={`w-1/2 p-2 border rounded-md ${
                    errors.contact?.celular
                      ? "border-red-300"
                      : dirtyFields.contact?.celular && !errors.contact?.celular
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.contact?.celular && (
                  <p className="text-red-500">
                    {errors.contact.celular.message}
                  </p>
                )}
                <input
                  type="text"
                  {...register("contact.telefone")}
                  placeholder="Digite o telefone (ex: (11) 99999-9999) - opcional"
                  className={`w-1/2 p-2 border rounded-md ${
                    errors.contact?.telefone
                      ? "border-red-300"
                      : dirtyFields.contact?.telefone &&
                        !errors.contact?.telefone
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.contact?.telefone && (
                  <p className="text-red-500">
                    {errors.contact.telefone.message}
                  </p>
                )}
              </div>
              <Button
                variant="btnFormHover"
                className="w-full"
                type="button"
                onClick={handleAdvanceWithSafety}
                disabled={!isStepValid || isProcessing}
              >
                {isProcessing ? "Processando..." : "Avançar"}
                {!isProcessing && (
                  <Icon name="IconArrowright" className="w-5 h-5" />
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const sideContent = (
    <div className="w-full h-max flex flex-col gap-[8px]">
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        <PlanDetailsCard />
      </div>
      <IncludeBeneficiaryCard />
    </div>
  );

  return (
    <ContractPlansLayout sideContent={sideContent}>
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA2ContactData;

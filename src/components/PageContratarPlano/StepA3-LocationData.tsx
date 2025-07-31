"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/contractPlans/layout";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal";
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import { useFormContext } from "@/context/FormContext";
import { Path } from "react-hook-form";
import { FormData } from "@/lib/formSchema";

export function StepA3LocationData() {
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

  // Estado para prevenir cliques múltiplos
  const [isProcessing, setIsProcessing] = useState(false);

  const watchedFields = watch([
    "address.cep",
    "address.address",
    "address.number",
    "address.complement",
    "address.state",
    "address.city",
  ]);

  // Validação mais segura
  useEffect(() => {
    // Usar timeout para limitar a frequência de validação
    const timer = setTimeout(() => {
      trigger([
        "address.cep",
        "address.address",
        "address.number",
        "address.complement",
        "address.state",
        "address.city",
      ]).catch((e) => console.error("Erro ao validar campos:", e));
    }, 200);

    return () => clearTimeout(timer);
  }, [watchedFields, trigger]);

  // Formatação de CEP - CORRIGIDO
  useEffect(() => {
    const cep = getValues("address.cep");
    if (cep && typeof cep === "string") {
      const numericValue = cep.replace(/\D/g, "");
      if (numericValue.length <= 8) {
        let formattedCEP = "";

        if (numericValue.length > 0) {
          formattedCEP = numericValue.substring(0, 5);

          if (numericValue.length > 5) {
            formattedCEP += "-" + numericValue.substring(5, 8);
          }
        }

        // Atualizar apenas se o formato for diferente
        if (formattedCEP !== cep && formattedCEP.length > 0) {
          setValue("address.cep" as Path<FormData>, formattedCEP);
        }
      }
    }
  }, [watchedFields, getValues, setValue]);

  const isStepValid =
    !errors.address?.cep &&
    !errors.address?.address &&
    !errors.address?.number &&
    !errors.address?.state &&
    !errors.address?.city;

  // Função para avançar com segurança contra múltiplos cliques
  const handleAdvanceWithSafety = async () => {
    if (isProcessing || !isStepValid) return;

    try {
      setIsProcessing(true);

      // Salvar dados no localStorage como backup
      const addressData = {
        cep: getValues("address.cep"),
        address: getValues("address.address"),
        number: getValues("address.number"),
        complement: getValues("address.complement"),
        state: getValues("address.state"),
        city: getValues("address.city"),
      };
      localStorage.setItem("addressData", JSON.stringify(addressData));

      // Método alternativo de navegação para evitar loops
      window.location.href = "?step=30";
    } catch (error) {
      console.error("Erro ao processar:", error);
    } finally {
      setIsProcessing(false);
    }
  };

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
              <h2 className="TypographyPlato24 pb-[8px]">Endereço</h2>
              <p className="TypographyPinter16w400">
                Agora precisamos de alguns dados de localização.
              </p>
            </div>
          </div>
          <div className="w-max flex">
            <DocolMekal />
          </div>
        </div>
        <div className="w-full justify-between flex">
          <p className="TypographyPlato20">Dados de endereço</p>
          <div className="max-w-[542px]">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                {...register("address.cep")}
                placeholder="Digite o CEP (ex: 12345-678)"
                className={`w-full p-2 border rounded-md ${
                  errors.address?.cep
                    ? "border-red-300"
                    : dirtyFields.address?.cep && !errors.address?.cep
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.address?.cep && (
                <p className="text-red-500">{errors.address.cep.message}</p>
              )}
              <input
                type="text"
                {...register("address.address")}
                placeholder="Digite o endereço (ex: Rua Exemplo)"
                className={`w-full p-2 border rounded-md ${
                  errors.address?.address
                    ? "border-red-300"
                    : dirtyFields.address?.address && !errors.address?.address
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.address?.address && (
                <p className="text-red-500">{errors.address.address.message}</p>
              )}
              <div className="flex gap-4">
                <input
                  type="text"
                  {...register("address.number")}
                  placeholder="Digite o número (ex: 123)"
                  className={`w-1/2 p-2 border rounded-md ${
                    errors.address?.number
                      ? "border-red-300"
                      : dirtyFields.address?.number && !errors.address?.number
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.address?.number && (
                  <p className="text-red-500">
                    {errors.address.number.message}
                  </p>
                )}
                <input
                  type="text"
                  {...register("address.complement")}
                  placeholder="Digite o complemento (opcional)"
                  className={`w-1/2 p-2 border rounded-md ${
                    errors.address?.complement
                      ? "border-red-300"
                      : dirtyFields.address?.complement &&
                        !errors.address?.complement
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.address?.complement && (
                  <p className="text-red-500">
                    {errors.address.complement.message}
                  </p>
                )}
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  {...register("address.state")}
                  placeholder="Digite o estado (ex: SP)"
                  className={`w-1/2 p-2 border rounded-md ${
                    errors.address?.state
                      ? "border-red-300"
                      : dirtyFields.address?.state && !errors.address?.state
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.address?.state && (
                  <p className="text-red-500">{errors.address.state.message}</p>
                )}
                <input
                  type="text"
                  {...register("address.city")}
                  placeholder="Digite a cidade (ex: São Paulo)"
                  className={`w-1/2 p-2 border rounded-md ${
                    errors.address?.city
                      ? "border-red-300"
                      : dirtyFields.address?.city && !errors.address?.city
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.address?.city && (
                  <p className="text-red-500">{errors.address.city.message}</p>
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
    <ContractPlansLayout children={mainContent} sideContent={sideContent} />
  );
}

export default StepA3LocationData;

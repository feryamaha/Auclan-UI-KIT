// src/components/PageContratarPlano/StepB-Dependentes/StepB2-AddInitialData.tsx
"use client";

import React, { useEffect } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { useFormContext } from "@/context/FormContext";

export function StepB2InitialData() {
  const { form, handleNext, setStep } = useFormContext();
  const {
    register,
    formState: { errors, dirtyFields },
    trigger,
    watch,
    getValues,
    setValue,
  } = form;

  const dependents = getValues("dependents") || [];
  const currentIndex = dependents.length;

  const watchedFields = watch([
    `dependents.${currentIndex}.cpf`,
    `dependents.${currentIndex}.fullName`,
    `dependents.${currentIndex}.birthDate`,
  ]);

  useEffect(() => {
    trigger([
      `dependents.${currentIndex}.cpf`,
      `dependents.${currentIndex}.fullName`,
      `dependents.${currentIndex}.birthDate`,
    ]);
  }, [watchedFields, trigger]);

  const isStepValid =
    !errors.dependents?.[currentIndex]?.cpf &&
    !errors.dependents?.[currentIndex]?.fullName &&
    !errors.dependents?.[currentIndex]?.birthDate;

  const addDependent = async () => {
    const isValid = await trigger([
      `dependents.${currentIndex}.cpf`,
      `dependents.${currentIndex}.fullName`,
      `dependents.${currentIndex}.birthDate`,
    ]);
    if (isValid) {
      setValue("dependents", [
        ...dependents,
        {
          cpf: getValues(`dependents.${currentIndex}.cpf`) || "",
          fullName: getValues(`dependents.${currentIndex}.fullName`) || "",
          birthDate: getValues(`dependents.${currentIndex}.birthDate`) || "",
          motherName: "",
          sex: "",
          parentesco: "",
          rg: "",
          orgaoEmissor: "",
          cns: "",
        },
      ]);
      handleNext();
    }
  };

  return (
    <div className="w-full h-full flex items-center backdrop-filter backdrop-blur-sm">
      <div className="w-[40%] h-[60%] mx-auto bg-white rounded-[16px] flex flex-col justify-between">
        <div className="w-full flex items-center justify-between border-b">
          <div className="w-full py-[16px] px-[32px] flex items-center justify-between">
            <h2 className="TypographyPlato20"> Incluir dependente </h2>
            <button className="w-[48px] h-auto p-[12px] bg-white flex justify-center">
              <Icon name="IconClose" onClick={() => setStep(31)} />
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col py-[16px] px-[32px] items-center gap-[24px]">
          <div className="w-full">
            <div className="flex flex-col gap-[8px]">
              <p className="TypographyNavHeader">Etapa 1 de 2</p>
              <h2 className="TypographyPlato20">Dados iniciais</h2>
              <p className="TypographyPinter14w400">
                Vamos começar pelo CPF, nome e data de nascimento.
              </p>
            </div>
          </div>
          <div className="w-full">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                {...register(`dependents.${currentIndex}.cpf`)}
                placeholder="Digite o CPF (ex: 123.456.789-01)"
                className={`w-full p-2 border rounded-md ${
                  errors.dependents?.[currentIndex]?.cpf
                    ? "border-red-300"
                    : dirtyFields.dependents?.[currentIndex]?.cpf &&
                      !errors.dependents?.[currentIndex]?.cpf
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.dependents?.[currentIndex]?.cpf && (
                <p className="text-red-500">
                  {errors.dependents[currentIndex].cpf?.message}
                </p>
              )}
              <input
                type="text"
                {...register(`dependents.${currentIndex}.fullName`)}
                placeholder="Digite o nome completo"
                className={`w-full p-2 border rounded-md ${
                  errors.dependents?.[currentIndex]?.fullName
                    ? "border-red-300"
                    : dirtyFields.dependents?.[currentIndex]?.fullName &&
                      !errors.dependents?.[currentIndex]?.fullName
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.dependents?.[currentIndex]?.fullName && (
                <p className="text-red-500">
                  {errors.dependents[currentIndex].fullName?.message}
                </p>
              )}
              <input
                type="date"
                {...register(`dependents.${currentIndex}.birthDate`)}
                placeholder="Selecione a data de nascimento (ex: 01/01/2000)"
                className={`w-full p-2 border rounded-md ${
                  errors.dependents?.[currentIndex]?.birthDate
                    ? "border-red-300"
                    : dirtyFields.dependents?.[currentIndex]?.birthDate &&
                      !errors.dependents?.[currentIndex]?.birthDate
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.dependents?.[currentIndex]?.birthDate && (
                <p className="text-red-500">
                  {errors.dependents[currentIndex].birthDate?.message}
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="w-full py-[16px] px-[32px] flex items-center justify-between border-t">
          <Button
            variant="btnLinkForm"
            className="w-max"
            onClick={() => setStep(31)}
          >
            Cancelar
          </Button>
          <Button
            variant="btnFormHover"
            className="w-max"
            type="button"
            onClick={addDependent}
            disabled={!isStepValid}
          >
            Avançar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StepB2InitialData;

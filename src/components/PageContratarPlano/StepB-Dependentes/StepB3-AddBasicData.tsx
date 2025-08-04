// src/components/PageContratarPlano/StepB-Dependentes/StepB3-AddBasicData.tsx
"use client";

import React, { useEffect, ReactNode } from "react"; // Adicionado ReactNode para tipagem segura
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { useFormContext } from "@/context/FormContext";

export function StepB3BasicData(): ReactNode {
  // Alterado para ReactNode em vez de JSX.Element
  const { form, handleNext, setStep } = useFormContext();
  const {
    register,
    formState: { errors, dirtyFields },
    trigger,
    watch,
    getValues,
  } = form;

  const dependents = getValues("dependents") || [];
  const currentIndex = dependents.length - 1;

  const watchedFields = watch([
    `dependents.${currentIndex}.motherName`,
    `dependents.${currentIndex}.sex`,
    `dependents.${currentIndex}.parentesco`,
    `dependents.${currentIndex}.rg`,
    `dependents.${currentIndex}.orgaoEmissor`,
    `dependents.${currentIndex}.cns`,
  ]);

  useEffect(() => {
    trigger([
      `dependents.${currentIndex}.motherName`,
      `dependents.${currentIndex}.sex`,
      `dependents.${currentIndex}.parentesco`,
      `dependents.${currentIndex}.rg`,
      `dependents.${currentIndex}.orgaoEmissor`,
      `dependents.${currentIndex}.cns`,
    ]);
  }, [watchedFields, trigger]);

  const isStepValid =
    !errors.dependents?.[currentIndex]?.motherName &&
    !errors.dependents?.[currentIndex]?.sex &&
    !errors.dependents?.[currentIndex]?.parentesco &&
    !errors.dependents?.[currentIndex]?.rg &&
    !errors.dependents?.[currentIndex]?.orgaoEmissor &&
    !errors.dependents?.[currentIndex]?.cns;

  const mainContent = (
    <div className="w-full h-full flex items-center backdrop-filter backdrop-blur-sm">
      <div className="w-[40%] h-max mx-auto bg-white rounded-[16px] flex flex-col justify-between">
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
              <p className="TypographyNavHeader">Etapa 2 de 2</p>
              <h2 className="TypographyPlato20">Dados básicos</h2>
              <p className="TypographyPinter14w400">
                Agora vamos aos dados básicos.
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
                {...register(`dependents.${currentIndex}.motherName`)}
                placeholder="Digite o nome da mãe"
                className={`w-full p-2 border rounded-md ${
                  errors.dependents?.[currentIndex]?.motherName
                    ? "border-red-300"
                    : dirtyFields.dependents?.[currentIndex]?.motherName &&
                      !errors.dependents?.[currentIndex]?.motherName
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.dependents?.[currentIndex]?.motherName && (
                <p className="text-red-500">
                  {errors.dependents[currentIndex].motherName?.message}
                </p>
              )}
              <div className="flex gap-[24px]">
                <input
                  type="text"
                  {...register(`dependents.${currentIndex}.sex`)}
                  placeholder="Digite o sexo (ex: Masculino)"
                  className={`w-full p-2 border rounded-md ${
                    errors.dependents?.[currentIndex]?.sex
                      ? "border-red-300"
                      : dirtyFields.dependents?.[currentIndex]?.sex &&
                        !errors.dependents?.[currentIndex]?.sex
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.dependents?.[currentIndex]?.sex && (
                  <p className="text-red-500">
                    {errors.dependents[currentIndex].sex?.message}
                  </p>
                )}
                <input
                  type="text"
                  {...register(`dependents.${currentIndex}.parentesco`)}
                  placeholder="Digite o parentesco (ex: Filho)"
                  className={`w-full p-2 border rounded-md ${
                    errors.dependents?.[currentIndex]?.parentesco
                      ? "border-red-300"
                      : dirtyFields.dependents?.[currentIndex]?.parentesco &&
                        !errors.dependents?.[currentIndex]?.parentesco
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.dependents?.[currentIndex]?.parentesco && (
                  <p className="text-red-500">
                    {errors.dependents[currentIndex].parentesco?.message}
                  </p>
                )}
              </div>
              <div className="flex gap-[24px]">
                <input
                  type="text"
                  {...register(`dependents.${currentIndex}.rg`)}
                  placeholder="Digite o RG (ex: 123456789)"
                  className={`w-full p-2 border rounded-md ${
                    errors.dependents?.[currentIndex]?.rg
                      ? "border-red-300"
                      : dirtyFields.dependents?.[currentIndex]?.rg &&
                        !errors.dependents?.[currentIndex]?.rg
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.dependents?.[currentIndex]?.rg && (
                  <p className="text-red-500">
                    {errors.dependents[currentIndex].rg?.message}
                  </p>
                )}
                <input
                  type="text"
                  {...register(`dependents.${currentIndex}.orgaoEmissor`)}
                  placeholder="Digite o órgão emissor (ex: SSP-SP)"
                  className={`w-full p-2 border rounded-md ${
                    errors.dependents?.[currentIndex]?.orgaoEmissor
                      ? "border-red-300"
                      : dirtyFields.dependents?.[currentIndex]?.orgaoEmissor &&
                        !errors.dependents?.[currentIndex]?.orgaoEmissor
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.dependents?.[currentIndex]?.orgaoEmissor && (
                  <p className="text-red-500">
                    {errors.dependents[currentIndex].orgaoEmissor?.message}
                  </p>
                )}
              </div>
              <input
                type="text"
                {...register(`dependents.${currentIndex}.cns`)}
                placeholder="Digite o CNS (ex: 123456789012345)"
                className={`w-full p-2 border rounded-md ${
                  errors.dependents?.[currentIndex]?.cns
                    ? "border-red-300"
                    : dirtyFields.dependents?.[currentIndex]?.cns &&
                      !errors.dependents?.[currentIndex]?.cns
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {errors.dependents?.[currentIndex]?.cns && (
                <p className="text-red-500">
                  {errors.dependents[currentIndex].cns?.message}
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
            onClick={handleNext}
            disabled={!isStepValid}
          >
            Avançar
          </Button>
        </div>
      </div>
    </div>
  );

  return mainContent;
}

export default StepB3BasicData;

"use client";

// Importações para renderização, navegação e manipulação do formulário
import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { useFormContext } from "@/context/FormContext";
import { Path, UseFormReturn } from "react-hook-form";
import { FormData } from "@/lib/formSchema";

// Componente para o passo B2: adicionar dados iniciais de dependentes
export function StepB2InitialData() {
  // Obtém o contexto do formulário
  const { form, handleNext, setStep } = useFormContext();

  // Desestruturação segura do form com valores padrão
  const {
    register = () => ({} as any),
    getValues = (() => ({})) as <TFieldValues extends FormData>(
      field?: Path<TFieldValues>
    ) => any,
    setValue = (() => {}) as <TFieldValues extends FormData>(
      name: Path<TFieldValues>,
      value: any
    ) => void,
  } = (form || {}) as UseFormReturn<FormData>;

  // Obtém o array de dependentes e calcula o índice atual
  const dependents = getValues("dependents") || [];
  const currentIndex = dependents.length;

  // Função para adicionar dependente e avançar
  const addDependent = () => {
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
  };

  // Estrutura do conteúdo
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
                className="w-full p-2 border rounded-md border-gray-300"
              />
              <input
                type="text"
                {...register(`dependents.${currentIndex}.fullName`)}
                placeholder="Digite o nome completo"
                className="w-full p-2 border rounded-md border-gray-300"
              />
              <input
                type="date"
                {...register(`dependents.${currentIndex}.birthDate`)}
                placeholder="Selecione a data de nascimento (ex: 01/01/2000)"
                className="w-full p-2 border rounded-md border-gray-300"
              />
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
          >
            Avançar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StepB2InitialData;

"use client";

// Importações para renderização, navegação e manipulação do formulário
import React from "react"; // Importação de React para JSX.Element
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { useFormContext } from "@/context/FormContext";
import { Path, UseFormReturn } from "react-hook-form";
import { FormData } from "@/lib/formSchema";

// Componente para o passo B3: adicionar dados básicos de dependentes
export function StepB3BasicData(): React.JSX.Element {
  // Obtém o contexto do formulário
  const { form, handleNext, setStep } = useFormContext();

  // Desestruturação segura do form com valores padrão
  const {
    register = () => ({} as any),
    getValues = (() => ({})) as <TFieldValues extends FormData>(field?: Path<TFieldValues>) => any,
  } = (form || {}) as UseFormReturn<FormData>;

  // Obtém o array de dependentes e calcula o índice atual
  const dependents = getValues("dependents") || [];
  const currentIndex = dependents.length - 1;

  // Estrutura do conteúdo
  return (
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
                className="w-full p-2 border rounded-md border-gray-300"
              />
              <div className="flex gap-[24px]">
                <input
                  type="text"
                  {...register(`dependents.${currentIndex}.sex`)}
                  placeholder="Digite o sexo (ex: Masculino)"
                  className="w-full p-2 border rounded-md border-gray-300"
                />
                <input
                  type="text"
                  {...register(`dependents.${currentIndex}.parentesco`)}
                  placeholder="Digite o parentesco (ex: Filho)"
                  className="w-full p-2 border rounded-md border-gray-300"
                />
              </div>
              <div className="flex gap-[24px]">
                <input
                  type="text"
                  {...register(`dependents.${currentIndex}.rg`)}
                  placeholder="Digite o RG (ex: 123456789)"
                  className="w-full p-2 border rounded-md border-gray-300"
                />
                <input
                  type="text"
                  {...register(`dependents.${currentIndex}.orgaoEmissor`)}
                  placeholder="Digite o órgão emissor (ex: SSP-SP)"
                  className="w-full p-2 border rounded-md border-gray-300"
                />
              </div>
              <input
                type="text"
                {...register(`dependents.${currentIndex}.cns`)}
                placeholder="Digite o CNS (ex: 123456789012345)"
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
            onClick={handleNext}
          >
            Avançar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StepB3BasicData;

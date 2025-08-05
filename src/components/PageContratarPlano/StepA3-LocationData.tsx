"use client";

// Importações para renderização, navegação e manipulação do formulário
import React, { useState, useEffect } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal"; // Mantido como no original
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import { useFormContext } from "@/context/FormContext";
import { Path, UseFormReturn } from "react-hook-form";
import { FormData } from "@/lib/formSchema";

// Componente para o passo 3: dados de endereço
export function StepA3LocationData() {
  // Pré-carregamento das imagens do StepB0 (corrigido: URLs limpas, sem caracteres extras; adicionado fetch para forçar cache)
  useEffect(() => {
    const preloadImages = [
      "/assets/img/BGStepB0.webp", // URL corrigida: sem "/" no final
      "/assets/img/BGCardStepB0.webp", // URL corrigida: sem ")" no final
      // Adicione mais se houver outras imagens no StepB0
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src; // Cacheia a imagem no browser

      // Força download e cache imediato (melhora o pré-carregamento em Next.js)
      fetch(src, {
        cache: "force-cache", // Força cache no browser
        mode: "no-cors", // Mantém compatibilidade
      }).catch((error) => {
        console.error(`Erro ao pré-carregar ${src}:`, error); // Debug opcional
      });
    });
  }, []); // Executa apenas uma vez, quando o componente é montado

  // Obtém o contexto do formulário
  const {
    form,
    handleNext,
    handleBack,
    currentStep,
    completedSteps,
    onMenuClick,
  } = useFormContext();

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

  // Estado para prevenir cliques múltiplos
  const [isProcessing, setIsProcessing] = useState(false);

  // Formatação do CEP
  useEffect(() => {
    if (!form) return; // Evita execução se form for undefined
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
        if (formattedCEP !== cep && formattedCEP.length > 0) {
          setValue("address.cep" as Path<FormData>, formattedCEP);
        }
      }
    }
  }, [getValues, setValue, form]);

  // Função para avançar ao próximo passo
  const handleAdvanceWithSafety = async () => {
    if (isProcessing) return;

    try {
      setIsProcessing(true);
      // Salva dados no localStorage
      const addressData = {
        cep: getValues("address.cep") || "",
        address: getValues("address.address") || "",
        number: getValues("address.number") || "",
        complement: getValues("address.complement") || "",
        state: getValues("address.state") || "",
        city: getValues("address.city") || "",
      };
      localStorage.setItem("addressData", JSON.stringify(addressData));
      // Navega para o próximo passo
      window.location.href = "?step=30"; // Mantido como ?step=30 para ir ao StepB0 (ajuste se necessário para ?step=4)
    } catch (error) {
      console.error("Erro ao processar:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Estrutura principal do conteúdo
  const mainContent = (
    <div className="w-full h-full flex gap-[24px]">
      <div className="w-max">
        <MenuSidebar
          onMenuClick={onMenuClick || (() => {})}
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
                className="w-full p-2 border rounded-md border-gray-300"
              />
              <input
                type="text"
                {...register("address.address")}
                placeholder="Digite o endereço (ex: Rua Exemplo)"
                className="w-full p-2 border rounded-md border-gray-300"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  {...register("address.number")}
                  placeholder="Digite o número (ex: 123)"
                  className="w-1/2 p-2 border rounded-md border-gray-300"
                />
                <input
                  type="text"
                  {...register("address.complement")}
                  placeholder="Digite o complemento (opcional)"
                  className="w-1/2 p-2 border rounded-md border-gray-300"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  {...register("address.state")}
                  placeholder="Digite o estado (ex: SP)"
                  className="w-1/2 p-2 border rounded-md border-gray-300"
                />
                <input
                  type="text"
                  {...register("address.city")}
                  placeholder="Digite a cidade (ex: São Paulo)"
                  className="w-1/2 p-2 border rounded-md border-gray-300"
                />
              </div>
              <Button
                variant="btnFormHover"
                className="w-full"
                type="button"
                onClick={handleAdvanceWithSafety}
                disabled={isProcessing}
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

  // Conteúdo da barra lateral
  const sideContent = (
    <div className="w-full h-max flex flex-col gap-[8px]">
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        <PlanDetailsCard />
      </div>
      <IncludeBeneficiaryCard />
    </div>
  );

  // Renderização final
  return (
    <ContractPlansLayout sideContent={sideContent}>
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA3LocationData;

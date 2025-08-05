"use client";

// Importações para renderização, navegação e manipulação do formulário
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import { useFormContext } from "@/context/FormContext";
import { Path, UseFormReturn } from "react-hook-form";
import { FormData } from "@/lib/formSchema";

// Componente para o passo 4: aceitação dos termos
export function StepA4AcceptTerms() {
  // Obtém o contexto do formulário
  const { form, handleNext, handleBack } = useFormContext();

  // Desestruturação segura do form com valores padrão
  const {
    register = () => ({} as any),
    getValues = (() => ({})) as <TFieldValues extends FormData>(
      field?: Path<TFieldValues>
    ) => any,
  } = (form || {}) as UseFormReturn<FormData>;

  // Estado para prevenir cliques múltiplos
  const [isProcessing, setIsProcessing] = useState(false);

  // Função para avançar ao próximo passo
  const handleAdvanceWithSafety = async () => {
    if (isProcessing) return;

    try {
      setIsProcessing(true);
      // Salva aceitação dos termos no localStorage
      localStorage.setItem(
        "termsAccepted",
        JSON.stringify({
          terms: getValues("terms") || false,
        })
      );
      // Navega para o próximo passo
      window.location.href = "?step=5";
    } catch (error) {
      console.error("Erro ao processar:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Estrutura principal do conteúdo
  const mainContent = (
    <div className="w-full flex flex-col items-start gap-[12px] mb-[24px]">
      <h2 className="TypographyPlato24">Aceite e Conclusão</h2>
      <p className="TypographyPinter16w400">
        Por favor, confirme que você aceita os termos do plano.
      </p>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("terms")}
            className="p-2 border rounded-md border-gray-300"
          />
          <span>Aceito os termos e condições</span>
        </label>
        <Button
          variant="btnPrimary"
          className="w-full"
          type="button"
          onClick={handleAdvanceWithSafety}
          disabled={isProcessing}
        >
          {isProcessing ? "Processando..." : "Avançar"}
        </Button>
        <Button variant="btnLink" className="w-max" onClick={handleBack}>
          Voltar
        </Button>
      </form>
    </div>
  );

  // Conteúdo da barra lateral
  const sideContent = <div>Conteúdo lateral placeholder</div>;

  // Renderização final
  return (
    <ContractPlansLayout sideContent={sideContent}>
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA4AcceptTerms;

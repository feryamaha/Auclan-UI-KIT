"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import { useFormContext } from "@/context/FormContext";

export function StepA4AcceptTerms() {
  const { form, handleNext, handleBack } = useFormContext();
  const {
    register,
    formState: { errors, dirtyFields },
    trigger,
    watch,
    getValues,
  } = form;

  // Estado para prevenir cliques múltiplos
  const [isProcessing, setIsProcessing] = useState(false);

  const watchedFields = watch(["terms"]);

  useEffect(() => {
    const timer = setTimeout(() => {
      trigger(["terms"]).catch((e) =>
        console.error("Erro ao validar termos:", e)
      );
    }, 200);

    return () => clearTimeout(timer);
  }, [watchedFields, trigger]);

  const isStepValid = !errors.terms;

  // Função para avançar com segurança
  const handleAdvanceWithSafety = async () => {
    if (isProcessing || !isStepValid) return;

    try {
      setIsProcessing(true);

      // Salvar aceitação dos termos no localStorage
      localStorage.setItem(
        "termsAccepted",
        JSON.stringify({
          terms: getValues("terms"),
        })
      );

      // Método alternativo de navegação
      window.location.href = "?step=5";
    } catch (error) {
      console.error("Erro ao processar:", error);
    } finally {
      setIsProcessing(false);
    }
  };

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
            className={`p-2 border rounded-md ${
              errors.terms
                ? "border-red-300"
                : dirtyFields.terms && !errors.terms
                ? "border-green-500"
                : "border-gray-300"
            }`}
          />
          <span>Aceito os termos e condições</span>
        </label>
        {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
        <Button
          variant="btnPrimary"
          className="w-full"
          type="button"
          onClick={handleAdvanceWithSafety}
          disabled={!isStepValid || isProcessing}
        >
          {isProcessing ? "Processando..." : "Avançar"}
        </Button>
        <Button variant="btnLink" className="w-max" onClick={handleBack}>
          Voltar
        </Button>
      </form>
    </div>
  );

  const sideContent = <div>Conteúdo lateral placeholder</div>;

  return (
    <ContractPlansLayout children={mainContent} sideContent={sideContent} />
  );
}

export default StepA4AcceptTerms;

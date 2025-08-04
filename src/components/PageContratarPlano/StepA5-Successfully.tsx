"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import { useFormContext } from "@/context/FormContext";

export function StepA5Sucessfully() {
  const { form, handleBack } = useFormContext();
  const { handleSubmit } = form;

  // Estado para prevenir cliques múltiplos
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubmit = async (data: any) => {
    if (isProcessing) return;

    try {
      setIsProcessing(true);
      console.log("Enviando dados:", data);

      // Exemplo: const response = await fetch("/api/contract", { method: "POST", body: JSON.stringify(data) });

      // Limpar dados após envio bem-sucedido
      localStorage.removeItem("matricula");
      localStorage.removeItem("holderData");
      localStorage.removeItem("contactData");
      localStorage.removeItem("addressData");
      localStorage.removeItem("termsAccepted");

      // Redirecionamento opcional após submissão
      // window.location.href = "/obrigado";
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const mainContent = (
    <div className="w-full flex flex-col items-start gap-[12px] mb-[24px]">
      <h2 className="TypographyPlato24">Sucesso</h2>
      <p className="TypographyPinter16w400">
        Sua contratação foi concluída com sucesso!
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <Button
          variant="btnPrimary"
          onClick={handleSubmit(onSubmit)}
          disabled={isProcessing}
        >
          {isProcessing ? "Processando..." : "Finalizar"}
        </Button>
        <Button variant="btnLink" onClick={handleBack}>
          Voltar
        </Button>
      </form>
    </div>
  );

  const sideContent = <div>Conteúdo lateral placeholder</div>;

  return (
    <ContractPlansLayout sideContent={sideContent}>
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA5Sucessfully;

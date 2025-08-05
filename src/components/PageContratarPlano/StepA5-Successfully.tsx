"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import { useFormContext } from "@/context/FormContext";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "@/lib/formSchema";

// Componente para o passo 5: confirmação de sucesso
export function StepA5Sucessfully() {
  // Obtém o contexto do formulário
  const { form, handleBack } = useFormContext();

  // Desestruturação segura do form com valores padrão
  const { handleSubmit = (callback: (data: FormData) => void) => () => {} } =
    (form || {}) as UseFormReturn<FormData>;

  // Estado para prevenir cliques múltiplos
  const [isProcessing, setIsProcessing] = useState(false);

  // Função para processar o envio do formulário
  const onSubmit = async (data: FormData) => {
    if (isProcessing) return;

    try {
      setIsProcessing(true);
      console.log("Enviando dados:", data);

      // Exemplo: const response = await fetch("/api/contract", { method: "POST", body: JSON.stringify(data) });

      // Limpa dados do localStorage após envio
      localStorage.removeItem("matricula");
      localStorage.removeItem("holderData");
      localStorage.removeItem("contactData");
      localStorage.removeItem("addressData");
      localStorage.removeItem("termsAccepted");

      // Redirecionamento opcional após submissão (mantido comentado conforme original)
      // window.location.href = "/obrigado";
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Estrutura principal do conteúdo
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

  // Conteúdo da barra lateral
  const sideContent = <div>Conteúdo lateral placeholder</div>;

  // Renderização final
  return (
    <ContractPlansLayout sideContent={sideContent}>
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA5Sucessfully;

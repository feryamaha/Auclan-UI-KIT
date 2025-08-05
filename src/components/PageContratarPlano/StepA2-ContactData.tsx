"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal"; // Mantido como docolMekal, conforme original
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import { useFormContext } from "@/context/FormContext";
import { Path, UseFormReturn } from "react-hook-form";
import { FormData } from "@/lib/formSchema";

export function StepA2ContactData() {
  // Obtém o contexto do formulário
  // - form: Instância do useForm<FormData> do react-hook-form, opcional
  // - handleNext: Função para avançar ao próximo passo
  // - handleBack: Função para voltar ao passo anterior
  // - currentStep: Número do passo atual (2 para este componente)
  // - completedSteps: Set de passos concluídos
  // - onMenuClick: Função opcional para navegação via MenuSidebar
  const {
    form,
    handleNext,
    handleBack,
    currentStep,
    completedSteps,
    onMenuClick,
  } = useFormContext();

  // Desestruturação segura do form com valores padrão
  // - register: Registra inputs do formulário, padrão {} para evitar erros
  // - getValues: Obtém valores dos campos, padrão () => ({}) para evitar erros
  // - setValue: Define valores nos campos, padrão () => {} para evitar erros
  // - (form || {}): Protege contra form undefined
  // - as UseFormReturn<FormData>: Garante compatibilidade com react-hook-form
  // - Nota: formState, trigger e watch foram removidos, pois são usados para validação
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

  // Estado para controlar processamento do botão Avançar
  // - isProcessing: Evita múltiplos cliques durante operações assíncronas
  const [isProcessing, setIsProcessing] = useState(false);

  // Efeito para formatação de números de telefone
  // - Propósito: Formatar celular e telefone no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
  // - Lógica: Obtém valores com getValues, remove caracteres não numéricos, aplica máscara, atualiza com setValue
  // - Dependências: getValues, setValue, form (atualiza quando form muda)
  useEffect(() => {
    if (!form) return; // Evita execução se form for undefined

    // Formatação para celular
    const celular = getValues("contact.celular");
    if (celular && typeof celular === "string") {
      const numericValue = celular.replace(/\D/g, "");
      if (numericValue.length <= 11) {
        let formattedPhone = "";
        if (numericValue.length > 0) {
          formattedPhone = "(" + numericValue.substring(0, 2);
          if (numericValue.length > 2) {
            formattedPhone +=
              ") " +
              numericValue.substring(2, numericValue.length <= 10 ? 6 : 7);
            if (numericValue.length > (numericValue.length <= 10 ? 6 : 7)) {
              formattedPhone +=
                "-" + numericValue.substring(numericValue.length <= 10 ? 6 : 7);
            }
          }
        }
        if (formattedPhone !== celular && formattedPhone.length > 0) {
          setValue("contact.celular" as Path<FormData>, formattedPhone);
        }
      }
    }

    // Formatação para telefone (opcional)
    const telefone = getValues("contact.telefone");
    if (telefone && typeof telefone === "string") {
      const numericValue = telefone.replace(/\D/g, "");
      if (numericValue.length <= 11) {
        let formattedPhone = "";
        if (numericValue.length > 0) {
          formattedPhone = "(" + numericValue.substring(0, 2);
          if (numericValue.length > 2) {
            formattedPhone +=
              ") " +
              numericValue.substring(2, numericValue.length <= 10 ? 6 : 7);
            if (numericValue.length > (numericValue.length <= 10 ? 6 : 7)) {
              formattedPhone +=
                "-" + numericValue.substring(numericValue.length <= 10 ? 6 : 7);
            }
          }
        }
        if (formattedPhone !== telefone && formattedPhone.length > 0) {
          setValue("contact.telefone" as Path<FormData>, formattedPhone);
        }
      }
    }
  }, [getValues, setValue, form]);

  // Função para avançar ao próximo passo
  // - Propósito: Salva dados no localStorage e navega para step=3
  // - Lógica: Verifica isProcessing, salva dados com getValues, usa window.location.href
  // - Proteção: isProcessing evita múltiplos cliques, try/catch lida com erros
  // - Nota: isStepValid removido, pois não há validação
  const handleAdvanceWithSafety = async () => {
    if (isProcessing) return;

    try {
      setIsProcessing(true);

      // Salva dados no localStorage como backup
      const contactData = {
        email: getValues("contact.email") || "",
        confirmEmail: getValues("contact.confirmEmail") || "",
        celular: getValues("contact.celular") || "",
        telefone: getValues("contact.telefone") || "",
      };
      localStorage.setItem("contactData", JSON.stringify(contactData));

      // Navegação alternativa para evitar loops
      window.location.href = "?step=3";
    } catch (error) {
      console.error("Erro ao processar:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Estrutura principal do conteúdo (mainContent)
  // - Contém: MenuSidebar à esquerda, formulário de contato à direita
  // - MenuSidebar: Navegação entre passos, usa onMenuClick com fallback
  // - Formulário: Inputs para email, confirmEmail, celular, telefone
  // - Nota: Feedback visual de validação (bordas vermelhas/verdes) removido
  // - Botão Voltar: Usa handleBack para navegar ao passo anterior
  // - DocolMekal: Elemento visual no cabeçalho
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
              <h2 className="TypographyPlato24 pb-[8px]">Contato</h2>
              <p className="TypographyPinter16w400">
                Agora precisamos de alguns dados para contato.
              </p>
            </div>
          </div>
          <div className="w-max flex">
            <DocolMekal />
          </div>
        </div>
        <div className="w-full justify-between flex">
          <p className="TypographyPlato20">Dados contato</p>
          <div className="max-w-[542px]">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                {...register("contact.email")}
                placeholder="Digite o e-mail (ex: exemplo@dominio.com)"
                className="w-full p-2 border rounded-md border-gray-300"
              />
              <input
                type="email"
                {...register("contact.confirmEmail")}
                placeholder="Confirme o e-mail (ex: exemplo@dominio.com)"
                className="w-full p-2 border rounded-md border-gray-300"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  {...register("contact.celular")}
                  placeholder="Digite o celular (ex: (11) 99999-9999)"
                  className="w-1/2 p-2 border rounded-md border-gray-300"
                />
                <input
                  type="text"
                  {...register("contact.telefone")}
                  placeholder="Digite o telefone (ex: (11) 99999-9999) - opcional"
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

  // Conteúdo da barra lateral (sideContent)
  // - Contém: PlanDetailsCard (detalhes do plano) e IncludeBeneficiaryCard (opção de incluir beneficiário)
  // - Estrutura: Mantida conforme validada com o cliente
  const sideContent = (
    <div className="w-full h-max flex flex-col gap-[8px]">
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        <PlanDetailsCard />
      </div>
      <IncludeBeneficiaryCard />
    </div>
  );

  // Renderização final
  // - ContractPlansLayout: Combina mainContent e sideContent no layout da página
  // - sideContent: Passado como prop para o layout
  // - mainContent: Renderizado como children do layout
  return (
    <ContractPlansLayout sideContent={sideContent}>
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA2ContactData;

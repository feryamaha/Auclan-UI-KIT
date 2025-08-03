"use client";

import React, { useState, ChangeEvent } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal";
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import { useFormContext } from "@/context/FormContext";

export function StepA1HolderData() {
  const { form, handleBack, currentStep, completedSteps } = useFormContext();
  const { setValue } = form;

  // Estado local para gerenciar os campos do formulário
  const [formData, setFormData] = useState({
    cpf: "",
    beneficiaryName: "",
    motherName: "",
    sex: "",
    civilStatus: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Função para validar CPF
  const validateCpf = (cpf: string) => {
    // Expressão regular para validar formato CPF
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfPattern.test(cpf);
  };

  // Função para validar campos não vazios
  const validateField = (value: string) => {
    return value.trim().length > 0;
  };

  // Validar formulário completo
  const isFormValid = () => {
    return (
      validateCpf(formData.cpf) &&
      validateField(formData.beneficiaryName) &&
      validateField(formData.motherName) &&
      validateField(formData.sex) &&
      validateField(formData.civilStatus)
    );
  };

  // Função para lidar com mudanças nos campos
  const handleChange = (field: string, value: string) => {
    // Formatação especial para CPF
    if (field === "cpf") {
      // Remover caracteres não numéricos
      let numericValue = value.replace(/\D/g, "");

      // Aplicar máscara de CPF: xxx.xxx.xxx-xx
      if (numericValue.length <= 11) {
        let formattedCPF = "";

        if (numericValue.length > 0) {
          formattedCPF = numericValue.substring(0, 3);

          if (numericValue.length > 3) {
            formattedCPF += "." + numericValue.substring(3, 6);

            if (numericValue.length > 6) {
              formattedCPF += "." + numericValue.substring(6, 9);

              if (numericValue.length > 9) {
                formattedCPF += "-" + numericValue.substring(9, 11);
              }
            }
          }
        }

        setFormData((prev) => ({ ...prev, [field]: formattedCPF }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  // Função para avançar para o próximo passo usando o reload com parâmetro URL
  const handleSubmit = () => {
    if (!isFormValid() || isProcessing) return;

    try {
      setIsProcessing(true);

      // Salvar dados no localStorage
      localStorage.setItem("holderData", JSON.stringify(formData));

      // Atualizar o formulário principal
      setValue("holder.cpf", formData.cpf);
      setValue("holder.beneficiaryName", formData.beneficiaryName);
      setValue("holder.motherName", formData.motherName);
      setValue("holder.sex", formData.sex);
      setValue("holder.civilStatus", formData.civilStatus);

      // Navegar para o próximo passo usando o mesmo método do StepA0
      window.location.href = "?step=2";
    } catch (error) {
      console.error("Erro ao processar formulário:", error);
    }
  };

  const mainContent = (
    <div className="w-full h-full flex gap-[24px]">
      <div className="w-max">
        <MenuSidebar
          onMenuClick={() => {}}
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
              <h2 className="TypographyPlato24 pb-[8px]">Titular do plano</h2>
              <p className="TypographyPinter16w400">
                Por favor, insira o CPF que será o titular do plano.
              </p>
            </div>
          </div>
          <div className="w-max flex">
            <DocolMekal />
          </div>
        </div>
        <div className="w-full justify-between flex">
          <p className="TypographyPlato20">Dados iniciais</p>
          <div className="max-w-[542px]">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                value={formData.cpf}
                onChange={(e) => handleChange("cpf", e.target.value)}
                placeholder="Digite o CPF (ex: 123.456.789-01)"
                className={`w-full p-2 border rounded-md ${
                  !validateCpf(formData.cpf) && formData.cpf.length > 0
                    ? "border-red-300"
                    : validateCpf(formData.cpf)
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                maxLength={14}
              />
              {!validateCpf(formData.cpf) && formData.cpf.length > 0 && (
                <p className="text-red-500">
                  CPF deve ter o formato 123.456.789-01
                </p>
              )}

              <input
                type="text"
                value={formData.beneficiaryName}
                onChange={(e) =>
                  handleChange("beneficiaryName", e.target.value)
                }
                placeholder="Digite o nome do beneficiário"
                className={`w-full p-2 border rounded-md ${
                  !validateField(formData.beneficiaryName) &&
                  formData.beneficiaryName.length > 0
                    ? "border-red-300"
                    : validateField(formData.beneficiaryName)
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {!validateField(formData.beneficiaryName) &&
                formData.beneficiaryName.length > 0 && (
                  <p className="text-red-500">
                    Nome do beneficiário é obrigatório
                  </p>
                )}

              <input
                type="text"
                value={formData.motherName}
                onChange={(e) => handleChange("motherName", e.target.value)}
                placeholder="Digite o nome da mãe"
                className={`w-full p-2 border rounded-md ${
                  !validateField(formData.motherName) &&
                  formData.motherName.length > 0
                    ? "border-red-300"
                    : validateField(formData.motherName)
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
              />
              {!validateField(formData.motherName) &&
                formData.motherName.length > 0 && (
                  <p className="text-red-500">Nome da mãe é obrigatório</p>
                )}

              <div className="flex gap-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    value={formData.sex}
                    onChange={(e) => handleChange("sex", e.target.value)}
                    placeholder="Digite o sexo (ex: Masculino)"
                    className={`w-full p-2 border rounded-md ${
                      !validateField(formData.sex) && formData.sex.length > 0
                        ? "border-red-300"
                        : validateField(formData.sex)
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  />
                  {!validateField(formData.sex) && formData.sex.length > 0 && (
                    <p className="text-red-500">Sexo é obrigatório</p>
                  )}
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    value={formData.civilStatus}
                    onChange={(e) =>
                      handleChange("civilStatus", e.target.value)
                    }
                    placeholder="Digite o estado civil (ex: Solteiro)"
                    className={`w-full p-2 border rounded-md ${
                      !validateField(formData.civilStatus) &&
                      formData.civilStatus.length > 0
                        ? "border-red-300"
                        : validateField(formData.civilStatus)
                        ? "border-green-500"
                        : "border-gray-300"
                    }`}
                  />
                  {!validateField(formData.civilStatus) &&
                    formData.civilStatus.length > 0 && (
                      <p className="text-red-500">Estado civil é obrigatório</p>
                    )}
                </div>
              </div>

              {/* Usando a estilização condicional conforme o código original */}
              {isFormValid() ? (
                <Button
                  variant="btnFormHover"
                  className="w-full"
                  type="button"
                  onClick={handleSubmit}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processando..." : "Avançar"}
                  {!isProcessing && (
                    <Icon name="IconArrowright" className="w-5 h-5" />
                  )}
                </Button>
              ) : (
                <Button variant="btnForm" className="w-full" disabled>
                  Avançar
                  <Icon name="IconArrowright" className="w-5 h-5" />
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const sideContent = (
    <div className="w-full h-max flex flex-col gap-[8px]">
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        <PlanDetailsCard />
      </div>
      <IncludeBeneficiaryCard />
    </div>
  );

  return (
    <ContractPlansLayout>
      {mainContent}
      {/* {sideContent} */}
    </ContractPlansLayout>
  );
}

export default StepA1HolderData;

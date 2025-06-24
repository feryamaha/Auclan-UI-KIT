// src/components/PageContratarPlano/StepB-Dependentes/StepB2-AddInitialData.tsx

"use client";
import React, { useState } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";

export function StepB2InitialData({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [cpf, setCpf] = useState("");
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const isFormValid = () => {
    return (
      cpf.trim() !== "" && fullName.trim() !== "" && birthDate.trim() !== ""
    );
  };

  const mainContent = (
    <div className="w-full h-full flex items-center backdrop-filter backdrop-blur-sm ">
      <div className="w-[40%] h-[60%] mx-auto bg-white rounded-[16px] flex flex-col justify-between ">
        <div className="w-full flex items-center justify-between border-b">
          <div className="w-full py-[16px] px-[32px] flex items-center justify-between">
            <h2 className="TypographyPlato20"> Incluir dependente </h2>
            <button className="w-[48px] h-auto p-[12px] bg-white flex justify-center  ">
              <Icon name="IconClose" />
            </button>
          </div>
        </div>
        <div className="w-full h-full flex flex-col py-[16px] px-[32px] items-center gap-[24px]">
          <div className="w-full">
            <div className="flex flex-col gap-[8px]">
              <p className="TypographyNavHeader">Etapa 1 de 2</p>

              <h2 className="TypographyPlato20">Dados iniciais </h2>
              <p className="TypographyPinter14w400">
                Vamos começar pelo CPF, nome e data de nascimento.
              </p>
            </div>
          </div>
          <div className="w-full">
            <form className="w-full flex flex-col gap-4">
              <input
                type="text"
                id="cpf"
                name="cpf"
                required
                placeholder="CPF*"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                id="full-name"
                name="full-name"
                required
                placeholder="Nome completo*"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="date"
                id="birth-date"
                name="birth-date"
                required
                placeholder="Data de nascimento*"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </form>
          </div>
        </div>
        <div className="w-full py-[16px] px-[32px] flex items-center justify-between border-t">
          <Button variant="btnLinkForm" className="w-max" onClick={onBack}>
            Cancelar
          </Button>
          {isFormValid() ? (
            <Button
              variant="btnFormHover"
              className="w-max"
              type="submit"
              onClick={onNext}
            >
              Adicionar
            </Button>
          ) : (
            <Button variant="btnForm" className="w-max" disabled>
              Adicionar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
  return mainContent;
}

export default StepB2InitialData;

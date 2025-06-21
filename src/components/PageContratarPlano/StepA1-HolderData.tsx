"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/contractPlans/layout";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal";
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";

interface StepA1HolderDataProps {
  onNext: () => void;
  onBack: () => void;
}

export function StepA1HolderData({ onNext, onBack }: StepA1HolderDataProps) {
  const [cpf, setCpf] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [sex, setSex] = useState("");
  const [civilStatus, setCivilStatus] = useState("");

  const isFormValid = () => {
    return (
      cpf.trim() !== "" &&
      beneficiaryName.trim() !== "" &&
      motherName.trim() !== "" &&
      sex.trim() !== "" &&
      civilStatus.trim() !== ""
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      // Salva os dados no localStorage
      const storedData = localStorage.getItem("mockDataStorage");
      const initialData = [
        { step: 0, data: {} },
        { step: 1, data: {} },
        { step: 2, data: {} },
        { step: 3, data: {} },
        { step: 4, data: {} },
        { step: 5, data: {} },
      ];
      const updatedStorage = storedData ? JSON.parse(storedData) : initialData;
      updatedStorage[1].data = {
        cpf,
        beneficiaryName,
        motherName,
        sex,
        civilStatus,
      };
      localStorage.setItem("mockDataStorage", JSON.stringify(updatedStorage));
      onNext();
    }
  };

  const mainContent = (
    <div className="w-full h-full flex gap-[24px]">
      <div className="w-max">
        <MenuSidebar
          onMenuClick={() => {}}
          currentStep={1}
          completedSteps={[]}
        />
      </div>
      <div className="w-full flex flex-col gap-[32px]">
        <div className="w-full h-max pb-[32px] border-b flex justify-between">
          <div className="w-max flex flex-col">
            <Button
              variant="btnLink"
              className="textbtnLink w-max"
              onClick={onBack}
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
                id="beneficiary-name"
                name="beneficiary-name"
                required
                placeholder="Nome do beneficiário*"
                value={beneficiaryName}
                onChange={(e) => setBeneficiaryName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                id="mother-name"
                name="mother-name"
                required
                placeholder="Nome da mãe*"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  id="sex"
                  name="sex"
                  required
                  placeholder="Sexo*"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="civil-status"
                  name="civil-status"
                  required
                  placeholder="Estado civil*"
                  value={civilStatus}
                  onChange={(e) => setCivilStatus(e.target.value)}
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              {isFormValid() ? (
                <Button
                  variant="btnFormHover"
                  className="w-full"
                  type="button"
                  onClick={handleSubmit}
                >
                  Avançar
                  <Icon name="IconArrowright" className="w-5 h-5" />
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
    <ContractPlansLayout children={mainContent} sideContent={sideContent} />
  );
}

export default StepA1HolderData;

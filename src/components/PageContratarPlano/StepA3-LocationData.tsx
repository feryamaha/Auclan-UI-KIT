"use client";

import React, { useState } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/contractPlans/layout";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal";
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";

export function StepA3LocationData({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const isFormValid = () => {
    return (
      cep.trim() !== "" &&
      address.trim() !== "" &&
      number.trim() !== "" &&
      state.trim() !== "" &&
      city.trim() !== ""
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
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
      updatedStorage[3].data = {
        // Corrigido de 2 para 3
        cep,
        address,
        number,
        complement,
        state,
        city,
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
          currentStep={3} // Ajustado para refletir o step atual
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
              <h2 className="TypographyPlato24 pb-[8px]">Endereço</h2>
              <p className="TypographyPinter16w400">
                Adicione abaixo os dados de endereço.
              </p>
            </div>
          </div>
          <div className="w-max flex">
            <DocolMekal />
          </div>
        </div>
        <div className="w-full justify-between flex">
          <p className="TypographyPlato20">Dados endereço</p>
          <div className="max-w-[542px]">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <input
                type="text"
                id="cep"
                name="cep"
                required
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  id="number"
                  name="number"
                  required
                  placeholder="Número"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  placeholder="Complemento"
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  placeholder="Estado"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
              </div>
              {isFormValid() ? (
                <Button variant="btnFormHover" className="w-full" type="submit">
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

export default StepA3LocationData;

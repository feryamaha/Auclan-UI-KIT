"use client";

// Importações de dependências e componentes
import React, { useState, useEffect } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/contractPlans/layout";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal";
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";

export function StepA2ContactData({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const isFormValid = () => {
    return (
      email.trim() !== "" &&
      phone.trim() !== "" &&
      address.trim() !== "" &&
      city.trim() !== "" &&
      state.trim() !== ""
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
      updatedStorage[2].data = { email, phone, address, city, state };
      localStorage.setItem("mockDataStorage", JSON.stringify(updatedStorage));
      onNext();
    }
  };

  const mainContent = (
    <div className="w-full h-full flex gap-[24px]">
      <div className="w-max">
        <MenuSidebar
          onMenuClick={() => {}}
          currentStep={2}
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
            <form className="w-full flex flex-col gap-4">
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                id="confirme"
                name="Confirme-mail"
                required
                placeholder="Confirme seu e-mail"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  id="celular"
                  name="celular"
                  required
                  placeholder="Celular"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  required
                  placeholder="Telefone"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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

export default StepA2ContactData;

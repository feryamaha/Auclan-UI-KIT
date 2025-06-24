// src/components/PageContratarPlano/StepB-Dependentes/StepB3-AddBasicData.tsx
"use client";

import React, { useState } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";

export function StepB3BasicData({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [motherName, setMotherName] = useState("");
  const [sex, setSex] = useState("");
  const [parentesco, setParentesco] = useState("");
  const [rg, setRg] = useState("");
  const [orgaoEmissor, setOrgaoEmissor] = useState("");
  const [cns, setCns] = useState("");

  const isFormValid = () => {
    return (
      motherName.trim() !== "" &&
      sex.trim() !== "" &&
      parentesco.trim() !== "" &&
      rg.trim() !== "" &&
      orgaoEmissor.trim() !== "" &&
      cns.trim() !== ""
    );
  };

  const mainContent = (
    <div className="w-full h-full flex items-center backdrop-filter backdrop-blur-sm ">
      <div className="w-[40%] h-max mx-auto bg-white rounded-[16px] flex flex-col justify-between ">
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
              <p className="TypographyNavHeader">Etapa 2 de 2</p>

              <h2 className="TypographyPlato20">Dados iniciais </h2>
              <p className="TypographyPinter14w400">
                Agora vamos aos dados básicos.
              </p>
            </div>
          </div>
          <div className="w-full">
            <form className="w-full flex flex-col gap-4">
              <input
                type="text"
                id="mother-name-duplicate"
                name="mother-name"
                required
                placeholder="Nome da mãe*"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <div className="flex gap-[24px] ">
                <input
                  type="text"
                  id="sex"
                  name="sex"
                  required
                  placeholder="Sexo*"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="parentesco"
                  name="parentesco"
                  required
                  placeholder="Parentesco*"
                  value={parentesco}
                  onChange={(e) => setParentesco(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
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
              <div className="flex gap-[24px] ">
                <input
                  type="text"
                  id="rg"
                  name="rg"
                  required
                  placeholder="RG*"
                  value={rg}
                  onChange={(e) => setRg(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  id="orgao-emissor"
                  name="orgao-emissor"
                  required
                  placeholder="Órgão Emissor*"
                  value={orgaoEmissor}
                  onChange={(e) => setOrgaoEmissor(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <input
                type="text"
                id="cns"
                name="cns"
                required
                placeholder="CNS*"
                value={cns}
                onChange={(e) => setCns(e.target.value)}
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

export default StepB3BasicData;

/*  onClick={onNext} */

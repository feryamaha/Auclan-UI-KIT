// src/components/PageContratarPlano/StepB-Dependentes/StepB3-AddBasicData.tsx

"use client";
import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";

export function StepB3BasicData({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const mainContent = (
    <div className="w-screen flex items-start ">
      <h2>Pagina teste Incluir dependentes </h2>
      <p>
        Esta é uma seção generica para testar a inclusao de dependentes antes do
        usuario aceitar os termos e finalizar a contratacao do plano.
      </p>
      <div>
        <form className="flex flex-col gap-4 w-full">
          <label className="flex flex-col">
            <span className="mb-1">Nome</span>
            <input
              type="text"
              name="nome"
              className="border rounded px-2 py-1"
              placeholder="Digite o nome"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Sexo</span>
            <select
              name="sexo"
              className="border rounded px-2 py-1"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione o sexo
              </option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Parentesco</span>
            <input
              type="text"
              name="parentesco"
              className="border rounded px-2 py-1"
              placeholder="Digite o grau de parentesco"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Nome da Mãe</span>
            <input
              type="text"
              name="nomeMae"
              className="border rounded px-2 py-1"
              placeholder="Digite o nome da mãe"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">RG</span>
            <input
              type="text"
              name="rg"
              className="border rounded px-2 py-1"
              placeholder="Digite o RG"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Órgão Emissor</span>
            <input
              type="text"
              name="orgaoEmissor"
              className="border rounded px-2 py-1"
              placeholder="Digite o órgão emissor"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">CNS</span>
            <input
              type="text"
              name="cns"
              className="border rounded px-2 py-1"
              placeholder="Digite o CNS"
            />
          </label>
          <div className="flex gap-2 mt-4">
            <Button variant="btnLink" className="w-full" onClick={onBack}>
              Cancelar
            </Button>
            <Button variant="btnPrimary" className="w-full" onClick={onNext}>
              Adicionar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
  return mainContent;
}

export default StepB3BasicData;

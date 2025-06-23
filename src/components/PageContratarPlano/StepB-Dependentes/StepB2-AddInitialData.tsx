// src/components/PageContratarPlano/StepB-Dependentes/StepB2-AddInitialData.tsx

"use client";
import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";

export function StepB2InitialData({
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
            <span className="mb-1">CPF</span>
            <input
              type="text"
              name="cpf"
              className="border rounded px-2 py-1"
              placeholder="Digite o CPF"
            />
          </label>
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
            <span className="mb-1">Data de Nascimento</span>
            <input
              type="date"
              name="dataNascimento"
              className="border rounded px-2 py-1"
            />
          </label>
        </form>
        <div className="flex gap-2 mt-4">
          <Button variant="btnLink" className="w-full" onClick={onBack}>
            Cancelar
          </Button>
          <Button variant="btnPrimary" className="w-full" onClick={onNext}>
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
  return mainContent;
}

export default StepB2InitialData;

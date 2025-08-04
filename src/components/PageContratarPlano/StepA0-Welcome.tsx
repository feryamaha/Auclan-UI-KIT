"use client";

import React, { useState, ChangeEvent } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layout";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeItemsPlans from "@/components/ui/IncludeItemsPlans";
import matriculasData from "@/data/mockContracPlans/matriculas.json";

interface MatriculaData {
  numero: string;
  nome: string;
}

export function StepA0Welcome() {
  const [matricula, setMatricula] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateMatricula = (value: string) => {
    if (!value || value.length !== 8) {
      setIsValid(false);
      setError("");
      return;
    }
    const encontrada = (matriculasData.matriculas as MatriculaData[]).find(
      (m) => m.numero === value
    );
    if (encontrada) {
      setIsValid(true);
      setError("");
    } else {
      setIsValid(false);
      setError("Matrícula não encontrada");
    }
  };

  const handleMatriculaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "").slice(0, 8);
    setMatricula(v);
    validateMatricula(v);
  };

  const handleAdvance = () => {
    if (!isValid || isLoading) return;
    setIsLoading(true);
    const dados = (matriculasData.matriculas as MatriculaData[]).find(
      (m) => m.numero === matricula
    );
    if (!dados) {
      setError("Matrícula não encontrada");
      setIsLoading(false);
      return;
    }
    localStorage.setItem("matricula", matricula);
    localStorage.setItem("nome", dados.nome);
    window.location.href = "?step=1";
  };

  const mainContent = (
    <div className="max-w-[366px] flex flex-col items-start gap-[12px] mb-[24px]">
      <p className="TypographyPinter14w500">DOCOL MEKAL - 38004</p>
      <h2 className="TypographyPlato24">
        Olá! Vamos começar pela identificação da empresa
      </h2>
      <p className="max-w-[300px] TypographyPinter16w400">
        Para iniciar o processo, insira abaixo o número da matrícula vinculado à
        empresa.
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="w-full">
        <input
          type="text"
          value={matricula}
          onChange={handleMatriculaChange}
          placeholder="Número da matrícula"
          className={`w-full p-2 border rounded-md ${
            error
              ? "border-red-300"
              : isValid
              ? "border-green-500"
              : "border-gray-300"
          }`}
          maxLength={8}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex w-full flex-col mt-[32px] gap-[24px]">
          <Button
            variant="btnSecondary"
            onClick={handleAdvance}
            disabled={!isValid || isLoading}
          >
            {isLoading ? "Processando..." : "Iniciar"}
          </Button>
          <Button
            href="https://www.planosdentaluni.com.br/"
            target="_blank"
            variant="btnLink"
            className="textbtnLink"
          >
            Não sei o número da matrícula
          </Button>
        </div>
      </form>
    </div>
  );

  const sideContent = (
    <div className="w-full h-max flex flex-col">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <Icon name="IconFaviconDental" />
        <div>
          <p className="TypographyPinter16g950">Dental Uni</p>
          <p className="TypographyPinter16w400">Sorria, a gente garante!</p>
        </div>
      </div>
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        <PlanDetailsCard />
        <IncludeItemsPlans />
      </div>
    </div>
  );

  return (
    <ContractPlansLayout sideContent={sideContent}>
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA0Welcome;

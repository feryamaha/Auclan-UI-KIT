"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/contractPlans/layout";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeItemsPlans from "@/components/ui/IncludeItemsPlans";
import matriculasData from "@/data/mockContracPlans/matriculas.json";

// Interface para os dados de matrícula
interface MatriculaData {
  numero: string;
  nome: string;
}

export function StepA0Welcome() {
  const [matricula, setMatricula] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Validação da matrícula
  const validateMatricula = (value: string): void => {
    if (!value || value.length !== 8) {
      setIsValid(false);
      setError("");
      return;
    }

    const matriculaValida = (matriculasData.matriculas as MatriculaData[]).find(
      (m) => m.numero === value
    );

    if (matriculaValida) {
      setIsValid(true);
      setError("");
    } else {
      setIsValid(false);
      setError("Matrícula não encontrada");
    }
  };

  // Manipulador de mudança de input
  const handleMatriculaChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 8);
    setMatricula(value);
    validateMatricula(value);
  };

  // Função para avançar diretamente
  const handleAdvance = (): void => {
    if (!isValid || isLoading) return;

    try {
      setIsLoading(true);

      // Encontrar dados da matrícula
      const matriculaData = (matriculasData.matriculas as MatriculaData[]).find(
        (m) => m.numero === matricula
      );

      // Verificação de segurança
      if (!matriculaData) {
        setError("Matrícula não encontrada");
        setIsLoading(false);
        return;
      }

      // Salvar no localStorage
      localStorage.setItem("matricula", matricula);
      localStorage.setItem("nome", matriculaData.nome);

      // SOLUÇÃO RADICAL: Recarregar a página com um parâmetro de URL para indicar o próximo passo
      // Isso evita completamente qualquer problema no gerenciamento de estado do React
      window.location.href = "?step=1";
    } catch (error) {
      console.error("Erro ao avançar:", error);
      setError(
        "Ocorreu um erro ao processar sua solicitação. Tente novamente."
      );
      setIsLoading(false);
    }
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
      <form
        onSubmit={(e: React.FormEvent) => e.preventDefault()}
        className="w-full"
      >
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
      <div className="max-w-[359px] h-max justify-between flex items-center mx-auto gap-[26px]">
        <div className="w-full grid grid-cols-2 @mobile:grid-cols-3 @Desktop:flex @mobile:gap-x-[74px] gap-[32px] @Desktop:gap-[32px] @mobile:justify-center items-center py-[30px] @Desktop:mx-auto">
          <Link
            href="https://www.paranacooperativo.coop.br/ppc/"
            target="_blank"
            className="w-full flex justify-center"
          >
            <Image
              src="/assets/icons/footer/IconCoperativaFooter.svg"
              alt="Cooperativas"
              width={110}
              height={110}
              className="w-12 h-12 object-cover"
            />
          </Link>
          <Link
            href="https://www.paranacooperativo.coop.br/ppc/"
            target="_blank"
            className="w-full flex justify-center"
          >
            <Image
              src="/assets/icons/footer/IconIGRFooter.svg"
              alt="IGR"
              width={79}
              height={33}
            />
          </Link>
          <Link
            href="https://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar"
            target="_blank"
            className="w-full"
          >
            <Image
              src="/assets/icons/footer/IconTISSFooter.svg"
              alt="TISS"
              width={110}
              height={110}
            />
          </Link>
          <Link
            href="https://www.dentaluni.com.br/pagina/ans"
            target="_blank"
            className="w-full"
          >
            <Image
              src="/assets/icons/footer/IconANSFooter.svg"
              alt="ANS"
              width={110}
              height={110}
            />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <ContractPlansLayout children={mainContent} sideContent={sideContent} />
  );
}

export default StepA0Welcome;

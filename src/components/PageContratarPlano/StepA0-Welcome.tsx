"use client";

// Importações de dependências e componentes
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import ContractPlansLayout from "@/app/page/contractPlans/layout";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeItemsPlans from "@/components/ui/IncludeItemsPlans";
import matriculasData from "@/data/mockContracPlans/matriculas.json";

type HandleIniciar = (matricula: string) => void;

export function StepA0Welcome({ onIniciar }: { onIniciar: HandleIniciar }) {
  const [matricula, setMatricula] = useState("");
  const [error, setError] = useState("");

  // Validação em tempo real do input
  const isValidMatricula = () => {
    const isLengthValid = matricula.length === 8 && /^\d+$/.test(matricula);
    const isInList = matriculasData.matriculas.some(
      (m) => m.numero === matricula
    );
    return isLengthValid && isInList;
  };

  const handleIniciarClick = () => {
    if (onIniciar) {
      if (!isValidMatricula()) {
        setError("Número de matrícula inválido. Tente novamente.");
        return;
      }
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
      updatedStorage[0].data = { matricula };
      localStorage.setItem("mockDataStorage", JSON.stringify(updatedStorage));
      onIniciar(matricula);
      setError("");
    } else {
      setError("Erro ao processar a matrícula.");
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
      <input
        type="text"
        placeholder="Número da matrícula"
        className={`w-full p-2 border border-gray300 rounded-md mb-4 ${
          matricula && !isValidMatricula() ? "border-redSTD" : "border-gray300"
        }`}
        value={matricula}
        onChange={(e) => {
          setMatricula(e.target.value);
          if (error) setError("");
        }}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex w-full flex-col mt-[32px] gap-[24px]">
        <Button variant="btnSecondary" onClick={handleIniciarClick}>
          Iniciar
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

"use client";

// Importações de dependências e componentes
import React, { useState } from "react";
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
    const isLengthValid = matricula.length === 8 && /^\d+$/.test(matricula); // Exatamente 8 dígitos
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
      onIniciar(matricula);
      setError(""); // Limpa o erro ao avançar com sucesso
    } else {
      setError("Erro ao processar a matrícula.");
    }
  };

  // Constante React com conteúdo principal (tipo: ReactNode) para a célula de 68%
  const mainContent = (
    <div className="max-w-[366px] flex flex-col items-start gap-[12px] mb-[24px]">
      <p className="TypographyPinter14w500">DOCOL MEKAL - 38004</p>
      <h2 className="TypographyPlato24">
        Olá! Vamos começar pela identificação da empresa
      </h2>
      <p className="max-w-[300px] TypographyPinter16w400">
        Para iniciar o processo, insira abaixo o número da matrícula vinculado a
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
          if (error) setError(""); // Limpa erro ao digitar
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

  // Constante React com conteúdo secundário (tipo: ReactNode) para a célula de 32%
  const sideContent = (
    <div className="w-full h-max flex flex-col ">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <Icon name="IconFaviconDental" />{" "}
        {/* Componente Icon (tipo: ReactNode) para o favicon da Dental Uni */}
        <div>
          <p className="TypographyPinter16g950">Dental Uni</p>
          <p className="TypographyPinter16w400">Sorria, a gente garante!</p>
        </div>
      </div>
      {/* Card list coverage plans */}
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        <PlanDetailsCard />
        <IncludeItemsPlans />
      </div>
      <div className="max-w-[359px] h-max justify-between flex items-center mx-auto gap-[26px] ">
        <div className="w-full @Desktop:h-[74px] grid grid-cols-2 @mobile:grid-cols-3 @Desktop:flex @mobile:gap-x-[74px] gap-[32px] @Desktop:gap-[32px]  @mobile:justify-center items-center py-[30px] @Desktop:mx-auto ">
          <Link
            href="https://www.paranacooperativo.coop.br/ppc/"
            target="_blank"
            className="w-full flex justify-center"
          >
            <Image
              className="w-12 h-12 object-cover"
              src="/assets/icons/footer/IconCoperativaFooter.svg"
              alt="Cooperativas"
              width={110}
              height={110}
            />
          </Link>

          <Link
            href="https://www.paranacooperativo.coop.br/ppc/"
            target="_blank"
            className=" w-full flex justify-center"
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
            className=" w-full"
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
            className=" w-full"
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

  // Renderiza o layout com props children e sideContent (tipo: ReactNode)
  return (
    <ContractPlansLayout children={mainContent} sideContent={sideContent} />
  );
}

export default StepA0Welcome;

//src/components/PageContrarPlano/StepA0-Welcome.tsx
"use client";

import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";

export function StepA0Welcome() {
  return (
    <>
      <div className="max-w-[366px] flex flex-col items-start gap-[12px] mb-[24px]">
        <p className="TypographyPinter14w500">DOCOL MEKAL - 38004</p>
        <h2 className="TypographyPlato24">
          Olá! Vamos começar pela identificação da empresa
        </h2>
        <p className="max-w-[300px] TypographyPinter16w400">
          Para iniciar o processo, insira abaixo o número da matrícula vinculado
          a empresa.
        </p>
        <input
          type="text"
          placeholder="Número da matrícula"
          className="w-full p-2 border rounded-md mb-4"
        />
        <div className="flex w-full flex-col mt-[32px] gap-[24px]">
          <Button href="/sobre-nos" variant="btnSecondary">
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
      {/* Card side right */}
      <div className="w-max h-max bg-gray100 p-[32px] flex flex-col ">
        <div className="flex items-center gap-[16px]">
          <Icon name="IconFaviconDental"></Icon>
          <div>
            <p className="TypographyPinter16g950">Dental Uni</p>
            <p className="TypographyPinter16w400">Sorria, a gente garante!</p>
          </div>
        </div>
        <div>
          {/* Nome e preço do plano */}
          <div className="flex flex-col items-start ">
            <div className="w-full flex justify-between">
              <p className="TypographyPinter16w500g900">Valor do Plano</p>
              <div className="w-[106px] h-[29px] relative">
                <Icon name="IconFlagPlan"></Icon>
                <p className="h-full absolute inset-0 flex items-center justify-center TypographyPinter14w500g95">
                  Plano Prata
                </p>
              </div>
            </div>
            <div className="w-max flex items-end gap-[8px] ">
              <p className="TypographyH1">R$ 25,00</p>
              <p className="TypographyPinter14w400">/mês por beneficiário</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepA0Welcome;

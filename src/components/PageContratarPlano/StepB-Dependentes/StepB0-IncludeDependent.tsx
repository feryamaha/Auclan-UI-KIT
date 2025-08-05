"use client";

import React, { useEffect } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { useFormContext } from "@/context/FormContext";

export const dynamic = "force-dynamic";
export const revalidate = 0; // Desativa revalidação estática

export function StepB0IncludeDependent() {
  const { handleIncludeNow, handleIncludeLater } = useFormContext();

  // Função handleClose (tipo: Function) para fechar o overlay e redirecionar à página inicial
  const handleClose = () => {};

  // Pré-carregamento das imagens de background via JavaScript
  // Substitua as URLs pelas reais usadas nas classes bg-BGStepB0 e bg-BGCardStepB0
  // Exemplo: se bg-BGStepB0 usa background-image: url('/images/bg-stepb0.jpg'), adicione aqui
  useEffect(() => {
    const preloadImages = [
      "/assets/img/BGStepB0.webp/", // URL real da imagem de bg-BGStepB0
      "/assets/img/BGCardStepB0.webp)", // URL real da imagem de bg-BGCardStepB0
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []); // Executa uma vez quando o componente é montado

  return (
    <>
      <div className="w-screen h-screen absolute inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm">
        <div className="w-[1062px] h-[662px] flex items-start justify-center gap-[32px] z-50 rounded-2xl p-[24px] bg-BGStepB0 bg-cover relative">
          {/* esse botao precisa fechar esse overlay e ter a mesma funcao do botao */}
          <button
            className="w-[48px] h-auto p-[12px] bg-white border border-gray100 rounded-full flex justify-center absolute top-[40px] right-[40px] "
            onClick={handleIncludeLater}
          >
            <Icon name="IconClose" />
          </button>
          <div className="w-[50%]">
            <h2 className="TypographyPlato20">
              Pode sorrir. <br /> A gente garante.
            </h2>
          </div>
          <div className="w-[50%] h-full bg-BGCardStepB0 bg-cover px-[48px] py-[40px] flex flex-col justify-between ">
            <div className="w-full h-max flex flex-col gap-[32px] ">
              <h2 className="max-w-[297px] TypographyPlato20 ">
                Cuide da saúde bucal de quem você ama, aproveite e inclua os
                dependentes agora.
              </h2>

              <div className="flex justify-between">
                <div className="w-[150px] text-start">
                  <p className="TypographyPinter14w500g95">Período</p>
                  <h2 className="TypographyPlato24 pt-[4px] pb-[8px]">
                    12 meses
                  </h2>
                  <p className="TypographyPinter16w400">
                    A partir da inscrição dos beneficiários
                  </p>
                </div>
                <div className="w-[150px] text-start">
                  <p className="TypographyPinter14w500g95">Imediato</p>
                  <h2 className="TypographyPlato24 pt-[4px] pb-[8px]">
                    12 meses
                  </h2>
                  <p className="TypographyPinter16w400">
                    Ao ser desligado da empresa
                  </p>
                </div>
              </div>
              <p className="max-w-[280px] TypographyPinter16g950">
                Garanta agora os benefícios Dental Uni aos seus entes queridos!
              </p>
            </div>
            <div className="flex flex-col gap-[24px]">
              <Button
                variant="btnPrimary"
                className="w-full"
                onClick={handleIncludeNow}
              >
                Incluir dependentes agora
              </Button>
              <Button
                variant="btnLink"
                className="w-full"
                onClick={handleIncludeLater}
              >
                Incluir dependentes depois
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StepB0IncludeDependent;

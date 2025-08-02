"use client";
import React, { useState } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import ModalComparePlans from "./Modal/Comparativo/ModalComparePlans";

export function BarComparePlans() {
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const handleClose = () => {
    setIsCompareOpen(false);
  };

  return (
    <>
      <section className="w-full relative hidden @tablet:flex justify-between py-2 @Desktop:py-[24px] px-[88px] items-center cursor-pointer hover:bg-dark bg-redSTD rounded-[8.5px]">
        {/* Div de fundo que muda de cor no hover */}
        <div className="w-full absolute left-0 top-0 bg-redSTD hover:bg-dark rounded-[8.5px] object-contain border">
          <Icon name="IconFrameBGBarComparePlans" />
        </div>

        {/* Elementos internos com pointer-events-none */}
        <div className="relative flex items-center justify-between w-full z-10 pointer-events-none">
          <p className="w-[234px] TypographyPlato24light">
            Compare os planos e faça a sua escolha
          </p>
          <p className="w-[190px] absolute left-[481px] TypographyPinter16w500light">
            Veja os procedimentos cobertos em cada plano.
          </p>
          {/* Botão com pointer-events-auto para capturar clique */}
          <Button
            variant="btnLink"
            onClick={() => setIsCompareOpen(true)}
            className="pointer-events-auto"
          >
            <Icon
              name="IconArrowLinkBar"
              className="w-[24px] h-[24px] hover:animate-bounce-x"
            />
          </Button>
        </div>
      </section>
      {isCompareOpen && <ModalComparePlans onClose={handleClose} />}
    </>
  );
}

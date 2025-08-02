"use client";
import React, { useState } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import ModalComparePlans from "./Modal/Comparativo/ModalComparePlans";

export function BarComparePlans() {
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = () => {
    setIsCompareOpen(false);
  };

  return (
    <>
      <section
        className="w-full relative hidden @tablet:flex justify-between py-2 @Desktop:py-[24px] px-[88px] items-center cursor-pointer 
        bg-contain rounded-[8.5px] border-2 border-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsCompareOpen(true)}
      >
        {/* Div de fundo que muda no hover */}
        <div className="w-full absolute left-0 top-0 rounded-[8.2px] object-contain">
          <Icon
            name={
              isHovered
                ? "IconFrameBGBarComparePlansHover"
                : "IconFrameBGBarComparePlansDefault"
            }
          />
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

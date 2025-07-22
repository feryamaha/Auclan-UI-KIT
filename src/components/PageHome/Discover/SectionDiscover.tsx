"use client";
import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AccordionFAQ } from "./AccordionFAQ";
import { Icon } from "@/scripts/Icon";
import faqData from "./faqData.json";
import { Button } from "@/components/ui/Button";
import discoverContent from "./discoverContent.json";
import { AccordionFaqMobile } from "./AccordionFaqMobile";

// Interfaces para a estrutura dos dados de conteúdo. Exportadas para uso em outros componentes.
export interface DiscoverItem {
  icon: string;
  text: string;
}

export interface DiscoverContentData {
  imageSrc: string;
  items: DiscoverItem[];
  finalDescription: string;
}

export function SectionDiscover() {
  // State para controlar qual item de conteúdo está ativo na visualização desktop.
  // No mobile, esta lógica agora reside no AccordionFaqMobile.tsx.
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // Handler chamado quando o valor do accordion muda (usado no desktop).
  // Atualiza o activeContentIndex para mostrar o conteúdo correspondente.
  // No mobile, a função similar está dentro do AccordionFaqMobile.tsx.
  const handleAccordionValueChange = (value: string) => {
    if (value) {
      const index = parseInt(value.split("-")[1], 10) - 1;
      setActiveContentIndex(index);
    }
  };

  return (
    <section className="bg-gray50">
      <Container>
        <div className="grid grid-row py-[88px] mt-[120px]">
          {/* Bloco de título da section */}
          <div className="w-full flex justify-start @laptop:justify-center mb-[48px]">
            <div className="w-full max-w-[560px] flex flex-col gap-[8px]  @laptop:text-center">
              <p className="TypographyPinter14w500">
                AINDA NÃO É BENEFICIÁRIO?
              </p>
              <p className="TypographyH1mobile @tablet:TypographyH1 ">
                Descubra o mundo de benefícios que oferecemos.
              </p>
            </div>
          </div>

          {/* Seção para layout Desktop/Laptop/Large */}
          {/* Exibe o AccordionFAQ e o conteúdo ao lado */}
          <div className="w-full justify-between items-start hidden @Desktop:flex ">
            {/* Componente AccordionFAQ (versão básica) */}
            <div className="w-full max-w-[628px]">
              <AccordionFAQ
                data={faqData}
                onValueChange={handleAccordionValueChange}
                defaultValue="item-1"
              />
            </div>

            {/* Bloco de conteúdo para Desktop */}
            {/* Renderiza o conteúdo (imagem, lista, descrição) correspondente ao item ativo do accordion */}
            {/* Esta lógica de renderização de conteúdo é duplicada no AccordionFaqMobile.tsx para o mobile */}
            {discoverContent.map(
              (sectionData: DiscoverContentData, index: number) =>
                // Renderiza o bloco de conteúdo apenas se for o índice ativo no desktop
                index === activeContentIndex && (
                  <div key={index} className="max-w-[520px] h-auto">
                    {/* Imagem do conteúdo */}
                    <div className="w-full h-[278px] mb-[24px]">
                      <img src={sectionData.imageSrc} alt="Discover Image" />
                    </div>
                    {/* Lista de itens do conteúdo */}
                    <div className="flex flex-col p-0 ">
                      {sectionData.items.map(
                        (item: DiscoverItem, itemIndex: number) => (
                          <div className="flex justify-between" key={itemIndex}>
                            {/* Div para ícone e texto do item */}
                            {/* Conditional width e flex properties RESPONSIVO */}
                            <div
                              className={`${
                                index === 1 ? "w-full" : "max-w-[390px]"
                              } flex items-center `}
                            >
                              {/* Renderiza ícone se existir */}
                              {item.icon && (
                                <div
                                  className={`${item.icon ? "mr-4" : "mr-0 "} `}
                                >
                                  <Icon className="" name={item.icon as any} />
                                </div>
                              )}
                              <p className="TypographyPinter16w500g950 ">
                                {item.text}
                              </p>
                            </div>
                            {/* Ícone de seta (renderizado apenas para o primeiro item da lista interna) */}
                            {itemIndex === 0 && <Icon name="IconArrowFAQ" />}
                          </div>
                        )
                      )}
                      {/* Descrição final do conteúdo */}
                      <p className="w-[420px] TypographyPinter16w400 mt-[12px]">
                        {sectionData.finalDescription}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Utiliza o componente AccordionFaqMobile que combina Accordion e Conteúdo */}
          {/* Componente AccordionFaqMobile (versão mobile com conteúdo dentro do item) */}
          <div className="@Desktop:hidden ">
            <AccordionFaqMobile />
          </div>
        </div>
      </Container>
    </section>
  );
}

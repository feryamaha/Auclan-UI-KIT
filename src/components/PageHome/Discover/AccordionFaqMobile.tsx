"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@/scripts/Icon";
import faqData from "@/components/PageHome/Discover/faqData.json";
import discoverContent from "@/components/PageHome/Discover/discoverContent.json";
import {
  DiscoverContentData,
  DiscoverItem,
} from "@/components/PageHome/Discover/SectionDiscover";
import { Button } from "@/components/ui/Button";

export function AccordionFaqMobile() {
  // State para controlar qual item de conteúdo está ativo.
  // Embora o AccordionFAQ possa lidar com isso, mantemos aqui para controle total sobre a renderização mobile.
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // Handler para atualizar o activeContentIndex quando um item do accordion é expandido.
  const handleAccordionValueChange = (value: string) => {
    if (value) {
      const index = parseInt(value.split("-")[1], 10) - 1;
      setActiveContentIndex(index);
    }
  };

  return (
    // Container principal para o componente mobile
    <div className="w-full flex justify-start items-center ">
      <div className="w-full  ">
        {/* Componente Accordion usando os componentes base */}
        <Accordion
          type="single"
          collapsible
          className="w-full h-auto border-b  "
          onValueChange={handleAccordionValueChange}
          defaultValue="item-1"
        >
          {faqData.map((item, index) => (
            // Cada item do Accordion mapeado a partir dos dados do FAQ
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="w-full py-[16px] px-2 "
            >
              {/* Trigger (cabeçalho) do item do accordion */}
              <AccordionTrigger className="TypographyPlato24 @tablet:TypographyPlato20 pt-0 pb-[8px] hover:text-redSTD w-full ">
                {item.question}
              </AccordionTrigger>
              {/* Conteúdo do item do accordion */}
              <AccordionContent className="flex flex-col justify-start items-start">
                {/* Resposta básica do FAQ */}
                <p className="TypographyPinter16w400">{item.answer}</p>

                {/* Adiciona o botão LINK original do FAQ nos items 1 e 2 apenas */}
                {item.buttonText && item.buttonHref && (
                  <Button
                    href={item.buttonHref}
                    variant="btnLink"
                    className="textbtnLink hover:text-red700 mt-[16px]"
                  >
                    {item.buttonText}
                    <Icon name="IconArrowright" className="w-5 h-5" />
                  </Button>
                )}

                {/* Conteúdo mobile detalhado, renderizado DENTRO deste AccordionContent */}
                {/* Esta estrutura interna REPLICA a do bloco de conteúdo desktop em SectionDiscover.tsx (linhas ~58-81) */}
                {/* Renderiza este bloco de conteúdo apenas se for o índice ativo, garantindo que o conteúdo correto apareça ao expandir o item */}
                {index === activeContentIndex && discoverContent[index] && (
                  <div key={index} className="w-full mt-4 ">
                    {/* Imagem do conteúdo mobile */}
                    <div className="w-full h-auto mb-[24px]">
                      <img
                        src={
                          (discoverContent[index] as DiscoverContentData)
                            .imageSrc
                        }
                        alt="Discover Image"
                        className="w-full object-cover "
                      />
                    </div>

                    {/* Div para a lista de itens (ícone + texto) e descrição */}
                    <div className="flex flex-col">
                      {(
                        discoverContent[index] as DiscoverContentData
                      ).items.map(
                        (discoverItem: DiscoverItem, itemIndex: number) => (
                          <div
                            className="flex justify-between "
                            key={itemIndex}
                          >
                            {/* Div para ícone e texto do item, replicando as classes de SectionDiscover */}
                            <div
                              className={`${
                                index === 1
                                  ? "w-full"
                                  : "max-w-[390px] h-[20px]"
                              } flex items-start  `}
                            >
                              {/* Wrapper para o ícone, replicando a lógica de renderização condicional e margem */}
                              {discoverItem.icon && (
                                <div
                                  className={`${
                                    discoverItem.icon ? "mr-4" : "mr-0 "
                                  } `}
                                >
                                  <Icon
                                    className=""
                                    name={discoverItem.icon as any}
                                  />
                                </div>
                              )}
                              <p className="TypographyPinter16w500g950 ">
                                {discoverItem.text}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                      {/* Descrição final do conteúdo mobile, replicando as classes de SectionDiscover */}
                      <p className="max-w-[420px] TypographyPinter16w400 pt-4">
                        {
                          (discoverContent[index] as DiscoverContentData)
                            .finalDescription
                        }
                      </p>
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

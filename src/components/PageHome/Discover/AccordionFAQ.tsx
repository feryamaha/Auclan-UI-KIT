// AccordionFAQ.tsx: Componente básico de Accordion.
// Utilizado na versão desktop da section Discover e estendido no AccordionFaqMobile para a versão mobile.
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/scripts/Icon";
import {
  DiscoverContentData,
  DiscoverItem,
} from "@/components/PageHome/Discover/SectionDiscover";

interface FaqItem {
  question: string;
  answer: string;
  buttonText?: string;
  buttonHref?: string;
}

interface AccordionFAQProps {
  data: FaqItem[];
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  mobileContentData?: DiscoverContentData[];
}

export function AccordionFAQ({
  data,
  onValueChange,
  defaultValue,
  mobileContentData,
}: AccordionFAQProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-[628px]  "
      onValueChange={onValueChange}
      defaultValue={defaultValue}
    >
      {data.map((item, index) => (
        <AccordionItem
          value={`item-${index + 1}`}
          key={index}
          className="py-[16px] "
        >
          {/* Trigger (cabeçalho) do item do accordion */}
          <AccordionTrigger className="TypographyPlato20 pt-0 pb-[8px] hover:text-redSTD w-full flex gap-[12px] ">
            {item.question}
          </AccordionTrigger>
          {/* Conteúdo do item do accordion */}
          <AccordionContent className="w-full flex flex-col justify-start items-start">
            {/* Resposta básica do FAQ */}
            <p className="TypographyPinter16w400">{item.answer}</p>

            {/* Bloco para renderizar conteúdo extra mobile, SE A PROP mobileContentData FOR PASSADA */}
            {mobileContentData && mobileContentData[index] && (
              // A estrutura interna deste bloco é idêntica à do conteúdo desktop em SectionDiscover.tsx
              <div className="w-full mt-4">
                <div className="w-full h-[278px] mb-[24px]">
                  <img
                    src={mobileContentData[index].imageSrc}
                    alt="Discover Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  {mobileContentData[index].items.map(
                    (discoverItem: DiscoverItem, itemIndex: number) => (
                      <div className="flex justify-between" key={itemIndex}>
                        <div
                          className={`${
                            index === 1 ? "w-full" : "max-w-[390px] h-[20px]"
                          } flex items-start`}
                        >
                          {discoverItem.icon && (
                            <div
                              className={`${
                                discoverItem.icon ? "mr-4" : "mr-0"
                              }`}
                            >
                              <Icon
                                className=""
                                name={discoverItem.icon as any}
                              />
                            </div>
                          )}
                          <p className="TypographyPinter16w500g950">
                            {discoverItem.text}
                          </p>
                        </div>
                        {itemIndex === 0 && <Icon name="IconArrowFAQ" />}
                      </div>
                    )
                  )}
                  <p className="w-full TypographyPinter16w400 pt-4">
                    {mobileContentData[index].finalDescription}
                  </p>
                </div>
              </div>
            )}

            {/* Botão buscar dentistas credenciados https://site.dentaluni.com.br/rede-credenciada */}
            {item.buttonText && item.buttonHref && (
              <Button
                href={item.buttonHref}
                variant="btnLink"
                className="textbtnLink hover:text-red700 mt-[16px] p-0 "
              >
                {item.buttonText}
                <Icon name="IconArrowright" className="w-5 h-5" />
              </Button>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

"use client";

// Importações de dependências e componentes
import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import plansData from "@/components/PageOurPlans/BannerHome/ListSectionPlans.json";

// Definição de tipos para ícones válidos (ajuste conforme Icon.tsx)
type ValidIconNames =
  | "IconIncludPlans"
  | "IconNotCoverage"
  | "IconArrowCoverage"
  | "IconFlagPlan";

interface IncludedItem {
  iconInclud: ValidIconNames;
  textInclud?: string;
  textIncludA?: string;
  textIncludB?: string;
  textIncludC?: string;
  textIncludD?: string;
  textIncludE?: string;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  IncludTitle: string;
  includA: { iconInclud: string; textIncludA: string }[];
  includB: { iconInclud: string; textIncludB: string }[];
  includC: { iconInclud: string; textIncludC: string }[];
  includD: { iconInclud: string; textIncludD: string }[];
  includE: { iconInclud: string; textIncludE: string }[];
  procedures: string;
}

interface IncludedItemsProps {
  IncludTitle?: string;
  includA?: IncludedItem[];
  includB?: IncludedItem[];
  includC?: IncludedItem[];
  includD?: IncludedItem[];
  includE?: IncludedItem[];
  procedures?: string;
}

// Função para mapear os itens e garantir compatibilidade com IncludedItem
const mapToIncludedItem = (
  items: { iconInclud: string; [key: string]: string }[]
): IncludedItem[] => {
  return items.map((item) => ({
    iconInclud: item.iconInclud as ValidIconNames, // Asserção de tipo para garantir que é um valor válido
    textIncludA: item.textIncludA,
    textIncludB: item.textIncludB,
    textIncludC: item.textIncludC,
    textIncludD: item.textIncludD,
    textIncludE: item.textIncludE,
  }));
};

// Componente React para renderizar itens incluídos
export function IncludeItemsPlans({
  IncludTitle,
  includA,
  includB,
  includC,
  includD,
  includE,
  procedures,
}: IncludedItemsProps) {
  // Usar dados do JSON como base se nenhuma prop for passada
  const prataPlan = plansData.plans.find((plan) => plan.name === "Plano Prata");
  const defaultIncludA = prataPlan ? mapToIncludedItem(prataPlan.includA) : [];
  const defaultIncludB = prataPlan ? mapToIncludedItem(prataPlan.includB) : [];
  const defaultIncludC = prataPlan ? mapToIncludedItem(prataPlan.includC) : [];
  const defaultIncludD = prataPlan ? mapToIncludedItem(prataPlan.includD) : [];
  const defaultIncludE = prataPlan ? mapToIncludedItem(prataPlan.includE) : [];
  const defaultProcedures = prataPlan
    ? prataPlan.procedures
    : "191 procedimentos ao total";
  const defaultTitle = prataPlan
    ? prataPlan.IncludTitle
    : "O que está incluso?";

  const items = [
    ...(includA || defaultIncludA),
    ...(includB || defaultIncludB),
    ...(includC || defaultIncludC),
    ...(includD || defaultIncludD),
    ...(includE || defaultIncludE),
  ];

  return (
    <div className="mt-[12px] pt-[24px] border-t">
      <h3 className="TypographyPlato20">{IncludTitle || defaultTitle}</h3>
      <div className="flex flex-col gap-[8px] pt-[16px]">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-[8px]">
            <Icon name={item.iconInclud} className="text-green-500" />{" "}
            {/* Ícone de check verde */}
            <p className="TypographyPinter16w400">
              {item.textInclud ||
                item.textIncludA ||
                item.textIncludB ||
                item.textIncludC ||
                item.textIncludD ||
                item.textIncludE}
            </p>
          </div>
        ))}
        {procedures || defaultProcedures ? (
          <div className="flex items-center gap-[16px] ">
            <Button
              href="https://www.planosdentaluni.com.br/"
              target="_blank"
              variant="btnLink"
              className="textbtnLink"
            >
              191 procedimentos ao total
            </Button>
            <Icon name="IconPathFaq" />
            {/* Destaque em vermelho para procedimentos */}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default IncludeItemsPlans;

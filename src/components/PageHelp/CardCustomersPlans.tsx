"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/scripts/Icon";
import Link from "next/link";

interface Plan {
  id: string;
  name: string;
  price: number;
}

interface CardCustomersPlansProps {
  selectedPlan: string;
  beneficiaries: number;
  plans: Plan[];
}

export function CardCustomersPlans({
  selectedPlan,
  beneficiaries,
  plans,
}: CardCustomersPlansProps) {
  const plan = plans.find((p) => p.name === selectedPlan);
  const totalPrice = plan
    ? new Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(plan.price * beneficiaries)
    : "0,00";

  return (
    <div className="w-full @tablet:w-[519px] h-[432px] mt-[48px] @tablet:mt-0 p-[32px] border rounded-[16px] @laptop:bg-none bg-BgHomeHelPlans bg-cover @tablet:bg-contain bg-no-repeat">
      <div className="mb-[32px]">
        <p className="TypographyPinter16w400">
          <span className="TypographyPinter16redSTD">
            {selectedPlan.toLowerCase()}
          </span>{" "}
          para
          <h2 className="TypographyH2 pt-[8px]">
            {beneficiaries} beneficiários
          </h2>
        </p>
      </div>
      <div className="mb-[48px] flex flex-col gap-[8px]">
        <p className="TypographyPinter16w400">por apenas</p>
        <h1 className="TypographyH1">R$ {totalPrice}</h1>
        <p className="max-w-[162px] TypographyPinter14w400">
          por mês por beneficiário no cartão de crédito.
        </p>
      </div>
      <div className="w-full">
        <Link href="/page/contractPlans">
          <Button
            variant="btnSecondary"
            className="w-full mb-[24px] py-[12px] hover:bg-red700"
          >
            Contratar agora
          </Button>
        </Link>
        <Button
          href="/plans"
          variant="btnLink"
          className="textbtnLink hover:text-red700"
        >
          Conhecer mais o plano
          <Icon name="IconArrowright" className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}

export default CardCustomersPlans;

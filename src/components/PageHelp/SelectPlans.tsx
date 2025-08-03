"use client";

import React from "react";

interface Plan {
  id: string;
  name: string;
  price: number;
}

interface SelectPlansProps {
  plans: Plan[];
  selectedPlan: string;
  onPlanChange: (plan: string) => void;
}

export function SelectPlans({
  plans,
  selectedPlan,
  onPlanChange,
}: SelectPlansProps) {
  return (
    <div className="w-full flex flex-col">
      <h2 className="TypographyPlato20 pb-[16px]">Selecione o plano</h2>

      <div className="w-full flex gap-[12px] overflow-x-auto scrollbar-none">
        {plans.map((plan) => (
          <button
            key={plan.id}
            className={`TypographyIntraMenuSlider cursor-pointer w-max ${
              selectedPlan === plan.name
                ? "TypographyIntraMenuSliderHover font-bold"
                : "hover:TypographyIntraMenuSliderHover"
            }`}
            onClick={() => onPlanChange(plan.name)}
          >
            {plan.name.split("Plano ")[1]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectPlans;

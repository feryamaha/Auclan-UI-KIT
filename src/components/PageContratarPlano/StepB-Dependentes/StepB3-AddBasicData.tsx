"use client";

import React, { useState, ChangeEvent } from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import MenuSidebar from "@/components/ui/MenuSidebar";
import { useFormContext as useGlobalFormContext } from "@/context/FormContext";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { z } from "zod";

interface StepB3BasicDataProps {
  onNext: () => void;
  onBack: () => void;
}

const basicDataSchema = z.object({
  nomeMae: z.string().min(3, "Digite o nome da mãe"),
  sexo: z.string().min(1, "Informe o sexo"),
  parentesco: z.string().min(2, "Informe o parentesco"),
});

export function StepB3BasicData({ onNext, onBack }: StepB3BasicDataProps) {
  const { onMenuClick, currentStep, completedSteps } = useGlobalFormContext();

  const [form, setForm] = useState({
    nomeMae: "",
    sexo: "",
    parentesco: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleValidateAndNext = () => {
    const result = basicDataSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    onNext();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex gap-[24px] w-[80%] h-[80%]">
        {/* Modal Content */}
        <div className="flex-1 bg-white rounded-r-[16px] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center border-b px-[32px] py-[16px]">
            <h2 className="TypographyPlato20">Dados básicos do dependente</h2>
            <button onClick={onBack} className="p-[12px]">
              <Icon name="IconClose" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-[32px] py-[16px] flex flex-col gap-[24px]">
            <FloatingLabelInput
              label="Nome da mãe"
              name="nomeMae"
              placeholder="Digite o nome da mãe"
              value={form.nomeMae}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("nomeMae", e.target.value)
              }
              errors={errors}
            />
            <FloatingLabelInput
              label="Sexo"
              name="sexo"
              placeholder="Masculino"
              value={form.sexo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("sexo", e.target.value)
              }
              errors={errors}
            />
            <FloatingLabelInput
              label="Parentesco"
              name="parentesco"
              placeholder="Filho"
              value={form.parentesco}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("parentesco", e.target.value)
              }
              errors={errors}
            />
          </div>

          {/* Footer */}
          <div className="border-t px-[32px] py-[16px] flex justify-between">
            <Button variant="btnLinkForm" onClick={onBack}>
              Cancelar
            </Button>
            <Button variant="btnFormHover" onClick={handleValidateAndNext}>
              Avançar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepB3BasicData;

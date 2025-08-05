"use client";

import React from "react";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { useFormContext } from "@/context/FormContext";
import { UseFormReturn } from "react-hook-form"; // Import necessário para tipar form
import { FormData } from "@/lib/formSchema"; // Assuma que isso existe e define FormData com dependents

// Interface para dependent (baseada no seu código; ajuste conforme o schema real)
interface Dependent {
  fullName: string;
  cpf: string;
  birthDate: string;
  motherName: string;
  sex: string;
  parentesco: string;
  rg: string;
  orgaoEmissor: string;
  cns: string;
}

export function StepB4AddCompletionData() {
  const { form, handleNext, handleBack, setStep } = useFormContext();

  // Checagem para form não ser undefined (non-null assertion para TS)
  if (!form) {
    throw new Error("Form is not available in context");
  }
  const { getValues, setValue } = form as UseFormReturn<FormData>;

  const dependents = getValues("dependents") || [] as Dependent[];

  const handleRemoveDependent = (index: number) => {
    const updatedDependents = dependents.filter((_, i) => i !== index);
    setValue("dependents", updatedDependents);
  };

  const handleEditDependent = (index: number) => {
    setStep(32); // Volta para edição inicial; ajuste se precisar de step específico
  };

  const mainContent = (
    <div className="w-screen flex items-start">
      <div className="w-full flex flex-col gap-[24px]">
        <h2 className="TypographyPlato24">Revisão de Dependentes</h2>
        <p className="TypographyPinter16w400">
          Revise os dependentes adicionados antes de prosseguir.
        </p>
        {dependents.length === 0 ? (
          <p className="TypographyPinter16w500g950">
            Nenhum dependente adicionado.
          </p>
        ) : (
          <ul className="flex flex-col gap-4">
            {dependents.map((dep: Dependent, index: number) => (
              <li
                key={index}
                className="border p-4 rounded-md flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Nome:</strong> {dep.fullName}
                  </p>
                  <p>
                    <strong>CPF:</strong> {dep.cpf}
                  </p>
                  <p>
                    <strong>Data de Nascimento:</strong> {dep.birthDate}
                  </p>
                  <p>
                    <strong>Nome da Mãe:</strong> {dep.motherName}
                  </p>
                  <p>
                    <strong>Sexo:</strong> {dep.sex}
                  </p>
                  <p>
                    <strong>Parentesco:</strong> {dep.parentesco}
                  </p>
                  <p>
                    <strong>RG:</strong> {dep.rg}
                  </p>
                  <p>
                    <strong>Órgão Emissor:</strong> {dep.orgaoEmissor}
                  </p>
                  <p>
                    <strong>CNS:</strong> {dep.cns}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="btnLink"
                    onClick={() => handleEditDependent(index)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="btnLink"
                    className="text-red-500"
                    onClick={() => handleRemoveDependent(index)}
                  >
                    Remover
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Button variant="btnLink" className="w-max" onClick={() => setStep(32)}>
          <Icon name="IconADDITION" className="w-5 h-5 rotate-180" />
          Adicionar dependente
        </Button>
        <Button variant="btnPrimary" className="w-full" onClick={handleNext}>
          Avançar
        </Button>
        <Button variant="btnLink" className="w-max" onClick={handleBack}>
          Voltar
        </Button>
      </div>
    </div>
  );

  return mainContent;
}

export default StepB4AddCompletionData;


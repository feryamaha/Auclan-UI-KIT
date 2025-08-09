"use client";

import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contractPlansSchema } from "@/schemas/contractPlansSchema";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layoutMain";
import MenuSidebar from "@/components/ui/MenuSidebar";
import DocolMekal from "../ui/docolMekal";
import IncludeBeneficiaryCard from "../ui/IncludeBeneficiaryCard";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import { useFormContext } from "@/context/FormContext";

type FormData = z.infer<typeof contractPlansSchema>;

interface StepA3LocationDataProps {
  onNext: () => void;
  onBack: () => void;
}

export function StepA3LocationData({
  onNext,
  onBack,
}: StepA3LocationDataProps) {
  const { onMenuClick, currentStep, completedSteps } = useFormContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(contractPlansSchema),
    mode: "onChange",
    defaultValues: {
      holder: {
        cpf: "",
        beneficiaryName: "",
        motherName: "",
        sex: "",
        civilStatus: "",
        nomeConjuge: "",
      },
      contact: {
        email: "",
        emailConfirmation: "",
        cellPhone: "",
        phone: "",
      },
      location: {
        cep: "",
        address: "",
        number: "",
        complement: "",
        state: "",
        city: "",
      },
    },
  });

  // Log temporário para depurar o control
  console.log("Control in StepA3:", control);

  const cep = useWatch({ control, name: "location.cep" });
  const address = useWatch({ control, name: "location.address" });
  const number = useWatch({ control, name: "location.number" });
  const complement = useWatch({ control, name: "location.complement" });
  const state = useWatch({ control, name: "location.state" });
  const city = useWatch({ control, name: "location.city" });

  // Lógica para verificar se todos os campos obrigatórios estão preenchidos e validados
  const isFormValid = React.useMemo(() => {
    const isCepValid = cep && /^\d{5}-\d{3}$/.test(cep);
    const isAddressValid =
      address && address.length >= 3 && /^[\p{L}\s0-9]+$/u.test(address);
    const isNumberValid = number && /^\d+$/.test(number);
    const isStateValid = state && /^[A-Z]{2}$/.test(state);
    const isCityValid = city && city.length >= 3 && /^[\p{L}\s]+$/u.test(city);
    const isComplementValid = true; // Complemento é opcional

    const isValid =
      isCepValid &&
      isAddressValid &&
      isNumberValid &&
      isStateValid &&
      isCityValid;

    console.log("isFormValid:", {
      isValid,
      isCepValid,
      isAddressValid,
      isNumberValid,
      isStateValid,
      isCityValid,
      isComplementValid,
    }); // Log temporário para depuração

    return isValid;
  }, [cep, address, number, complement, state, city]);

  // Log temporário para depurar valores dos campos
  console.log("Form values:", {
    cep,
    address,
    number,
    complement,
    state,
    city,
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados de endereço:", data.location);
    onNext();
  };

  return (
    <ContractPlansLayout
      sideContent={
        <div className="w-full h-max flex flex-col gap-[8px]">
          <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
            <PlanDetailsCard />
          </div>
          <IncludeBeneficiaryCard />
        </div>
      }
    >
      <div className="w-full h-full flex gap-[24px]">
        <div className="w-max">
          <MenuSidebar
            onMenuClick={onMenuClick || (() => {})}
            currentStep={currentStep}
            completedSteps={Array.from(completedSteps)}
          />
        </div>
        <div className="w-full flex flex-col gap-[32px]">
          <div className="w-full h-max pb-[32px] border-b flex justify-between">
            <div className="w-max flex flex-col">
              <Button
                variant="btnLink"
                className="textbtnLink w-max"
                onClick={onBack}
              >
                <Icon name="IconArrowright" className="w-5 h-5 rotate-180" />
                Voltar
              </Button>
              <div className="w-[210px] pt-[8px]">
                <h2 className="TypographyPlato24 pb-[8px]">Endereço</h2>
                <p className="TypographyPinter16w400">
                  Agora precisamos de alguns dados de localização.
                </p>
              </div>
            </div>
            <div className="w-max flex">
              <DocolMekal />
            </div>
          </div>
          <div className="w-full justify-between flex">
            <p className="TypographyPlato20">Dados de endereço</p>
            <div className="max-w-[542px]">
              <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <FloatingLabelInput
                  label="CEP"
                  name="location.cep"
                  type="text"
                  placeholder="Digite o CEP (ex: 12345-678)"
                  register={register}
                  errors={errors}
                  control={control}
                  validation={{
                    required: "CEP é obrigatório",
                    pattern: {
                      value: /^\d{5}-\d{3}$/,
                      message: "Formato de CEP inválido (ex: 12345-678)",
                    },
                  }}
                />
                <FloatingLabelInput
                  label="Endereço"
                  name="location.address"
                  type="text"
                  placeholder="Digite o endereço (ex: Rua Exemplo)"
                  register={register}
                  errors={errors}
                  control={control}
                  validation={{
                    required: "Endereço é obrigatório",
                    minLength: {
                      value: 3,
                      message: "Endereço deve ter no mínimo 3 caracteres",
                    },
                    pattern: {
                      value: /^[\p{L}\s0-9]+$/u,
                      message: "Caracteres inválidos",
                    },
                  }}
                />
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <FloatingLabelInput
                      label="Número"
                      name="location.number"
                      type="text"
                      placeholder="Digite o número (ex: 123)"
                      register={register}
                      errors={errors}
                      control={control}
                      validation={{
                        required: "Número é obrigatório",
                        pattern: {
                          value: /^\d+$/,
                          message: "Apenas números permitidos",
                        },
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <FloatingLabelInput
                      label="Complemento (opcional)"
                      name="location.complement"
                      type="text"
                      placeholder="Digite o complemento (opcional)"
                      register={register}
                      errors={errors}
                      control={control}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <FloatingLabelInput
                      label="Estado"
                      name="location.state"
                      type="text"
                      placeholder="Digite o estado (ex: SP)"
                      register={register}
                      errors={errors}
                      control={control}
                      validation={{
                        required: "Estado é obrigatório",
                        pattern: {
                          value: /^[A-Z]{2}$/,
                          message:
                            "Estado deve conter apenas 2 letras maiúsculas",
                        },
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <FloatingLabelInput
                      label="Cidade"
                      name="location.city"
                      type="text"
                      placeholder="Digite a cidade (ex: São Paulo)"
                      register={register}
                      errors={errors}
                      control={control}
                      validation={{
                        required: "Cidade é obrigatória",
                        minLength: {
                          value: 3,
                          message: "Cidade deve ter no mínimo 3 caracteres",
                        },
                        pattern: {
                          value: /^[\p{L}\s]+$/u,
                          message: "Caracteres inválidos",
                        },
                      }}
                    />
                  </div>
                </div>
                {isFormValid ? (
                  <Button
                    variant="btnFormHover"
                    className="w-full"
                    type="submit"
                    onClick={onNext}
                  >
                    Avançar
                    <Icon name="IconArrowright" className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button variant="btnForm" className="w-full" disabled>
                    Avançar
                    <Icon name="IconArrowright" className="w-5 h-5" />
                  </Button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContractPlansLayout>
  );
}

export default StepA3LocationData;

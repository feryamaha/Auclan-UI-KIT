"use client";

import React, { useState, useEffect } from "react";
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

// Dropdown de estados brasileiros
const BRAZILIAN_STATES = [
  { value: "", label: "Selecione o estado" },
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "MG", label: "Minas Gerais" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
];

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
    setValue,
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

  // Lógica mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Watchers
  const cep = useWatch({ control, name: "location.cep" });
  const address = useWatch({ control, name: "location.address" });
  const number = useWatch({ control, name: "location.number" });
  const complement = useWatch({ control, name: "location.complement" });
  const state = useWatch({ control, name: "location.state" });
  const city = useWatch({ control, name: "location.city" });

  // Validação (igual StepA1 e StepA2)
  const isFormValid = React.useMemo(() => {
    const isCepValid = cep && /^\d{5}-\d{3}$/.test(cep);
    const isAddressValid =
      address && address.length >= 3 && /^[\p{L}\s0-9]+$/u.test(address);
    const isNumberValid = number && /^\d+$/.test(number);
    const isStateValid = state && /^[A-Z]{2}$/.test(state);
    const isCityValid = city && city.length >= 3 && /^[\p{L}\s]+$/u.test(city);

    return (
      isCepValid &&
      isAddressValid &&
      isNumberValid &&
      isStateValid &&
      isCityValid
    );
  }, [cep, address, number, state, city]);

  const onSubmit = (data: FormData) => {
    onNext();
  };

  const mainContent = (
    <div className="w-full h-full flex gap-[24px]">
      {/* Só mostra MenuSidebar no desktop */}
      {!isMobile && (
        <div className="w-max">
          <MenuSidebar
            onMenuClick={onMenuClick || (() => {})}
            currentStep={currentStep}
            completedSteps={Array.from(completedSteps)}
          />
        </div>
      )}
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
          <div className="w-max flex hidden @tablet:block">
            <DocolMekal />
          </div>
        </div>
        <div className="w-full justify-between flex flex-col @tablet:flex-row">
          <p className="TypographyPlato20 mb-[16px] @tablet:mb-0">
            Dados de endereço
          </p>
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
                  <div className="relative">
                    <label className="block text-[#818181] pb-1 pl-[2px] text-[15px]">
                      Estado
                    </label>
                    <select
                      className={`form-select w-full h-[56px] rounded-[8px] border ${
                        errors?.location?.state
                          ? "border-red-500"
                          : "border-[#E0E7EF]"
                      } px-4 outline-none bg-transparent focus:ring-2 focus:ring-[#5882F2] transition`}
                      {...register("location.state", {
                        required: "Estado é obrigatório",
                        pattern: {
                          value: /^[A-Z]{2}$/,
                          message: "Selecione um estado válido",
                        },
                        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
                          setValue("location.state", e.target.value);
                        },
                      })}
                      value={state || ""}
                    >
                      {BRAZILIAN_STATES.map((uf) => (
                        <option key={uf.value} value={uf.value}>
                          {uf.label}
                        </option>
                      ))}
                    </select>
                    {errors?.location?.state && (
                      <span className="text-xs text-red-500 mt-1 pl-1">
                        {errors.location.state.message?.toString()}
                      </span>
                    )}
                  </div>
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
  );

  const sideContent = (
    <div className="w-full h-max flex flex-col gap-[8px]">
      <div className="w-full h-max py-[16px] px-[24px] bg-white rounded-[8px]">
        <PlanDetailsCard />
      </div>
      <IncludeBeneficiaryCard />
    </div>
  );

  return (
    <ContractPlansLayout
      sideContent={sideContent}
      currentStep={currentStep}
      totalSteps={6}
      stepTitle="Endereço"
      completedSteps={Array.from(completedSteps)}
      onMenuClick={onMenuClick}
    >
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA3LocationData;


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

interface StepA2ContactDataProps {
  onNext: () => void;
  onBack: () => void;
}

export function StepA2ContactData({ onNext, onBack }: StepA2ContactDataProps) {
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
      contact: {
        email: "",
        emailConfirmation: "",
        cellPhone: "",
        phone: "",
      },
    },
  });

  const email = useWatch({ control, name: "contact.email" });
  const emailConfirmation = useWatch({ control, name: "contact.emailConfirmation" });
  const cellPhone = useWatch({ control, name: "contact.cellPhone" });
  const phone = useWatch({ control, name: "contact.phone" });

  const isFormValid = React.useMemo(() => {
    const isEmailValid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isEmailConfirmationValid = emailConfirmation && email === emailConfirmation;
    const isCellPhoneValid = cellPhone && /^\(\d{2}\) 9\d{4}-\d{4}$/.test(cellPhone);
    const isPhoneValid = !phone || /^\(\d{2}\) \d{4,5}-\d{4}$/.test(phone);

    return (
      isEmailValid &&
      isEmailConfirmationValid &&
      isCellPhoneValid &&
      isPhoneValid
    );
  }, [email, emailConfirmation, cellPhone, phone]);

  const onSubmit = (data: FormData) => {
    onNext();
  };

  // 🔹 Detectar se é Mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
              <h2 className="TypographyPlato24 pb-[8px]">Contato</h2>
              <p className="TypographyPinter16w400">
                Agora precisamos de alguns dados para contato.
              </p>
            </div>
          </div>
          <div className="w-max flex hidden @tablet:block">
            <DocolMekal />
          </div>
        </div>
        <div className="w-full justify-between flex flex-col @tablet:flex-row">
          <p className="TypographyPlato20 mb-[16px] @tablet:mb-0">Dados contato</p>
          <div className="max-w-[542px]">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FloatingLabelInput
                label="E-mail"
                name="contact.email"
                type="email"
                placeholder="Ex: exemplo@dominio.com"
                register={register}
                errors={errors}
                control={control}
                validation={{
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de e-mail inválido",
                  },
                }}
              />
              <FloatingLabelInput
                label="Confirmação de e-mail"
                name="contact.emailConfirmation"
                type="email"
                placeholder="Ex: exemplo@dominio.com"
                register={register}
                errors={errors}
                control={control}
                validation={{
                  required: "Confirmação de e-mail é obrigatória",
                  validate: (value: string) =>
                    value === email || "Os e-mails não coincidem",
                }}
              />
              <div className="flex gap-4">
                <div className="w-1/2">
                  <FloatingLabelInput
                    label="Celular"
                    name="contact.cellPhone"
                    type="text"
                    placeholder="Ex: (11) 99999-9999)"
                    register={register}
                    errors={errors}
                    control={control}
                    validation={{
                      required: "Celular é obrigatório",
                      pattern: {
                        value: /^\(\d{2}\) 9\d{4}-\d{4}$/,
                        message: "Formato inválido Ex: (11) 99999-9999)",
                      },
                    }}
                  />
                </div>
                <div className="w-1/2">
                  <FloatingLabelInput
                    label="Telefone (opcional)"
                    name="contact.phone"
                    type="text"
                    placeholder="Digite o telefone (ex: (11) 99999-9999) - opcional"
                    register={register}
                    errors={errors}
                    control={control}
                    validation={{
                      pattern: {
                        value: /^\(\d{2}\) \d{4,5}-\d{4}$/,
                        message:
                          "Formato de telefone inválido (ex: (11) 99999-9999)",
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
      stepTitle="Contato"
      completedSteps={Array.from(completedSteps)}
      onMenuClick={onMenuClick}
    >
      {mainContent}
    </ContractPlansLayout>
  );
}

export default StepA2ContactData;


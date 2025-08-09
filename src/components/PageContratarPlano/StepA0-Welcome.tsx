"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { matriculaSchema } from "@/schemas/contractPlansSchema";
import { Icon } from "@/scripts/Icon";
import { Button } from "../ui/Button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import ContractPlansLayout from "@/app/page/(contractPlans)/contractPlans/layoutMain";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeItemsPlans from "@/components/ui/IncludeItemsPlans";
import { useFormContext } from "@/context/FormContext";

type MatriculaFormData = z.infer<typeof matriculaSchema>;

interface StepA0WelcomeProps {
  onNext: () => void;
}

export function StepA0Welcome({ onNext }: StepA0WelcomeProps) {
  const { onMenuClick, currentStep, completedSteps } = useFormContext();

  const {
    register,
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm<MatriculaFormData>({
    resolver: zodResolver(matriculaSchema),
    mode: "onChange",
  });

  const onSubmit = (data: MatriculaFormData) => {
    console.log("Matrícula submetida:", data);
    onNext();
  };

  return (
    <ContractPlansLayout
      children={
        <div className="max-w-[366px] flex flex-col items-start gap-[12px] mb-[24px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-[12px]"
          >
            <p className="TypographyPinter14w500">DOCOL MEKAL - 38004</p>
            <h2 className="TypographyPlato24">
              Olá! Vamos começar pela identificação da empresa
            </h2>
            <p className="max-w-[300px] TypographyPinter16w400">
              Para iniciar o processo, insira abaixo o número da matrícula
              vinculado à empresa.
            </p>
            <div className="w-full">
              <FloatingLabelInput
                label="Número da matrícula"
                name="matricula"
                type="text"
                placeholder="Número da matrícula"
                onlyNumbers={true}
                register={register}
                errors={errors}
                control={control}
                validation={{
                  required: "Número da matrícula é obrigatório",
                  pattern: {
                    value: /^\d+$/,
                    message: "A matrícula deve conter apenas números",
                  },
                }}
              />
            </div>
            <div className="flex w-full flex-col mt-[32px] gap-[24px]">
              <Button variant="btnSecondary" type="submit" disabled={!isValid}>
                Iniciar
              </Button>
              <Button
                href="https://www.planosdentaluni.com.br/"
                target="_blank"
                variant="btnLink"
                className="textbtnLink"
              >
                Não sei o número da matrícula
              </Button>
            </div>
          </form>
        </div>
      }
      sideContent={
        <div className="w-full h-max flex flex-col">
          <div className="flex items-center gap-[16px] mb-[16px]">
            <Icon name="IconFaviconDental" />
            <div>
              <p className="TypographyPinter16g950">Dental Uni</p>
              <p className="TypographyPinter16w400">Sorria, a gente garante!</p>
            </div>
          </div>
          <div className="w-full h-max py-[16px] px-[24px] bg-white shadow-xs shadow-gray-950 rounded-[8px]">
            <PlanDetailsCard />
            <IncludeItemsPlans />
          </div>
          <div className="max-w-[359px] h-max justify-between flex items-center mx-auto gap-[26px]">
            <div className="w-full grid grid-cols-2 @mobile:grid-cols-3 @Desktop:flex @mobile:gap-x-[74px] gap-[32px] @Desktop:gap-[32px] @mobile:justify-center items-center py-[30px] @Desktop:mx-auto">
              <Link
                href="https://www.paranacooperativo.coop.br/ppc/"
                target="_blank"
                className="w-full flex justify-center"
              >
                <Image
                  src="/assets/icons/footer/IconCoperativaFooter.svg"
                  alt="Cooperativas"
                  width={110}
                  height={110}
                  className="w-12 h-12 object-cover"
                />
              </Link>
              <Link
                href="https://www.paranacooperativo.coop.br/ppc/"
                target="_blank"
                className="w-full flex justify-center"
              >
                <Image
                  src="/assets/icons/footer/IconIGRFooter.svg"
                  alt="IGR"
                  width={79}
                  height={33}
                />
              </Link>
              <Link
                href="https://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar"
                target="_blank"
                className="w-full"
              >
                <Image
                  src="/assets/icons/footer/IconTISSFooter.svg"
                  alt="TISS"
                  width={110}
                  height={110}
                />
              </Link>
              <Link
                href="https://www.dentaluni.com.br/pagina/ans"
                target="_blank"
                className="w-full"
              >
                <Image
                  src="/assets/icons/footer/IconANSFooter.svg"
                  alt="ANS"
                  width={110}
                  height={110}
                />
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default StepA0Welcome;

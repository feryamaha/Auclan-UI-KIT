"use client";
import React, { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { CardSectionPlans } from "@/components/PageHome/AmazingPlans/CardSectionPlans";
import plansData from "./ListSectionPlans.json";
import { PlansData } from "@/types/menuConfigMobile";
import IntraMenu from "./IntraMenu";
import { Icon } from "@/scripts/Icon";
import CoveragePlans from "./CoveragePlans";
import { BarComparePlans } from "@/components/PageHome/AmazingPlans/BarComparePlans";
import BannerHomeOurPlans from "./BannerHomeOurPlans";
import { SectionQuestions } from "@/components/PageHome/Questions/SectionQuestions";
import { Button } from "@/components/ui/Button";
import ModalProcedimentos from "@/components/PageHome/AmazingPlans/Modal/Procedimentos/ModalProcedimentos"; // Adicionada importação

const typedPlansData = plansData as PlansData;

export function HomePlans() {
  const [isCoverageVisible, setCoverageVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPlanId, setCurrentPlanId] = useState("");
  const coverageRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (planId: string) => {
    setCurrentPlanId(planId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentPlanId(""); // Opcional: limpa o planId ao fechar
  };

  useEffect(() => {
    if (isCoverageVisible && coverageRef.current) {
      setTimeout(() => {
        const rect = coverageRef.current!.getBoundingClientRect();
        const targetPosition =
          window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }, 100);
    }
  }, [isCoverageVisible]);

  return (
    <>
      <section className="w-full" id="idPageOurPlans">
        <Container>
          <div className="max-w-[671px] flex flex-col justify-center mx-auto text-center @mobile:mt-[56px] mt-[64px] mb-[128px] @mobile:mt-[80px] @mobile:mb-[64px]">
            <div className="w-[153px] mx-auto">
              <Icon name="IconDucol" />
            </div>
            <h1 className="pt-[16px] pb-[16px] TypographyH2 @tablet:TypographyH1homePlans">
              Cuidado com a saúde bucal a partir de R$ 23,40 por mês.
            </h1>
            <p className="max-w-[519px] px-2 @mobile:px-0 TypographyPinter16w400 @tablet:TypographyPinter18home mx-auto">
              Tenha acesso a uma das maiores redes credenciadas e cobertura com
              preços incríveis.
            </p>
          </div>

          <div className="max-w-[1280px] h-max mx-auto flex flex-col overflow-x-auto @Desktop:overflow-hidden scrollbar-hidden @laptop:border rounded-[8px]">
            <div className="w-max mx-auto bg-white justify-center flex z-10">
              {typedPlansData.plans.map((plan, index, array) => (
                <div key={`desktop-${plan.id}`}>
                  <CardSectionPlans
                    id={plan.id}
                    name={plan.name}
                    price={plan.price}
                    description={plan.description}
                    IncludTitle={plan.IncludTitle}
                    includA={plan.includA}
                    includB={plan.includB}
                    includC={plan.includC}
                    includD={plan.includD}
                    includE={plan.includE}
                    procedures={plan.procedures}
                    hideVector={index === array.length - 1}
                    vectorIconClass="IconVetorCardPlansCoverage"
                    onOpenModal={() => handleOpenModal(plan.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${
              isCoverageVisible ? "opacity-100" : "opacity-0 hidden"
            } transition-opacity duration-300 mt-[16px]`}
            ref={coverageRef}
          >
            <CoveragePlans />
          </div>

          <div
            className={
              isCoverageVisible
                ? "hidden"
                : "block w-[80%] @laptop:w-[93%] h-[18px] mt-[-0.5px] mb-2 mx-auto spaceFalseCoverage"
            }
          />

          <div
            className="max-w-max h-max flex items-center justify-center mx-auto mt-[18px] mb-[26px] gap-[8px] z-40 cursor-pointer py-[13px] px-[24px]"
            onClick={() => setCoverageVisible(!isCoverageVisible)}
          >
            <Button
              className="TypographyPinter16w600 hover:text-red700"
              variant="btnLink"
            >
              {isCoverageVisible ? "Ver menos" : "Ver mais"}
            </Button>
            <div
              className={`transition-transform duration-300 ${
                isCoverageVisible ? "rotate-180" : ""
              }`}
            >
              <Icon name="IconArrowDowCoverage" />
            </div>
          </div>

          <div className="mt-2">
            <BarComparePlans />
          </div>
        </Container>
      </section>

      {isModalOpen && (
        <ModalProcedimentos onClose={handleCloseModal} planId={currentPlanId} />
      )}

      <BannerHomeOurPlans />
      <SectionQuestions />
    </>
  );
}

export default HomePlans;

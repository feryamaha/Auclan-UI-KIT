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

const typedPlansData = plansData as PlansData;

export function HomePlans() {
  // Estado para controlar a visibilidade do CoveragePlans
  const [isCoverageVisible, setCoverageVisible] = useState(false);
  // Referência para o elemento CoveragePlans para rolar até ele
  const coverageRef = useRef<HTMLDivElement>(null);

  // Alterna a visibilidade
  const toggleCoverageVisibility = () => {
    setCoverageVisible(!isCoverageVisible);
  };

  // Efeito para rolar até o CoveragePlans quando ele for revelado
  useEffect(() => {
    if (isCoverageVisible && coverageRef.current) {
      coverageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isCoverageVisible]);

  return (
    <>
      {/* Section principal */}
      <section className="w-full " id="idPageOurPlans" >
        <Container>
          <div className="mt-[24px]">
            <IntraMenu />
          </div>

          <div className="max-w-[671px] flex flex-col justify-center mx-auto text-center mt-[56px] mb-[64px]">
            <div className="w-[153px] mx-auto">
              <Icon name="IconDucol" />
            </div>
            <h1 className="pt-[16px] pb-[16px] TypographyH2 @tablet:TypographyH1homePlans">
              Cuidado com a saúde bucal a partir de R$ 23,40 por mês.
            </h1>
            <p className=" max-w-[519px] TypographyPinter16w400 @tablet:TypographyPinter18home mx-auto ">
              Tenha acesso a uma das maiores redes credenciadas e cobertura com
              preços incríveis.
            </p>
          </div>
          {/* Card plans */}
          <div className="max-w-[1280px] h-max mx-auto flex flex-col overflow-x-auto @Desktop:overflow-hidden scrollbar-hidden @laptop:border rounded-[8px] ">
            <div className="w-max mx-auto bg-white  justify-center flex z-10 ">
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
                    vectorIconClass="IconVetorCardPlansCoverage" // Specific icon for HomePlans
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Bloco coverage */}
          <div
            className={isCoverageVisible ? "block mt-[16px]" : "hidden"}
            ref={coverageRef}
          >
            <CoveragePlans />
          </div>
          {/* div space false coverage */}
          <div
            className={
              isCoverageVisible
                ? "hidden"
                : "block w-[80%] @laptop:w-[93%] h-[10px] mt-[-0.5px] mb-2 mx-auto spaceFalseCoverage"
            }
          ></div>

          {/* Botao ver mais / ver menos para fazer surgir o conteudo coverage que fica sempre ocutado abaixo dos card plans */}
          <div
            className="max-w-[1116px] flex items-center justify-center mx-auto p-6 gap-[8px] cursor-pointer  z-40 "
            onClick={toggleCoverageVisibility}
          >
            <a className="TypographyPinter16w600">
              {isCoverageVisible ? "Ver menos" : "Ver mais"}
            </a>
            <div
              className={`transition-transform duration-300 ${
                isCoverageVisible ? "rotate-180" : ""
              }`}
            >
              <Icon name="IconArrowDowCoverage" />
            </div>
          </div>
          {/* Componente importado barra de comparacao de planos */}
          <div className="mt-2">
            <BarComparePlans />
          </div>
        </Container>
      </section>

      {/* Componente Banner de contratacao de planos */}

      <BannerHomeOurPlans />
      <SectionQuestions />
    </>
  );
}

export default HomePlans;

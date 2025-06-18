"use client";
import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/scripts/Icon";
import { CardSectionPlans } from "./CardSectionPlans";
import { CardSPlansMobile } from "./CardSPlansMobile";
import plansData from "./ListSectionPlans.json";
import { BarComparePlans } from "./BarComparePlans";

const DESKTOP_BREAKPOINT_PX = 1440; // Value for desktop breakpoint

export function SectionPlans() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT_PX);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);

  return (
    <section className="w-full h-auto">
      <Container className="py-[64px]">
        <div className="flex flex-col gap-[16px] justify-between">
          <div className="w-full @tablet:h-[196px] flex flex-wrap @tablet:flex-row @tablet:gap-[152px] pb-[40px]">
            <div className="max-w-[502px] flex flex-col justify-between">
              <h1 className="TypographyH1">
                Planos incríveis a partir de R$ 23,40 por mês
              </h1>
              <p className="max-w-[380px] TypographyPinter16w400">
                Tenha acesso a uma das maiores redes credenciadas e cobertura
                com preços incríveis.
              </p>
            </div>
            <div className="max-w-[300px] h-[114px] mt-[42px] flex flex-col justify-between items-start">
              <p className=" TypographyPinter16w500g950">Quer mais detalhes?</p>
              <p className="pt-[8px] pb-[12px] TypographyPinter16w400">
                Clique abaixo e veja a cobertura, regras, orientações e os
                detalhes de cada plano.
              </p>
              <Button
                href="https://www.planosdentaluni.com.br/"
                target="_blank"
                variant="btnLink"
                className="textbtnLink"
              >
                Ir para a página planos
                <Icon name="IconArrowright" className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div
            className="w-full border rounded-[8px] justify-center"
            style={{ display: isDesktop ? "flex" : "none" }}
          >
            {plansData.plans.map((plan, index, array) => (
              <div key={`desktop-${plan.id}`}>
                <CardSectionPlans
                  id={plan.id}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  procedures={plan.procedures}
                  hideVector={index === array.length - 1}
                  vectorIconClass="IconVetorCardPlans" // Specific icon for SectionPlans
                />
              </div>
            ))}
          </div>

          <div
            className="w-full flex flex-wrap gap-[24px] justify-center"
            style={{ display: isDesktop ? "none" : "flex" }}
          >
            {plansData.plans.map((plan, index, array) => (
              <div key={`mobile-${plan.id}`}>
                <CardSPlansMobile
                  id={plan.id}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  procedures={plan.procedures}
                />
              </div>
            ))}
          </div>

          <BarComparePlans />
        </div>
      </Container>
    </section>
  );
}

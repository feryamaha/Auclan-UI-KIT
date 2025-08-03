"use client";
import React from "react";
import { SectionQuestions } from "../PageHome/Questions/SectionQuestions";
import { Container } from "../ui/Container";
import { Contact } from "./Contact";
import SliderNumber from "./SliderNumber";
import SelectPlans from "./SelectPlans";
import CardCustomersPlans from "./CardCustomersPlans";
import plansData from "./data/plans.json"; // Ajuste o caminho conforme a estrutura do projeto

export function HomeHelp() {
  const [selectedPlan, setSelectedPlan] = React.useState(
    plansData.plans[2].name
  );
  const [beneficiaries, setBeneficiaries] = React.useState(3);

  return (
    <section>
      <Container>
        <div className="w-full bg-BgHomeHelp bg-cover">
          <div className="flex flex-col @tablet:flex-row justify-between pt-[48px] @mobile:pt-[56px] pb-[80px] gap-[5%]">
            <div className="max-w-[471px] h-max flex items-start flex-col gap-[40px]">
              <div className="max-w-[420px]">
                <h1 className="TypographyH2 @tablet:TypographyH1 pb-[16px]">
                  Ainda em dúvida? Simule os valores agora
                </h1>
                <p className="max-w-[390px] TypographyPinter16w400 @tablet:TypographyPinter18home">
                  Simule agora os preços incríveis para cuidar da saúde bucal da
                  sua família com a Dental Uni.
                </p>
              </div>

              <SelectPlans
                plans={plansData.plans}
                selectedPlan={selectedPlan}
                onPlanChange={setSelectedPlan}
              />

              <div className="w-full flex flex-col items-start ">
                <h2 className="TypographyPlato20 pb-[20px] @mobile:pb-[16px]">
                  Quantidade beneficiários
                </h2>
                <div>
                  <SliderNumber
                    initialValue={beneficiaries}
                    onChange={setBeneficiaries}
                  />
                </div>
              </div>
            </div>
            <CardCustomersPlans
              selectedPlan={selectedPlan}
              beneficiaries={beneficiaries}
              plans={plansData.plans}
            />
          </div>
        </div>
      </Container>
      <Contact />
      <SectionQuestions />
    </section>
  );
}

export default HomeHelp;

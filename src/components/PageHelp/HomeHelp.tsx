"use client";
import { SectionQuestions } from "../PageHome/Questions/SectionQuestions";
import { Container } from "../ui/Container";
import { Contact } from "./Contact";
import SliderNumber from "./SliderNumber";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/scripts/Icon";

export function HomeHelp() {
  return (
    <section>
      <Container>
        <div className="w-full bg-BgHomeHelp bg-cover ">
          <div className="flex flex-col @tablet:flex-row justify-between pt-[56px] pb-[80px] gap-[5%] ">
            <div className="max-w-[471px] h-max flex flex-col gap-[40px]">
              <div className="max-w-[420px] ">
                <h1 className="TypographyH2 @tablet:TypographyH1 pb-[16px] ">
                  Ainda em dúvida? Simule os valores agora
                </h1>
                <p className="max-w-[380px] TypographyPinter16w400 @tablet:TypographyPinter18home ">
                  Simule agora os preços incríveis para cuidar da saúde bucal da
                  sua família com a Dental Uni.
                </p>
              </div>

              <div className=" flex flex-col">
                <h2 className="TypographyPlato20 pb-[20px]">
                  Selecione o plano
                </h2>
                <div className="w-full flex items-start justify-between gap-[13px] overflow-x-auto scrollbar-hidden ">
                  <a className="TypographyIntraMenuSlider cursor-pointer hover:TypographyIntraMenuSliderHover">
                    Bronze
                  </a>
                  <a className="TypographyIntraMenuSlider cursor-pointer hover:TypographyIntraMenuSliderHover">
                    Prata
                  </a>
                  <a className="TypographyIntraMenuSlider cursor-pointer hover:TypographyIntraMenuSliderHover">
                    Ouro
                  </a>
                  <a className="TypographyIntraMenuSlider cursor-pointer hover:TypographyIntraMenuSliderHover">
                    Platina
                  </a>
                  <a className="TypographyIntraMenuSlider cursor-pointer hover:TypographyIntraMenuSliderHover">
                    Diamante
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start overflow-x-auto scrollbar-hidden">
                <h2 className="TypographyPlato20 pb-[20px] ">
                  Quantidade beneficiários
                </h2>
                <div>
                  <SliderNumber /* initialValue={3}  */ />
                </div>
              </div>
            </div>

            <div className="w-full @tablet:w-[519px] h-[432px] mt-[48px] @tablet:mt-0 p-[32px] border rounded-[16px] @laptop:bg-none bg-BgHomeHelPlans bg-cover @tablet:bg-contain bg-no-repeat ">
              <div className="mb-[32px]">
                <p className="TypographyPinter16w400">
                  <span className="TypographyPinter16redSTD">
                    {" "}
                    plano Bronze{" "}
                  </span>{" "}
                  para
                  <h2 className="TypographyH2">3 beneficiários</h2>
                </p>
              </div>

              <div className="mb-[40px]">
                <p className="TypographyPinter16w400">por apenas</p>
                <h1 className=" TypographyH1">R$ 36,00</h1>
                <p className="max-w-[162px] TypographyPinter14w400">
                  por mês por beneficiário no cartão de crédito.
                </p>
              </div>
              <div className="w-full  ">
                <Button
                  href="https://www.planosdentaluni.com.br/"
                  variant="btnSecondary"
                  className="w-full mb-[24px]"
                >
                  Contratar agora
                </Button>
                <Button
                  href="https://www.planosdentaluni.com.br/"
                  target="_blank"
                  variant="btnLink"
                  className="textbtnLink"
                >
                  Conhecer mais o plano
                  <Icon name="IconArrowright" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Contact />
      <SectionQuestions />
    </section>
  );
}

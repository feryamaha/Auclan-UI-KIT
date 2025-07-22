import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/scripts/Icon";
import { AccordionFAQ } from "@/components/PageHome/Discover/AccordionFAQ";
import questionsFaqData from "./questionsFaqData.json";

export function SectionQuestions() {
  return (
    <>
      <section id="Section-questions">
        <Container>
          <div className="w-full mx-auto flex flex-col gap-[32px] @tablet:flex-row justify-between py-[120px] ">
            <div className=" flex flex-col items-start max-w-[378px]  ">
              <div className="max-w-[378px] ">
                <h1 className="pb-4 TypographyH1">Perguntas frequentes</h1>
                <p className="TypographyPinter16w400 w-full">
                  Confira ao lado as respostas às dúvidas mais comuns. Se tiver
                  outras perguntas, utilize a central de ajuda ou o
                  autoatendimento.
                </p>
              </div>

              <div className="flex flex-col @laptop:flex-row gap-8 mt-8">
                <Button
                  href="https://site.dentaluni.com.br/ajuda"
                  variant="btnSecondary"
                  className="hover:bg-red700"
                >
                  Central de ajuda
                </Button>

                <Button
                  href="https://dentaluni.com.br/autoatendimento"
                  target="_blank"
                  variant="btnLink"
                  className="textbtnLink hover:text-red700"
                >
                  Autoatendimento
                  <Icon name="IconArrowright" className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-[32px] items-start ">
              <AccordionFAQ data={questionsFaqData} />
              <Button
                href="https://site.dentaluni.com.br/ajuda"
                target="_blank"
                variant="btnLink"
                className="textbtnLink hover:text-red700"
              >
                Ver todas as perguntas
                <Icon name="IconArrowright" className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Icon } from "@/scripts/Icon";

export function SmileCare() {
  return (
    <>
      <section>
        <Container className="w-full py-[120px]">
          <div className="flex flex-col @laptop:flex-row gap-[24px] ">
            <div className="w-full flex flex-col  @tablet:flex-row justify-between">
              {/* DIV1 */}
              <div className="max-w-md flex flex-col items-start mb-8 @laptop:mb-0 md:max-w-full">
                <p className="pb-[8px] TypographyPinter14w500">
                  SORRIA SEMPRE COM A DENTAL UNI
                </p>
                <h2 className="pb-[16px] TypographyH1mobile @tablet:TypographyH1 ">
                  Cuidar do seu sorriso é o nosso compromisso.
                </h2>
                <p className="max-w-[22.375rem] TypographyPinter16w400">
                  Com mais de 40 anos de experiência, nosso objetivo é
                  proporcionar acesso fácil e acessível a cuidados odontológicos
                  de alta qualidade.
                </p>
                <div className="flex w-full flex-col @mobile:flex-row gap-8 mt-[32px]">
                  <Button
                    href="https://site.dentaluni.com.br/sobre-nos"
                    variant="btnSecondary"
                    className=" hover:bg-red700"
                  >
                    Saber mais
                  </Button>
                  <Button
                    href="/plans"
                    variant="btnLink"
                    className="textbtnLink hover:text-red700"
                  >
                    Conhecer os planos
                    <Icon name="IconArrowright" className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              {/* DIV2 */}
              <div className="relative max-w-[419.5px] max-h-[532.5px]">
                <Image
                  src="/smile.webp"
                  alt="Sorriso Dental Uni"
                  width={430}
                  height={520}
                  className="object-cover "
                  priority
                />
              </div>
            </div>

            {/* DIV3 */}
            {/* Visível abaixo de desktop, escondido em desktop+ */}
            <div className="flex hidden @laptop:flex flex-col gap-8 max-w-[17.25rem]  ">
              <div className="pr-2 ">
                <div className="ml-4 pb-[2px]">
                  <Icon name="IconGroupstar" className="w-6 h-6 " />
                </div>
                <p className="pl-4 border-l-2 border-redSTD TypographyPinter16w500g900 ">
                  <span className="text-redSTD ">Excelente nota</span> no Índice
                  de Desempenho da Saúde Suplementar (IDSS)
                </p>
              </div>

              <div className="border-l-2 border-redSTD pl-4 pr-8 TypographyPinter16w500g900 ">
                <p className="">
                  <span className="text-redSTD ">
                    +1 milhão de beneficiários
                  </span>{" "}
                  Dental Uni por todo o Brasil
                </p>
              </div>

              <div className="border-l-2 border-redSTD pl-4 TypographyPinter16w500g900 ">
                <p className="">
                  <span className="text-redSTD ">
                    +15 mil áreas de atendimento
                  </span>{" "}
                  qualificado no Brasil
                </p>
              </div>

              <div className="border-l-2 border-redSTD pl-4 pr-4  TypographyPinter16w500g900">
                <p className="">
                  <span className="text-redSTD ">
                    +70% dos nossos profissionais são especialistas
                  </span>{" "}
                  em suas áreas
                </p>
              </div>
            </div>

            {/* DIV3 - MOBILE */}
            {/* Visível (como flex-col) abaixo de desktop, escondido em desktop+ */}
            <div className="flex flex-col  w-full @laptop:hidden overflow-x-auto scrollbar-none">
              <div className="pl-4">
                <Icon name="IconGroupstar" className=" w-6 h-6 " />
              </div>

              <div className="flex w-[1056px] items-center h-max gap-[24px]">
                <div className="relative h-full  ">
                  <p className=" pl-4 w-[200px] border-l-2 border-redSTD TypographyPinter16w500g900 ">
                    <span className="text-redSTD ">Excelente nota</span> no
                    Índice de Desempenho da Saúde Suplementar{" "}
                    <span className="text-redSTD">(IDSS)</span>
                  </p>
                </div>
                <div className="h-full w-[210px] border-l-2 border-redSTD pl-4  TypographyPinter16w500g900  ">
                  <p className="">
                    <span className="text-redSTD ">
                      +1 milhão de beneficiários
                    </span>{" "}
                    Dental Uni por todo o Brasil
                  </p>
                </div>
                <div className="h-full w-[260px] border-l-2 border-redSTD pl-4 TypographyPinter16w500g900 ">
                  <p className="">
                    <span className="text-redSTD ">
                      +15 mil áreas de atendimento
                    </span>{" "}
                    qualificado no Brasil
                  </p>
                </div>
                <div className="h-full w-[267px] border-l-2 border-redSTD pl-4   TypographyPinter16w500g900  ">
                  <p className="">
                    <span className="text-redSTD ">
                      +70% dos nossos profissionais são especialistas
                    </span>{" "}
                    em suas áreas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

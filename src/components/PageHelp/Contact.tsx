import { Container } from "../ui/Container";
import { Icon } from "@/scripts/Icon";
import FormHelp from "./FormHelp";

export function Contact() {
  return (
    <>
      <section className=" w-full h-[429px] bg-BgContactMobile @mobile:bg-BgContactTablet @laptop:bg-BgContact bg-cover mx-auto">
        <Container className="mx-auto">
          <div className="w-full pt-[48px] @laptop:pt-[80px]">
            <h1 className="TypographyH1white max-w-[437px] pb-[16px]">
              Entre em contato
            </h1>
            <p className="max-w-[367px] TypographyPinter16white">
              Envie a sua mensagem ou entre em contato. Ficaremos felizes em te
              ajudar!
            </p>
          </div>
        </Container>
      </section>
      <section className="w-full h-max relative pt-[400px] @mobile:pt-[480px] @tablet:pt-0 @tablet:mb-[120px] @laptop:mb-0">
        <Container>
          <div className="py-[32px]">
            <div className="max-w-[508px] h-[204px] flex flex-col gap-[24px] ">
              <div className="flex items-center gap-[16px]">
                <div>
                  <Icon name="IconTelefone" className="w-6 h-6" />
                </div>
                <div>
                  <p className="TypographyPinter16w400 mb-[8px]">Telefone</p>
                  <p className="TypographyPinter16w500g950">(41) 3320-2929</p>
                </div>
              </div>

              <div className="flex items-center gap-[16px]">
                <div>
                  <Icon name="IconEmail" className="w-6 h-6" />
                </div>
                <div>
                  <p className="TypographyPinter16w400 mb-[8px]">E-mail</p>
                  <p className="TypographyPinter16w500g950">sac@acp.org.br</p>
                </div>
              </div>

              <div className="flex items-center gap-[16px]">
                <div>
                  <Icon name="IconLocation" className="w-6 h-6" />
                </div>
                <div>
                  <p className="TypographyPinter16w400 mb-[8px] ">Endereço</p>
                  <p className="TypographyPinter16w500g950 w-[280px] @laptop:w-full  ">
                    Rua Nevada, 670 - Londrina PR - CEP: 86.060-238
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="absolute -top-[310px]  right-[80px] "> */}
          <div className="w-full @mobile:w-max absolute -top-[190px] @mobile:-top-[120px] @laptop:-top-[360px] right-0 @mobile:right-auto @tablet:right-[80px] px-[2px]">
            <FormHelp />
          </div>
        </Container>
      </section>
    </>
  );
}

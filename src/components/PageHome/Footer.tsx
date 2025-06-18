import Image from "next/image";
import { Icon } from "@/scripts/Icon";
import Link from "next/link";
import { RASeal } from "../ui/ReclameAqui";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="w-full ">
      <div className="w-full @Desktop:bg-gray50 relative z-[-1] ">
        <Image
          src="/assets/icons/footer/bgFooter.png"
          alt="ANS N304484"
          width={568}
          height={112}
          className="absolute left-0 top-0 hidden @Desktop:block "
        />

        <div className=" w-full h-full flex flex-col @Desktop:flex-row justify-between items-center  ">
          <div className=" w-full @Desktop:max-w-[40%] h-auto @Desktop:h-[112px] flex flex-col @Desktop:flex-row items-center z-[2] py-[16px] px-[16px] gap-[12px] bg-redSTD @Desktop:bg-transparent  ">
            <div className="w-full @mobile:w-[50%] flex justify-center items-center border-b border-red200 @Desktop:border-none pb-[12px]">
              <Link href="/" className=" ">
                <Image
                  src="/assets/icons/footer/IconLogoDentalFooter.svg"
                  alt="Logo"
                  width={154}
                  height={24}
                />
              </Link>
            </div>

            <div className="w-full @Desktop:max-w-[120px] flex flex-row @Desktop:flex-col justify-between @mobile:justify-center @mobile:gap-[10%] ">
              <Image
                src="/assets/icons/footer/IconANSn304484Footer.svg"
                alt="ANS N304484"
                width={110}
                height={110}
              />
              <p className=" text-center TypographyPinter9 ">
                Responsável técnico
                <br />
                <span className="TypographyPinter10">Dr. Eduardo Carrilho</span>
                <br />
                CRO/PR - 14673
              </p>
            </div>
          </div>

          <div className="max-w-[673px] @Desktop:h-[74px] grid grid-cols-2 @mobile:grid-cols-3 @Desktop:flex @mobile:gap-x-[74px] gap-[32px] @Desktop:gap-[32px]  @mobile:justify-center items-center py-[30px] @Desktop:mx-auto ">
            <Link href="/idss" className=" w-full">
              <Image
                src="/assets/icons/footer/IconIDSSFooter.svg"
                alt="IDSS"
                width={105}
                height={65}
              />
            </Link>

            <Link
              href="https://www.dentaluni.com.br/pagina/ans"
              target="_blank"
              className=" w-full"
            >
              <Image
                src="/assets/icons/footer/IconANSFooter.svg"
                alt="ANS"
                width={110}
                height={110}
              />
            </Link>

            <Link
              href="https://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar"
              target="_blank"
              className=" w-full"
            >
              <Image
                src="/assets/icons/footer/IconTISSFooter.svg"
                alt="TISS"
                width={110}
                height={110}
              />
            </Link>

            <Link
              href="https://www.paranacooperativo.coop.br/ppc/"
              target="_blank"
              className="w-full flex justify-center"
            >
              <Image
                className="w-12 h-12 object-cover"
                src="/assets/icons/footer/IconCoperativaFooter.svg"
                alt="Cooperativas"
                width={110}
                height={110}
              />
            </Link>

            <Link
              href="https://www.paranacooperativo.coop.br/ppc/"
              target="_blank"
              className=" w-full flex justify-center"
            >
              <Image
                src="/assets/icons/footer/IconIGRFooter.svg"
                alt="IGR"
                width={79}
                height={33}
              />
            </Link>

            <a className="w-full max-w-[74px] mx-auto flex justify-center rounded-[3px] border border-blueBORDER p-[7px] cursor-pointer ">
              <RASeal />
            </a>
          </div>
        </div>
      </div>

      <Container className="">
        <div className=" grid  grid-col-1 @mobile:grid-cols-3 @laptop:grid-cols-4  gap-14 pt-12 md:grid-cols-1 ">
          <div className=" pb-[21px] border-b-gray100 border-b">
            <h4 className="pb-6 TypographyPinter16w500g95 ">
              Fale com a gente
            </h4>
            <ul className=" flex flex-col gap-2">
              <li className="flex flex-col gap-1">
                <span className="TypographyPinter14w400footer">
                  Capitais e região metropolitana
                </span>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w500 "
                  href="tel:40072525"
                >
                  4007 2525
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="TypographyPinter14w400footer">
                  Demais localidades
                </span>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w500 "
                  href="tel:08006033683"
                >
                  0800 603 3683
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="TypographyPinter14w400footer">Vendas</span>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w500 "
                  href="tel:08000526000"
                >
                  0800 052 6000
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" pb-6 TypographyPinter16w500g95">Ouvidoria</h4>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-col gap-1">
                <span className="TypographyPinter14w400footer ">
                  Capitais e região metropolitana
                </span>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w500 "
                  href="tel:40072400"
                >
                  4007 2400
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="TypographyPinter14w400footer">
                  Demais localidades
                </span>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w500"
                  href="tel:08006434300"
                >
                  0800 643 4300
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" pb-6 TypographyPinter16w500g95">Links úteis</h4>
            <ul className="flex flex-col gap-2 ">
              <li>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w400 "
                  href="/rede-credenciada"
                >
                  Rede credenciada
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w400 "
                  href="https://desbloqueio.dentaluni.com.br/"
                  target="_blank"
                >
                  Desbloqueie o seu cartão
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w400 "
                  href="https://www.dentaluni.com.br/autoatendimento"
                  target="_blank"
                >
                  Autoatendimento
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w400 "
                  href="/noticias"
                >
                  Blog & Notícias
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-200 ease-linear TypographyPinter14w400 "
                  href="/ajuda"
                >
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full mb-[30px] @tablet:mb-0 ">
            <h4 className=" pb-6 TypographyPinter16w500g95 hidden @tablet:block  ">
              Siga a Dental Uni
            </h4>
            <ul className="w-full flex items-center justify-center @tablet:justify-start gap-2">
              <li>
                <Link
                  href="https://www.facebook.com/DentalUNI/"
                  target="_blank"
                >
                  <Icon name="IconFacebook" className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/dentaluni/"
                  target="_blank"
                >
                  <Icon name="IconInstagram" className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/dental-uni-cooperativa-odontol%C3%B3gica"
                  target="_blank"
                >
                  <Icon name="IconLinkedin" className="w-6 h-6" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/user/dentaluni"
                  target="_blank"
                >
                  <Icon name="IconYoutube" className="w-6 h-6" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center @tablet:justify-between ">
          <ul className="flex flex-col gap-[8px] pt-[21px] hidden  @tablet:block">
            <li className="flex gap-[8px]">
              <a
                className="flex gap-2 items-center TypographyPinter14w400 "
                href="https://api.whatsapp.com/send/?phone=554133711901&text=Oi&type=phone_number&app_absent=0"
                target="_blank"
              >
                WhatsApp
              </a>
              <Icon name="IconArrowdiag" className="w-6 h-6" />
            </li>
            <li className="flex gap-[8px]">
              <a
                className="flex gap-2 items-center TypographyPinter14w400 "
                href="/ajuda/#contato"
              >
                Contatos
              </a>
              <Icon name="IconArrowdiag" className="w-6 h-6" />
            </li>
          </ul>
          <div className=" flex flex-col items-center @tablet:items-start">
            <h4 className=" TypographyPinter16w500g950 ">
              Baixe o nosso aplicativo
            </h4>
            <div className="flex gap-4 pt-4 ">
              <Link
                href="https://play.google.com/store/apps/details?id=com.dentaluni.app&hl=pt_BR&pli=1"
                target="_blank"
              >
                <Image
                  src="/assets/icons/footer/StoreGooglePlay.svg"
                  alt="logo loja google"
                  width={110}
                  height={110}
                />
              </Link>
              <Link
                href="https://apps.apple.com/br/app/minha-dental-uni/id1064122530"
                target="_blank"
              >
                <Image
                  src="/assets/icons/footer/StoreApple.svg"
                  alt="logo apple"
                  width={110}
                  height={110}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray100 mt-12 flex flex-col @tablet:flex-row items-center justify-between">
          <p className="TypographyPinter14w400 border-b @tablet:border-none pb-[8px] @tablet:pb-0 text-center @tablet:text-start">
            © 2023 Dental Uni - CNPJ: 78.738.101/0001-51
            <br /> Rua Irmã Flávia Borlet, 197. Curitiba, PR - 81630-179
          </p>
          <p className="TypographyPinter14w400 pt-[8px] @tablet:pt-0">
            Feito por:
            <a
              className="TypographyPinter14w500g95 "
              target="_blank"
              href="https://auclandesign.com/"
            >
              {""} Auclan Design
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

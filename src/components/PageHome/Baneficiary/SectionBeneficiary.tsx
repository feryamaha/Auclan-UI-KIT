import Image from 'next/image'
import { Container } from '../../ui/Container'
import { Icon } from '@/scripts/Icon'
import { Button } from '@/components/ui/Button'
import { FaqSection } from './FaqSection'

export default function SectionBeneficiarY() {

    return (
        <section  >
            <Container>
                {/* <div className="w-full mx-auto flex @laptop:flex-row flex-col gap-[12%] pt-12 "> */}
                <div className="w-full h-auto flex flex-col @tablet:flex-row @tablet:gap-[12%] ">
                    {/* <div className="flex @laptop:flex-col flex-col-reverse  gap-[40px] w-[466px] "> */}
                    <div className="flex flex-col flex-col-reverse items-center @tablet:flex-row  @tablet:flex-col">
                        <div className="w-full flex flex-col gap-[8px] items-start mb-8 md:max-w-full">
                            <p className="TypographyPinter14w500">
                                APROVEITE O SEU PLANO
                            </p>
                            <h2 className='TypographyH1mobile @tablet:TypographyH1 @tablet:w-[466px]   ' >
                                Já é beneficiário?
                                Aproveite o seu plano
                            </h2>
                        </div>
                        {/*  <div className='w-[328px] @tablet:w-[540px] @tablet:h-[618px] @tablet:border border-red500'> */}
                        <div className='flex justify-center w-full h-auto mb-[24px] @tablet:max-w-[540px] @tablet:max-h-[618px]  '>
                            <Image
                                src="/assets/img/img-cartao-dentalUNI.webp"
                                alt="Sorriso Dental Uni"
                                width={540}
                                height={618}
                                className="hidden @tablet:block object-fill"
                                priority
                            />

                            <Image
                                src="/assets/img/img-cartao-dentalUNI-mobile.webp "
                                alt="Sorriso Dental Uni"
                                width={840}
                                height={100}
                                className=" @tablet:hidden object-fill "
                                priority
                            />
                        </div>
                    </div>
                    {/* <div className='flex flex-col items-start w-[519px] '> */}
                    <div className=' '>
                        <div className="w-[300px] h-[114px] flex flex-col items-start mb-[48px] ">
                            <p className="TypographyPinter16w500g950">Cartão bloqueado?</p>
                            <p className="pt-[8px] pb-[12px] TypographyPinter16w400">Novo beneficiário e ainda não desbloqueou o seu cartão? Desbloqueie ele agora!</p>
                            <Button
                                href="https://www.planosdentaluni.com.br/"
                                target="_blank"
                                variant="btnLink"
                                className='textbtnLink'
                            >
                                Desbloquear cartão agora
                                <Icon name="IconArrowright" className="w-5 h-5" />
                            </Button>
                        </div>
                        <FaqSection />
                    </div>


                </div>
            </Container>
        </section>
    )
}
import { Button } from '../../ui/Button'

import { Icon } from '@/scripts/Icon'
import Link from 'next/link'

interface FastAccessItemProps {
  icon: string
  iconHover: string
  title: string
  description: string
  href: string
}

const fastAccessItems: FastAccessItemProps[] = [
  {
    icon: 'IconGerenciarfatura',
    iconHover: 'IconGerenciarfaturaHOVER',
    title: 'Gerenciar a fatura',
    description: '2ª via boleto, dia de vencimento, etc.',
    href: '/gerenciar-fatura'
  },
  {
    icon: 'IconGerenciardependente',
    iconHover: 'IconGerenciardependenteHOVER',
    title: 'Gerenciar dependente',
    description: 'Inclusão e exclusão de dependentes',
    href: '/gerenciar-dependente'
  },
  {
    icon: 'IconAbrirprotocolo',
    iconHover: 'IconAbrirprotocoloHOVER',
    title: 'Abrir protocolo',
    description: 'Abra protocolos de atendimento',
    href: '/abrir-protocolo'
  },
  {
    icon: 'IconAlterardados',
    iconHover: 'IconAlterardadosHOVER',
    title: 'Alterar dados',
    description: 'Alterar dados de pagamento ou cadastrais',
    href: '/alterar-dados'
  },
  {
    icon: 'IconEncontrardentista',
    iconHover: 'IconEncontrardentistaHOVER',
    title: 'Encontrar um dentista',
    description: 'Local, cobertura, especialidade e mais',
    href: '/encontrar-dentista'
  }
]

export function FaqSection() {
  return (


    <div className="w-full @tablet:max-w-[519px] flex flex-col gap-[40px] items-start">
      <div className='flex flex-col gap-[12px]'>
        <h2 className='w-full TypographyH2'>Tudo o que você precisa está aqui:</h2>
        <p className='TypographyPinter16w400'>
          Acesso rápido aos principais recursos.
        </p>
      </div>
      <div className="w-full flex flex-col gap-[24px] ">
        {fastAccessItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-[24px]">
                <div className="p-[13px] border border-red50 bg-red25 rounded-[5px] group-hover:bg-redSTD">
                  <div className="group-hover:hidden">
                    <Icon name={item.icon as any} className="w-[24px] h-[24px] bg-hidden" />
                  </div>
                  <div className="hidden group-hover:block">
                    <Icon name={item.iconHover as any} className="w-[24px] h-[24px] bg-hidden" />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] ">
                  <p className="TypographyPinter16w500g950 group-hover:text-redSTD">{item.title}</p>
                  <p className="TypographyPinter16w400 hidden @mobile:flex">{item.description}</p>
                </div>
              </div>
              <div className='w-10 h-10 flex items-center justify-center group'>
                <Icon name="IconPathFaq" className="w-5 h-5 animate-bounce-x" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Button
        href="https://www.planosdentaluni.com.br/"
        target="_blank"
        variant="btnLink"

        className='flex justify-start textbtnLink'
      >
        Ir para o autoatendimento
        <Icon name="IconArrowright" className="w-5 h-5" />
      </Button>
    </div>


  )
}
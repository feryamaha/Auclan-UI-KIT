import { icons } from '@/scripts/IconsList'

export type MenuItem = {
  id: string
  href?: string
  title: string
  description: string
  external?: boolean
  subItems?: MenuItem[]
}

export type MenuConfig = {
  id: string
  title: string
  items: MenuItem[]
}

export type PageButtonsConfig = {
  [key: string]: {
    primaryText?: string
    primaryUrl?: string
    secondaryText: string
    secondaryUrl: string
  }
}

export interface PlanInclude {
  iconInclud: keyof typeof icons;
  textIncludA?: string;
  textIncludB?: string;
  textIncludC?: string;
  textIncludD?: string;
  textIncludE?: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  procedures: string;
  IncludTitle?: string;
  includA?: PlanInclude[];
  includB?: PlanInclude[];
  includC?: PlanInclude[];
  includD?: PlanInclude[];
  includE?: PlanInclude[];
}

export interface PlansData {
  plans: Plan[];
}

export interface CoverageItem {
    id: string;
    includA: PlanInclude[];
    includB: PlanInclude[];
    includC: PlanInclude[];
    includD: PlanInclude[];
    includE: PlanInclude[];
}

export interface CoverageData {
    coverage: CoverageItem[];
}

// Configurações de menus com suporte a submenus aninhados
export const MENU_CONFIGS: MenuConfig[] = [
  {
    id: 'planos',
    title: 'Nossos planos',
    items: [
      {
        id: 'individuais',
        href: 'https://www.planosdentaluni.com.br/',
        title: 'Individuais e familiares',
        description: 'Planos odontológicos de qualidade a preço baixo para você e a sua família.',
        external: true
      },
      {
        id: 'pme',
        href: 'https://www.planosdentaluni.com.br/pme',
        title: 'Planos empresariais PME',
        description: 'Planos odontológicos para empresas entre 30 a 99 funcionários.',
        external: true
      },
      {
        id: 'corporativos',
        href: 'https://www.planosdentaluni.com.br/pme',
        title: 'Planos corporativos',
        description: 'Planos odontológicos para empresas acima de 100 funcionários.',
        external: true
      }
    ]
  },
  {
    id: 'paraVoce',
    title: 'Para você',
    items: [
      {
        id: 'sobre-a-dental-uni',
        title: 'Sobre a Dental Uni',
        description: '',
        subItems: [
          {
            id: 'sobre-nos',
            href: '/sobre-nos',
            title: 'Sobre nós',
            description:
              'Planos odontológicos de qualidade a preço baixo para você e a sua família.'
          },
          {
            id: 'idss',
            href: '/idss',
            title: 'IDSS',
            description:
              'Planos odontológicos para empresas entre 30 a 99 funcionários.'
          },
          {
            id: 'membros-do-conselho',
            href: '/membros-conselho',
            title: 'Membros do conselho',
            description: 'Portal exclusivo para dentistas credenciados.',
            external: true
          },
          {
            id: 'informacoes-financeiras',
            href: '/informacoes-financeiras',
            title: 'Informações financeiras',
            description:
              'Planos odontológicos para empresas acima de 100 funcionários.',
            external: true
          },
          {
            id: 'pesquisa-satisfacao',
            href: '/pesquisa-satisfacao',
            title: 'Pesquisa de satisfação',
            description:
              'Planos odontológicos para empresas acima de 100 funcionários.',
            external: true
          }
        ]
      },
      {
        id: 'para-voce',
        title: 'Para você',
        description: '',
        subItems: [
          {
            id: 'beneficiarios',
            href: '/beneficiarios',
            title: 'Beneficiários',
            description:
              'Planos odontológicos de qualidade a preço baixo para você e a sua família.'
          },
          {
            id: 'dentista',
            href: '/dentista',
            title: 'Dentista',
            description:
              'Planos odontológicos para empresas entre 30 a 99 funcionários.'
          },
          {
            id: 'empresa',
            href: '/empresas',
            title: 'Empresa',
            description:
              'Planos odontológicos para empresas acima de 100 funcionários.',
            external: true
          },
          {
            id: 'parceiro-comercial',
            href: '/corretores',
            title: 'Parceiro Comercial',
            description:
              'Planos odontológicos para empresas acima de 100 funcionários.',
            external: true
          }
        ]
      },
      {
        id: 'recursos',
        title: 'Recursos',
        description: '',
        subItems: [
          {
            id: 'trabalhe-conosco',
            href: 'https://dentaluni.gupy.io/',
            title: 'Trabalhe conosco',
            description: 'Faça parte do nosso time.'
          },
          {
            id: 'dentista-credenciado',
            href: '/cadastro/cadastro-dentista',
            title: 'Seja dentista credenciado',
            description: 'Junte-se a nossa rede de profissionais.'
          },
          {
            id: 'cadastro-corretores',
            href: '/cadastro/corretores',
            title: 'Seja um parceiro comercial',
            description: 'Amplie agora a sua carteira com os planos Dental Uni',
            external: true
          }
        ]
      }
    ]
  }
]

// Adicionar separadamente a configuração para o botão Entrar da parte inferior
export const FOOTER_LOGIN = {
  id: 'entrar',
  title: 'Entrar',
  items: [
    {
      id: 'portal-beneficiario',
      href: 'https://www.dentaluni.com.br/site/logar',
      title: 'Portal Beneficiário',
      description: 'Acesse sua área exclusiva como beneficiário.',
      external: true
    },
    {
      id: 'portal-dentistas',
      href: 'https://www.dentaluni.com.br/site/logar',
      title: 'Portal Dentistas',
      description: 'Área exclusiva para dentistas credenciados.',
      external: true
    },
    {
      id: 'portal-corretor',
      href: 'https://www.dentaluni.com.br/site/logar',
      title: 'Portal Corretor',
      description: 'Acesse sua área de corretor parceiro.',
      external: true
    },
    {
      id: 'portal-empresa',
      href: 'https://www.dentaluni.com.br/site/logar',
      title: 'Portal Empresa',
      description: 'Gerencie seu plano empresarial.',
      external: true
    }
  ]
}

// Configuração dos botões específicos por página
export const PAGE_BUTTONS: PageButtonsConfig = {
  '/beneficiarios': {
    primaryText: 'Contratar',
    primaryUrl: 'https://www.planosdentaluni.com.br/',
    secondaryText: 'Portal Beneficiário',
    secondaryUrl: 'https://www.dentaluni.com.br/site/logar'
  },
  '/corretores': {
    primaryText: '',
    primaryUrl: '#',
    secondaryText: 'Portal Corretor',
    secondaryUrl: 'https://www.dentaluni.com.br/site/logar'
  },
  '/dentistas': {
    primaryText: '',
    primaryUrl: '#',
    secondaryText: 'Portal Dentista',
    secondaryUrl: 'https://www.dentaluni.com.br/site/logar'
  },
  '/empresas': {
    primaryText: 'Contratar',
    primaryUrl: 'https://www.planosdentaluni.com.br/pme/',
    secondaryText: 'Portal Empresa',
    secondaryUrl: 'https://www.dentaluni.com.br/site/logar'
  }
}

export const idssIndicators: Record<
  string,
  {
    table: {
      col1: string
      col2: string
    }[]
    title: string
    mainIdss: {
      indicator: string
      imageIndicator: string
    }
    indicators: {
      id: number
      name: string
      description: string
      imageIndicator: string
      indicator: string
    }[]
    grafico?: {
      grafico1: string
      grafico2: string
    }
  }
> = {
  '2024': {
    table: [
      { col1: 'Nome fantasia', col2: 'DENTAL UNI' },
      { col1: 'Registro ANS', col2: '30448-4' },
      { col1: 'CNPJ', col2: '78.738.101/0001-51' },
      { col1: 'Razão Social', col2: 'DENTAL UNI - COOPERATIVA ODONTOLÓGICA' },
      { col1: 'Situação do Registro ANS', col2: 'Ativa' },
      { col1: 'Total de Consumidores', col2: '151.254' },
      { col1: 'Tipo', col2: 'Operadora exclusivamente odontológica' },
      { col1: 'Modalidade', col2: 'Cooperativa odontológica' }
    ],
    title: 'Teste IDSS 2024',
    mainIdss: {
      indicator: '0,15485',
      imageIndicator:
        'https://www.dentaluni.com.br/uploads/idss/c040a7e39040d3a57d4572ad364e5661.png'
    },
    indicators: [
      {
        id: 1,
        name: 'IDQS – Qualidade em Atenção à Saúde',
        description:
          'Avaliação do conjunto de ações em saúde que contribuem para o atendimento das necessidades de saúde dos beneficiários, com ênfase nas ações de promoção, prevenção e assistência à saúde prestada.',
        imageIndicator:
          'https://www.dentaluni.com.br/uploads/idss/7482c55eb606e9be3bd3e7027e590f2c.png',
        indicator: '1,2545'
      },
      {
        id: 2,
        name: 'IDGA – Garantia de acesso',
        description:
          'Condições relacionadas à rede assistencial que possibilitam a garantia de acesso, abrangendo a oferta de rede de prestadores.',
        imageIndicator:
          'https://www.dentaluni.com.br/uploads/idss/87356435164133f82e312d1cb0c056a8.png',
        indicator: '7,515'
      },
      {
        id: 3,
        name: 'IDSM – Sustentabilidade no mercado',
        description:
          'Monitoramento da sustentabilidade da operadora, considerando seu equilíbrio econômico-financeiro, passando pela satisfação do beneficiário e compromissos com prestadores.',
        imageIndicator:
          'https://www.dentaluni.com.br/uploads/idss/a90081ad049896fea57f90f7a0ab88a3.png',
        indicator: '9,154'
      },
      {
        id: 4,
        name: 'IDGR – Gestão de Processos e regulação',
        description:
          'Entre outros indicadores, essa dimensão afere o cumprimento das obrigações técnicas e cadastrais das operadoras junto à ANS.',
        imageIndicator:
          'https://www.dentaluni.com.br/uploads/idss/8d112e3ae577d9ce42b4d21c4d8871f0.png',
        indicator: '10,22'
      }
    ],
    grafico: {
      grafico1:
        'https://www.dentaluni.com.br/uploads/idss/b8a5325aa2a663ddfd96118a220b7ff7.png',
      grafico2:
        'https://www.dentaluni.com.br/uploads/idss/f37549039271df7dc017ad0a63faa4bd.png'
    }
  }
  // '2024': {
  //   table: [
  //     { col1: 'Nome fantasia', col2: 'DENTAL UNI' },
  //     { col1: 'Registro ANS', col2: '30448-4' },
  //     { col1: 'CNPJ', col2: '78.738.101/0001-51' },
  //     { col1: 'Razão Social', col2: 'DENTAL UNI - COOPERATIVA ODONTOLÓGICA' },
  //     { col1: 'Situação do Registro ANS', col2: 'Ativa' },
  //     { col1: 'Total de Consumidores', col2: '1.225.881' },
  //     { col1: 'Tipo', col2: 'Operadora exclusivamente odontológica' },
  //     { col1: 'Modalidade', col2: 'Cooperativa odontológica' }
  //   ],
  //   title: 'IDSS da operadora 2024 (Ano-base 2023)',
  //   mainIdss: {
  //     indicator: '0,7921',
  //     imageIndicator: '/images/idss/idss-indicator/2024/principal.svg'
  //   },
  //   indicators: [
  //     {
  //       id: 1,
  //       name: 'IDQS – Qualidade em Atenção à Saúde',
  //       description:
  //         'Avaliação do conjunto de ações em saúde que contribuem para o atendimento das necessidades de saúde dos beneficiários, com ênfase nas ações de promoção, prevenção e assistência à saúde prestada.',
  //       imageIndicator: '/images/idss/idss-indicator/2024/01.svg',
  //       indicator: '0,8137'
  //     },
  //     {
  //       id: 2,
  //       name: 'IDGA – Garantia de acesso',
  //       description:
  //         'Condições relacionadas à rede assistencial que possibilitam a garantia de acesso, abrangendo a oferta de rede de prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2024/02.svg',
  //       indicator: '0,5709'
  //     },
  //     {
  //       id: 3,
  //       name: 'IDSM – Sustentabilidade no mercado',
  //       description:
  //         'Monitoramento da sustentabilidade da operadora, considerando seu equilíbrio econômico-financeiro, passando pela satisfação do beneficiário e compromissos com prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2024/03.svg',
  //       indicator: '1,0000'
  //     },
  //     {
  //       id: 4,
  //       name: 'IDGR – Gestão de Processos e regulação',
  //       description:
  //         'Entre outros indicadores, essa dimensão afere o cumprimento das obrigações técnicas e cadastrais das operadoras junto à ANS.',
  //       imageIndicator: '/images/idss/idss-indicator/2024/04.svg',
  //       indicator: '0,7670'
  //     }
  //   ],
  //   grafico: {
  //     grafico1: '',
  //     grafico2: ''
  //   }
  // },
  // '2023': {
  //   table: [
  //     { col1: 'Nome fantasia', col2: 'DENTAL UNI' },
  //     { col1: 'Registro ANS', col2: '30448-4' },
  //     { col1: 'CNPJ', col2: '78.738.101/0001-51' },
  //     { col1: 'Razão Social', col2: 'DENTAL UNI - COOPERATIVA ODONTOLÓGICA' },
  //     { col1: 'Situação do Registro ANS', col2: 'Ativa' },
  //     { col1: 'Total de Consumidores', col2: '1.045.730' },
  //     { col1: 'Tipo', col2: 'Operadora exclusivamente odontológica' },
  //     { col1: 'Modalidade', col2: 'Cooperativa odontológica' }
  //   ],
  //   title: 'IDSS da operadora 2023 (Ano-base 2022)',
  //   mainIdss: {
  //     indicator: '0,8231',
  //     imageIndicator: '/images/idss/idss-indicator/2023/principal.svg'
  //   },
  //   indicators: [
  //     {
  //       id: 1,
  //       name: 'IDQS – Qualidade em Atenção à Saúde',
  //       description:
  //         'Avaliação do conjunto de ações em saúde que contribuem para o atendimento das necessidades de saúde dos beneficiários, com ênfase nas ações de promoção, prevenção e assistência à saúde prestada.',
  //       imageIndicator: '/images/idss/idss-indicator/2023/01.svg',
  //       indicator: '0,8839'
  //     },
  //     {
  //       id: 2,
  //       name: 'IDGA – Garantia de acesso',
  //       description:
  //         'Condições relacionadas à rede assistencial que possibilitam a garantia de acesso, abrangendo a oferta de rede de prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2023/02.svg',
  //       indicator: '0,5947'
  //     },
  //     {
  //       id: 3,
  //       name: 'IDSM – Sustentabilidade no mercado',
  //       description:
  //         'Monitoramento da sustentabilidade da operadora, considerando seu equilíbrio econômico-financeiro, passando pela satisfação do beneficiário e compromissos com prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2023/03.svg',
  //       indicator: '1,0000'
  //     },
  //     {
  //       id: 4,
  //       name: 'IDGR – Gestão de Processos e regulação',
  //       description:
  //         'Entre outros indicadores, essa dimensão afere o cumprimento das obrigações técnicas e cadastrais das operadoras junto à ANS.',
  //       imageIndicator: '/images/idss/idss-indicator/2023/04.svg',
  //       indicator: '0,7955'
  //     }
  //   ],
  //   grafico: {
  //     grafico1: '',
  //     grafico2: ''
  //   }
  // },
  // '2022': {
  //   table: [
  //     { col1: 'Nome fantasia', col2: 'DENTAL UNI' },
  //     { col1: 'Registro ANS', col2: '30448-4' },
  //     { col1: 'CNPJ', col2: '78.738.101/0001-51' },
  //     { col1: 'Razão Social', col2: 'DENTAL UNI - COOPERATIVA ODONTOLÓGICA' },
  //     { col1: 'Situação do Registro ANS', col2: 'Ativa' },
  //     { col1: 'Total de Consumidores', col2: '905.788' },
  //     { col1: 'Tipo', col2: 'Operadora exclusivamente odontológica' },
  //     { col1: 'Modalidade', col2: 'Cooperativa odontológica' }
  //   ],
  //   title: 'IDSS da operadora 2022 (Ano-base 2021)',
  //   mainIdss: {
  //     indicator: '0,81',
  //     imageIndicator: '/images/idss/idss-indicator/2022/principal.svg'
  //   },
  //   indicators: [
  //     {
  //       id: 1,
  //       name: 'IDQS – Qualidade em Atenção à Saúde',
  //       description:
  //         'Avaliação do conjunto de ações em saúde que contribuem para o atendimento das necessidades de saúde dos beneficiários, com ênfase nas ações de promoção, prevenção e assistência à saúde prestada.',
  //       imageIndicator: '/images/idss/idss-indicator/2022/01.svg',
  //       indicator: '0,9044'
  //     },
  //     {
  //       id: 2,
  //       name: 'IDGA – Garantia de acesso',
  //       description:
  //         'Condições relacionadas à rede assistencial que possibilitam a garantia de acesso, abrangendo a oferta de rede de prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2022/02.svg',
  //       indicator: '0,5689'
  //     },
  //     {
  //       id: 3,
  //       name: 'IDSM – Sustentabilidade no mercado',
  //       description:
  //         'Monitoramento da sustentabilidade da operadora, considerando seu equilíbrio econômico-financeiro, passando pela satisfação do beneficiário e compromissos com prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2022/03.svg',
  //       indicator: '1,0000'
  //     },
  //     {
  //       id: 4,
  //       name: 'IDGR – Gestão de Processos e regulação',
  //       description:
  //         'Entre outros indicadores, essa dimensão afere o cumprimento das obrigações técnicas e cadastrais das operadoras junto à ANS.',
  //       imageIndicator: '/images/idss/idss-indicator/2022/04.svg',
  //       indicator: '0,6798'
  //     }
  //   ],
  //   grafico: {
  //     grafico1: '',
  //     grafico2: ''
  //   }
  // },
  // '2021': {
  //   table: [
  //     { col1: 'Nome fantasia', col2: 'DENTAL UNI' },
  //     { col1: 'Registro ANS', col2: '30448-4' },
  //     { col1: 'CNPJ', col2: '78.738.101/0001-51' },
  //     { col1: 'Razão Social', col2: 'DENTAL UNI - COOPERATIVA ODONTOLÓGICA' },
  //     { col1: 'Situação do Registro ANS', col2: 'Ativa' },
  //     { col1: 'Total de Consumidores', col2: '861.637' },
  //     { col1: 'Tipo', col2: 'Operadora exclusivamente odontológica' },
  //     { col1: 'Modalidade', col2: 'Cooperativa odontológica' }
  //   ],
  //   title: 'IDSS da operadora 2021 (Ano-base 2020)',
  //   mainIdss: {
  //     indicator: '0,8057',
  //     imageIndicator: '/images/idss/idss-indicator/2021/principal.svg'
  //   },
  //   indicators: [
  //     {
  //       id: 1,
  //       name: 'IDQS – Qualidade em Atenção à Saúde',
  //       description:
  //         'Avaliação do conjunto de ações em saúde que contribuem para o atendimento das necessidades de saúde dos beneficiários, com ênfase nas ações de promoção, prevenção e assistência à saúde prestada.',
  //       imageIndicator: '/images/idss/idss-indicator/2021/01.svg',
  //       indicator: '0,9610'
  //     },
  //     {
  //       id: 2,
  //       name: 'IDGA – Garantia de acesso',
  //       description:
  //         'Condições relacionadas à rede assistencial que possibilitam a garantia de acesso, abrangendo a oferta de rede de prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2021/02.svg',
  //       indicator: '0,5160'
  //     },
  //     {
  //       id: 3,
  //       name: 'IDSM – Sustentabilidade no mercado',
  //       description:
  //         'Monitoramento da sustentabilidade da operadora, considerando seu equilíbrio econômico-financeiro, passando pela satisfação do beneficiário e compromissos com prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2021/03.svg',
  //       indicator: '0,9750'
  //     },
  //     {
  //       id: 4,
  //       name: 'IDGR – Gestão de Processos e regulação',
  //       description:
  //         'Entre outros indicadores, essa dimensão afere o cumprimento das obrigações técnicas e cadastrais das operadoras junto à ANS.',
  //       imageIndicator: '/images/idss/idss-indicator/2021/04.svg',
  //       indicator: '0,7010'
  //     }
  //   ]
  // },
  // '2020': {
  //   table: [
  //     { col1: 'Nome fantasia', col2: 'DENTAL UNI' },
  //     { col1: 'Registro ANS', col2: '30448-4' },
  //     { col1: 'CNPJ', col2: '78.738.101/0001-51' },
  //     { col1: 'Razão Social', col2: 'DENTAL UNI - COOPERATIVA ODONTOLÓGICA' },
  //     { col1: 'Situação do Registro ANS', col2: 'Ativa' },
  //     { col1: 'Total de Consumidores', col2: '813.447' },
  //     { col1: 'Tipo', col2: 'Operadora exclusivamente odontológica' },
  //     { col1: 'Modalidade', col2: 'Cooperativa odontológica' }
  //   ],
  //   title: 'IDSS da operadora 2020 (Ano-base 2019)',
  //   mainIdss: {
  //     indicator: '0,8136',
  //     imageIndicator: '/images/idss/idss-indicator/2020/principal.svg'
  //   },
  //   indicators: [
  //     {
  //       id: 1,
  //       name: 'IDQS – Qualidade em Atenção à Saúde',
  //       description:
  //         'Avaliação do conjunto de ações em saúde que contribuem para o atendimento das necessidades de saúde dos beneficiários, com ênfase nas ações de promoção, prevenção e assistência à saúde prestada.',
  //       imageIndicator: '/images/idss/idss-indicator/2020/01.svg',
  //       indicator: '1,0000'
  //     },
  //     {
  //       id: 2,
  //       name: 'IDGA – Garantia de acesso',
  //       description:
  //         'Condições relacionadas à rede assistencial que possibilitam a garantia de acesso, abrangendo a oferta de rede de prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2020/02.svg',
  //       indicator: '0,4730'
  //     },
  //     {
  //       id: 3,
  //       name: 'IDSM – Sustentabilidade no mercado',
  //       description:
  //         'Monitoramento da sustentabilidade da operadora, considerando seu equilíbrio econômico-financeiro, passando pela satisfação do beneficiário e compromissos com prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2020/03.svg',
  //       indicator: '0,9900'
  //     },
  //     {
  //       id: 4,
  //       name: 'IDGR – Gestão de Processos e regulação',
  //       description:
  //         'Entre outros indicadores, essa dimensão afere o cumprimento das obrigações técnicas e cadastrais das operadoras junto à ANS.',
  //       imageIndicator: '/images/idss/idss-indicator/2020/04.svg',
  //       indicator: '0,7469'
  //     }
  //   ]
  // },
  // '2018': {
  //   table: [
  //     { col1: 'Nome fantasia', col2: 'DENTAL UNI' },
  //     { col1: 'Registro ANS', col2: '30448-4' },
  //     { col1: 'CNPJ', col2: '78.738.101/0001-51' },
  //     { col1: 'Razão Social', col2: 'DENTAL UNI - COOPERATIVA ODONTOLÓGICA' },
  //     { col1: 'Situação do Registro ANS', col2: 'Ativa' },
  //     { col1: 'Total de Consumidores', col2: '665.442' },
  //     { col1: 'Tipo', col2: 'Operadora exclusivamente odontológica' },
  //     { col1: 'Modalidade', col2: 'Cooperativa odontológica' }
  //   ],
  //   title: 'IDSS da operadora 2018 (Ano-base 2017)',
  //   mainIdss: {
  //     indicator: '0,6891',
  //     imageIndicator: '/images/idss/idss-indicator/2018/principal.svg'
  //   },
  //   indicators: [
  //     {
  //       id: 1,
  //       name: 'IDQS – Qualidade em Atenção à Saúde',
  //       description:
  //         'Avaliação do conjunto de ações em saúde que contribuem para o atendimento das necessidades de saúde dos beneficiários, com ênfase nas ações de promoção, prevenção e assistência à saúde prestada.',
  //       imageIndicator: '/images/idss/idss-indicator/2018/01.svg',
  //       indicator: '0,8137'
  //     },
  //     {
  //       id: 2,
  //       name: 'IDGA – Garantia de acesso',
  //       description:
  //         'Condições relacionadas à rede assistencial que possibilitam a garantia de acesso, abrangendo a oferta de rede de prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2018/02.svg',
  //       indicator: '0,8000'
  //     },
  //     {
  //       id: 3,
  //       name: 'IDSM – Sustentabilidade no mercado',
  //       description:
  //         'Monitoramento da sustentabilidade da operadora, considerando seu equilíbrio econômico-financeiro, passando pela satisfação do beneficiário e compromissos com prestadores.',
  //       imageIndicator: '/images/idss/idss-indicator/2018/03.svg',
  //       indicator: '0,9233'
  //     },
  //     {
  //       id: 4,
  //       name: 'IDGR – Gestão de Processos e regulação',
  //       description:
  //         'Entre outros indicadores, essa dimensão afere o cumprimento das obrigações técnicas e cadastrais das operadoras junto à ANS.',
  //       imageIndicator: '/images/idss/idss-indicator/2018/04.svg',
  //       indicator: '0,8812'
  //     }
  //   ]
  // }
}

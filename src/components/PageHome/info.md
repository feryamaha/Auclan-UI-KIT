# Documentação da Pasta Sections

Esta pasta (`src/components/sections`) agrupa os principais componentes que representam grandes seções da interface de usuário da aplicação.

## Estrutura da Pasta:

```
src/components/sections/
├── AmazingPlans/
│   ├── (...)
├── Baneficiary/
│   ├── (...)
├── BannerHome/
│   ├── (...)
├── Discover/
│   ├── (...)
├── Header/
│   ├── (...)
├── Questions/
│   ├── (...)
├── Footer.tsx
├── SmileCare.tsx
└── info.md
```

## Subpastas e Arquivos Principais:

- 1 `Header/`: Componente do cabeçalho da aplicação. Inclui a navegação desktop e um componente dedicado para o menu mobile (`MobileMenu/`). A configuração do menu está centralizada (`menuConfig.ts`).
- 2 `BannerHome/`: Seção do banner principal no topo da página. Inclui o controle visual e lógico do slider (`SliderControl.tsx`).
- 3 `SmileCare.tsx`: Componente que renderiza a seção 'Smile Care'. Contém layouts distintos para desktop e mobile, incluindo imagens e texto descritivo.
- 4 `AmazingPlans/`: Seção que exibe e gerencia os planos. Contém componentes para cards (desktop/mobile), barra de comparação e dados (`ListSectionPlans.json`).
- 5 `Baneficiary/`: Seção focada em informações para beneficiários. Inclui uma seção de FAQ (`FaqSection.tsx`).
- 6 `Discover/`: Seção de descoberta de benefícios com um Accordion interativo. Possui lógica separada para desktop (Accordion e conteúdo ao lado) e mobile (Accordion com conteúdo integrado). Usa dados JSON (`faqData.json`, `discoverContent.json`).
- 7 `Questions/`: Seção de perguntas frequentes geral. Utiliza um Accordion para exibir as FAQs (`SectionQuestions.tsx` usando `AccordionFAQ` e `questionsFaqData.json`).
- 8 `Footer.tsx`: Componente que renderiza o rodapé da aplicação, contendo links de contato, informações e selos.


## Lógica Chave da Pasta Sections:

Agrupamento por Seção: Os componentes são organizados em subpastas, onde cada pasta representa uma seção lógica da página.

Responsividade: Muitas seções contêm lógica e componentes separados para lidar com layouts desktop e mobile (ex: AmazingPlans, Discover, Header, SmileCare).

Dados Externalizados: Dados específicos de seções (planos, FAQs, conteúdo Discover, menu) são frequentemente armazenados em arquivos JSON e de configuração (`.json`, `.ts`) dentro da respectiva pasta para deixar a estrutura do projeto organizada.
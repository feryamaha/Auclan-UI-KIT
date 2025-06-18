# Documentação da Section Amazing Plans

Documentação concisa sobre a estrutura e a interação dos componentes da section 'Amazing Plans'.

## Estrutura da Pasta:

```
src/components/sections/AmazingPlans/
├── BarComparePlans.tsx
├── CardSPlansMobile.tsx
├── CardSectionPlans.tsx
├── ListSectionPlans.json
├── SectionPlans.tsx
└── info.md
```

## Arquivos:

- `SectionPlans.tsx`: Componente principal que orquestra a section. Gerencia a exibição das listas de planos para desktop e mobile.
- `CardSectionPlans.tsx`: Componente de card individual para os planos, usado na visualização desktop.
- `CardSPlansMobile.tsx`: Componente de card individual para os planos, específico para a visualização mobile.
- `BarComparePlans.tsx`: Componente barra link  de comparação de planos.
- `ListSectionPlans.json`: Arquivo JSON contendo os dados dos planos a serem exibidos.
- `info.md`: Documentação da pasta (este arquivo).

## Lógica Chave:

Separação Desktop/Mobile: `SectionPlans.tsx` gerencia qual componente de lista/card exibir (`CardSectionPlans.tsx` para desktop, `CardSPlansMobile.tsx` para mobile) com base no breakpoint.

Dados: `SectionPlans.tsx` carrega os dados de `ListSectionPlans.json` e os passa para os componentes de card apropriados (`CardSectionPlans` ou `CardSPlansMobile`) para renderização.

Interação: Os cards (`CardSectionPlans.tsx`, `CardSPlansMobile.tsx`) renderizam os detalhes de cada plano. `BarComparePlans.tsx` pode interagir com a seleção de planos. 
# Documentação da Section Discover

Documentação concisa sobre a estrutura e a interação dos componentes da section 'Descubra'.

## Estrutura da Pasta:

```
src/components/sections/Discover/
├── AccordionFAQ.tsx
├── AccordionFaqMobile.tsx
├── SectionDiscover.tsx
├── discoverContent.json
├── faqData.json
└── info.md
```

## Arquivos:

- `SectionDiscover.tsx`: Orquestra as versões desktop e mobile da section. 
Renderiza Accordion básico + conteúdo separado (desktop) ou Accordion + conteúdo integrado (mobile). Contém as interfaces `DiscoverContentData` e `DiscoverItem` exportadas.

- `AccordionFAQ.tsx`: Componente base do Accordion. Usado no desktop. Lida com pergunta, resposta e botão básico. Renderiza o conteúdo detalhado ao lado.

- `AccordionFaqMobile.tsx`: Componente mobile. Combina Accordion e conteúdo. 
Usa componentes base do Accordion e renderiza conteúdo detalhado (imagem, lista, descrição) diretamente dentro do `AccordionContent`, espelhando a estrutura do conteúdo desktop para customização independente.

- `faqData.json`: Dados das perguntas e respostas do FAQ.

- `discoverContent.json`: Dados do conteúdo detalhado dos itens.

## Lógica Chave:

Separação Desktop/Mobile: `SectionDiscover.tsx` decide qual versão exibir. `AccordionFAQ.tsx` é a base para desktop, `AccordionFaqMobile.tsx` é a versão customizada para mobile com conteúdo integrado e customizável.

Verbosidade: A lógica de renderização do conteúdo detalhado é duplicada em `SectionDiscover.tsx` (desktop, ao lado) e `AccordionFaqMobile.tsx` (mobile, dentro do item). 
Isso permite customização mobile isolada sem modificar o `AccordionFAQ.tsx` base. 
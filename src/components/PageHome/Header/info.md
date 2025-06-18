# Documentação da Section Header

Documentação concisa sobre a estrutura e a interação dos componentes da section 'Header'.

## Estrutura da Pasta:

```
src/components/sections/Header/
├── MobileMenu/
│   └── MobileMenu.tsx
├── Header.tsx
├── index.ts
└── menuConfig.ts
```

## Arquivos:

- `Header.tsx`: Componente principal do cabeçalho. Contém a estrutura para desktop (navegação) e integra o componente mobile (`MobileMenu`).
- `MobileMenu/MobileMenu.tsx`: Componente específico para o menu de navegação mobile. Lida com a exibição do menu em telas menores.
- `index.ts`: Arquivo de exportação que facilita a importação dos componentes da pasta Header.
- `menuConfig.ts`: Arquivo que armazena a configuração dos itens do menu de navegação.

## Lógica Chave:

Separação Desktop/Mobile: `Header.tsx` exibe a navegação desktop diretamente e o `MobileMenu.tsx` para a navegação mobile (controlada por CSS/breakpoints).

Dados do Menu: A configuração dos itens do menu está centralizada em `menuConfig.ts` e é utilizada por `Header.tsx` (para desktop) e `MobileMenu.tsx` (para mobile).

Exportação: `index.ts` simplifica as importações de componentes desta pasta em outras partes do projeto. 
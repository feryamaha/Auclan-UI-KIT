# Application Documentation

Este diretório contém os componentes principais da aplicação Next.js.

/**
 * VISÃO GERAL DA PASTA APP
 * ------------------------
 * Esta pasta contém os arquivos fundamentais da aplicação Next.js,
 * definindo a estrutura base, layouts, rotas e configurações
 * globais. É o ponto de entrada da aplicação e gerencia
 * a renderização de todas as páginas.
 * 
 * Principais objetivos:
 * - Definir a estrutura base da aplicação
 * - Gerenciar layouts e templates
 * - Configurar metadados e fontes
 * - Implementar rotas e páginas
 * - Tratar erros e páginas não encontradas
 */

## Estrutura Atual

```
src/app/
├── page/                  # Pasta contendo todas as páginas da aplicação
│   ├── page.tsx          # Página inicial (/)
│   ├── comparative/      # Página comparativa (/comparative)
│   │   └── page.tsx     # Implementação da página comparativa
│   ├── help/            # Página de ajuda (/help)
│   │   └── page.tsx     # Implementação da página de ajuda
│   └── plans/           # Página de planos (/plans)
│       └── page.tsx     # Implementação da página de planos
├── layout.tsx            # Layout raiz da aplicação
├── globals.css           # Estilos globais
├── not-found.tsx         # Página 404 personalizada
└── favicon.ico           # Ícone da aplicação
```

## Componentes Principais

### Layout Raiz (`layout.tsx`)
- **Propósito**: Define a estrutura base da aplicação
- **Responsabilidades**:
  - Configuração de fontes (Lato e Inter)
  - Definição de metadados para SEO
  - Estrutura HTML base
  - Integração de componentes globais (Header e Footer)
- **Configurações**:
  - Fontes:
    - Lato (400, 700, 900)
    - Inter (400, 500, 600)
  - Metadados:
    - Título: "Dental Uni - Plano Odontológico"
    - Descrição: "Dental Uni - Plano Odontológico"

### Páginas (`page/`)
- **Página Inicial** (`page/page.tsx`)
  - Implementa a página principal com banner e seções
  - Componentes: BannerHome, PlansCTASection, SectionPlans

- **Página Comparativa** (`page/comparative/page.tsx`)
  - Exibe comparação entre planos
  - Implementa funcionalidades de comparação

- **Página de Ajuda** (`page/help/page.tsx`)
  - Fornece informações de suporte
  - Links úteis e recursos de ajuda

- **Página de Planos** (`page/plans/page.tsx`)
  - Detalhes dos planos disponíveis
  - Informações de preços e cobertura

### Página 404 (`not-found.tsx`)
- **Propósito**: Página personalizada para rotas não encontradas
- **Funcionalidades**:
  - Interface amigável de erro
  - Navegação alternativa
  - Botão de retorno à página inicial

### Estilos Globais (`globals.css`)
- Configurações do Tailwind CSS
- Estilos base da aplicação
- Variáveis CSS
- Reset de estilos
- Animações e transições

## Sistema de Rotas

A aplicação utiliza o sistema de roteamento do Next.js 13+ com App Router, configurado através de rewrites no `next.config.js`:

```javascript
async rewrites() {
  return [
    {
      source: '/',
      destination: '/page',
    },
    {
      source: '/comparative',
      destination: '/page/comparative',
    },
    {
      source: '/help',
      destination: '/page/help',
    },
    {
      source: '/plans',
      destination: '/page/plans',
    },
  ];
}
```

Esta configuração permite:
- Manter a organização das páginas na pasta `page/`
- URLs amigáveis para os usuários (ex: `/help` em vez de `/page/help`)
- Separação clara entre estrutura de arquivos e rotas públicas

## Boas Práticas

1. **Organização de Arquivos**
   - Páginas agrupadas na pasta `page/`
   - Layout raiz na raiz do diretório
   - Componentes reutilizáveis em `components/`
   - Estilos globais centralizados

2. **Performance**
   - Otimização de fontes com `next/font`
   - Lazy loading de componentes
   - Imagens otimizadas
   - Cache de rotas

3. **Manutenção**
   - Estrutura clara e documentada
   - Separação de responsabilidades
   - Código modular e reutilizável
   - Documentação atualizada

4. **SEO**
   - Metadados configurados no layout raiz
   - URLs amigáveis
   - Estrutura semântica
   - Otimização para mecanismos de busca

## Dependências e Configurações

- **Next.js**: Framework base (versão 14.2.24)
- **React**: Biblioteca UI
- **Tailwind CSS**: Estilização
- **TypeScript**: Tipagem estática
- **Google Fonts**: Fontes Lato e Inter

## Notas de Desenvolvimento

1. **Adicionando Novas Páginas**
   - Criar nova pasta em `page/`
   - Implementar `page.tsx`
   - Adicionar rota no `next.config.js`
   - Atualizar documentação

2. **Modificando o Layout**
   - Alterações no `layout.tsx`
   - Manter componentes globais
   - Atualizar metadados se necessário

3. **Estilos e Temas**
   - Usar classes Tailwind
   - Manter consistência visual
   - Seguir guia de estilos
   - Responsividade em todos os componentes 
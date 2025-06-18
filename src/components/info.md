# Pasta `src/components`

/**
 * VISÃO GERAL DA PASTA COMPONENTS
 * -----------------------------
 * Esta pasta implementa a arquitetura de componentes da aplicação,
 * seguindo princípios de atomic design e componentização modular.
 * A estrutura é dividida em duas categorias principais que trabalham
 * em conjunto para construir interfaces consistentes e manuteníveis:
 * 
 * 1. /ui: Implementa componentes atômicos e moleculares que formam
 *    a base do design system da aplicação. Estes componentes são
 *    altamente reutilizáveis e mantêm a consistência visual em
 *    toda a aplicação.
 * 
 * 2. /sections: Implementa componentes organismos e templates que
 *    compõem as seções específicas da aplicação. Estes componentes
 *    são mais complexos e contextuais, utilizando os componentes
 *    base da pasta /ui.
 * 
 * A arquitetura de componentes segue os seguintes princípios:
 * - Single Responsibility: Cada componente tem uma única responsabilidade
 * - DRY (Don't Repeat Yourself): Reutilização máxima de código
 * - Composição sobre herança: Componentes são compostos, não estendidos
 * - Props over state: Preferência por props para controle de estado
 * - Unidirectional Data Flow: Fluxo de dados previsível
 * 
 * Principais objetivos:
 * - Implementar um design system consistente e escalável
 * - Garantir manutenibilidade através de componentes modulares
 * - Otimizar performance com componentes bem estruturados
 * - Facilitar o desenvolvimento com documentação clara
 * - Manter acessibilidade em todos os níveis
 */

# Components Documentation

Este diretório contém todos os componentes React da aplicação.

## Estrutura

```
components/
├── sections/        # Componentes de seção da página
│   ├── AmazingPlans/    # Seção de planos
│   ├── BannerHome/      # Banner principal
│   ├── Header/          # Cabeçalho e navegação
│   └── ...              # Outras seções
└── ui/              # Componentes de UI reutilizáveis
    ├── Button.tsx
    ├── Container.tsx
    └── ...
```

## Componentes de Seção

### AmazingPlans
- `CardSectionPlans.tsx`: Card individual de plano
- `SectionPlans.tsx`: Seção completa de planos
- `ListSectionPlans.json`: Dados dos planos

### BannerHome
- `BannerHome.tsx`: Banner principal
- `SliderControl.tsx`: Controle do slider

### Header
- `Header.tsx`: Cabeçalho principal
- `NavMenu.tsx`: Menu de navegação
- `MobileMenu/`: Componentes do menu mobile

## Componentes UI

- **Button**: Botão reutilizável com variantes
- **Container**: Container responsivo
- **ReclameAqui**: Integração com Reclame Aqui
- **SmartAppLink**: Link para aplicativo mobile

## Uso

Todos os componentes são tipados com TypeScript e seguem as convenções de design do projeto.

## Estrutura de Diretórios

/**
 * PASTA UI
 * -------
 * Implementa o core do design system da aplicação,
 * fornecendo componentes fundamentais que são a base
 * para construção de interfaces mais complexas.
 * 
 * Características técnicas:
 * - Componentes funcionais com TypeScript
 * - Props tipadas e documentadas
 * - Estilização via Tailwind CSS
 * - Suporte a temas e variantes
 * - Testes unitários
 * - Documentação de uso
 */
### `/ui`

- **`Button.tsx`**
  - **Propósito**: Implementa um sistema de botões flexível e acessível
  - **Responsabilidades Técnicas**:
    - Renderização condicional baseada em props
    - Gerenciamento de estados (hover, focus, active)
    - Integração com sistema de ícones
    - Suporte a navegação (Link) e ações (onClick)
    - Validação de props via TypeScript
    - Gerenciamento de acessibilidade (ARIA)
  - **Funcionalidades Avançadas**:
    - Sistema de variantes (primary, secondary, tertiary)
      - Primary: Ações principais, destaque visual
      - Secondary: Ações secundárias, contraste reduzido
      - Tertiary: Ações terciárias, estilo minimalista
    - Sistema de ícones
      - Posicionamento dinâmico (left/right)
      - Tamanhos responsivos
      - Animações de transição
    - Sistema de estados
      - Hover com feedback visual
      - Focus com outline acessível
      - Disabled com estilo apropriado
      - Loading com indicador visual
    - Integração com Next.js
      - Suporte a client-side navigation
      - Prefetching automático
      - Fallback para SSR
  - **Considerações de Performance**:
    - Memoização de callbacks
    - Lazy loading de ícones
    - Otimização de re-renders
    - Bundle size otimizado

- **`Container.tsx`**
  - **Propósito**: Implementa um sistema de layout responsivo e consistente
  - **Responsabilidades Técnicas**:
    - Controle de largura máxima em diferentes breakpoints
    - Sistema de padding responsivo
    - Centralização de conteúdo
    - Gerenciamento de overflow
    - Suporte a diferentes modos de exibição
  - **Funcionalidades Avançadas**:
    - Sistema de breakpoints
      - Mobile-first approach
      - Breakpoints customizáveis
      - Fallbacks responsivos
    - Sistema de espaçamento
      - Padding adaptativo
      - Margens consistentes
      - Gap controlado
    - Modos de exibição
      - Full width
      - Contained
      - Fluid
    - Integração com grid system
      - Suporte a colunas
      - Alinhamento flexível
      - Gap controlado

- **`SmartAppLink.tsx`**
  - **Propósito**: Implementa um sistema inteligente de deep linking
  - **Responsabilidades Técnicas**:
    - Detecção de plataforma (iOS/Android/Web)
    - Gerenciamento de URLs e schemas
    - Fallback para web
    - Tracking de eventos
    - Cache de preferências
  - **Funcionalidades Avançadas**:
    - Sistema de detecção
      - User Agent parsing
      - Platform detection
      - Version checking
    - Sistema de URLs
      - Deep linking
      - Universal links
      - App links
    - Sistema de fallback
      - Web fallback
      - Store redirects
      - Error handling
    - Analytics
      - Event tracking
      - Conversion tracking
      - Error tracking

- **`ReclameAqui.tsx`**
  - **Propósito**: Implementa integração com o sistema ReclameAqui
  - **Responsabilidades Técnicas**:
    - Renderização do selo oficial
    - Gerenciamento de avaliações
    - Cache de dados
    - Validação de credenciais
    - Atualização automática
  - **Funcionalidades Avançadas**:
    - Sistema de selo
      - Renderização otimizada
      - Validação de autenticidade
      - Cache de imagem
    - Sistema de avaliações
      - Fetch de dados
      - Cache local
      - Atualização periódica
    - Sistema de métricas
      - Score tracking
      - Response time
      - Resolution rate
    - Integração com analytics
      - Click tracking
      - Impression tracking
      - Conversion tracking

/**
 * PASTA SECTIONS
 * -------------
 * Implementa componentes complexos que compõem as
 * seções específicas da aplicação. Estes componentes
 * são construídos utilizando os componentes base da
 * pasta /ui, seguindo princípios de composição e
 * reutilização.
 * 
 * Características técnicas:
 * - Componentes compostos
 * - Gerenciamento de estado complexo
 * - Integração com APIs
 * - Lógica de negócio
 * - Testes de integração
 */
### `/sections`

- **Componentes de Navegação**:
  - **`NavMenu.tsx`**
    - **Propósito**: Implementa o sistema de navegação principal
    - **Responsabilidades Técnicas**:
      - Gerenciamento de estado de menu
      - Integração com API de menu
      - Sistema de submenus
      - Responsividade avançada
      - Acessibilidade completa
    - **Funcionalidades Avançadas**:
      - Sistema de menu
        - Navegação hierárquica
        - Submenus dinâmicos
        - Breadcrumbs
      - Sistema de estados
        - Active state
        - Hover effects
        - Focus management
      - Sistema de responsividade
        - Breakpoints específicos
        - Transformações de menu
        - Touch interactions
      - Integração com API
        - Cache de dados
        - Error handling
        - Loading states
      - Acessibilidade
        - ARIA labels
        - Keyboard navigation
        - Screen reader support

  - **`DeticatedPagesMenu.tsx`**
    - **Propósito**: Implementa navegação específica para páginas dedicadas
    - **Responsabilidades Técnicas**:
      - Gerenciamento de rotas específicas
      - Validação de permissões
      - Cache de navegação
      - Estado de loading
    - **Funcionalidades Avançadas**:
      - Sistema de rotas
        - Dynamic routing
        - Permission control
        - Route guards
      - Sistema de cache
        - Route prefetching
        - State persistence
        - Performance optimization
      - Sistema de estados
        - Loading states
        - Error states
        - Success states

  - **`MobileMenu/`**
    - **Propósito**: Implementa navegação otimizada para dispositivos móveis
    - **Responsabilidades Técnicas**:
      - Gestos touch
      - Animações fluidas
      - Estado de drawer
      - Performance mobile
    - **Funcionalidades Avançadas**:
      - Sistema de gestos
        - Swipe detection
        - Touch feedback
        - Gesture handling
      - Sistema de animações
        - Smooth transitions
        - Performance optimized
        - Hardware acceleration
      - Sistema de estados
        - Drawer states
        - Transition states
        - Loading states

- **Componentes de Layout**:
  - **`Header.tsx`**
    - **Propósito**: Implementa o cabeçalho global da aplicação
    - **Responsabilidades Técnicas**:
      - Integração com NavMenu
      - Gerenciamento de estado global
      - Responsividade
      - Performance
    - **Funcionalidades Avançadas**:
      - Sistema de layout
        - Sticky header
        - Scroll behavior
        - Responsive design
      - Sistema de estados
        - Scroll states
        - Auth states
        - Theme states
      - Integração com analytics
        - Impression tracking
        - Interaction tracking
        - Performance metrics

  - **`Footer.tsx`**
    - **Propósito**: Implementa o rodapé global com informações institucionais
    - **Responsabilidades Técnicas**:
      - Gerenciamento de links
      - Validação de certificações
      - SEO optimization
      - Performance
    - **Funcionalidades Avançadas**:
      - Sistema de links
        - Dynamic routing
        - External links
        - Analytics tracking
      - Sistema de certificações
        - Validation checks
        - Auto-update
        - Cache management
      - SEO optimization
        - Structured data
        - Meta information
        - Sitemap generation

- **Componentes de Seção**:
  - **`BannerHome/`**
    - **Propósito**: Implementa sistema de banners da página inicial
    - **Responsabilidades Técnicas**:
      - Carrossel de imagens
      - Lazy loading
      - Otimização de imagens
      - Animações
    - **Funcionalidades Avançadas**:
      - Sistema de carrossel
        - Auto-play
        - Touch navigation
        - Keyboard control
      - Sistema de imagens
        - Responsive images
        - WebP support
        - Lazy loading
      - Sistema de animações
        - Smooth transitions
        - Performance optimized
        - Reduced motion

  - **`BenefitsOfferedSection.tsx`**
    - **Propósito**: Implementa seção de benefícios com cards informativos
    - **Responsabilidades Técnicas**:
      - Renderização de cards
      - Animações de entrada
      - Responsividade
      - Performance
    - **Funcionalidades Avançadas**:
      - Sistema de cards
        - Dynamic content
        - Interactive elements
        - Responsive layout
      - Sistema de animações
        - Scroll animations
        - Hover effects
        - Loading states
      - Sistema de performance
        - Virtual scrolling
        - Image optimization
        - Code splitting

  - **`BlogSection.tsx`**
    - **Propósito**: Implementa seção de blog com listagem de posts
    - **Responsabilidades Técnicas**:
      - Paginação
      - Filtros
      - Cache de posts
      - SEO
    - **Funcionalidades Avançadas**:
      - Sistema de paginação
        - Infinite scroll
        - Page navigation
        - Loading states
      - Sistema de filtros
        - Category filtering
        - Search functionality
        - Sort options
      - Sistema de cache
        - Post caching
        - Image optimization
        - State management

  - **`FaqSection.tsx`**
    - **Propósito**: Implementa seção de FAQ com acordeão
    - **Responsabilidades Técnicas**:
      - Gerenciamento de estado
      - Animações
      - Acessibilidade
      - SEO
    - **Funcionalidades Avançadas**:
      - Sistema de acordeão
        - Smooth animations
        - Keyboard navigation
        - ARIA support
      - Sistema de busca
        - Full-text search
        - Category filtering
        - Highlight matches
      - Sistema de analytics
        - Question tracking
        - Interaction metrics
        - Performance data

- **Componentes de Formulário**:
  - **`YearSelect.tsx`**
    - **Propósito**: Implementa seletor de ano com validações
    - **Responsabilidades Técnicas**:
      - Validação de datas
      - Formatação
      - Estado do formulário
      - Performance
    - **Funcionalidades Avançadas**:
      - Sistema de validação
        - Date validation
        - Range checking
        - Error handling
      - Sistema de formatação
        - Locale support
        - Custom formats
        - Mask handling
      - Sistema de estado
        - Form state
        - Validation state
        - Error state

  - **`YearSelectIdss.tsx`**
    - **Propósito**: Implementa seletor específico para IDSS
    - **Responsabilidades Técnicas**:
      - Integração com IDSS
      - Validações específicas
      - Cache de dados
      - Performance
    - **Funcionalidades Avançadas**:
      - Sistema de integração
        - API communication
        - Data validation
        - Error handling
      - Sistema de cache
        - Data caching
        - State persistence
        - Performance optimization
      - Sistema de validação
        - Custom rules
        - Error messages
        - State management

- **Componentes de Modal**:
  - **`LGPDModal.tsx`**
    - **Propósito**: Implementa modal de LGPD com termos
    - **Responsabilidades Técnicas**:
      - Gerenciamento de estado
      - Persistência de preferências
      - Acessibilidade
      - Performance
    - **Funcionalidades Avançadas**:
      - Sistema de termos
        - Version control
        - Update tracking
        - User acceptance
      - Sistema de preferências
        - Cookie management
        - Local storage
        - State persistence
      - Sistema de acessibilidade
        - Keyboard navigation
        - Screen reader support
        - Focus management

  - **`ModalAbout.tsx`**
    - **Propósito**: Implementa modal com informações institucionais
    - **Responsabilidades Técnicas**:
      - Conteúdo dinâmico
      - Animações
      - Acessibilidade
      - Performance
    - **Funcionalidades Avançadas**:
      - Sistema de conteúdo
        - Dynamic loading
        - Rich text support
        - Media handling
      - Sistema de animações
        - Entrance/exit
        - Transitions
        - Performance
      - Sistema de acessibilidade
        - ARIA support
        - Keyboard nav
        - Focus trap

  - **`ModalCredential.tsx`**
    - **Propósito**: Implementa modal de credenciais com formulário
    - **Responsabilidades Técnicas**:
      - Validação de formulário
      - Integração com API
      - Gerenciamento de estado
      - Segurança
    - **Funcionalidades Avançadas**:
      - Sistema de formulário
        - Field validation
        - Error handling
        - State management
      - Sistema de autenticação
        - Token management
        - Session handling
        - Security measures
      - Sistema de feedback
        - Loading states
        - Error messages
        - Success states

  - **`ModalNewsletter.tsx`**
    - **Propósito**: Implementa modal de newsletter com validação
    - **Responsabilidades Técnicas**:
      - Validação de email
      - Integração com API
      - Gerenciamento de estado
      - Analytics
    - **Funcionalidades Avançadas**:
      - Sistema de validação
        - Email format
        - Duplicate check
        - Error handling
      - Sistema de integração
        - API communication
        - Error handling
        - Retry logic
      - Sistema de analytics
        - Conversion tracking
        - Error tracking
        - Performance metrics

## Boas Práticas

/**
 * ORGANIZAÇÃO
 * ----------
 * Diretrizes para manter os componentes
 * organizados e fáceis de manter.
 */
1. **Organização de Componentes**
   - Manter estrutura de pastas clara
   - Seguir convenções de nome
   - Documentar props e uso
   - Separar por responsabilidade

/**
 * DESEMPENHO
 * ---------
 * Otimizações para garantir
 * performance dos componentes.
 */
2. **Performance**
   - Usar memoização quando necessário
   - Implementar lazy loading
   - Otimizar re-renders
   - Manter componentes puros

/**
 * ACESSIBILIDADE
 * -------------
 * Garantir que os componentes
 * sejam acessíveis para todos.
 */
3. **Acessibilidade**
   - Usar semântica HTML correta
   - Implementar ARIA quando necessário
   - Manter contraste adequado
   - Testar com leitores de tela

/**
 * MANUTENÇÃO
 * ---------
 * Processos para manter os componentes
 * atualizados e funcionando.
 */
4. **Manutenção**
   - Manter documentação atualizada
   - Seguir padrões de código
   - Implementar testes
   - Revisar periodicamente

## Estrutura Atual
```
src/components/
├── ui/                    # Componentes básicos
│   ├── Button.tsx
│   ├── Container.tsx
│   ├── SmartAppLink.tsx
│   └── ReclameAqui.tsx
└── sections/             # Componentes de seção
    ├── NavMenu.tsx
    ├── Footer.tsx
    ├── Header.tsx
    ├── BannerHome/
    ├── MobileMenu/
    └── ... (outros componentes)
```

/**
 * ADICIONANDO NOVOS COMPONENTES
 * ---------------------------
 * Processo para adicionar novos
 * componentes à aplicação.
 */
## Adicionando Novos Componentes
1. **Análise**:
   - Identificar necessidade
   - Verificar reutilização
   - Definir responsabilidades
   - Escolher localização

2. **Implementação**:
   - Seguir padrões existentes
   - Implementar acessibilidade
   - Adicionar documentação
   - Criar testes

3. **Revisão**:
   - Verificar performance
   - Testar responsividade
   - Validar acessibilidade
   - Atualizar documentação

/**
 * DEPENDÊNCIAS E CONFIGURAÇÕES
 * --------------------------
 * Bibliotecas e configurações necessárias
 * para o funcionamento dos componentes.
 */
## Dependências e Configurações
- **React**: Biblioteca principal
- **Next.js**: Framework
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização
- **React Icons**: Ícones
- **Framer Motion**: Animações (opcional)

- **Configurações**:
  - ESLint
  - Prettier
  - Jest/Testing Library
  - TypeScript paths 
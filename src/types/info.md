# Types Documentation

Este diretório contém as definições de tipos TypeScript da aplicação.

## Estrutura

```
types/
├── menuConfigMobile.ts    # Tipos para configuração do menu mobile
└── ...                    # Outros tipos específicos
```

## Tipos Principais

### Menu Mobile
- Configurações do menu
- Tipos de itens
- Estrutura de navegação

## Uso

```typescript
import { MenuConfig } from '@/types/menuConfigMobile'

// Exemplo
const menuConfig: MenuConfig = {
  // configuração do menu
}
```

## Convenções

- Todos os tipos são exportados
- Nomes descritivos e em PascalCase
- Documentação JSDoc quando necessário
- Interfaces para objetos complexos
- Types para uniões e interseções

# Pasta `src/types`

/**
 * VISÃO GERAL DA PASTA TYPES
 * -------------------------
 * Esta pasta implementa as definições de tipos TypeScript
 * que são utilizados em toda a aplicação. Os tipos são
 * organizados por domínio e funcionalidade, garantindo
 * consistência e segurança de tipos em todo o sistema.
 * 
 * A pasta contém definições para:
 * 1. Estruturas de Menu
 * 2. Configurações de Interface
 * 3. Tipos de Componentes
 * 
 * Principais objetivos:
 * - Garantir tipagem forte
 * - Manter consistência de tipos
 * - Facilitar manutenção
 * - Documentar estruturas
 */

## Estrutura de Diretórios

/**
 * TIPOS DISPONÍVEIS
 * ----------------
 * Cada arquivo contém tipos relacionados a
 * um domínio específico da aplicação.
 */
### Tipos

- **`menuConfigMobile.ts`**
  - **Propósito**: Define tipos e configurações para menus móveis
  - **Tipos Principais**:
    ```typescript
    // Estrutura básica de item de menu
    type MenuItem = {
      id: string
      href?: string
      title: string
      description: string
      external?: boolean
      subItems?: MenuItem[]
    }

    // Configuração de menu
    type MenuConfig = {
      id: string
      title: string
      items: MenuItem[]
    }

    // Configuração de botões por página
    type PageButtonsConfig = {
      [key: string]: {
        primaryText?: string
        primaryUrl?: string
        secondaryText: string
        secondaryUrl: string
      }
    }
    ```
  - **Constantes Exportadas**:
    - `MENU_CONFIGS`: Array de configurações de menu
      - Menu de Planos
      - Menu Para Você
      - Submenus aninhados
    - `FOOTER_LOGIN`: Configuração do menu de login
      - Links para portais
      - Descrições específicas
    - `PAGE_BUTTONS`: Configuração de botões por página
      - Beneficiários
      - Corretores
      - Dentistas
      - Empresas
  - **Estrutura de Dados**:
    - Menus principais
      - Planos (individuais, PME, corporativos)
      - Para Você (sobre, recursos, etc.)
    - Submenus
      - Sobre a Dental Uni
      - Para Você
      - Recursos
    - Botões específicos
      - Por página
      - Com URLs e textos

## Boas Práticas

/**
 * ORGANIZAÇÃO
 * ----------
 * Diretrizes para manter os tipos
 * organizados e fáceis de manter.
 */
1. **Organização de Tipos**
   - Separar por domínio
   - Nomes descritivos
   - Documentação clara
   - Reutilização

/**
 * TIPAGEM
 * -------
 * Garantir tipagem forte e
 * consistente.
 */
2. **Tipagem**
   - Usar TypeScript
   - Definir interfaces
   - Validar estruturas
   - Documentar tipos

/**
 * MANUTENÇÃO
 * ---------
 * Processos para manter os tipos
 * atualizados e funcionando.
 */
3. **Manutenção**
   - Revisar periodicamente
   - Atualizar documentação
   - Validar uso
   - Testar integração

/**
 * VALIDAÇÃO
 * ---------
 * Garantir que os tipos
 * sejam válidos e consistentes.
 */
4. **Validação**
   - Validar estruturas
   - Verificar uso
   - Testar integridade
   - Manter consistência

## Estrutura Atual
```
src/types/
└── menuConfigMobile.ts    # Tipos e configurações de menu
```

/**
 * ADICIONANDO NOVOS TIPOS
 * ---------------------
 * Processo para adicionar novos
 * tipos ao sistema.
 */
## Adicionando Novos Tipos
1. **Análise**:
   - Identificar necessidade
   - Verificar existentes
   - Planejar estrutura
   - Definir escopo

2. **Implementação**:
   - Criar arquivo se necessário
   - Definir tipos
   - Adicionar documentação
   - Exportar tipos

3. **Validação**:
   - Verificar tipagem
   - Testar uso
   - Validar integração
   - Atualizar docs

/**
 * DEPENDÊNCIAS E CONFIGURAÇÕES
 * --------------------------
 * Bibliotecas e configurações necessárias
 * para o funcionamento dos tipos.
 */
## Dependências e Configurações
- **TypeScript**: Tipagem base
- **ESLint**: Linting
- **Prettier**: Formatação

- **Configurações**:
  - tsconfig.json
  - ESLint rules
  - Prettier config 
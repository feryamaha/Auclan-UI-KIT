# Pasta `src/constants`

/**
 * VISÃO GERAL DA PASTA CONSTANTS
 * -----------------------------
 * Esta pasta implementa o sistema de constantes da aplicação,
 * centralizando valores imutáveis, enums, interfaces e tipos
 * que são utilizados em toda a aplicação. A organização
 * visa garantir consistência, tipagem forte e manutenibilidade
 * do código.
 * 
 * A estrutura é dividida em categorias específicas:
 * 
 * 1. Enums: Definições de tipos enumerados
 * 2. Interfaces: Contratos de tipos reutilizáveis
 * 3. Dados Estáticos: Valores constantes do sistema
 * 
 * Principais objetivos:
 * - Centralizar valores constantes
 * - Garantir tipagem forte
 * - Facilitar manutenção
 * - Promover reutilização
 * - Manter consistência
 */

# Constants Documentation

Este diretório contém todas as constantes e enums utilizados na aplicação.

## Estrutura

```
constants/
├── enums.ts         # Enums TypeScript
├── interfaces.ts    # Interfaces compartilhadas
├── openingHours.ts  # Horários de funcionamento
└── planos.ts        # Dados dos planos
```

## Tipos de Dados

### Enums
- Enums para status
- Enums para tipos de planos
- Enums para configurações

### Interfaces
- Interfaces compartilhadas entre componentes
- Tipos de dados comuns

### Dados Estáticos
- Horários de funcionamento
- Informações dos planos
- Configurações do sistema

## Uso

```typescript
import { PlanType } from '@/constants/enums'
import { OpeningHours } from '@/constants/openingHours'
```

## Estrutura de Diretórios

/**
 * ARQUIVOS DE CONSTANTES
 * ---------------------
 * Cada arquivo tem uma responsabilidade específica
 * e contém constantes relacionadas a um domínio
 * particular da aplicação.
 */
### Arquivos

- **`enums.ts`**
  - **Propósito**: Implementa tipos enumerados do sistema
  - **Responsabilidades Técnicas**:
    - Definição de tipos enumerados
    - Validação de valores permitidos
    - Tipagem forte para componentes
  - **Enums Definidos**:
    - `ButtonType`
      - Valores: primary, secondary, tertiary
      - Uso: Tipagem de variantes de botões
      - Contexto: Componentes de UI
    - `BannerInfoType`
      - Valores: success, warning, error, info, none
      - Uso: Tipagem de mensagens do sistema
      - Contexto: Componentes de feedback

- **`interfaces.ts`**
  - **Propósito**: Define contratos de tipos reutilizáveis
  - **Responsabilidades Técnicas**:
    - Definição de interfaces TypeScript
    - Contratos de props de componentes
    - Tipagem de estruturas de dados
  - **Interfaces Definidas**:
    - `ButtonProps`
      - Propriedades: type, label, iconOnStart, iconOnEnd, onClick
      - Uso: Props do componente Button
      - Validação: Tipagem forte com enums
    - `BannerInfoProps`
      - Propriedades: type, text
      - Uso: Props do componente BannerInfo
      - Validação: Tipagem com BannerInfoType

- **`openingHours.ts`**
  - **Propósito**: Define estrutura de horários de funcionamento
  - **Responsabilidades Técnicas**:
    - Estrutura de dados para horários
    - Valores padrão do sistema
    - Interface com backend
  - **Estrutura de Dados**:
    - `STATIC_OPENING_HOURS`
      - Tipo: Object
      - Propriedades: Horários por dia da semana
      - Formato: String (HH:mm)
      - Contexto: Credenciamento

- **`planos.ts`**
  - **Propósito**: Define estrutura de planos odontológicos
  - **Responsabilidades Técnicas**:
    - Catálogo de planos
    - Metadados de planos
    - Validação de registros
  - **Estrutura de Dados**:
    - `planosAceitos`
      - Tipo: Array de objetos
      - Propriedades:
        - id: Identificador único
        - nome: Nome completo do plano
        - nome_comercial: Nome de exibição
        - registro_ans: Número de registro
        - contratacao: Tipo de contratação
        - segmentacao: Segmento do plano
        - abrangencia: Cobertura geográfica
        - situacao: Status do plano
      - Contexto: Sistema de planos odontológicos

## Boas Práticas

/**
 * ORGANIZAÇÃO
 * ----------
 * Diretrizes para manter as constantes
 * organizadas e fáceis de manter.
 */
1. **Organização de Constantes**
   - Agrupar por domínio
   - Manter nomes descritivos
   - Documentar valores
   - Seguir convenções

/**
 * TIPAGEM
 * -------
 * Garantir tipagem forte e
 * consistente em todo o sistema.
 */
2. **Tipagem**
   - Usar TypeScript
   - Definir interfaces
   - Validar enums
   - Documentar tipos

/**
 * MANUTENÇÃO
 * ---------
 * Processos para manter as constantes
 * atualizadas e funcionando.
 */
3. **Manutenção**
   - Revisar periodicamente
   - Atualizar documentação
   - Validar valores
   - Testar integrações

/**
 * VALIDAÇÃO
 * ---------
 * Garantir que os valores
 * sejam válidos e consistentes.
 */
4. **Validação**
   - Validar enums
   - Verificar tipos
   - Testar integridade
   - Manter consistência

## Estrutura Atual
```
src/constants/
├── enums.ts              # Definições de enums
├── interfaces.ts         # Interfaces TypeScript
├── openingHours.ts       # Horários de funcionamento
└── planos.ts            # Catálogo de planos
```

/**
 * ADICIONANDO NOVAS CONSTANTES
 * --------------------------
 * Processo para adicionar novas
 * constantes ao sistema.
 */
## Adicionando Novas Constantes
1. **Análise**:
   - Identificar necessidade
   - Definir escopo
   - Escolher localização
   - Planejar tipagem

2. **Implementação**:
   - Criar arquivo se necessário
   - Definir tipos
   - Adicionar valores
   - Documentar uso

3. **Validação**:
   - Verificar tipagem
   - Testar integração
   - Validar valores
   - Atualizar docs

/**
 * DEPENDÊNCIAS E CONFIGURAÇÕES
 * --------------------------
 * Bibliotecas e configurações necessárias
 * para o funcionamento das constantes.
 */
## Dependências e Configurações
- **TypeScript**: Tipagem estática
- **ESLint**: Linting
- **Prettier**: Formatação
- **Jest**: Testes

- **Configurações**:
  - tsconfig.json
  - ESLint rules
  - Prettier config
  - Jest setup 
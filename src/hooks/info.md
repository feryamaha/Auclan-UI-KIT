# Hooks Documentation

Este diretório contém os hooks personalizados da aplicação.

## Estrutura

```
hooks/
├── html-renderer.tsx     # Hook para renderização de HTML
├── use-formatted-date.ts # Hook para formatação de datas
└── useFaqManager.ts      # Hook para gerenciamento do FAQ
```

## Hooks Disponíveis

### useHtmlRenderer
- Renderiza conteúdo HTML de forma segura
- Suporta sanitização
- Integração com React

### useFormattedDate
- Formatação de datas
- Suporte a múltiplos formatos
- Localização

### useFaqManager
- Gerenciamento do FAQ
- Filtros e busca
- Categorização

## Uso

```typescript
import { useFormattedDate } from '@/hooks/use-formatted-date'
import { useFaqManager } from '@/hooks/useFaqManager'

// Exemplo
const { formatDate } = useFormattedDate()
const { faqItems, filterFaq } = useFaqManager()
```

# Pasta `src/hooks`

/**
 * VISÃO GERAL DA PASTA HOOKS
 * -------------------------
 * Esta pasta implementa hooks personalizados e utilitários
 * React que encapsulam lógica reutilizável em toda a
 * aplicação. Os hooks são organizados por funcionalidade
 * e seguem as melhores práticas do React para gerenciamento
 * de estado e efeitos colaterais.
 * 
 * A pasta contém hooks para:
 * 1. Renderização de HTML
 * 2. Formatação de datas
 * 3. Gerenciamento de FAQ
 * 
 * Principais objetivos:
 * - Encapsular lógica reutilizável
 * - Manter consistência no código
 * - Facilitar manutenção
 * - Seguir princípios do React
 */

## Estrutura de Diretórios

/**
 * HOOKS DISPONÍVEIS
 * ----------------
 * Cada hook é implementado em seu próprio arquivo,
 * mantendo responsabilidades únicas e claras.
 */
### Hooks

- **`html-renderer.tsx`**
  - **Propósito**: Componente para renderização segura de HTML
  - **Responsabilidades Técnicas**:
    - Renderização de conteúdo HTML
    - Sanitização de entrada
    - Interface TypeScript
  - **Uso**:
    ```tsx
    <HtmlRenderer htmlContent={string} />
    ```
  - **Considerações**:
    - Usa dangerouslySetInnerHTML com cautela
    - Requer sanitização do conteúdo
    - Componente funcional React

- **`use-formatted-date.ts`**
  - **Propósito**: Hook para formatação de datas em português
  - **Responsabilidades Técnicas**:
    - Parsing de datas
    - Formatação personalizada
    - Tratamento de erros
  - **Funcionalidades**:
    - Converte string para objeto Date
    - Formata para padrão brasileiro
    - Retorna mensagem para datas inválidas
  - **Uso**:
    ```tsx
    const formattedDate = useFormattedDate("2024-03-20");
    // Retorna: "20 de mar, 2024"
    ```
  - **Considerações**:
    - Usa array de meses abreviados
    - Valida entrada de data
    - Formato consistente

- **`useFaqManager.ts`**
  - **Propósito**: Gerenciador de estado para FAQs
  - **Responsabilidades Técnicas**:
    - Gerenciamento de estado global
    - Sistema de pub/sub
    - Controle de FAQ aberto
  - **Funcionalidades**:
    - `getOpenId`: Retorna ID do FAQ aberto
    - `setOpenId`: Define FAQ aberto
    - `subscribe`: Sistema de inscrição
    - `toggle`: Alterna estado do FAQ
  - **Uso**:
    ```tsx
    // Obter ID aberto
    const openId = FaqManager.getOpenId();
    
    // Alternar FAQ
    FaqManager.toggle("faq-1");
    
    // Inscrever para mudanças
    useEffect(() => {
      const unsubscribe = FaqManager.subscribe(() => {
        // Atualizar UI
      });
      return unsubscribe;
    }, []);
    ```
  - **Considerações**:
    - Estado global compartilhado
    - Sistema de eventos
    - Gerenciamento de memória

## Boas Práticas

/**
 * ORGANIZAÇÃO
 * ----------
 * Diretrizes para manter os hooks
 * organizados e fáceis de manter.
 */
1. **Organização de Hooks**
   - Um hook por arquivo
   - Nomes descritivos
   - Documentação clara
   - Tipagem forte

/**
 * PERFORMANCE
 * ----------
 * Otimizações e considerações
 * de performance.
 */
2. **Performance**
   - Memoização quando necessário
   - Evitar re-renders
   - Limpar efeitos
   - Gerenciar memória

/**
 * TIPAGEM
 * -------
 * Garantir tipagem forte e
 * consistente.
 */
3. **Tipagem**
   - Usar TypeScript
   - Definir interfaces
   - Validar props
   - Documentar tipos

/**
 * TESTES
 * -----
 * Garantir qualidade e
 * confiabilidade.
 */
4. **Testes**
   - Testar isoladamente
   - Cobrir casos de erro
   - Verificar integração
   - Documentar casos

## Estrutura Atual
```
src/hooks/
├── html-renderer.tsx     # Renderizador de HTML
├── use-formatted-date.ts # Formatação de datas
└── useFaqManager.ts      # Gerenciador de FAQ
```

/**
 * ADICIONANDO NOVOS HOOKS
 * ---------------------
 * Processo para adicionar novos
 * hooks ao sistema.
 */
## Adicionando Novos Hooks
1. **Análise**:
   - Identificar necessidade
   - Verificar existentes
   - Planejar interface
   - Definir tipos

2. **Implementação**:
   - Criar arquivo
   - Implementar lógica
   - Adicionar tipos
   - Documentar uso

3. **Validação**:
   - Testar isoladamente
   - Verificar integração
   - Validar performance
   - Atualizar docs

/**
 * DEPENDÊNCIAS E CONFIGURAÇÕES
 * --------------------------
 * Bibliotecas e configurações necessárias
 * para o funcionamento dos hooks.
 */
## Dependências e Configurações
- **React**: Hooks base
- **TypeScript**: Tipagem
- **ESLint**: Linting
- **Jest**: Testes

- **Configurações**:
  - tsconfig.json
  - ESLint rules
  - Jest setup
  - React config 
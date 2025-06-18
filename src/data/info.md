# Pasta `src/data`

/**
 * DADOS MOCKADOS - CONCEITO E IMPORTÂNCIA
 * --------------------------------------
 * Dados mockados são representações simuladas de dados reais,
 * utilizadas durante o desenvolvimento e testes da aplicação.
 * 
 * Por que usar dados mockados?
 * 1. Segurança: Evita exposição de dados sensíveis reais
 * 2. Desenvolvimento: Permite desenvolvimento sem dependência de APIs
 * 3. Testes: Facilita testes com dados controlados e previsíveis
 * 4. Performance: Melhora performance em ambiente de desenvolvimento
 * 
 * Neste projeto, os dados mockados são especialmente importantes pois:
 * - Contêm informações sensíveis de planos odontológicos
 * - Incluem dados de beneficiários e credenciados
 * - Representam métricas e indicadores do sistema
 * - Simulam estruturas de navegação complexas
 * 
 * ATENÇÃO: Estes dados são EXCLUSIVAMENTE para desenvolvimento
 * e testes. Em produção, os dados reais são obtidos através
 * de APIs seguras e serviços apropriados.
 */

/**
 * VISÃO GERAL DA PASTA DATA
 * -------------------------
 * Esta pasta implementa o sistema de dados mockados e
 * estáticos da aplicação, servindo como fonte de dados
 * para desenvolvimento, testes e demonstração. A estrutura
 * é organizada por domínios específicos, mantendo dados
 * separados por contexto e funcionalidade.
 * 
 * A pasta é dividida em categorias específicas:
 * 
 * 1. Dados de Navegação: Menus e estruturas de navegação
 *    - Simula a estrutura de navegação real do sistema
 *    - Permite desenvolvimento da UI sem backend
 *    - Facilita testes de usabilidade
 * 
 * 2. Dados de Conteúdo: FAQs, blogs e conteúdo informativo
 *    - Representa conteúdo dinâmico do sistema
 *    - Mantém formato similar ao conteúdo real
 *    - Permite testes de layout e responsividade
 * 
 * 3. Dados de Rede: Informações sobre rede credenciada
 *    - Simula dados de profissionais e clínicas
 *    - Mantém estrutura similar aos dados reais
 *    - Facilita testes de filtros e buscas
 * 
 * 4. Dados de Indicadores: Métricas e indicadores do sistema
 *    - Representa métricas de qualidade e performance
 *    - Mantém formato dos relatórios reais
 *    - Permite testes de visualizações e gráficos
 * 
 * Principais objetivos:
 * - Fornecer dados para desenvolvimento
 * - Facilitar testes e demonstrações
 * - Manter consistência de dados
 * - Separar dados por contexto
 * - Facilitar manutenção
 * - Garantir segurança dos dados reais
 */

## Estrutura de Diretórios

/**
 * ARQUIVOS DE DADOS
 * ----------------
 * Cada arquivo contém dados específicos para
 * um domínio particular da aplicação, mantendo
 * a organização e separação de responsabilidades.
 */
### Arquivos

- **`menuMock.ts`**
  - **Propósito**: Implementa estrutura de navegação do sistema
  - **Responsabilidades Técnicas**:
    - Definição de menus
    - Estrutura de navegação
    - Links e rotas
  - **Estrutura de Dados**:
    - `entrar`: Links de acesso aos portais
      - Portal Beneficiário
      - Portal Dentista
      - Portal Corretor
      - Portal Empresa
    - `planos`: Categorias de planos
      - Individuais e familiares
      - Planos empresariais PME
      - Planos corporativos
    - `paraVoce`: Seções específicas
      - Beneficiários
      - Empresa
      - Dentista
      - Corretor

- **`mockFaq.ts`**
  - **Propósito**: Implementa perguntas frequentes do sistema
  - **Responsabilidades Técnicas**:
    - Perguntas e respostas
    - Categorização por página
    - Estrutura de FAQ
  - **Estrutura de Dados**:
    - Array de objetos FAQ
      - id: Identificador único
      - question: Pergunta
      - answer: Resposta detalhada
      - page: Contexto da página
    - Categorias:
      - home: FAQ da página inicial
      - portal-transparencia: FAQ do portal

- **`idssData.ts`**
  - **Propósito**: Implementa dados dos indicadores IDSS
  - **Responsabilidades Técnicas**:
    - Indicadores por ano
    - Métricas de qualidade
    - Gráficos e visualizações
  - **Estrutura de Dados**:
    - `idssIndicators`: Record<string, {...}>
      - table: Dados tabulares
        - Informações da operadora
        - Métricas gerais
      - title: Título do indicador
      - mainIdss: Indicador principal
        - indicator: Valor numérico
        - imageIndicator: URL da imagem
      - indicators: Array de indicadores
        - id: Identificador
        - name: Nome do indicador
        - description: Descrição detalhada
        - imageIndicator: URL da imagem
        - indicator: Valor numérico
      - grafico: Visualizações
        - grafico1: URL do gráfico 1
        - grafico2: URL do gráfico 2

- **`accreditedNetwork/qualificationsCaptions.ts`**
  - **Propósito**: Implementa legendas de qualificações
  - **Responsabilidades Técnicas**:
    - Definição de qualificações
    - Descrições de certificações
    - Imagens de selos
  - **Estrutura de Dados**:
    - `captions`: Array de objetos
      - id: Identificador único
      - image: URL da imagem
      - title: Título da qualificação
      - description: Descrição detalhada
    - Tipos de Qualificação:
      - Padrão Nacional de Qualidade
      - Padrão Internacional de Qualidade
      - Título de especialista
      - Qualidade monitorada
      - Comunicação de eventos adversos
      - Profissional com especialização
      - Profissional com residência

## Boas Práticas

/**
 * ORGANIZAÇÃO
 * ----------
 * Diretrizes para manter os dados
 * organizados e fáceis de manter.
 */
1. **Organização de Dados**
   - Separar por domínio
   - Manter estrutura clara
   - Documentar formatos
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
   - Validar estruturas
   - Documentar tipos

/**
 * MANUTENÇÃO
 * ---------
 * Processos para manter os dados
 * atualizados e funcionando.
 */
3. **Manutenção**
   - Revisar periodicamente
   - Atualizar documentação
   - Validar dados
   - Testar integrações

/**
 * VALIDAÇÃO
 * ---------
 * Garantir que os dados
 * sejam válidos e consistentes.
 */
4. **Validação**
   - Validar estruturas
   - Verificar tipos
   - Testar integridade
   - Manter consistência

## Estrutura Atual
```
src/data/
├── accreditedNetwork/           # Dados da rede credenciada
│   └── qualificationsCaptions.ts
├── menuMock.ts                  # Dados de navegação
├── blogContentMock.ts           # Conteúdo do blog
├── idssData.ts                  # Indicadores IDSS
├── mockFaq.ts                   # Perguntas frequentes
└── mockmenu.json               # Menu em formato JSON
```

/**
 * ADICIONANDO NOVOS DADOS
 * ---------------------
 * Processo para adicionar novos
 * dados ao sistema.
 */
## Adicionando Novos Dados
1. **Análise**:
   - Identificar necessidade
   - Definir estrutura
   - Escolher localização
   - Planejar tipagem

2. **Implementação**:
   - Criar arquivo se necessário
   - Definir tipos
   - Adicionar dados
   - Documentar uso

3. **Validação**:
   - Verificar tipagem
   - Testar integração
   - Validar dados
   - Atualizar docs

/**
 * DEPENDÊNCIAS E CONFIGURAÇÕES
 * --------------------------
 * Bibliotecas e configurações necessárias
 * para o funcionamento dos dados.
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

/**
 * SEGURANÇA E DADOS MOCKADOS
 * -------------------------
 * Diretrizes importantes para trabalhar com dados mockados:
 * 
 * 1. NUNCA incluir dados reais ou sensíveis
 * 2. Manter estrutura similar aos dados reais
 * 3. Usar valores fictícios mas realistas
 * 4. Documentar claramente o propósito de cada mock
 * 5. Revisar periodicamente para garantir segurança
 * 
 * Exemplos de dados que NUNCA devem ser mockados:
 * - CPF/CNPJ reais
 * - Dados de beneficiários
 * - Informações de planos ativos
 * - Métricas reais de performance
 * - Dados de credenciados
 */

# Data Documentation

Este diretório contém os dados mockados e estáticos da aplicação.

## Estrutura

```
data/
├── accreditedNetwork/    # Dados da rede credenciada
├── blogContentMock.ts    # Conteúdo mock do blog
├── idssData.ts          # Dados do IDSS
├── menuMock.ts          # Dados mock do menu
└── mockFaq.ts           # Dados mock do FAQ
```

## Tipos de Dados

### Rede Credenciada
- Qualificações
- Dados de profissionais
- Informações de unidades

### Blog
- Posts
- Categorias
- Tags

### IDSS
- Dados de desempenho
- Métricas
- Histórico

### Menu
- Estrutura do menu
- Submenus
- Links

### FAQ
- Perguntas frequentes
- Categorias
- Respostas

## Uso

```typescript
import { blogContent } from '@/data/blogContentMock'
import { menuData } from '@/data/menuMock'
``` 
# API Implementation Details

Detalhes técnicos sobre a implementação da camada de API no projeto Dental UNI Auclan.

## Estrutura da Camada de API

A API é organizada por responsabilidades nos seguintes diretórios:

```
api/
├── config/         # Configurações do cliente HTTP (Axios)
├── hooks-api/      # Hooks customizados para consumo e estado da API
├── schemas/        # Schemas de validação (Zod)
├── services/       # Funções para chamadas HTTP via Axios
└── types/          # Tipos TypeScript para a API
```

Esta estrutura facilita a manutenção e testabilidade.

## Endpoints e Funcionalidades Implementadas

Funcionalidades implementadas:

- **CNPJ:** Validação e consulta (`services/cnpj.ts`, `hooks-api/useCnpj.ts`).
- **Partner:** Gerenciamento de dados e formulário (`services/partner.ts`, `hooks-api/usePartner.ts`).
- **Menu:** Gerenciamento de menu dinâmico (`services/menu.ts`).

## Ferramentas Utilizadas

- **Axios:** Cliente HTTP configurado globalmente.
- **Zod:** Utilizado para definir schemas e validar dados.
- **React Hook Form:** Integrado para gerenciar formulários e validação.
- **TypeScript:** Garante tipagem forte.

## Exemplos de Uso

### Usando Serviços (Direto)

Para scripts ou lógica fora de componentes React (ex: server-side logic):

```typescript
import { partnerService } from './services/partner';

async function createPartner() {
  const partnerData = { /* ... dados do parceiro */ };
  try {
    const response = await partnerService.submitForm(partnerData);
    console.log('Resposta do serviço de parceiro:', response);
  } catch (error) {
    console.error('Erro ao criar parceiro:', error);
  }
}

// Exemplo de chamada (não roda automaticamente)
// createPartner();
```

### Usando Hooks Customizados (Recomendado em Componentes React)

Exemplo com `useCnpjValidation`:

```typescript
'use client'; // Necessário para Hooks em App Router

import { useCnpjValidation } from './hooks-api/useCnpj';
import { useEffect } from 'react';

function CnpjForm() {
  const { register, handleSubmit, errors, isLoading, apiResponse, validarCnpj } = useCnpjValidation();

  // Exemplo de chamada ao carregar o componente (substituir com lógica real)
  useEffect(() => {
    validarCnpj({ cnpj: '' }); 
  }, [validarCnpj]);

  if (isLoading) return <p>Validando CNPJ...</p>;
  if (errors.cnpj) return <p>Erro de validação: {errors.cnpj.message}</p>;
  if (apiResponse) return <p>Resposta da API: {JSON.stringify(apiResponse)}</p>;

  // Exemplo básico de formulário (renderizar campos e botão de submit real)
  return (
    <form onSubmit={handleSubmit( (data) => validarCnpj(data.cnpj) )}>
      {/* <input {...register('cnpj')} placeholder='Digite o CNPJ' /> */}
      {/* <button type='submit'>Validar</button> */}
      <p>Aguardando validação ou interação do formulário...</p>
    </form>
  );
}
```

Exemplo com `usePartnerForm` (simplificado, focado na estrutura do hook multi-step):

```typescript
'use client';

import { usePartnerForm } from './hooks-api/usePartner';

function PartnerRegistrationForm() {
  const { register, handleSubmit, errors, isLoading, currentStep, nextStep, prevStep } = usePartnerForm();

  const onSubmit = (data) => {
    // Lógica de submissão final, possivelmente chamando um serviço ou outro hook
    console.log('Form Data:', data);
    // Ex: submitPartnerData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Passo {currentStep}</h2>
      {/* Renderizar campos do formulário com register baseados em currentStep */}
      {/* Ex: {currentStep === 1 && <input {...register('nome')} />} */}

      {/* Botões de navegação */}
      {currentStep > 1 && <button type='button' onClick={prevStep}>Voltar</button>}
      {currentStep < 6 && <button type='button' onClick={nextStep}>Próximo</button>}
      {currentStep === 6 && <button type='submit' disabled={isLoading}>{isLoading ? 'Registrando...' : 'Registrar'}</button>}
    </form>
  );
}
```

## Práticas de Segurança na Implementação da API

Ao desenvolver ou modificar a camada de API, considere as seguintes práticas:

-   **Gerenciamento de Variáveis de Ambiente:** Nunca inclua chaves de API, credenciais ou informações sensíveis diretamente no código. Utilize variáveis de ambiente (`.env.local` para desenvolvimento) e garanta que o arquivo de variáveis sensíveis não seja versionado.
-   **Validação Rigorosa de Dados:** Implemente validação completa para *todos* os dados de entrada (request payloads, query parameters, headers) e saída (API responses) usando schemas (como Zod). Isso protege contra dados malformados, ataques de injeção e garante que sua aplicação lide apenas com dados no formato esperado.
-   **Tratamento de Erros Informatico (para Dev) e Genérico (para User):** Capture e logue erros detalhados internamente (em logs de servidor ou serviço) para depuração. No entanto, para o usuário final no frontend, forneça mensagens de erro genéricas e informativas que não exponham detalhes internos da implementação, estrutura do banco de dados ou segredos. Evite `console.error` direto de responses de API que possam conter informações sensíveis em produção.
-   **Uso Obrigatório de HTTPS:** Certifique-se de que todas as comunicações com a API (tanto em desenvolvimento quanto em produção) sejam feitas estritamente via HTTPS para criptografar os dados em trânsito e proteger contra interceptação (man-in-the-middle attacks).
-   **Gestão Segura de Tokens e Autenticação:** Se a API exigir autenticação baseada em tokens (como JWT ou OAuth), implemente o fluxo de obtenção e renovação de tokens de forma segura. Evite armazenar tokens sensíveis no `localStorage`. Considere `HttpOnly cookies` para tokens de autenticação para mitigar riscos de XSS.
-   **Rate Limiting e Proteção contra Abuso:** Considere implementar mecanismos de Rate Limiting na API (se você controlar o backend) ou utilizar serviços de gateway/proxy que ofereçam essa funcionalidade. Isso ajuda a proteger contra ataques de negação de serviço (DoS) e impede o uso excessivo e potencialmente custoso da API.
-   **Configuração Correta de CORS:** Se o backend da API for um serviço separado, configure o Cross-Origin Resource Sharing (CORS) para permitir requisições APENAS das origens confiáveis (os domínios onde seu frontend está hospedado). Isso previne que sites maliciosos façam requisições não autorizadas para sua API.
-   **Sanitização de Dados de Entrada:** Antes de processar (ex: salvar no banco de dados) qualquer dado textual recebido da API ou via formulários, realize a sanitização para remover ou neutralizar conteúdo potencialmente perigoso (ex: scripts HTML, código malicioso). Embora a validação (Zod) ajude, a sanitização é uma camada adicional de defesa, especialmente para campos de texto livre.

## Observações Técnicas Adicionais

- A estrutura modular em `src/api/` favorece a manutenibilidade e escalabilidade.
- A validação extensiva com Zod aumenta significativamente a confiança na integridade dos dados que transitam pela camada de API.
- Os serviços (`services/`) atuam como a interface direta com as chamadas HTTP, enquanto os hooks (`hooks-api/`) abstraem a lógica de consumo para os componentes, incluindo gerenciamento de estado e cache.
- **Áreas para Aprimoramento Futuro:** Incluir testes automatizados específicos para a camada de serviços e hooks de API é altamente recomendado para garantir estabilidade. Além disso, verificar periodicamente se todas as funcionalidades e endpoints descritos nesta documentação (`info.md`) estão totalmente implementados e sendo corretamente utilizados na aplicação.

## Adicionando Nova Funcionalidade à API

Ao integrar um novo endpoint ou funcionalidade da API, siga este processo recomendado:

1.  **Definir Tipos:** Crie ou atualize as definições de tipos TypeScript relevantes em `/types`.
2.  **Criar Schema de Validação:** Desenvolva ou estenda o(s) schema(s) de validação Zod em `/schemas` para os dados de request e/ou response.
3.  **Implementar Serviço:** Crie uma nova função ou atualize um serviço existente em `/services` para realizar a chamada HTTP via Axios.
4.  **Criar/Atualizar Hook (Opcional/Recomendado):** Se a funcionalidade for consumida por componentes React e precisar gerenciar estado (loading, erro, dados, cache), crie um novo hook em `/hooks-api/` que utilize o serviço implementado. Integre com React Hook Form e Zod se envolver formulários.
5.  **Atualizar Documentação:** Descreva a nova funcionalidade, tipos, schemas, serviço e hook (se criado) neste arquivo (`src/api/info.md`). Inclua exemplos de uso.

## Dependências Relevantes da Camada de API

- `axios`: Cliente HTTP.
- `zod`: Validação de schemas.
- `react-hook-form`: Gerenciamento de formulários (muito usado com hooks-api).
- `typescript`: Para tipagem forte.
- `react-query` ou similar (opcional): Para gerenciamento avançado de cache e estado de requisições.

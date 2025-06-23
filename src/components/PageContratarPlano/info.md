Lógica de Funcionamento da Página "CONTRATAR PLANOS"
Propósito
A página "CONTRATAR PLANOS" permite que os usuários iniciem o processo de contratação de um plano odontológico. Ela é acessada por meio do botão "CONTRATAR AGORA" presente em várias páginas do hotsite.
Fluxo Geral de Navegação
Acesso à Página

O usuário clica no botão "CONTRATAR AGORA" em qualquer página do hotsite.
É redirecionado para a página "CONTRATAR PLANOS", que sempre abre na seção de boas-vindas (StepA0-Welcome.tsx).

Seção de Boas-Vindas

O usuário insere seu número de matrícula (8 dígitos).
Clica no botão "INICIAR" para validar a matrícula.
Se a matrícula for válida, avança para a próxima seção (StepA1-HolderData.tsx); caso contrário, uma mensagem de erro é exibida.

Progressão nas Seções

Após a validação, o usuário avança pelas seções principais:
StepA1-HolderData.tsx (Dados do Titular)
StepA2-Contact.tsx (Contato)
StepA3-Address.tsx (Endereço)

Após completar StepA3-Address.tsx, o usuário é direcionado a uma vertente opcional para inclusão de dependentes:
StepB0-IncludeDependent.tsx (Escolha inicial sobre dependentes)
Se o usuário seleciona "Incluir dependentes agora", segue para:
StepB1-AddDependent.tsx (Adicionar dependente)
StepB2-AddInitialData.tsx (Dados iniciais do dependente)
StepB3-AddBasicData.tsx (Dados básicos do dependente)
StepB4-AddCompletionData.tsx (Finalização dos dados do dependente)

Se o usuário seleciona "Incluir dependentes depois", pula diretamente para StepA4-AcceptTerms.tsx.

Após a vertente de dependentes (ou se pular), o usuário prossegue para:
StepA4-AcceptTerms.tsx (Aceite e Conclusão)
StepA5-Successfully.tsx (Sucesso na contratação)

Conclusão

Após preencher todas as seções, incluindo a vertente de dependentes (se escolhida), o usuário finaliza o processo de contratação.

Lógica de Exibição das Seções
A exibição das seções é gerenciada pelo arquivo page.tsx usando o estado step. Cada valor de step corresponde a uma seção específica:

step === 0: StepA0-Welcome.tsx (Seção de Boas-Vindas)
step === 1: StepA1-HolderData.tsx (Dados do Titular)
step === 2: StepA2-Contact.tsx (Contato)
step === 3: StepA3-Address.tsx (Endereço)
step === 30: StepB0-IncludeDependent.tsx (Escolha inicial sobre dependentes)
step === 31: StepB1-AddDependent.tsx (Adicionar dependente)
step === 32: StepB2-AddInitialData.tsx (Dados iniciais do dependente)
step === 33: StepB3-AddBasicData.tsx (Dados básicos do dependente)
step === 34: StepB4-AddCompletionData.tsx (Finalização dos dados do dependente)
step === 4: StepA4-AcceptTerms.tsx (Aceite e Conclusão)
step === 5: StepA5-Successfully.tsx (Sucesso)

O estado completedSteps é um Set que rastreia quais etapas foram concluídas pelo usuário, evitando duplicatas.
Comportamento do Sidebar
O sidebar (MenuSidebar.tsx) lista todas as etapas do processo. Cada item reflete o estado da etapa:

Concluído: Etapa já finalizada (exibida com um ícone de check).
Ativo: Etapa atual em que o usuário está (destacada visualmente, ex.: fundo vermelho).
Inativo: Etapa futura que ainda não foi alcançada (ex.: texto em cinza).

Regras de Navegação

Voltar para Etapas Concluídas: O usuário pode clicar em qualquer item do sidebar que represente uma etapa concluída. Ao clicar, o estado step é atualizado para exibir a seção correspondente.
Impedir Avanço para Etapas Futuras: Itens do sidebar que representam etapas futuras são desabilitados. O usuário não pode clicar neles para pular etapas.
Atualização do Estado: Ao clicar em um item permitido (concluído ou ativo), a função handleMenuClick atualiza o step para o valor correspondente.

Tecnologias e Propriedades Utilizadas
React

useState: Utilizado no componente page.tsx para gerenciar o estado step (que determina a seção atual) e completedSteps (um Set que rastreia etapas concluídas). Exemplo:
const [step, setStep] = useState(0);
const [completedSteps, setCompletedSteps] = useState(new Set<number>());

setStep atualiza dinamicamente o valor de step com base nas ações do usuário (ex.: clique em "Avançar" ou "Voltar").
setCompletedSteps adiciona o step atual ao conjunto de etapas concluídas para controle no sidebar.

Props: Cada seção (ex.: StepA3-Address.tsx, StepB0-IncludeDependent.tsx) recebe props como onNext, onBack, onIncludeNow, e onIncludeLater, que são funções passadas do componente pai (page.tsx) para controlar a navegação. Exemplo:
{step === 3 && <StepA3LocationData onNext={handleNext} onBack={handleBack} />}

Renderização Condicional: O uso de operadores ternários e blocos condicionais ({step === 3 && ...}) exibe a seção correspondente com base no valor de step.

Next.js

"use client": Diretiva utilizada no topo de cada arquivo para indicar que o componente é renderizado no lado do cliente, permitindo o uso de hooks como useState e manipulação de estado interativo.
File-based Routing: A estrutura de pastas (ex.: src/app/page/contractPlans/page.tsx) define a rota /contractPlans, que serve como a página principal do processo de contratação.
Layout Component: O componente ContractPlansLayout é usado em seções como StepA4-AcceptTerms.tsx para estruturar o conteúdo principal e lateral, aproveitando a capacidade de Next.js de gerenciar layouts compartilhados.

TypeScript

Tipagem de Props: As props são tipadas para garantir segurança de tipos. Exemplo em StepA3-Address.tsx:
export function StepA3LocationData({
onNext,
onBack,
}: {
onNext: () => void;
onBack: () => void;
}) { ... }

Isso assegura que as funções passadas sejam do tipo correto (() => void).

Tipagem de Estado: O estado step e completedSteps são tipados como number e Set<number>, respectivamente, para evitar erros em tempo de compilação.

Interface Implícita: A manipulação de dados no localStorage (ex.: em StepA3-Address.tsx) usa objetos JavaScript tipados implicitamente, com estruturas como { step: number, data: object }, garantindo consistência nos dados salvos.

Exemplo de Código
Gerenciamento de Estado em page.tsx
O estado e a navegação são gerenciados da seguinte forma:

step: Controla a seção atual exibida.
completedSteps: Registra as etapas concluídas.
Funções como handleNext, handleBack, e handleMenuClick gerenciam as transições entre as seções.

const [step, setStep] = useState(0);
const [completedSteps, setCompletedSteps] = useState(new Set<number>());

const handleNext = () => {
setCompletedSteps((prev) => new Set(prev).add(step));
if (step === 3) {
setStep(30); // Transição para a vertente de dependentes
} else if (step >= 30 && step < 34) {
setStep(step + 1); // Avança nas seções de dependentes
} else if (step === 34) {
setStep(4); // Retorna à seção de aceite após dependentes
} else {
setStep(step + 1); // Avança nas seções principais
}
};

const handleBack = () => {
if (step === 4 && completedSteps.has(34)) {
setStep(34);
} else if (step > 30 && step <= 34) {
setStep(step - 1);
} else if (step === 30) {
setStep(3);
} else if (step > 0) {
setStep(step - 1);
}
};

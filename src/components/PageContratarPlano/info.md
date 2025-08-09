Lógica de Funcionamento da Página "CONTRATAR PLANOS"
Propósito
A página "CONTRATAR PLANOS" permite que os usuários iniciem o processo de contratação de um plano odontológico.\nEla é acessada por meio do botão "CONTRATAR AGORA" presente em várias páginas do hotsite.
Fluxo Geral de Navegação
Acesso à Página

O usuário clica no botão "CONTRATAR AGORA" em qualquer página do hotsite.\n- É redirecionado para a página "CONTRATAR PLANOS", que sempre abre na seção de boas-vindas (StepA0-Welcome.tsx).

Seção de Boas-Vindas

O usuário insere seu número de matrícula (8 dígitos).\n- Clica no botão "INICIAR" para validar a matrícula.\n- Se a matrícula for válida, avança para a próxima seção (StepA1-HolderData.tsx); caso contrário, uma mensagem de erro é exibida.

Progressão nas Seções

Após a validação, o usuário avança pelas seções principais:\n - StepA1-HolderData.tsx (Dados do Titular)\n - StepA2-ContactData.tsx (Contato)\n - StepA3-LocationData.tsx (Endereço)\n- Após completar StepA3-LocationData.tsx, o usuário é direcionado a uma vertente opcional para inclusão de dependentes:\n - StepB0-IncludeDependent.tsx (Escolha inicial sobre dependentes)\n- Se o usuário seleciona "Incluir dependentes agora", segue para:\n - StepB1-AddDependent.tsx (Adicionar dependente)\n - StepB2-AddInitialData.tsx (Dados iniciais do dependente)\n - StepB3-AddBasicData.tsx (Dados básicos do dependente)\n - StepB4-AddCompletionData.tsx (Finalização dos dados do dependente)\n- Se o usuário seleciona "Incluir dependentes depois", pula diretamente para StepA4-AcceptTerms.tsx.\n- Após a vertente de dependentes (ou se pular), o usuário prossegue para:\n - StepA4-AcceptTerms.tsx (Aceite e Conclusão)\n - StepA5-Successfully.tsx (Sucesso na contratação)

Conclusão

Após preencher todas as seções, incluindo a vertente de dependentes (se escolhida), o usuário finaliza o processo de contratação.

Lógica de Exibição das Seções
A exibição das seções é gerenciada pelo arquivo page.tsx usando o estado currentStep.\nCada valor de currentStep (como string) corresponde a uma seção específica:\n- currentStep === "StepA0": StepA0-Welcome.tsx (Seção de Boas-Vindas)\n- currentStep === "StepA1": StepA1-HolderData.tsx (Dados do Titular)\n- currentStep === "StepA2": StepA2-ContactData.tsx (Contato)\n- currentStep === "StepA3": StepA3-LocationData.tsx (Endereço)\n- currentStep === "StepB0": StepB0-IncludeDependent.tsx (Escolha inicial sobre dependentes)\n- currentStep === "StepB1": StepB1-AddDependent.tsx (Adicionar dependente)\n- currentStep === "StepB2": StepB2-AddInitialData.tsx (Dados iniciais do dependente)\n- currentStep === "StepB3": StepB3-AddBasicData.tsx (Dados básicos do dependente)\n- currentStep === "StepB4": StepB4-AddCompletionData.tsx (Finalização dos dados do dependente)\n- currentStep === "StepA4": StepA4-AcceptTerms.tsx (Aceite e Conclusão)\n- currentStep === "StepA5": StepA5-Successfully.tsx (Sucesso)\nO estado completedSteps (um Set de strings) rastreia quais etapas foram concluídas pelo usuário, evitando duplicatas.
Comportamento do Sidebar
O sidebar (MenuSidebar.tsx) lista todas as etapas do processo.\nCada item reflete o estado da etapa:\n- Concluído: Etapa já finalizada (exibida com um ícone de check).\n- Ativo: Etapa atual em que o usuário está (destacada visualmente, ex.: fundo vermelho).\n- Inativo: Etapa futura que ainda não foi alcançada (ex.: texto em cinza).
Regras de Navegação

Voltar para Etapas Concluídas: O usuário pode clicar em qualquer item do sidebar que represente uma etapa concluída.\n Ao clicar, o estado currentStep é atualizado para exibir a seção correspondente.\n- Impedir Avanço para Etapas Futuras: Itens do sidebar que representam etapas futuras são desabilitados.\n O usuário não pode clicar neles para pular etapas.\n- Atualização do Estado: Ao clicar em um item permitido (concluído ou ativo), a função handleMenuClick atualiza o currentStep para o valor correspondente.

Tecnologias e Propriedades Utilizadas
React

useState: Utilizado no componente page.tsx para gerenciar o estado currentStep (que determina a seção atual) e completedSteps (um Set que rastreia etapas concluídas).\n Exemplo:\n const [currentStep, setCurrentStep] = useState("StepA0");\n const [completedSteps, setCompletedSteps] = useState(new Set());\n- setCurrentStep atualiza dinamicamente o valor de currentStep com base nas ações do usuário (ex.: clique em "Avançar" ou "Voltar").\n- setCompletedSteps adiciona o currentStep atual ao conjunto de etapas concluídas para controle no sidebar.\n- Props: Cada seção (ex.: StepA3-LocationData.tsx, StepB0-IncludeDependent.tsx) recebe props como onNext, onBack, onIncludeNow, e onIncludeLater, que são funções passadas do componente pai (page.tsx) para controlar a navegação.\n Exemplo:\n {currentStep === "StepA3" && }\n- Renderização Condicional: O uso de operadores ternários e blocos condicionais ({currentStep === "StepA3" && …}) exibe a seção correspondente com base no valor de currentStep.

Next.js

"use client": Diretiva utilizada no topo de cada arquivo para indicar que o componente é renderizado no lado do cliente, permitindo o uso de hooks como useState e manipulação de estado interativo.\n- File-based Routing: A estrutura de pastas (ex.: src/app/page/contractPlans/page.tsx) define a rota /contractPlans, que serve como a página principal do processo de contratação.\n- Layout Component: O componente ContractPlansLayout é usado em seções como StepA4-AcceptTerms.tsx para estruturar o conteúdo principal e lateral, aproveitando a capacidade de Next.js de gerenciar layouts compartilhados.

TypeScript

Tipagem de Props: As props são tipadas para garantir segurança de tipos.\n Exemplo em StepA3-LocationData.tsx:\n export function StepA3LocationData({\n onNext,\n onBack,\n }: {\n onNext: () => void;\n onBack: () => void;\n }) { … }\n Isso assegura que as funções passadas sejam do tipo correto (() => void).\n- Tipagem de Estado: O estado currentStep e completedSteps são tipados como string e Set, respectivamente, para evitar erros em tempo de compilação.\n- Interface Implícita: A manipulação de dados (se aplicável) usa objetos JavaScript tipados implicitamente, garantindo consistência nos dados.

Exemplo de Código
Gerenciamento de Estado em page.tsx
O estado e a navegação são gerenciados da seguinte forma:\n- currentStep: Controla a seção atual exibida.\n- completedSteps: Registra as etapas concluídas.\n- Funções como handleNextStep, prevStep, e setStep gerenciam as transições entre as seções.\n\nconst [currentStep, setCurrentStep] = useState("StepA0");\nconst [completedSteps, setCompletedSteps] = useState(new Set());\n\nconst nextStep = () => {\n const currentIndex = mainSteps.indexOf(currentStep);\n if (currentIndex >= 0 && currentIndex < mainSteps.length - 1) {\n setCompletedSteps((prev) => new Set(prev).add(currentStep));\n setCurrentStep(mainSteps[currentIndex + 1]);\n }\n};\n\nconst prevStep = () => {\n const currentIndex = mainSteps.indexOf(currentStep);\n if (currentIndex > 0) {\n setCurrentStep(mainSteps[currentIndex - 1]);\n } else {\n // Lógica para ramificação de volta (ex.: de StepB0 para StepA3)\n const dependentIndex = dependentSteps.indexOf(currentStep);\n if (dependentIndex > 0) {\n setCurrentStep(dependentSteps[dependentIndex - 1]);\n } else if (dependentIndex === 0) {\n setCurrentStep("StepA3");\n }\n }\n};\n\nconst handleNextStep = async () => {\n if (validateStep(currentStep)) {\n setCompletedSteps((prev) => new Set(prev).add(currentStep));\n if (currentStep === "StepA3") setCurrentStep("StepB0"); // Ramificação\n else if (dependentSteps.includes(currentStep)) {\n const dependentIndex = dependentSteps.indexOf(currentStep);\n if (dependentIndex < dependentSteps.length - 1) {\n setCurrentStep(dependentSteps[dependentIndex + 1]);\n } else if (dependentIndex === dependentSteps.length - 1) {\n setCurrentStep("StepA4");\n }\n } else {\n nextStep();\n }\n }\n};




StepA0 (Welcome) → StepA1 (Dados Titular) → StepA2 (Contato) → StepA3 (Endereço) → StepB0 (Decisão Dependentes)

                                                                                ↓
StepB1 (Adicionar) → StepB2 (Dados Iniciais) → StepB3 (Dados Básicos) → StepB4 (Completar) → StepA4 (Termos) → StepA5 (Sucesso)

Funções Principais
handleNextStep(): Valida step atual e avança
validateStep(): Valida dados usando schema Zod
nextStep(), prevStep(): Navegação sequencial
setStep(): Navegação direta (apenas steps completados)
3. Schema de Validação
Arquivo: contractPlansSchema.ts

Schema Zod para validação completa
Estrutura hierárquica:
matricula: String 8 dígitos
holder: Dados do titular (nome, CPF, mãe, sexo, estado civil)
contact: Email, confirmação, telefones
address: CEP, cidade, estado, endereço completo
dependents: Array de dependentes
terms: Aceite de termos (boolean)
includeDependents: Flag para incluir dependentes
4. Context de Formulário
Arquivo: FormContext.tsx

Interface FormContextType define contratos
Métodos de navegação e submit
Estado compartilhado entre componentes
5. Componentes de Step
Exemplo: StepA1HolderData.tsx

Componente individual para cada etapa
Recebe onNext e onBack via props
Implementa validação local
Layout responsivo com sidebar
Mapeamento de Steps
String → Number (para MenuSidebar)
StepA0: 0, StepA1: 1, StepA2: 2, StepA3: 3

StepB0: 4, StepB1: 5, StepB2: 6, StepB3: 7, StepB4: 8

StepA4: 9, StepA5: 10

Sequências
mainSteps: ["StepA0", "StepA1", "StepA2", "StepA3", "StepA4", "StepA5"]
dependentSteps: ["StepB0", "StepB1", "StepB2", "StepB3", "StepB4"]
Validação e Formulário
React Hook Form Setup
defaultFormValues: Valores iniciais
zodResolver: Integração com schema
mode: "onChange": Validação em tempo real
Padrão de Validação por Step
Cada step valida apenas sua seção relevante do schema:

typescript
Copiar

case "StepA1":
  partialSchema = contractPlansSchema.pick({ holder: true });
  break;
Dados Mock
Arquivo: matriculas.json

Validação de matrícula contra dados mockados
Auto-preenchimento de nome do beneficiário

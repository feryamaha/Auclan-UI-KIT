Lógica de Funcionamento da Página "CONTRATAR PLANOS"
Propósito
A página "CONTRATAR PLANOS" permite que os usuários iniciem o processo de contratação de um plano odontológico. Ela é acessada por meio do botão "CONTRATAR AGORA" presente em várias páginas do hotsite.
Fluxo Geral de Navegação

Acesso à Página:

O usuário clica no botão "CONTRATAR AGORA" em qualquer página do hotsite.
É redirecionado para a página "CONTRATAR PLANOS", que sempre abre na seção de boas-vindas (StepA0-Welcome.tsx).

Seção de Boas-Vindas:

O usuário insere seu número de matrícula (8 dígitos).
Clica no botão "INICIAR" para validar a matrícula.
Se a matrícula for válida, avança para a próxima seção; caso contrário, uma mensagem de erro é exibida.

Progressão nas Seções:

Após a validação, o usuário avança para as seções subsequentes (ex.: StepA1-HolderData.tsx, StepA2-Contact.tsx, etc.).
Cada seção coleta informações específicas (dados pessoais, contato, endereço, dependentes, etc.).

Conclusão:

Após preencher todas as seções, o usuário finaliza o processo de contratação.

Lógica de Exibição das Seções

A exibição das seções é gerenciada pelo arquivo page.tsx usando o estado step.
Cada valor de step corresponde a uma seção específica:
step === 0: StepA0-Welcome.tsx (Seção de Boas-Vindas)
step === 1: StepA1-HolderData.tsx (Dados do Titular)
step === 2: StepA2-Contact.tsx (Contato)
step === 3: StepA3-Address.tsx (Endereço)
step === 4: StepA4-Dependents.tsx (Dependentes)
step === 5: StepA5-Acceptance.tsx (Aceite e Conclusão)

O estado completedSteps é um array que rastreia quais etapas foram concluídas pelo usuário.

Comportamento do Sidebar

O sidebar (MenuSidebar.tsx) lista todas as etapas do processo.
Cada item do sidebar reflete o estado da etapa:
Concluído: Etapa já finalizada (exibida com um ícone de check).
Ativo: Etapa atual em que o usuário está (destacada visualmente, ex.: fundo vermelho).
Inativo: Etapa futura que ainda não foi alcançada (ex.: texto em cinza).

O usuário pode clicar em itens concluídos para revisitar essas seções.
Itens inativos não são clicáveis e não permitem avançar no processo.

Regras de Navegação

Voltar para Etapas Concluídas:
O usuário pode clicar em qualquer item do sidebar que represente uma etapa concluída.
Ao clicar, o estado step é atualizado para exibir a seção correspondente.

Impedir Avanço para Etapas Futuras:
Itens do sidebar que representam etapas futuras são desabilitados.
O usuário não pode clicar neles para pular etapas.

Atualização do Estado:
Ao clicar em um item permitido (concluído ou ativo), a função handleMenuClick atualiza o step para o valor correspondente.

Exemplo de Código
Gerenciamento de Estado em page.tsx

<!-- const [step, setStep] = useState(0);
const [completedSteps, setCompletedSteps] = useState<number[]>([]);

const handleNext = () => {
  setCompletedSteps([...completedSteps, step]);
  setStep(step + 1);
};

const handleMenuClick = (newStep: number) => {
  if (completedSteps.includes(newStep) || newStep === step) {
    setStep(newStep);
  }
};

Renderização do Sidebar em MenuSidebar.tsx
items.map((item, index) => {
  const isCompleted = completedSteps.includes(index);
  const isActive = index === currentStep;
  const isDisabled = index > currentStep;
  return (
    <button
      key={index}
      className={`${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
      onClick={!isDisabled ? () => onMenuClick(index) : undefined}
      disabled={isDisabled}
    >
      {item.label}
    </button>
  );
}); -->

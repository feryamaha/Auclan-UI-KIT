"use client";

import {
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Icon } from "@/scripts/Icon";
import { FormContext, FormContextType } from "@/context/FormContext";

// Tipo base que o Next.js espera (para passar no build)
type BaseLayoutProps = {
  children?: ReactNode;
};

// Tipo extendido com a prop extra (sideContent)
type ExtendedLayoutProps = {
  children?: ReactNode;
  sideContent?: ReactNode;
};

export default function ContractPlansLayout(
  props: BaseLayoutProps | ExtendedLayoutProps
) {
  // Desestrutura com defaults para evitar erros de TS e compatibilizar com o union type
  const { children, sideContent } = {
    ...props,
    sideContent: undefined, // Default para prop extra
  };

  const [step, setStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(
    new Set<number>()
  );

  // Ler o parâmetro step da URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stepParam = params.get("step");
    if (stepParam) {
      const newStep = parseInt(stepParam, 10);
      setStep(newStep);
      const prev = new Set<number>();
      for (let i = 0; i < newStep; i++) prev.add(i);
      setCompletedSteps(prev);
    }
  }, []);

  const handleClose = () => {
    window.location.href = "/";
  };

  const handleNext = () => {
    setCompletedSteps((prev) => new Set(prev).add(step));
    let newStep = step;
    if (step === 3) newStep = 30;
    else if (step >= 30 && step < 34) newStep = step + 1;
    else if (step === 34) newStep = 4;
    else newStep = step + 1;
    setStep(newStep);
    const params = new URLSearchParams(window.location.search);
    params.set("step", newStep.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handleNextStep = (matricula: string) => {
    // Lógica específica para next step com matricula (ajuste conforme necessário)
    console.log(`Avançando com matrícula: ${matricula}`);
    handleNext(); // Chama o handleNext genérico, ou adicione lógica custom
  };

  const handleBack = () => {
    let newStep = step;
    if (step === 4 && completedSteps.has(34)) newStep = 34;
    else if (step > 30 && step <= 34) newStep = step - 1;
    else if (step === 30) newStep = 3;
    else if (step > 0) newStep = step - 1;
    setStep(newStep);
    const params = new URLSearchParams(window.location.search);
    params.set("step", newStep.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handleIncludeNow = () => {
    setStep(31);
    setCompletedSteps((prev) => new Set(prev).add(30));
    const params = new URLSearchParams(window.location.search);
    params.set("step", "31");
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handleIncludeLater = () => {
    setStep(4);
    setCompletedSteps((prev) => new Set(prev).add(30));
    const params = new URLSearchParams(window.location.search);
    params.set("step", "4");
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const onMenuClick = (newStep: number) => {
    setStep(newStep);
    const params = new URLSearchParams(window.location.search);
    params.set("step", newStep.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const isFirstPage = step === 0;

  // Valor do contexto com TODOS os campos requeridos pelo FormContextType
  const contextValue: FormContextType = {
    form: undefined,
    handleNext,
    handleNextStep,
    handleBack,
    handleIncludeNow,
    handleIncludeLater,
    handleSubmit: () => {}, // Stub, ajuste se necessário
    currentStep: step,
    completedSteps,
    setStep: setStep as Dispatch<SetStateAction<number>>, // Tipo explícito para setStep
    onMenuClick,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <div className="w-screen h-screen fixed inset-0 flex flex-col items-center justify-center bg-gray950 bg-opacity-50 z-50">
        <div className="fixed top-0 w-full h-[80px] py-[16px] px-[32px] flex items-center justify-between bg-transparent z-50">
          <a href="/" className="w-[154px] h-[24px]">
            <Icon
              name={
                isFirstPage ? "IconLogoinstitucional" : "IconLogoDocolMekal"
              }
              className="w-full h-full"
            />
          </a>
          <button
            className="w-[48px] p-[12px] bg-white border border-gray100 rounded-full flex justify-center"
            onClick={handleClose}
          >
            <Icon name="IconClose" />
          </button>
        </div>

        <div className="w-full h-full flex pt-[80px]">
          <div className="w-[68%] bg-white">
            <div className="w-full mx-auto px-[32px] pt-[32px] flex justify-center">
              {children}
            </div>
          </div>
          <div className="w-[32%] h-full px-[32px] pt-[32px] bg-gray50 overflow-y-auto">
            {sideContent}
          </div>
        </div>
      </div>
    </FormContext.Provider>
  );
}

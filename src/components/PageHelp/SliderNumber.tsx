import React, { useState, useRef, useEffect } from "react";

/**
 * SliderNumber
 * Componente de seleção de steps (slider discreto) com escala numérica.
 * - Mostra 6 steps padronizados para todas as resoluções.
 * - O usuário pode clicar em qualquer step ou arrastar o círculo selecionado para selecionar.
 * - Steps preenchidos usam a classe 'stepSliderHover'.
 * - O step selecionado usa a classe 'selectSliderHover' (círculo maior com centro branco).
 * - Os demais steps usam a classe 'stepSlider'.
 * - A barra de fundo usa 'styleSlider' e o preenchimento até o step selecionado usa 'styleSliderHover'.
 * - O preenchimento vai até o centro do step selecionado, com ajustes precisos para cada step.
 * - Para o último step, a barra deve ser totalmente preenchida (100%).
 * - Abaixo do slider, mostra a escala numérica de 1 a 6, com cores dinâmicas:
 * - Cinza claro (#C0C0C0) se não selecionado e não preenchido
 * - Preto (#000) se preenchido
 * - #8A1724 se selecionado
 * - Área clicável aumentada para 24px x 16px em cada step sem alterar o visual,
 * melhorando a experiência do usuário (UX) especialmente em dispositivos móveis.
 */
type SliderNumberProps = {
  initialValue?: number;
  onChange?: (value: number) => void;
};

export function SliderNumber({
  initialValue = 3,
  onChange,
}: SliderNumberProps) {
  // Ajusta o valor inicial para não exceder o número de steps disponíveis
  const safeInitialValue = initialValue > 6 ? 6 : initialValue;

  const [selected, setSelected] = useState(safeInitialValue);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Agora padronizado para 6 steps em todas as resoluções
  const steps = 6;

  // Larguras e espaçamentos (responsivos para layout, mas não para número de steps)
  const desktopWidth = 412;
  const mobileWidth = 300;
  const width = isMobile ? mobileWidth : desktopWidth;

  const padding = 4;

  // Recalcula a distância entre os steps com base na largura e no número fixo de 6 steps
  const desktopStepDistance = (desktopWidth - 2 * padding) / (steps - 1);
  const mobileStepDistance = (mobileWidth - 2 * padding) / (steps - 1);
  const stepDistance = isMobile ? mobileStepDistance : desktopStepDistance;

  // Detecta se o dispositivo é móvel (abaixo de 639px conforme o breakpoint @mobile no tailwind.config.ts)
  useEffect(() => {
    const MOBILE_BREAKPOINT = 639; // Exatamente o mesmo valor do breakpoint @mobile no tailwind.config.ts

    const checkIsMobile = () => {
      const isMobileView = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(isMobileView);
    };

    // Verifica inicialmente
    checkIsMobile();

    // Adiciona listener para mudanças de tamanho de tela
    window.addEventListener("resize", checkIsMobile);

    // Limpa o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Calcula a posição do centro do step selecionado
  const center = padding + (selected - 1) * stepDistance;

  // Calcula o percentual para o gradiente com ajustes específicos por step para alinhamento visual preciso
  const calculateFillPercentage = () => {
    // Cálculo base do percentual
    const basePercentage = (center / width) * 100;

    // Se for o último step, preenche 100%
    if (selected === steps) {
      return 100;
    }

    // Ajustes específicos para cada step para garantir o preenchimento visual correto
    const stepAdjustments = {
      1: 5, // Para step 1, adiciona um pouco mais para preencher até o centro do step
      2: 2, // Para step 2, ajuste moderado
      3: 1, // Para step 3, ajuste pequeno
      4: 0, // Para step 4, nenhum ajuste
      5: -2, // Para step 5, ajuste negativo para não ultrapassar
      6: 0, // Para step 6 (último), já tratado acima com 100%
    };

    // Aplica o ajuste específico para o step selecionado
    return (
      basePercentage +
      (stepAdjustments[selected as keyof typeof stepAdjustments] || 0)
    );
  };

  // Aplica o cálculo com ajustes específicos
  const fillToCenter = calculateFillPercentage();

  // Cores das classes
  const styleSliderColor = "#E7E7E7"; // cor de fundo padrão
  const styleSliderHoverColor = "#8A1724"; // cor de preenchimento (redSTD)

  // Notifica o componente pai sobre a mudança
  const handleSelect = (step: number) => {
    setSelected(step);
    if (onChange) onChange(step);
  };

  // Calcula o step mais próximo com base na posição do mouse/toque
  const calculateStep = (clientX: number) => {
    if (!sliderRef.current) return selected;
    const rect = sliderRef.current.getBoundingClientRect();
    const relativeX = clientX - rect.left - padding;
    const stepIndex = Math.round(relativeX / stepDistance) + 1;
    return Math.max(1, Math.min(steps, stepIndex));
  };

  // Inicia o arraste
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const newStep = calculateStep(clientX);
    handleSelect(newStep);
  };

  // Atualiza durante o arraste
  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const newStep = calculateStep(clientX);
    handleSelect(newStep);
  };

  // Finaliza o arraste
  const handleEnd = () => {
    setIsDragging(false);
  };

  // Adiciona e remove eventos globais de mouse/toque
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  return (
    <div className="w-full pt-[2px] flex flex-col items-center overflow-x-auto scrollbar-none">
      {/* Slider - responsivo para largura, mas sempre com 6 steps */}
      <div
        ref={sliderRef}
        className="styleSlider h-[16px] rounded-[8px] p-[4px] flex justify-between items-center cursor-pointer max-@mobile:w-[300px] @mobile:w-[412px]"
        style={{
          background: `linear-gradient(to right, ${styleSliderHoverColor} ${fillToCenter}%, ${styleSliderColor} ${fillToCenter}%)`,
          border: "1px solid #E7E7E7",
          borderRadius: "17.5px",
          boxShadow:
            "0px 1px 2px 0px rgba(0, 0, 0, 0.16) inset, 0px 2px 4px 2px rgba(0, 0, 0, 0.06) inset",
          transition: "background 0.2s",
        }}
      >
        {Array.from({ length: steps }).map((_, idx) => {
          const step = idx + 1;

          // Wrapper para aumentar área clicável
          if (step === selected) {
            return (
              // Wrapper com área clicável maior
              <div
                key={step}
                onClick={() => handleSelect(step)}
                onMouseDown={handleStart}
                onTouchStart={handleStart}
                aria-label={`Selecionar etapa ${step}`}
                tabIndex={0}
                role="button"
                className="stepSliderClick"
              >
                {/* Elemento visual original */}
                <div
                  className="selectSliderHover"
                  style={{ position: "absolute" }}
                />
              </div>
            );
          }

          if (step < selected) {
            return (
              // Wrapper com área clicável maior
              <div
                key={step}
                onClick={() => handleSelect(step)}
                aria-label={`Selecionar etapa ${step}`}
                tabIndex={0}
                role="button"
                className="stepSliderClick"
              >
                {/* Elemento visual original */}
                <div
                  className="stepSliderHover"
                  style={{ position: "absolute" }}
                />
              </div>
            );
          }

          return (
            // Wrapper com área clicável maior
            <div
              key={step}
              onClick={() => handleSelect(step)}
              aria-label={`Selecionar etapa ${step}`}
              tabIndex={0}
              role="button"
              className="stepSliderClick"
            >
              {/* Elemento visual original */}
              <div className="stepSlider" style={{ position: "absolute" }} />
            </div>
          );
        })}
      </div>

      {/* Escala numérica - sempre mostrando 6 steps */}
      <div className="w-full flex justify-between pt-[16px] px-[20px] @mobile:px-[24px] ">
        {Array.from({ length: steps }).map((_, idx) => {
          const step = idx + 1;
          let className = "fontScaleSlider";
          if (step === selected) {
            className = "fontScaleSelected";
          } else if (step < selected) {
            className = "fontScaleSliderback";
          }
          return (
            <span key={step} className={className}>
              {step}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default SliderNumber;

{
  /* <div className="w-full flex justify-between pt-[16px] px-[16px] @mobile:px-[24px] "></div>; */
}

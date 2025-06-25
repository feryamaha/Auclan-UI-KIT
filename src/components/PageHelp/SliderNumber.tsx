import React, { useState } from "react";

/**
 * SliderNumber
 * Componente de seleção de steps (slider discreto) com escala numérica.
 * - Mostra 8 steps.
 * - O usuário pode clicar em qualquer step para selecionar.
 * - Steps preenchidos usam a classe 'stepSliderHover'.
 * - O step selecionado usa a classe 'selectSliderHover' (círculo maior com centro branco).
 * - Os demais steps usam a classe 'stepSlider'.
 * - A barra de fundo usa 'styleSlider' e o preenchimento até o step selecionado usa 'styleSliderHover'.
 * - O preenchimento vai até o centro do step selecionado, avançando 1% para melhor alinhamento visual.
 * - Para o último step, a barra deve ser totalmente preenchida (100%).
 * - Abaixo do slider, mostra a escala numérica de 1 a 8, com cores dinâmicas:
 *    - Cinza claro (#C0C0C0) se não selecionado e não preenchido
 *    - Preto (#000) se preenchido
 *    - #8A1724 se selecionado
 */
type SliderNumberProps = {
  initialValue?: number;
  onChange?: (value: number) => void;
};

export function SliderNumber({
  initialValue = 3,
  onChange,
}: SliderNumberProps) {
  const [selected, setSelected] = useState(initialValue);

  // Total de steps
  const steps = 8;
  const width = 411;
  const padding = 4;
  const stepDistance = 56;

  // Calcula a posição do centro do step selecionado
  const center = padding + (selected - 1) * stepDistance;
  // Calcula o percentual para o gradiente e avança 1% para melhor alinhamento visual
  let fillToCenter = (center / width) * 100 + 1;
  // Se for o último step, preenche 100%
  if (selected === steps) {
    fillToCenter = 100;
  } else if (fillToCenter > 100) {
    fillToCenter = 100;
  }

  // Cores das classes (ajuste conforme seu tailwind.config.js)
  const styleSliderColor = "#E7E7E7"; // cor de fundo padrão
  const styleSliderHoverColor = "#8A1724"; // cor de preenchimento (redSTD)
  const numberSelected = "#8A1724";
  const numberFilled = "#000";
  const numberDefault = "#C0C0C0";

  // Notifica o componente pai sobre a mudança
  const handleSelect = (step: number) => {
    setSelected(step);
    if (onChange) onChange(step);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Slider */}
      <div
        className="styleSlider w-[412px] h-[16px] rounded-[8px] p-[4px] flex justify-between items-center cursor-pointer"
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

          if (step === selected) {
            return (
              <div
                key={step}
                className="selectSliderHover"
                onClick={() => handleSelect(step)}
                aria-label={`Selecionar etapa ${step}`}
                tabIndex={0}
                role="button"
              />
            );
          }

          if (step < selected) {
            return (
              <div
                key={step}
                className="stepSliderHover"
                onClick={() => handleSelect(step)}
                aria-label={`Selecionar etapa ${step}`}
                tabIndex={0}
                role="button"
              />
            );
          }

          return (
            <div
              key={step}
              className="stepSlider"
              onClick={() => handleSelect(step)}
              aria-label={`Selecionar etapa ${step}`}
              tabIndex={0}
              role="button"
            />
          );
        })}
      </div>
      {/* Escala numérica */}
      <div className="w-[411px] flex justify-between mt-[12px] px-[6px]">
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

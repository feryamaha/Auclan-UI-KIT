"use client";

import React, { useState, useEffect } from "react";
import { icons } from "@/scripts/IconsList";
import { StaticImageData } from "next/image";

const { IconArrowSliderControlLeft, IconArrowSliderControlRight, IconPauseSliderControl, IconPlayicon } = icons;

// Props do componente
interface SliderControlProps {
    images: { src: string | StaticImageData; alt: string }[]; // Imagens dinâmicas via API
    onSlideChange?: (index: number) => void;
    sliderConfig?: {
        slideDuration: number; // Tempo de exibição por slide (ms)
        transitionPercentage: number; // Percentual para iniciar transição (ex.: 0.98 = 98%)
        transitionDuration: number; // Tempo da transição (ms)
    };
}

// Configuração padrão do slider
const DEFAULT_SLIDER_CONFIG = {
    slideDuration: 7000, // 7s por slide
    transitionPercentage: 0.98, // Iniciar transição em 98%
    transitionDuration: 2000, // 2s para transição
};

// Componente da barra de progresso
// Anima a barra de cada slide, reiniciando em 0% na troca
const ProgressBar: React.FC<{
    isActive: boolean;
    onClick: () => void;
    isPlaying: boolean;
}> = ({ isActive, onClick, isPlaying }) => (
    <div
        className={`h-[8px] bg-bgSilderControl rounded-[9px] cursor-pointer overflow-hidden transition-all duration-300 ${isActive ? "w-[122px]" : "w-[58px]"
            }`}
        onClick={onClick}
        role="button"
    >
        <div
            className={`h-full rounded-[9px] ${isActive && isPlaying ? "bg-black animate-progress" : ""}`}
            style={{
                width: isActive ? "100%" : "0",
                backgroundColor: isActive && !isPlaying ? "#000" : undefined,
                animationPlayState: isPlaying ? "running" : "paused",
            }}
        />
    </div>
);

// Componente principal do slider
// Gerencia controles e barras para navegação de imagens
const SliderControl: React.FC<SliderControlProps> = ({
    images,
    onSlideChange,
    sliderConfig = DEFAULT_SLIDER_CONFIG,
}) => {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Extrai configurações
    const { slideDuration, transitionPercentage, transitionDuration } = sliderConfig;
    const TRANSITION_START = slideDuration * transitionPercentage; // Ex.: 6860ms para 98%

    // Navega para o próximo slide
    const nextSlide = () => {
        const newIndex = current === images.length - 1 ? 0 : current + 1;
        setCurrent(newIndex);
        onSlideChange?.(newIndex);
    };

    // Navega para o slide anterior
    const prevSlide = () => {
        const newIndex = current === 0 ? images.length - 1 : current - 1;
        setCurrent(newIndex);
        onSlideChange?.(newIndex);
    };

    // Navega para um slide específico
    const goTo = (idx: number) => {
        if (idx !== current) {
            setCurrent(idx);
            onSlideChange?.(idx);
        }
    };

    // Automação do slider
    // Troca slides em TRANSITION_START (ex.: 6860ms para 98%)
    // Ajuste sliderConfig para mudar duração ou percentual
    useEffect(() => {
        if (!isPlaying) return;
        const timeout = setTimeout(nextSlide, TRANSITION_START);
        return () => clearTimeout(timeout);
    }, [isPlaying, current, TRANSITION_START]);

    // Alterna play/pause
    const handlePlayPause = () => setIsPlaying(!isPlaying);

    return (
        <>
            {/* Estilos da animação da barra */}
            {/* Usa TRANSITION_START para alinhar com a troca */}
            <style jsx global>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress ${TRANSITION_START}ms linear;
        }
      `}</style>

            {/* Contêiner de controles */}
            <div className="relative w-full h-[60px]">
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
                    {/* Botões de navegação */}
                    <div className="flex items-center space-x-2">
                        <div
                            className="w-auto h-auto bg-bgSilderControl rounded-full flex items-center gap-[8px] py-[4px] px-[8px] justify-center cursor-pointer"
                            onClick={handlePlayPause}
                            role="button"
                            aria-label={isPlaying ? "Pausar slider" : "Iniciar slider"}
                        >
                            <div onClick={(e) => { e.stopPropagation(); prevSlide(); }} role="button" aria-label="Slide anterior">
                                <IconArrowSliderControlLeft className="w-[20px] h-[20px]" />
                            </div>
                            {isPlaying ? (
                                <IconPauseSliderControl className="w-[20px] h-[20px] text-white" />
                            ) : (
                                <IconPlayicon className="w-[20px] h-[20px] text-white" />
                            )}
                            <div onClick={(e) => { e.stopPropagation(); nextSlide(); }} role="button" aria-label="Próximo slide">
                                <IconArrowSliderControlRight className="w-[20px] h-[20px] text-white" />
                            </div>
                        </div>
                    </div>
                    {/* Barras de progresso */}
                    <div className="flex gap-[8px] ">
                        {images.map((_, idx) => (
                            <ProgressBar
                                key={`${idx}-${current}`}
                                isActive={current === idx}
                                onClick={() => goTo(idx)}
                                isPlaying={isPlaying}
                                aria-label={`Ir para slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderControl;
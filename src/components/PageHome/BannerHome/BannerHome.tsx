"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import SliderControl from "./SliderControl";
import { Icon } from "@/scripts/Icon";
import { Button } from "@/components/ui/Button";
import { FontDebugger } from "@/components/debug/FontDebugger";

// Imagens do banner - agora referenciando da pasta public
const bannerImages = [
  {
    src: "/assets/img/bg-home.webp",
    alt: "Banner Dental Uni - Plano Odontológico",
  },
  {
    src: "/assets/img/bg-home2.webp",
    alt: "Banner Dental Uni - Plano Odontológico",
  },
  {
    src: "/assets/img/bg-home3.webp",
    alt: "Banner Dental Uni - Plano Odontológico",
  },
];

const TOTAL_SLIDES = bannerImages.length;

const BannerHome: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (index: number) => {
    setNextImage(index);
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentImage(index);
      setIsTransitioning(false);
    }, 1500);
  };

  return (
    <div className="relative w-full h-auto overflow-hidden  @tablet:h-[440px] ">
      {/* Container das imagens */}
      <div className="absolute inset-0 w-full h-full bg-black/0 ">
        {/* Imagem atual */}
        <div className="absolute inset-0">
          <Image
            src={bannerImages[currentImage].src}
            alt={bannerImages[currentImage].alt}
            fill
            priority // Pré-carregar todas as imagens
            className={`object-cover object-center transition-opacity ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
            style={{
              animation: isTransitioning
                ? "fadeOut 1500ms ease-in-out forwards"
                : "none",
            }}
          />
        </div>

        {/* Próxima imagem (durante a transição) */}
        {isTransitioning && (
          <div className="absolute inset-0">
            <Image
              src={bannerImages[nextImage].src}
              alt={bannerImages[nextImage].alt}
              fill
              priority // Pré-carregar todas as imagens
              className="object-cover object-center transition-opacity ease-in-out opacity-100"
              style={{
                animation: "fadeIn 1500ms ease-in-out forwards",
              }}
            />
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>

      {/* Conteúdo do banner */}
      <Container className="relative h-full flex flex-col py-[32px] justify-between @tablet:flex-row ">
        <div className=" px-4 max-w-[445px]  ">
          <Icon name="IconDucol" className="w-5 h-5 " />
          <h1 className=" mb-4 mt-[32px] TypographyH1home">
            Docol e Dental Uni juntos pelo seu sorriso
          </h1>
          <p className="mb-8 TypographyPinter18home ">
            Planos odontológicos com uma das maiores redes credenciadas e
            cobertura com preços incríveis.
          </p>
          <Button
            href="/plans"
            variant="btnSecondary"
            className="hover:bg-red700 w-full @mobile:w-auto"
          >
            Conhecer os planos
          </Button>
        </div>

        <div className="w-full max-w-[500px] relative mt-8 @tablet:absolute @tablet:bottom-8 @tablet:left-1/2 @tablet:-translate-x-1/2 @tablet:mt-0 ">
          <SliderControl
            images={bannerImages}
            onSlideChange={handleSlideChange}
          />
        </div>
      </Container>
      {/* Adicione os FontDebuggers aqui */}
      {/*      <FontDebugger selector=".TypographyH1home" />
      <FontDebugger selector=".TypographyPinter18home" /> */}
    </div>
  );
};

export default BannerHome;

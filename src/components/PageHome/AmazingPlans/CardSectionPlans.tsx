import { Button } from "@/components/ui/Button";
import { Icon } from "@/scripts/Icon";
import { icons } from "@/scripts/IconsList";
import React, { useState } from "react";
import ModalProcedimentos from "../AmazingPlans/Modal/Procedimentos/ModalProcedimentos";

interface IncludeItem {
  iconInclud: keyof typeof icons;
  textIncludA?: string;
  textIncludB?: string;
  textIncludC?: string;
  textIncludD?: string;
  textIncludE?: string;
}

interface CardSectionPlansProps {
  id: string;
  name: string;
  price: string;
  description: string;
  procedures: string;
  hideVector?: boolean;
  vectorIconClass?: keyof typeof icons; // Updated to accept specific icon keys
  IncludTitle?: string;
  includA?: IncludeItem[];
  includB?: IncludeItem[];
  includC?: IncludeItem[];
  includD?: IncludeItem[];
  includE?: IncludeItem[];
}

export function CardSectionPlans({
  id,
  name,
  price,
  description,
  procedures,
  hideVector = false,
  vectorIconClass = "IconVetorCardPlans", // Default value
  IncludTitle,
  includA,
  includB,
  includC,
  includD,
  includE,
}: CardSectionPlansProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-[310px] @laptop:w-[254px] h-max flex items-center justify-center mr-[12px] @laptop:mr-0">
        <div className="w-[310px] @laptop:w-[256px] border @laptop:border-none rounded-[8px] h-max p-[15px] @Desktop1440:p-[24px] flex flex-col justify-between mx-auto ">
          <div className="mb-[40px]">
            <p className="TypographyPlato24">{name}</p>
            <h1 className="pt-[48px] pb-[8px] TypographyH1">R${price}</h1>
            <p className="max-w-[162px] TypographyPinter14w400 ">
              {description}
            </p>
          </div>
          <Button
            href="https://www.planosdentaluni.com.br/"
            variant="btnSecondary"
          >
            Contratar agora
          </Button>
          <div className="h-max relative flex flex-col my-[32px]">
            <div className="w-[280px] h-[32px] hidden @laptop:block">
              <Icon name="IconBGCardPlans" className="hidden " />
            </div>
            <div className="w-[280px] h-[32px] block @laptop:hidden ">
              <Icon name="IconBGCardPlansMobile" className="hidden " />
            </div>
            <div className="flex flex-col gap-[8px] ">
              {/* Included list */}
              {IncludTitle && (
                <h3 className="TypographyPinter16w500g950 mb-[12px] ">
                  {IncludTitle}
                </h3>
              )}
              {includA?.map((item, index) => (
                <div
                  key={`includeA-${index}`}
                  className="flex gap-[12px] items-center"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludA}</p>
                </div>
              ))}
              {includB?.map((item, index) => (
                <div
                  key={`includeB-${index}`}
                  className="flex gap-[12px] items-center"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludB}</p>
                </div>
              ))}
              {includC?.map((item, index) => (
                <div
                  key={`includeC-${index}`}
                  className="flex gap-[12px] items-center"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludC}</p>
                </div>
              ))}
              {includD?.map((item, index) => (
                <div
                  key={`includeD-${index}`}
                  className="flex gap-[12px] items-center"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludD}</p>
                </div>
              ))}
              {includE?.map((item, index) => (
                <div
                  key={`includeE-${index}`}
                  className="flex gap-[12px] items-center"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400 ">{item.textIncludE}</p>
                </div>
              ))}
            </div>
            <div className="h-max flex flex-col gap-[8px] mt-[24px]">
              <p className="TypographyPinter16w500g950">{procedures}</p>
              <div className=" ">
                <Button
                  className="TypographyPinter16w500r absolute"
                  variant="btnLink"
                  onClick={() => setIsModalOpen(true)}
                >
                  Ver procedimentos
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden @laptop:block">
          {!hideVector && <Icon name={vectorIconClass} />}{" "}
          {/* Render icon directly */}
        </div>
      </div>
      {isModalOpen && <ModalProcedimentos onClose={handleCloseModal} />}
    </>
  );
}

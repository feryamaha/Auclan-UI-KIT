import { Button } from "@/components/ui/Button";
import { Icon } from "@/scripts/Icon";
import { icons } from "@/scripts/IconsList";
import React from "react";
import Link from "next/link";

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
  onOpenModal: () => void;
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
  onOpenModal,
}: CardSectionPlansProps) {
  return (
    <>
      <div className="w-[310px] @laptop:w-[254px] h-max flex items-center justify-center mr-[12px] @laptop:mr-0">
        <div className="w-[310px] @laptop:w-[256px] border @laptop:border-none rounded-[8px] h-max p-[15px] @Desktop1440:p-[24px] flex flex-col justify-between mx-auto ">
          <div className="mb-[40px]">
            <p className="TypographyPlato24">{name}</p>
            <h1 className="pt-[48px] pb-[8px] TypographyH1">R$ {price}</h1>
            <p className="max-w-[162px] TypographyPinter14w400 ">
              {description}
            </p>
          </div>
          <Link href="/page/contractPlans">
            <Button
              variant="btnSecondary"
              className="w-full mb-[32px] hover:bg-red700"
            >
              Contratar agora
            </Button>
          </Link>
          <div className="h-max relative flex flex-col ">
            <div className="w-full h-[32px] hidden @laptop:block">
              <Icon name="IconBGCardPlans" className="w-full" />
            </div>
            {/*<div className="max-w-[280px] h-[32px] hidden @laptop:block">
              <Icon name="IconBGCardPlans" className="hidden" />
            </div>
            <div className="max-w-[280px] h-[32px] block @laptop:hidden ">
              <Icon name="IconBGCardPlansMobile" className="hidden " />
            </div> */}

            <div className="flex flex-col gap-[8px]">
              {" "}
              {/* div list include */}
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
                  className="flex gap-[12px] items-center mb-[24px]"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400 ">{item.textIncludE}</p>
                </div>
              ))}
            </div>
            <div className="h-max flex flex-col gap-[10px] ">
              <p className="TypographyPinter16g950">{procedures}</p>
              <div>
                <Button
                  className="TypographyPinter16w500r hover:text-red700"
                  variant="btnLink"
                  onClick={onOpenModal}
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
    </>
  );
}


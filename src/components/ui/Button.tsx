"use client";
import React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

/* ----------- TYPES ----------- */
export type ButtonVariant =
  | "btnPrimary"
  | "btnPrimaryMD"
  | "btnPrimarySM"
  | "btnPrimaryOFF"
  | "btnPrimaryOFFmd"
  | "btnPrimaryOFFsm"
  | "btnPrimaryADD"
  | "btnPrimaryADDmd"
  | "btnPrimaryADDsm"
  | "btnPrimaryADDOFF"
  | "btnPrimaryADDOFFmd"
  | "btnPrimaryADDOFFsm"
  | "btnPrimaryAddRight"
  | "btnPrimaryAddRightMD"
  | "btnPrimaryAddRightSM"
  | "btnPrimaryAddRightOFF"
  | "btnPrimaryAddRightOFFmd"
  | "btnPrimaryAddRightOFFsm"
  | "btnPrimaryAddLeft"
  | "btnPrimaryAddLeftMD"
  | "btnPrimaryAddLeftSM"
  | "btnPrimaryAddLeftOFF"
  | "btnPrimaryAddLeftOFFmd"
  | "btnPrimaryAddLeftOFFsm"
  | "btnAddOFF"
  | "btnAddOFFmd"
  | "btnAddOFFsm"
  | "btnAddDefault"
  | "btnAddDefaultMD"
  | "btnAddDefaultSM"
  | "btnAddDefaultOFF"
  | "btnAddDefaultOFFmd"
  | "btnAddDefaultOFFsm"
  | "btnSecondary"
  | "btnSecondaryMD"
  | "btnSecondarySM"
  | "btnSecondaryOFF"
  | "btnSecondaryOFFmd"
  | "btnSecondaryOFFsm"
  | "btnSecondaryAddRight"
  | "btnSecondaryAddRightMD"
  | "btnSecondaryAddRightSM"
  | "btnSecondaryAddRightOFF"
  | "btnSecondaryAddRightOFFmd"
  | "btnSecondaryAddRightOFFsm"
  | "btnSecondaryAddLeft"
  | "btnSecondaryAddLeftMD"
  | "btnSecondaryAddLeftSM"
  | "btnSecondaryAddLeftOFF"
  | "btnSecondaryAddLeftOFFmd"
  | "btnSecondaryAddLeftOFFsm"
  | "btnSecondaryADD"
  | "btnSecondaryADDmd"
  | "btnSecondaryADDsm"
  | "btnSecondaryADDOFF"
  | "btnSecondaryADDOFFmd"
  | "btnSecondaryADDOFFsm"
  | "btnTertiary"
  | "btnTertiaryOFF";

/* ----------- INTERFACE ----------- */
interface ButtonProps {
  variant: ButtonVariant; // Agora obrigatória sem ?
  iconPosition?: "none" | "left" | "right";
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  target?: "_blank" | "_self";
}

/* ----------- VARIANT CLASSES ----------- */
const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  btnPrimary:
    "h-[40px] gap-2 bg-red600 hover:bg-red700 cursor-pointer px-[16px] text-white ",
  btnPrimaryMD:
    "h-[36px] gap-2 bg-red600 hover:bg-red700 cursor-pointer px-[16px] text-white",
  btnPrimarySM:
    "h-[32px] gap-2 bg-red600 hover:bg-red700 cursor-pointer px-[16px] text-white",
  btnPrimaryOFF:
    "h-[40px] gap-2 bg-gray200 text-gray400 cursor-not-allowed px-[16px]",
  btnPrimaryOFFmd:
    "h-[36px] gap-2 bg-gray200 text-gray400 cursor-not-allowed px-[16px]",
  btnPrimaryOFFsm:
    "h-[32px] gap-2 bg-gray200 text-gray400 cursor-not-allowed px-[16px]",
  btnPrimaryADD:
    "h-[40px] w-[40px] bg-red600 hover:bg-red700 cursor-pointer text-white",
  btnPrimaryADDmd:
    "h-[36px] w-[36px] bg-red600 hover:bg-red700 cursor-pointer text-white",
  btnPrimaryADDsm:
    "h-[32px] w-[32px] bg-red600 hover:bg-red700 cursor-pointer text-white",
  btnPrimaryADDOFF:
    "h-[40px] w-[40px] bg-gray200 text-gray400 cursor-not-allowed",
  btnPrimaryADDOFFmd:
    "h-[36px] w-[36px] bg-gray200 text-gray400 cursor-not-allowed",
  btnPrimaryADDOFFsm:
    "h-[32px] w-[32px] bg-gray200 text-gray400 cursor-not-allowed",
  btnPrimaryAddRight:
    "h-[40px] gap-2 bg-red600 hover:bg-red700 cursor-pointer gap-[8px] pl-[16px] pr-[12px] text-white",
  btnPrimaryAddRightMD:
    "h-[36px] gap-2 bg-red600 hover:bg-red700 cursor-pointer gap-[8px] pl-[16px] pr-[12px] text-white",
  btnPrimaryAddRightSM:
    "h-[32px] gap-2 bg-red600 hover:bg-red700 cursor-pointer gap-[8px] pl-[16px] pr-[12px] text-white",
  btnPrimaryAddRightOFF:
    "h-[40px] w-max gap-2 bg-gray200 text-gray400 cursor-not-allowed gap-[8px] pl-[16px] pr-[12px]",
  btnPrimaryAddRightOFFmd:
    "h-[36px] gap-2 bg-gray200 text-gray400 cursor-not-allowed gap-[8px] pl-[16px] pr-[12px]",
  btnPrimaryAddRightOFFsm:
    "h-[32px] gap-2 bg-gray200 text-gray400 cursor-not-allowed gap-[8px] pl-[16px] pr-[12px]",
  btnPrimaryAddLeft:
    "h-[40px] gap-2 bg-red600 hover:bg-red700 cursor-pointer gap-[8px] pl-[12px] pr-[16px] text-white",
  btnPrimaryAddLeftMD:
    "h-[36px] gap-2 bg-red600 hover:bg-red700 cursor-pointer gap-[8px] pl-[12px] pr-[16px] text-white",
  btnPrimaryAddLeftSM:
    "h-[32px] gap-2 bg-red600 hover:bg-red700 cursor-pointer gap-[8px] pl-[12px] pr-[16px] text-white",
  btnPrimaryAddLeftOFF:
    "h-[40px] gap-2 bg-gray200 text-gray400 cursor-not-allowed gap-[8px] pl-[12px] pr-[16px]",
  btnPrimaryAddLeftOFFmd:
    "h-[36px] gap-2 bg-gray200 text-gray400 cursor-not-allowed gap-[8px] pl-[12px] pr-[16px]",
  btnPrimaryAddLeftOFFsm:
    "h-[32px] gap-2 bg-gray200 text-gray400 cursor-not-allowed gap-[8px] pl-[12px] pr-[16px]",
  btnAddOFF:
    "h-[40px] border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed gap-[8px] pl-[16px] pr-[12px]",
  btnAddOFFmd:
    "h-[36px] border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed gap-[8px] pl-[16px] pr-[12px]",
  btnAddOFFsm:
    "h-[32px] border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed gap-[8px] pl-[16px] pr-[12px]",
  btnAddDefault: "h-10 w-10 text-grayScale hover:bg-gray-50 cursor-pointer",
  btnAddDefaultMD: "h-9 w-9 text-grayScale hover:bg-gray-50 cursor-pointer",
  btnAddDefaultSM: "h-8 w-8 text-grayScale hover:bg-gray-50 cursor-pointer",
  btnAddDefaultOFF: "h-10 w-10 text-gray200 cursor-not-allowed",
  btnAddDefaultOFFmd: "h-9 w-9 text-gray200 cursor-not-allowed",
  btnAddDefaultOFFsm: "h-8 w-8 text-gray200 cursor-not-allowed",
  btnSecondary:
    "h-10 gap-2 border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer px-4 text-grayScale text-[14px]",
  btnSecondaryMD:
    "h-9 gap-2 border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer px-4 text-grayScale text-[14px]",
  btnSecondarySM:
    "h-8 gap-2 border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer px-3 text-grayScale",
  btnSecondaryOFF:
    "h-10 gap-2 border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed px-4",
  btnSecondaryOFFmd:
    "h-9 gap-2 border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed px-4",
  btnSecondaryOFFsm:
    "h-8 gap-2 border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed px-3 ",
  btnSecondaryAddRight:
    "h-[40px] gap-2 border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer pl-[16px] pr-[12px] text-grayScale",
  btnSecondaryAddRightMD:
    "h-[36px] gap-2 border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer pl-[16px] pr-[12px] text-grayScale",
  btnSecondaryAddRightSM:
    "h-[32px] gap-2 border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer pl-[16px] pr-[12px] text-grayScale",
  btnSecondaryAddRightOFF:
    "h-[40px] gap-2 border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed pl-[16px] pr-[12px]",
  btnSecondaryAddRightOFFmd:
    "h-[36px] gap-2 border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed pl-[16px] pr-[12px]",
  btnSecondaryAddRightOFFsm:
    "h-[32px] gap-2 border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed pl-[16px] pr-[12px]",
  btnSecondaryAddLeft:
    "h-[40px] gap-2 border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer pl-[12px] pr-[16px] text-grayScale",
  btnSecondaryAddLeftMD:
    "h-[36px] gap-2 border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer pl-[12px] pr-[16px] text-grayScale",
  btnSecondaryAddLeftSM:
    "h-[32px] gap-2 border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer pl-[12px] pr-[16px] text-grayScale ",
  btnSecondaryAddLeftOFF:
    "h-[40px] gap-2 border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed pl-[12px] pr-[16px]",
  btnSecondaryAddLeftOFFmd:
    "h-[36px] gap-2 border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed pl-[12px] pr-[16px]",
  btnSecondaryAddLeftOFFsm:
    "h-[32px] gap-2 border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed pl-[12px] pr-[16px]",

  btnSecondaryADD:
    "h-[40px] w-[40px] border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer",
  btnSecondaryADDmd:
    "h-[36px] w-[36px] border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer",
  btnSecondaryADDsm:
    "h-[32px] w-[32px] border border-[#EBEBEB] bg-white hover:bg-gray-50 cursor-pointer",
  btnSecondaryADDOFF:
    "h-[40px] w-[40px] border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed  ",
  btnSecondaryADDOFFmd:
    "h-[36px] w-[36px] border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed ",
  btnSecondaryADDOFFsm:
    "h-[32px] w-[32px] border border-[#EBEBEB] bg-white text-gray200 cursor-not-allowed ",
  btnTertiary:
    "py-[2px] px-0 gap-[10px] text-grayScale cursor-pointer hover:underline",
  btnTertiaryOFF:
    "py-[2px] px-0 gap-[10px] text-gray200 cursor-not-allowed text-[14px]",
};

/* ----------- BASE STYLES ----------- */
const baseStyles =
  "font-inter leading-[130%] text-[14px] font-semibold shadow-[0_1px_4px_0_rgba(0,0,0,0.08),0_1px_2px_0_rgba(25,25,25,0.08)] rounded-[6px] inline-flex justify-center items-center duration-200 ease-linear transition-colors";

/* ----------- ICON POSITION STYLES ----------- */
const iconStyles = {
  left: "flex-row",
  right: "flex-row-reverse",
  none: "",
};

/* ----------- COMPONENT ----------- */
export function Button({
  variant, // Removido o valor padrão
  iconPosition = "none",
  icon = null,
  disabled = false,
  onClick,
  href,
  children,
  className,
  type = "button",
  target,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (disabled) return;
    if (href && !target) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  // Remove shadow se o nome da variant inclui "Tertiary"
  const buttonClasses = clsx(
    baseStyles.replace(
      /shadow-\[[^\]]*\]\s?/g,
      variant.includes("Tertiary") ? "" : "$&"
    ),
    VARIANT_CLASSES[variant],
    iconStyles[iconPosition],
    disabled && "opacity-60 pointer-events-none",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={buttonClasses}
        onClick={disabled ? undefined : handleClick}
      >
        {iconPosition === "left" && icon && (
          <span className="icon">{icon}</span>
        )}
        {children}
        {iconPosition === "right" && icon && (
          <span className="icon">{icon}</span>
        )}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {iconPosition === "left" && icon && <span className="icon">{icon}</span>}
      {children}
      {iconPosition === "right" && icon && <span className="icon">{icon}</span>}
    </button>
  );
}

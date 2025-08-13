"use client";

import Link from "next/link";

type ButtonVariant =
  | "btnPrimary"
  | "btnPrimaryMD"
  | "btnPrimarySM"
  | "btnPrimaryOFF"
  | "btnPrimaryOFFmd"
  | "btnPrimaryOFFsm"
  | "btnPrimaryADD"
  | "btnPrimaryADDmd"
  | "btnPrimaryADDsm"
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
  | "btnTertiary"
  | "btnTertiaryOFF";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  variant?: ButtonVariant;
}

export function Button({
  href,
  className = "",
  children,
  onClick,
  target,
  variant = "btnPrimary",
  ...props
}: ButtonProps) {
  const variantStyles = {
    btnPrimary: "btnPrimary",
    btnPrimaryMD: "btnPrimaryMD",
    btnPrimarySM: "btnPrimarySM",
    btnPrimaryOFF: "btnPrimaryOFF",
    btnPrimaryOFFmd: "btnPrimaryOFFmd",
    btnPrimaryOFFsm: "btnPrimaryOFFsm",
    btnPrimaryADD: "btnPrimaryADD",
    btnPrimaryADDmd: "btnPrimaryADDmd",
    btnPrimaryADDsm: "btnPrimaryADDsm",
    btnAddOFF: "btnAddOFF",
    btnAddOFFmd: "btnAddOFFmd",
    btnAddOFFsm: "btnAddOFFsm",
    btnAddDefault: "btnAddDefault",
    btnAddDefaultMD: "btnAddDefaultMD",
    btnAddDefaultSM: "btnAddDefaultSM",
    btnAddDefaultOFF: "btnAddDefaultOFF",
    btnAddDefaultOFFmd: "btnAddDefaultOFFmd",
    btnAddDefaultOFFsm: "btnAddDefaultOFFsm",
    btnSecondary: "btnSecondary",
    btnSecondaryMD: "btnSecondaryMD",
    btnSecondarySM: "btnSecondarySM",
    btnSecondaryOFF: "btnSecondaryOFF",
    btnSecondaryOFFmd: "btnSecondaryOFFmd",
    btnSecondaryOFFsm: "btnSecondaryOFFsm",
    btnTertiary: "btnTertiary",
    btnTertiaryOFF: "btnTertiaryOFF",
  };

  const renderContent = () => children;

  // Links externos
  if (href && (href.startsWith("http") || href.startsWith("https"))) {
    return (
      <a
        href={href}
        className={`${variantStyles[variant]} ${className}`}
        target={target || "_blank"} // Usa target fornecido ou _blank por padrão
        rel="noopener noreferrer"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {renderContent()}
      </a>
    );
  }

  // Links internos (usaméquences
  if (href) {
    return (
      <Link
        href={href}
        className={`${variantStyles[variant]} ${className}`}
        target={target}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {renderContent()}
      </Link>
    );
  }

  // Botão sem href
  return (
    <button
      className={`${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {renderContent()}
    </button>
  );
}

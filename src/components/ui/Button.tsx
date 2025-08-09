"use client";

import Link from "next/link";

type ButtonVariant =
  | "btnPrimary"
  | "btnSecondary"
  | "btnTertiary"
  | "btnLink"
  | "btnForm"
  | "btnFormHover"
  | "btnCoverage"
  | "btnCoverageList"
  | "btnScrollDown"
  | "btnLinkForm";

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
    btnSecondary: "btnSecondary",
    btnTertiary: "btnTertiary",
    btnLink: "btnLink",
    btnForm: "btnForm",
    btnFormHover: "btnFormHover",
    btnCoverage: "btnCoverage",
    btnCoverageList: "btnCoverageList",
    btnScrollDown: "btnScrollDown",
    btnLinkForm: "btnLinkForm",
  };

  const renderContent = () => children;

  // Links externos (começam com http ou https)
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

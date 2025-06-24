"use client";

import Link from "next/link";

// Definindo os tipos de variantes disponíveis
type ButtonVariant =
  | "btnPrimary"
  | "btnSecondary"
  | "btnTertiary"
  | "btnLink"
  | "btnForm"
  | "btnFormHover"
  | "btnCoverage"
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
  // Mapeamento das classes de layout para cada variante
  const variantStyles = {
    btnPrimary: "btnPrimary",
    btnSecondary: "btnSecondary",
    btnTertiary: "btnTertiary",
    btnLink: "btnLink",
    btnForm: "btnForm",
    btnFormHover: "btnFormHover",
    btnCoverage: "btnCoverage",
    btnScrollDown: "btnScrollDown",
    btnLinkForm: "btnLinkForm",
  };

  // Função para renderizar o conteúdo do botão
  const renderContent = () => children;

  // Lógica para variante 'btnLink'
  if (variant === "btnLink") {
    if (href) {
      // Renderiza um Link apenas se href for fornecido
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
    } else {
      // Renderiza um button se href não for fornecido
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
  }

  // Para outras variantes, renderiza um button
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

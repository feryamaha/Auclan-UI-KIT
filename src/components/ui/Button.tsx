'use client'

import Link from 'next/link'

type ButtonVariant =
  | 'btnPrimary'
  | 'btnPrimaryMD'
  | 'btnPrimarySM'
  | 'btnPrimaryOFF'
  | 'btnPrimaryOFFmd'
  | 'btnPrimaryOFFsm'
  | 'btnPrimaryADD'
  | 'btnPrimaryADDmd'
  | 'btnPrimaryADDsm'
  | 'btnAddOFF'
  | 'btnAddOFFmd'
  | 'btnAddOFFsm'
  | 'btnAddDefault'
  | 'btnAddDefaultMD'
  | 'btnAddDefaultSM'
  | 'btnAddDefaultOFF'
  | 'btnAddDefaultOFFmd'
  | 'btnAddDefaultOFFsm'
  | 'btnSecondary'
  | 'btnSecondaryMD'
  | 'btnSecondarySM'
  | 'btnSecondaryOFF'
  | 'btnSecondaryOFFmd'
  | 'btnSecondaryOFFsm'
  | 'btnTertiary'
  | 'btnTertiaryOFF'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  onClick?: () => void
  target?: string
  variant: ButtonVariant // variant obrigatório
}

const variantStyles: Record<ButtonVariant, string> = {
  btnPrimary: 'btnPrimary',
  btnPrimaryMD: 'btnPrimaryMD',
  btnPrimarySM: 'btnPrimarySM',
  btnPrimaryOFF: 'btnPrimaryOFF',
  btnPrimaryOFFmd: 'btnPrimaryOFFmd',
  btnPrimaryOFFsm: 'btnPrimaryOFFsm',
  btnPrimaryADD: 'btnPrimaryADD',
  btnPrimaryADDmd: 'btnPrimaryADDmd',
  btnPrimaryADDsm: 'btnPrimaryADDsm',
  btnAddOFF: 'btnAddOFF',
  btnAddOFFmd: 'btnAddOFFmd',
  btnAddOFFsm: 'btnAddOFFsm',
  btnAddDefault: 'btnAddDefault',
  btnAddDefaultMD: 'btnAddDefaultMD',
  btnAddDefaultSM: 'btnAddDefaultSM',
  btnAddDefaultOFF: 'btnAddDefaultOFF',
  btnAddDefaultOFFmd: 'btnAddDefaultOFFmd',
  btnAddDefaultOFFsm: 'btnAddDefaultOFFsm',
  btnSecondary: 'btnSecondary',
  btnSecondaryMD: 'btnSecondaryMD',
  btnSecondarySM: 'btnSecondarySM',
  btnSecondaryOFF: 'btnSecondaryOFF',
  btnSecondaryOFFmd: 'btnSecondaryOFFmd',
  btnSecondaryOFFsm: 'btnSecondaryOFFsm',
  btnTertiary: 'btnTertiary',
  btnTertiaryOFF: 'btnTertiaryOFF'
}

//teste para github
function isExternalLink(href: string): boolean {
  return href.startsWith('http') || href.startsWith('https')
}

export function Button({
  href,
  className = '',
  children,
  onClick,
  target,
  variant,
  ...props
}: ButtonProps) {
  const variantClass = variantStyles[variant]

  if (!variantClass) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Button] Variant inválida: ${variant}`)
    }
  }

  // Renderiza link externo
  if (href && isExternalLink(href)) {
    return (
      <a
        href={href}
        className={`${variantClass} ${className}`.trim()}
        target={target || '_blank'}
        rel="noopener noreferrer"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  // Renderiza link interno com Next.js
  if (href) {
    return (
      <Link
        href={href}
        className={`${variantClass} ${className}`.trim()}
        target={target}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    )
  }

  // Renderiza botão normal
  return (
    <button
      className={`${variantClass} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

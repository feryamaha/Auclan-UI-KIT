import React, { forwardRef } from 'react'
import { icons } from './IconsList'
import { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof icons
  className?: string
  fill?: string
  style?: React.CSSProperties
  width?: number | string
  height?: number | string
}

const genericIcons: Record<string, string> = {
  // Ícones de navegação
  duIconArrowDown: '▼',
  duIconArrowRight: '→',
  duIconArrowLeft: '←',
  duIconRight: '›',
  duIconBurgerMenu: '☰',
  duIconClear: '✕',

  // Ícones de ação
  duIconDownload: '↓',
  duIconSupport: '💬',
  duIconLogin: '👤',
  iconDocol: '🦷',
  dentalIcon: '🦷'
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(({ name, className = '', fill, style, width, height }, ref) => {
  // Primeiro tenta usar o ícone genérico
  const genericIcon = genericIcons[name]
  if (genericIcon) {
    return (
      <span className={className} aria-hidden="true">
        {genericIcon}
      </span>
    )
  }

  // Se não encontrar ícone genérico, tenta usar o componente SVG
  const IconComponent = icons[name]
  if (IconComponent) {
    return <IconComponent className={className} fill={fill} style={style} width={width} height={height} ref={ref} />
  }

  console.warn(`Icon "${name}" not found`)
  return null
}) 
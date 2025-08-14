import React from 'react'
import { Icon } from '@/scripts/Icon'

// 1. Definição dos tipos de variantes do Badge
type BadgeVariant =
  | 'BadgeDefault'
  | 'BadgeDefaultOFF'
  | 'BadgeDefaultArrow'
  | 'BadgeDefaultArrowOFF'
  | 'BadgeOnlyDoubleArrow'
  | 'BadgeOnlyDoubleArrowOFF'
  | 'BadgeNumber'
  | 'BadgeNumberOFF'
  | 'BadgeStatusSuccess'
  | 'BadgeStatusInfo'
  | 'BadgeStatusWarning'
  | 'BadgeStatusDanger'
  | 'BadgeSuccessFill'
  | 'BadgeInfoFill'
  | 'BadgeWarningFill'
  | 'BadgeDangerFill'
  | 'BadgeStatusArrowSuccess'
  | 'BadgeStatusArrowInfo'
  | 'BadgeStatusArrowWarning'
  | 'BadgeStatusArrowDanger'
  | 'BadgeArrowSuccessFill'
  | 'BadgeArrowInfoFill'
  | 'BadgeArrowWarningFill'
  | 'BadgeArrowDangerFill'

// 2. Interface das props do Badge
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  variant?: BadgeVariant
}

// 3. Função para mapear variante para classes CSS
function getBadgeClass(variant?: BadgeVariant): string {
  switch (variant) {
    case 'BadgeDefault':
      return 'BadgeDefault'
    case 'BadgeDefaultOFF':
      return 'BadgeDefaultOFF'
    case 'BadgeDefaultArrow':
      return 'BadgeDefault'
    case 'BadgeDefaultArrowOFF':
      return 'BadgeDefaultOFF'
    case 'BadgeOnlyDoubleArrow':
      return 'OnlyDoubleArrow'
    case 'BadgeOnlyDoubleArrowOFF':
      return 'OnlyDoubleArrowOFF'
    case 'BadgeNumber':
      return 'OnlyDoubleArrow TypInter12w400'
    case 'BadgeNumberOFF':
      return 'OnlyDoubleArrowOFF TypInter12w400off'
    case 'BadgeStatusSuccess':
      return 'BadgeStatus border'
    case 'BadgeStatusInfo':
      return 'BadgeStatus border'
    case 'BadgeStatusWarning':
      return 'BadgeStatus border'
    case 'BadgeStatusDanger':
      return 'BadgeStatus border'
    case 'BadgeSuccessFill':
      return 'BadgeSucesssFill'
    case 'BadgeInfoFill':
      return 'BadgeInfoFill'
    case 'BadgeWarningFill':
      return 'BadgeWarningFill'
    case 'BadgeDangerFill':
      return 'BadgeDangerFill'
    case 'BadgeStatusArrowSuccess':
      return 'BadgeStatusArrow'
    case 'BadgeStatusArrowInfo':
      return 'BadgeStatusArrow'
    case 'BadgeStatusArrowWarning':
      return 'BadgeStatusArrow'
    case 'BadgeStatusArrowDanger':
      return 'BadgeStatusArrow'
    case 'BadgeArrowSuccessFill':
      return 'BadgeArrowSucessFill'
    case 'BadgeArrowInfoFill':
      return 'BadgeArrowINFOFill'
    case 'BadgeArrowWarningFill':
      return 'BadgeArrowWarningFill'
    case 'BadgeArrowDangerFill':
      return 'BadgeArrowDangerFill'
    default:
      return ''
  }
}

// 4. Componente Badge Base
const Badge = ({
  className,
  variant = 'BadgeDefault',
  icon,
  children,
  ...rest
}: BadgeProps) => (
  <span
    className={`${getBadgeClass(variant)}${className ? ' ' + className : ''}`}
    {...rest}
  >
    {icon}
    {children}
  </span>
)

// 5. Componentização por variante (padrão Design System)
export const BadgeDefault = (props: Omit<BadgeProps, 'variant' | 'icon'>) => (
  <Badge variant="BadgeDefault" {...props}>
    Badge
  </Badge>
)

export const BadgeDefaultOFF = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge variant="BadgeDefaultOFF" {...props}>
    Badge
  </Badge>
)

// Arrow
export const BadgeDefaultArrow = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeDefaultArrow"
    icon={<Icon name="IconDoubleArrow" />}
    {...props}
  >
    Badge
  </Badge>
)

export const BadgeDefaultArrowOFF = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeDefaultArrowOFF"
    icon={<Icon name="IconDoubleArrowOFF" />}
    {...props}
  >
    Badge
  </Badge>
)

// Apenas ícone de seta
export const BadgeOnlyDoubleArrow = (
  props: Omit<BadgeProps, 'variant' | 'icon' | 'children'>
) => (
  <Badge
    variant="BadgeOnlyDoubleArrow"
    icon={<Icon name="IconDoubleArrow" />}
  />
)

export const BadgeOnlyDoubleArrowOFF = (
  props: Omit<BadgeProps, 'variant' | 'icon' | 'children'>
) => (
  <Badge
    variant="BadgeOnlyDoubleArrowOFF"
    icon={<Icon name="IconDoubleArrowOFF" />}
  />
)

// Badge Number
export const BadgeNumber = ({
  number = 2,
  ...props
}: Omit<BadgeProps, 'variant' | 'icon' | 'children'> & { number?: number }) => (
  <Badge variant="BadgeNumber" {...props}>
    {number}
  </Badge>
)

export const BadgeNumberOFF = ({
  number = 2,
  ...props
}: Omit<BadgeProps, 'variant' | 'icon' | 'children'> & { number?: number }) => (
  <Badge variant="BadgeNumberOFF" {...props}>
    {number}
  </Badge>
)

// Status Point
export const BadgeStatusSuccess = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeStatusSuccess"
    icon={<Icon name="IconPointSucess" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeStatusInfo = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeStatusInfo"
    icon={<Icon name="IconPointInfo" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeStatusWarning = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeStatusWarning"
    icon={<Icon name="IconPointWarning" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeStatusDanger = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeStatusDanger"
    icon={<Icon name="IconPointDanger" />}
    {...props}
  >
    Badge
  </Badge>
)

// Fill Status Point
export const BadgeSuccessFill = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeSuccessFill"
    icon={<Icon name="IconPointSucess" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeInfoFill = (props: Omit<BadgeProps, 'variant' | 'icon'>) => (
  <Badge
    variant="BadgeInfoFill"
    icon={<Icon name="IconPointInfo" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeWarningFill = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeWarningFill"
    icon={<Icon name="IconPointWarning" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeDangerFill = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeDangerFill"
    icon={<Icon name="IconPointDanger" />}
    {...props}
  >
    Badge
  </Badge>
)

// Status Arrow Variantes
export const BadgeStatusArrowSuccess = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeStatusArrowSuccess"
    icon={<Icon name="IconDoubleArrowSucess" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeStatusArrowInfo = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeStatusArrowInfo"
    icon={<Icon name="IconDoubleArrowInfo" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeStatusArrowWarning = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeStatusArrowWarning"
    icon={<Icon name="IconDoubleArrowWarning" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeStatusArrowDanger = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeStatusArrowDanger"
    icon={<Icon name="IconDoubleArrowDanger" />}
    {...props}
  >
    Badge
  </Badge>
)

// Fill Arrow Variantes
export const BadgeArrowSuccessFill = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeArrowSuccessFill"
    icon={<Icon name="IconDoubleArrowSucess" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeArrowInfoFill = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeArrowInfoFill"
    icon={<Icon name="IconDoubleArrowInfo" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeArrowWarningFill = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeArrowWarningFill"
    icon={<Icon name="IconDoubleArrowWarning" />}
    {...props}
  >
    Badge
  </Badge>
)
export const BadgeArrowDangerFill = (
  props: Omit<BadgeProps, 'variant' | 'icon'>
) => (
  <Badge
    variant="BadgeArrowDangerFill"
    icon={<Icon name="IconDoubleArrowDanger" />}
    {...props}
  >
    Badge
  </Badge>
)

// 6. Showcase - Utilização dos Badges criados (igual ao modelo dos botões)
export function UIKitBadgeShowcase() {
  return (
    <div className="w-full h-fit flex flex-col gap-32 items-start mt-16 ml-32">
      {/* Linha Badge padrão */}
      <div>
        <h2>Badge padrão</h2>
        <div className="flex items-center gap-8 p-8 outline-2 outline-dashed outline-violet-500 rounded-lg mt-4">
          <div className="flex flex-col gap-4">
            <BadgeDefault />
            <BadgeDefaultOFF />
          </div>
          <div className="flex flex-col gap-4">
            <BadgeDefaultArrow />
            <BadgeDefaultArrowOFF />
          </div>
          <div className="flex flex-col gap-4">
            <BadgeOnlyDoubleArrow />
            <BadgeOnlyDoubleArrowOFF />
          </div>
          <div className="flex flex-col gap-4">
            <BadgeNumber number={2} />
            <BadgeNumberOFF number={2} />
          </div>
        </div>
      </div>
      {/* Linha Badge Status */}
      <div>
        <h2>Badge status</h2>
        <div className="flex items-center gap-8 p-8 outline-2 outline-dashed outline-violet-500 rounded-lg mt-4">
          <div className="flex flex-col gap-4">
            <BadgeStatusSuccess />
            <BadgeStatusInfo />
            <BadgeStatusWarning />
            <BadgeStatusDanger />
          </div>
          <div className="flex flex-col gap-4">
            <BadgeSuccessFill />
            <BadgeInfoFill />
            <BadgeWarningFill />
            <BadgeDangerFill />
          </div>
          <div className="flex flex-col gap-4">
            <BadgeStatusArrowSuccess />
            <BadgeStatusArrowInfo />
            <BadgeStatusArrowWarning />
            <BadgeStatusArrowDanger />
          </div>
          <div className="flex flex-col gap-4">
            <BadgeArrowSuccessFill />
            <BadgeArrowInfoFill />
            <BadgeArrowWarningFill />
            <BadgeArrowDangerFill />
          </div>
        </div>
      </div>
    </div>
  )
}

/* // 7. Exportação agrupada igual o uikitButton
export {
  Badge,
  BadgeProps,
  BadgeVariant
}; */

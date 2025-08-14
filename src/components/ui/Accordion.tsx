import { Button } from './Button'
import { Icon } from '@/scripts/Icon'
import { ReactNode } from 'react'

type AccordionProps = {
  idBase: string
  title: string
  children: ReactNode
  open: boolean // estado controlado!
  onToggle: () => void
  className?: string
}

export function Accordion({
  idBase,
  title,
  children,
  open,
  onToggle,
  className = ''
}: AccordionProps) {
  const panelId = `accordion-panel-${idBase}`
  const buttonId = `accordion-button-${idBase}`

  return (
    <div className={`w-full ${className}`}>
      <Button
        id={buttonId}
        type="button"
        aria-expanded={open ? 'true' : 'false'}
        aria-controls={panelId}
        onClick={onToggle}
        className={`TypLato18w600
          ${open ? '' : ''}
          
        `}
        variant="btnTertiary"
      >
        <span className="TypLato18w600">{title}</span>
        <span
          className={`ml-2 transition-transform duration-200 ${
            open ? 'rotate-45' : 'rotate-0'
          }`}
        >
          <Icon name="IconAddBTNsecondary" />
        </span>
      </Button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300
          ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        {open && <div className="py-1">{children}</div>}
      </div>
    </div>
  )
}

'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Accordion } from '@/components/ui/Accordion'

// Defina o tipo das seções e dos itens
type MenuItem = { id: string; title: string }
type MenuSection = { id: string; title: string; items: MenuItem[] }

// Estrutura do menu - copie exatamente como está para garantir tipagem
const menuSections: MenuSection[] = [
  {
    id: 'componentes',
    title: 'Componentes',
    items: [
      { id: 'alerts-notificacoes-toast', title: 'Alerts/Notificações/Toast' },
      { id: 'avatar', title: 'Avatar' },
      { id: 'button', title: 'Button' },
      { id: 'badge', title: 'Badge' },
      { id: 'banner-informativo', title: 'Banner informativo' },
      { id: 'breadcrumbs', title: 'Breadcrumbs' },
      { id: 'cards', title: 'Cards' },
      { id: 'checkbox', title: 'Checkbox' },
      { id: 'dialog', title: 'Dialog' },
      { id: 'divider', title: 'Divider' },
      { id: 'drawer', title: 'Drawer' },
      { id: 'dropdown', title: 'Dropdown' },
      { id: 'faq', title: 'FAQ' },
      { id: 'filter', title: 'Filter' },
      { id: 'input', title: 'Input' },
      { id: 'list', title: 'List' },
      { id: 'modal', title: 'Modal' },
      { id: 'pagination', title: 'Pagination' },
      { id: 'popover', title: 'Popover' },
      { id: 'progress', title: 'Progress' },
      { id: 'radio-button', title: 'Radio Button' },
      { id: 'segmented', title: 'Segmented' },
      { id: 'slider', title: 'Slider' },
      { id: 'stepper', title: 'Stepper' },
      { id: 'switch', title: 'Switch' },
      { id: 'tables', title: 'Tables' },
      { id: 'tabs', title: 'Tabs' },
      { id: 'tooltip', title: 'Tooltip' }
    ]
  },
  {
    id: 'componentes-do-projeto',
    title: 'Comp. do projeto',
    items: [
      { id: 'banner', title: 'Banner' },
      { id: 'cartao-dental-uni', title: 'Cartão Dental UNI' },
      { id: 'empty-states', title: 'Empty states' },
      { id: 'headers', title: 'Headers' },
      { id: 'navegacao', title: 'Navegação' },
      { id: 'treinamento-e-palestras', title: 'Treinamento e palestras' },
      { id: 'widgets', title: 'Widgets' }
    ]
  }
]

interface SidebarProps {
  active: string
}

export function Sidebar({ active }: SidebarProps) {
  // Descobre qual seção tem o item ativo
  const initialSection =
    menuSections.find((section) =>
      section.items.some((item) => item.id === active)
    )?.id || menuSections[0].id
  const [openSection, setOpenSection] = useState<string | null>(initialSection)

  return (
    <aside className="fixed left-0 top-16 w-max h-[calc(100vh-4rem)] px-2 py-8 z-40 border-r bg-gray-100">
      <nav>
        {menuSections.map((section: MenuSection) => {
          const isOpen = openSection === section.id
          return (
            <Accordion
              key={section.id}
              idBase={section.id}
              title={section.title}
              open={isOpen}
              onToggle={() => setOpenSection(isOpen ? null : section.id)}
              className="mb-4"
            >
              <ul>
                {section.items.map((item: MenuItem) => (
                  <li key={item.id}>
                    <Link
                      href={`/${item.id}`}
                      className={`TypLato14w400
                        ${
                          active === item.id
                            ? 'bg-blue-100 text-blue-700 font-bold border-l-4 border-blue-600'
                            : 'hover:underline'
                        }
                      `}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
          )
        })}
      </nav>
    </aside>
  )
}

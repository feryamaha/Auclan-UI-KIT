# Assets Documentation

Este diretório contém todos os recursos estáticos e scripts relacionados aos assets do projeto.

## Estrutura

```
assets/
├── icons/           # Ícones SVG do projeto
│   ├── footer/     # Ícones específicos do footer
│   └── ...         # Outros ícones
├── scripts/        # Scripts para manipulação de assets
│   ├── Icon.tsx    # Componente de ícone
│   ├── IconsList.tsx # Lista de ícones disponíveis
│   └── generateIcons.js # Script para geração de ícones
└── bg-*.webp       # Imagens de fundo
```

## Componentes de Ícone

- **Icon.tsx**: Componente React para renderização de ícones SVG
- **IconsList.tsx**: Lista de todos os ícones disponíveis no projeto

## Scripts

- **generateIcons.js**: Script para automatizar a geração de componentes de ícone

## Formatos Suportados

- SVG (ícones)
- WebP (imagens de fundo)
- WOFF2 (fontes)

## Uso

Para usar um ícone no projeto:

```tsx
import { Icon } from '@/assets/scripts/Icon'

<Icon name="IconName" className="w-5 h-5" />
```
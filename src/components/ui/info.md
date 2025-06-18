# Documentação da Pasta UI

Documentação concisa sobre a estrutura e o propósito dos componentes na pasta 'ui'. Estes são componentes reutilizáveis de interface de usuário.

## Estrutura da Pasta:

```
src/components/ui/
├── Button.tsx
├── Container.tsx
├── ReclameAqui.tsx
├── SmartAppLink.tsx
└── accordion.tsx
```

## Arquivos:

- `Button.tsx`: Componente de botão reutilizável, com customizacao por variantes de estilo: btnPrimary, btnSecondary, btnTertiary e btnLink ja estilizados no tailwind.config, somente importe a class que ele já recebe a estilizacao.

- `Container.tsx`: Componente de container para layout, usado para reset GRID em todas as paginas.
- `ReclameAqui.tsx`: Componente específico para o selo/link do Reclame Aqui.
- `SmartAppLink.tsx`: Componente para links que podem ter lógica condicional (e.g., abrir em app ou navegador).
- `accordion.tsx`: Componente base para funcionalidades de accordion (expandir/colapsar conteúdo).

## Lógica Chave:

Reusabilidade: Todos os componentes nesta pasta são projetados para serem genéricos e reutilizáveis em várias partes da aplicação.

UI Básica: Fornecem blocos de construção fundamentais para a interface do usuário.

Encapsulamento: Cada componente encapsula sua própria lógica e estilização, permitindo fácil manutenção e uso. 
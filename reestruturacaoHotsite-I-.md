# Reestruturação do Hotsite - Fase I

## Data: [Data Atual]
## Responsável: Fernando Moreira

## Objetivo
Reestruturar o hotsite focando em organização, manutenibilidade e performance, mantendo a funcionalidade essencial e melhorando a estrutura do projeto.

## Arquivos Mantidos e Simplificados

### Estrutura Base
- `src/app/layout.tsx` - Layout principal simplificado
- `src/app/page.tsx` - Página inicial com children genérico
- `src/app/layoutRegister.tsx` - Layout secundário simplificado

### Componentes de Navegação
- `src/components/sections/NavMenu.tsx` - Menu de navegação principal
- `src/components/sections/MobileMenu/MobileMenu.tsx` - Menu mobile
- `src/components/sections/Footer.tsx` - Rodapé da aplicação

### Componentes UI Essenciais
- `src/components/ui/Button.tsx` - Componente de botão
- `src/components/ui/Container.tsx` - Componente de container
- `src/components/icons/Icon.tsx` - Componente de ícones

### Componentes Simplificados
- `src/components/sections/BlogSection.tsx` - Versão simplificada para manter compatibilidade
- `src/components/sections/ModalCredential.tsx` - Versão simplificada para manter compatibilidade

### Dados
- `src/data/menuMock.ts` - Dados do menu de navegação

## Componentes Simplificados (não removidos)

### Componentes de Seção
- `src/components/sections/Header.tsx` - Simplificado para versão básica
- `src/components/sections/Topbar.tsx` - Simplificado para versão básica
- `src/components/sections/PlansCTASection.tsx` - Simplificado para versão básica
- `src/components/sections/BenefitsOfferedSection.tsx` - Simplificado para versão básica
- `src/components/sections/RequestSection.tsx` - Simplificado para versão básica
- `src/components/sections/DeticatedPagesMenu.tsx` - Simplificado para versão básica
- `src/components/sections/AlternativeMenu.tsx` - Simplificado para versão básica
- Outros componentes de seção simplificados

### Páginas Específicas
- `src/app/(dental-uni)/` - Simplificadas para versões básicas
- `src/app/beneficiarios/` - Simplificadas para versões básicas
- `src/app/corretores/` - Simplificadas para versões básicas
- `src/app/dentistas/` - Simplificadas para versões básicas
- `src/app/empresas/` - Simplificadas para versões básicas
- `src/app/noticias/` - Simplificadas para versões básicas
- `src/app/cadastro/` - Simplificadas para versões básicas

## Alterações Realizadas

### 1. Reorganização de Assets
#### Antes
```
src/
  ├── components/
  │   └── icons/
  │       ├── Icon.tsx
  │       └── IconsList.tsx
public/
  ├── images/
  └── icons/
```

#### Depois
```
src/
  ├── assets/
  │   └── icons/
  │       ├── Icon.tsx
  │       └── IconsList.tsx
public/
  └── assets/
      ├── icons/  (arquivos SVG)
      └── img/    (arquivos jpg, jpeg, png, webp)
```

### 2. Reorganização de Hooks
#### Antes
```
src/
  ├── hooks/
  │   ├── use-formatted-date.ts
  │   ├── useFaqManager.ts
  │   └── html-renderer.tsx
  └── api/
      └── hooks/
          ├── useCnpj.ts
          └── usePartner.ts
```

#### Depois
```
src/
  ├── hooks/          (hooks genéricos)
  │   ├── use-formatted-date.ts
  │   ├── useFaqManager.ts
  │   └── html-renderer.tsx
  └── api/
      └── hooks-api/  (hooks específicos da API)
          ├── useCnpj.ts
          └── usePartner.ts
```

### 3. Sistema de Design
#### Antes
- Sistema de cores desorganizado
- Tipografia inconsistente
- Breakpoints não padronizados
- Sombras não sistematizadas

#### Depois
- Sistema de cores organizado por famílias (red, gray, green)
- Tipografia padronizada com escala consistente
- Breakpoints semânticos (mobile, tablet, desktop, etc.)
- Sistema de sombras padronizado
- Container responsivo com padding e screens definidos

### 4. Componentes Atualizados
- `NavMenu.tsx` - Simplificado e otimizado
- `MobileMenu.tsx` - Melhorado para performance
- `Footer.tsx` - Reorganizado e otimizado
- `Button.tsx` - Atualizado com novo sistema de design
- `Icon.tsx` - Movido para nova estrutura e otimizado

### 5. Melhorias Técnicas
1. **Organização de Código**
   - Separação clara entre assets estáticos e componentes
   - Melhor organização de hooks (genéricos vs API)
   - Estrutura de pastas mais intuitiva

2. **Performance**
   - Otimização de importações
   - Melhor gerenciamento de assets
   - Componentes mais leves e focados

3. **Manutenibilidade**
   - Sistema de design mais consistente
   - Código mais organizado e documentado
   - Melhor separação de responsabilidades

4. **Desenvolvimento**
   - Nomenclatura mais clara e semântica
   - Melhor documentação
   - Facilidade na manutenção

## Próximos Passos
1. Monitorar performance após mudanças
2. Coletar feedback da equipe
3. Planejar próximas otimizações
4. Manter documentação atualizada

## Conclusão
A reestruturação trouxe melhorias significativas na organização, manutenibilidade e performance do projeto, mantendo a funcionalidade essencial e estabelecendo uma base sólida para futuras evoluções. 
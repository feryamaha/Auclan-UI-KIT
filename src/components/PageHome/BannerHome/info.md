# Documentação da Section Banner Home

Documentação concisa sobre a estrutura e a interação dos componentes da section 'Banner Home'.

## Estrutura da Pasta:

```
src/components/sections/BannerHome/
├── BannerHome.tsx
├── SliderControl.tsx
└── info.md
```

## Arquivos:

- `BannerHome.tsx`: Componente principal da section Banner Home. Contém a estrutura visual do banner e integra o controle do slider.
- `SliderControl.tsx`: Componente responsável pela navegação visual e controle de progresso do slider do banner.
- `info.md`: Documentação da pasta (este arquivo).

## Lógica Chave:

Componentes: `BannerHome.tsx` utiliza `SliderControl.tsx` para gerenciar a interação e o estado visual do slider.

Navegação Slider: `SliderControl.tsx` lida com a lógica de avançar/retroceder slides e atualizar o progresso visualmente, comunicando as mudanças de slide de volta para `BannerHome.tsx` via props. 
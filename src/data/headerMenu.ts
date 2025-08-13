// Tipos e exportação do array de links
export interface HeaderMenuItem {
  href: string;
  label: string;
  // Você pode adicionar ícone ou submenu se quiser depois!
}

export const headerMenu: HeaderMenuItem[] = [
  { href: "/button", label: "Sobre" },
  { href: "https://auclandesign.com/", label: "Auclan Design" },
  // Adicione quantos quiser!
];

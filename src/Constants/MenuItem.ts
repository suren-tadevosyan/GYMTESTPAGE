export interface IMenuItem {
  label: string;
  href: string;
}

export const NAV_MENU: IMenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

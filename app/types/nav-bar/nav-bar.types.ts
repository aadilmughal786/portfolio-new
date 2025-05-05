import { IconType } from 'react-icons';

export type TNavigationMenuItem = {
  id: number;
  label: string;
  icon: IconType;
  to: string;
};

export type TSocialLink = {
  id: number;
  label: string;
  link: string;
  icon: IconType;
};

export type TNavBar = {
  navigationItems: TNavigationMenuItem[];
  socialLinks: TSocialLink[];
};

import { IconType } from "react-icons";

type TNavigationMenuItem = {
  id: number;
  label: string;
  icon: IconType;
  to: string;
};

type TSocialLink = {
  id: number;
  label: string;
  link: string;
  icon: IconType;
};

export type TNavBarData = {
  navigationItems: TNavigationMenuItem[];
  socialLinks: TSocialLink[];
};

import { IconType } from "react-icons";

export type ContactItem = {
  id: number;
  icon: IconType;
  label: string;
  href: string;
};

export type ContactSection = {
  title: string;
  icon: IconType;
  item: ContactItem[];
};

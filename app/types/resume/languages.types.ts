import { IconType } from "react-icons";

export type TLanguageItem = {
  id: number;
  language: string;
  proficiency: string;
};

export type TLanguageSection = {
  title: string;
  icon: IconType;
  size?: number;
  items: TLanguageItem[];
};

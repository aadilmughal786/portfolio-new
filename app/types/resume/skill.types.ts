import { IconType } from "react-icons";

export type SkillItem = {
  id: number;
  icon: IconType;
  title: string;
};

export type SkillCategory = {
  id: number;
  label: string;
  items: SkillItem[];
};

export type SkillsSection = {
  title: string;
  icon: IconType;
  items: SkillCategory[];
};

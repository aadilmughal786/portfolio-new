import { IconType } from 'react-icons';

export type TSkillItem = {
  id: number;
  icon: IconType;
  title: string;
};

export type TSkillCategory = {
  id: number;
  name: string;
  items: TSkillItem[];
};

export type TSkillsSection = {
  title: string;
  icon: IconType;
  items: TSkillCategory[];
};

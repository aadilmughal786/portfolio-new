import { IconType } from 'react-icons';

export type TLanguageItem = {
  id: number;
  name: string;
  proficiency:
    | 'Elementary proficiency'
    | 'Limited working proficiency'
    | 'Professional working proficiency'
    | 'Native or bilingual proficiency';
};

export type TLanguageSection = {
  title: string;
  icon: IconType;
  iconSize?: number;
  items: TLanguageItem[];
};

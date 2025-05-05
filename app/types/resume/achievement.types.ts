import { IconType } from 'react-icons';

export type TAchievementItem = {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  institute: string;
  issuedOn: Date;
  link?: string;
};

export type TAchievement = {
  title: string;
  icon: IconType;
  iconSize?: number;
  items: TAchievementItem[];
};

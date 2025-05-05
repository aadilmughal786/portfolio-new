import { IconType } from 'react-icons';

export type TEducationItem = {
  id: number;
  icon: IconType;
  level: string;
  institution: string;
  location?: string;
  description: string;
  completionYear: number;
  status: 'Completed' | 'Ongoing';
  courses: string[];
};

export type TEducationSection = {
  title: string;
  icon: IconType;
  iconSize?: number;
  items: TEducationItem[];
};

import { IconType } from 'react-icons';

export type TEducationItem = {
  id: number;
  icon: IconType;
  educationLevel: string;
  institutionName: string;
  institutionLocation?: string;
  description: string;
  completionYear: number;
  status: 'Completed' | 'Ongoing';
  courses: string[];
};

export type TEducationSection = {
  title: string;
  icon: IconType;
  size?: number;
  items: TEducationItem[];
};

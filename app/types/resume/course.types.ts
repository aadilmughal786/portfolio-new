import { IconType } from 'react-icons';

export type TCourseItem = {
  id: number;
  icon: IconType;
  courseName: string;
  certificateLink: string;
  instituteName: string;
  completionYear: string;
};

export type TCourseSection = {
  title: string;
  icon: IconType;
  size?: number;
  items: TCourseItem[];
};

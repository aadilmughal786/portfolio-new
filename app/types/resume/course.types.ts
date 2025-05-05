import { IconType } from 'react-icons';

export type TCourseItem = {
  id: number;
  icon: IconType;
  name: string;
  certificateUrl: string;
  institute: string;
  issuedOn: Date;
};

export type TCourseSection = {
  title: string;
  icon: IconType;
  size?: number;
  items: TCourseItem[];
};

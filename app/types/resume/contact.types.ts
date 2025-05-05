import { IconType } from 'react-icons';

export type TContactItem = {
  id: number;
  icon: IconType;
  label: string;
  href: string;
};

export type TContactSection = {
  title: string;
  icon: IconType;
  items: TContactItem[];
};

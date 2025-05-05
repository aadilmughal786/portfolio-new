import { IconType } from 'react-icons';

export type THobbyItem = {
  id: number;
  icon: IconType;
  name: string;
};

export type THobbySection = {
  title: string;
  icon: IconType;
  iconSize?: number;
  items: THobbyItem[];
};

import { IconType } from 'react-icons';

export type THobbyItem = {
  id: number;
  icon: IconType;
  hobby: string;
};

export type THobbySection = {
  title: string;
  icon: IconType;
  size?: number;
  items: THobbyItem[];
};

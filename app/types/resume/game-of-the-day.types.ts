import { IconType } from 'react-icons';

export type TGameOfTheDay = {
  title: string;
  icon: IconType;
  iconSize?: number;

  game: {
    name: string;
    icon: IconType;
    link: string;
  };
};

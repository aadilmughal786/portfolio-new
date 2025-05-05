import { IconType } from 'react-icons';

export type TGameOfTheDay = {
  title: string;
  icon: IconType;
  size?: number;

  gameName: string;
  gameIcon: IconType;
  gameLink: string;
};

import { FaDrum, FaGhost } from 'react-icons/fa';
import { TGameOfTheDay } from '@/types/resume/game-of-the-day.types';

export const gameOfTheDayData: TGameOfTheDay = {
  title: 'Game Of The Day',
  icon: FaGhost,
  iconSize: 16,
  game: {
    name: 'The Drum Kit',
    icon: FaDrum,
    link: 'https://aadilmughal786.github.io/simple-web-project/AdrumKit.html',
  },
};

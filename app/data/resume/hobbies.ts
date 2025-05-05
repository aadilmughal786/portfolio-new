import { FaCalendarCheck, FaLaptopCode, FaPuzzlePiece } from 'react-icons/fa';
import { MdSportsCricket, MdToys } from 'react-icons/md';
import { BiMoviePlay } from 'react-icons/bi';
import { THobbySection } from '@/types/resume/hobbies.types';

export const hobbyData: THobbySection = {
  title: 'Hobbies and Interest',
  icon: FaCalendarCheck,
  iconSize: 16,
  items: [
    {
      id: 1,
      icon: MdSportsCricket,
      name: 'Cricket',
    },
    {
      id: 2,
      icon: FaLaptopCode,
      name: 'Coding and Problem Solving',
    },
    {
      id: 3,
      icon: MdToys,
      name: 'Building Toy Projects',
    },
    {
      id: 4,
      icon: BiMoviePlay,
      name: 'Watching Movies',
    },
    {
      id: 5,
      icon: FaPuzzlePiece,
      name: 'Puzzles solving',
    },
  ],
};

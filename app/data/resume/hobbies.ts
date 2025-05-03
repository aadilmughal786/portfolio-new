import { FaCalendarCheck, FaLaptopCode, FaPuzzlePiece } from 'react-icons/fa';
import { MdSportsCricket, MdToys } from 'react-icons/md';
import { BiMoviePlay } from 'react-icons/bi';
import { THobbySection } from '@/types/resume/hobbies.types';

export const hobbySectionData: THobbySection = {
  title: 'Hobbies and Interest',
  icon: FaCalendarCheck,
  size: 16,
  items: [
    {
      id: 1,
      icon: MdSportsCricket,
      hobby: 'Cricket',
    },
    {
      id: 2,
      icon: FaLaptopCode,
      hobby: 'Coding and Problem Solving',
    },
    {
      id: 3,
      icon: MdToys,
      hobby: 'Building Toy Projects',
    },
    {
      id: 4,
      icon: BiMoviePlay,
      hobby: 'Watching Movies',
    },
    {
      id: 5,
      icon: FaPuzzlePiece,
      hobby: 'Puzzles solving',
    },
  ],
};

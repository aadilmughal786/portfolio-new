import { TStatBox } from '@/types/home/stats.types';
import { FaCode, FaUserFriends, FaStar, FaCalendarAlt } from 'react-icons/fa';

export const statsData: TStatBox[] = [
  {
    icon: <FaCalendarAlt />,
    value: 2,
    label: 'Years of Experience',
    suffix: '+',
  },
  {
    icon: <FaCode />,
    value: 16,
    label: 'Personal Projects',
    suffix: '+',
  },
  {
    icon: <FaStar />,
    value: 30,
    label: 'Technologies',
    suffix: '+',
  },
  {
    icon: <FaUserFriends />,
    value: 150,
    label: 'GitHub Contributions',
    suffix: '+',
  },
];

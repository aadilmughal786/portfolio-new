import { TStatBox } from '@/types/home/stats.types';
import { FaCode, FaUserFriends, FaStar, FaCalendarAlt } from 'react-icons/fa';
import { aboutMeData } from './about-me';

export const statsData: TStatBox[] = [
  {
    icon: <FaCalendarAlt />,
    value: aboutMeData.yearsOfExperience,
    label: 'Years of Experience',
    suffix: '+',
  },
  {
    icon: <FaCode />,
    value: aboutMeData.totalProjectsBuild,
    label: 'Projects Build',
    suffix: '+',
  },
  {
    icon: <FaStar />,
    value: aboutMeData.technologiesUsed,
    label: 'Tech Stack',
    suffix: '+',
  },
  {
    icon: <FaUserFriends />,
    value: 129,
    label: 'GitHub Contributions',
    suffix: '+',
  },
];

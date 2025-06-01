import { TStatBox } from '@/types/home/stats.types';
import { FaCode, FaUserFriends, FaStar, FaCalendarAlt } from 'react-icons/fa';
import { developerInfo } from '../dev-info';

export const statsData: TStatBox[] = [
  {
    icon: <FaCalendarAlt />,
    value: developerInfo.yearsOfExperience,
    label: 'Years of Experience',
    suffix: '+',
  },
  {
    icon: <FaCode />,
    value: developerInfo.totalProjectsBuilt,
    label: 'Projects Build',
    suffix: '+',
  },
  {
    icon: <FaStar />,
    value: developerInfo.technologiesUsed,
    label: 'Tech Stack',
    suffix: '+',
  },
  {
    icon: <FaUserFriends />,
    value: developerInfo.GitHubContributions,
    label: 'GitHub Contributions',
    suffix: '+',
  },
];

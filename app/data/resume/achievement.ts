import { TAchievement } from '@/types/resume/achievement.types';
import { FaTrophy } from 'react-icons/fa';

export const achievementData: TAchievement = {
  title: 'Achievements',
  icon: FaTrophy,
  items: [
    {
      id: 1,
      icon: FaTrophy,
      title: 'GATE 2025 - Computer Science',
      link: 'https://drive.google.com/file/d/1QL4DvcRzD9sr9P-41U10cITrc0dO644Y/view',
      institute: 'IISc / IITs',
      issuedOn: new Date('March 16, 2025'),
      description:
        'Secured All India Rank (AIR) 1655 in the GATE 2025 exam (Computer Science & Information Technology), conducted jointly by IISc and IITs.',
    },
  ],
};

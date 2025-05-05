import { TAchievement } from '@/types/resume/achievement.types';
import { FaSquareWebAwesomeStroke } from 'react-icons/fa6';

export const achievementData: TAchievement = {
  title: 'Achievements',
  icon: FaSquareWebAwesomeStroke,
  items: [
    {
      id: 1,
      icon: FaSquareWebAwesomeStroke,
      title: 'Gate',
      link: '',
      institute: 'Gate',
      issuedOn: new Date('June 1, 2021'),
      description:
        'This course teaches the basics of HTML, CSS, and JavaScript, which are essential for web development. It covers how to create web pages and add interactivity using JavaScript.',
    },
  ],
};

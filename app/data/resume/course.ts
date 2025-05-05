import { FaClipboardCheck } from 'react-icons/fa';
import { HiLibrary } from 'react-icons/hi';
import { TCourseSection } from '@/types/resume/course.types';
import { SiCoursera } from 'react-icons/si';

export const courseData: TCourseSection = {
  title: 'Courses & Certificates',
  icon: FaClipboardCheck,
  items: [
    {
      id: 1,
      icon: SiCoursera,
      name: 'HTML, CSS and Javascript for Web Developers',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/H4S2GTZE8T2H',
      institute: 'Johns Hopkins University',
      issuedOn: new Date('June 1, 2021'),
    },
    {
      id: 2,
      icon: HiLibrary,
      name: 'Problem Solving Through Programming In C',
      certificateUrl: 'https://drive.google.com/file/d/1rXepTEeaRCc39VIj0wbzaAiKCdPQ6cSO',
      institute: 'IIT Kharagpur (NPTEL - 94% Topper)',
      issuedOn: new Date('January 1, 2022'),
    },
    {
      id: 3,
      icon: HiLibrary,
      name: 'NDG Linux Unhatched',
      certificateUrl: 'https://drive.google.com/file/d/1Scfp18fqbzrpQUbz8TUAsdt9K-WnV6Uq',
      institute: 'Cisco Virtual Academy',
      issuedOn: new Date('July 26, 2021'),
    },
    {
      id: 4,
      icon: SiCoursera,
      name: 'Version Control with Git',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/JTQQ9QWBNB2J',
      institute: 'Atlassian',
      issuedOn: new Date('June 20, 2021'),
    },
  ],
};

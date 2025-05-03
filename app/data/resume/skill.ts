import {
  FaBalanceScaleRight,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaLinux,
  FaNodeJs,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiExpress,
  SiGnubash,
  SiJira,
  SiMariadbfoundation,
  SiNumpy,
  SiPython,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandCpp, TbBrandNextjs } from 'react-icons/tb';
import { FaChrome } from 'react-icons/fa6';
import { BiLogoMongodb } from 'react-icons/bi';
import { SkillsSection } from '@/types/resume/skill.types';

const skillsData: SkillsSection = {
  title: 'Skills',
  icon: FaBalanceScaleRight,
  items: [
    {
      id: 1,
      label: 'Languages',
      items: [
        { id: 1, icon: FaHtml5, title: 'HTML5' },
        { id: 2, icon: FaCss3Alt, title: 'CSS3' },
        { id: 3, icon: IoLogoJavascript, title: 'JavaScript' },
        { id: 4, icon: SiTypescript, title: 'TypeScript' },
        { id: 5, icon: SiPython, title: 'Python' },
        { id: 6, icon: TbBrandCpp, title: 'C++' },
      ],
    },
    {
      id: 2,
      label: 'Frameworks & Libraries',
      items: [
        { id: 1, icon: FaBootstrap, title: 'Bootstrap' },
        { id: 2, icon: RiReactjsLine, title: 'ReactJS' },
        { id: 3, icon: SiExpress, title: 'ExpressJS' },
        { id: 4, icon: SiTailwindcss, title: 'TailwindCSS' },
        { id: 5, icon: SiNumpy, title: 'NumPy' },
        { id: 6, icon: TbBrandNextjs, title: 'NextJS' },
      ],
    },
    {
      id: 3,
      label: 'Tools & Databases',
      items: [
        { id: 1, icon: FaNodeJs, title: 'Node.js' },
        { id: 2, icon: FaFigma, title: 'Figma' },
        { id: 3, icon: FaGitAlt, title: 'Git' },
        { id: 4, icon: FaLinux, title: 'Linux' },
        { id: 5, icon: SiGnubash, title: 'GNU Bash' },
        { id: 6, icon: SiSqlite, title: 'SQLite' },
        { id: 7, icon: BiLogoMongodb, title: 'MongoDB' },
        { id: 8, icon: SiMariadbfoundation, title: 'MariaDB' },
        { id: 9, icon: SiJira, title: 'Jira' },
        { id: 10, icon: FaChrome, title: 'Chrome DevTools' },
      ],
    },
  ],
};

export default skillsData;

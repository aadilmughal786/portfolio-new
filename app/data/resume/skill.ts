import {
  FaBalanceScaleRight,
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaLinux,
  FaNodeJs,
  FaDocker,
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
  SiRedis,
  SiPostgresql,
  SiVuedotjs,
  SiSass,
  SiAdobe,
  SiGooglecloud,
} from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandCpp, TbBrandNextjs } from 'react-icons/tb';
import { FaAws, FaChrome, FaJava, FaRust, FaSketch } from 'react-icons/fa6';
import { BiLogoMongodb } from 'react-icons/bi';
import { TSkillsSection } from '@/types/resume/skill.types';

export const skillsData: TSkillsSection = {
  title: 'Skills',
  icon: FaBalanceScaleRight,
  items: [
    {
      id: 1,
      name: 'Languages',
      items: [
        { id: 1, icon: FaHtml5, title: 'HTML5' },
        { id: 2, icon: FaCss3Alt, title: 'CSS3' },
        { id: 3, icon: IoLogoJavascript, title: 'JavaScript' },
        { id: 4, icon: SiTypescript, title: 'TypeScript' },
        { id: 5, icon: SiPython, title: 'Python' },
        { id: 6, icon: TbBrandCpp, title: 'C++' },
        { id: 7, icon: FaJava, title: 'Java' },
        { id: 8, icon: FaRust, title: 'Rust' },
      ],
    },
    {
      id: 2,
      name: 'Frameworks & Libraries',
      items: [
        { id: 1, icon: FaBootstrap, title: 'Bootstrap' },
        { id: 2, icon: RiReactjsLine, title: 'ReactJS' },
        { id: 3, icon: SiExpress, title: 'ExpressJS' },
        { id: 4, icon: SiTailwindcss, title: 'TailwindCSS' },
        { id: 5, icon: SiNumpy, title: 'NumPy' },
        { id: 6, icon: TbBrandNextjs, title: 'NextJS' },
        { id: 7, icon: SiVuedotjs, title: 'Vue.js' },
        { id: 8, icon: SiSass, title: 'Sass' },
      ],
    },
    {
      id: 3,
      name: 'Tools & Databases',
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
        { id: 11, icon: SiRedis, title: 'Redis' }, // New addition
        { id: 12, icon: SiPostgresql, title: 'PostgreSQL' }, // New addition
        { id: 13, icon: FaAws, title: 'AWS' }, // New addition
        { id: 14, icon: FaDocker, title: 'Docker' }, // New addition
      ],
    },
    {
      id: 4,
      name: 'Cloud & DevOps',
      items: [
        { id: 1, icon: FaDocker, title: 'Docker' },
        { id: 2, icon: FaAws, title: 'AWS' },
        { id: 4, icon: SiGooglecloud, title: 'Google Cloud' },
      ],
    },
    {
      id: 5,
      name: 'UI/UX Design',
      items: [
        { id: 1, icon: FaFigma, title: 'Figma' },
        { id: 2, icon: FaSketch, title: 'Sketch' },
        { id: 3, icon: SiAdobe, title: 'Adobe XD' },
      ],
    },
  ],
};

// data/aboutMeData.ts
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaBrain,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import type { AboutMeData } from '@/types/home/about-me.types';

export const aboutMeData: AboutMeData = {
  yearsOfExperience: 2,
  totalProjectsBuild: 39,
  technologiesUsed: 29,
  resumeLink: 'https://drive.google.com/file/d/1X3VSlN6nPIfB8mLjt7e4B0P5Z7dQ_Ei3',

  coreValuePropositions: [
    {
      title: 'End-to-End Development',
      description:
        'I build complete web solutions from concept to deployment, ensuring all components work together seamlessly.',
      icon: <FaCode size={24} />,
    },
    {
      title: 'Performance Optimization',
      description:
        'I create high-performance applications that load quickly and run smoothly, providing an excellent user experience.',
      icon: <FaServer size={24} />,
    },
    {
      title: 'Scalable Architecture',
      description:
        'My solutions are designed to grow with your business, handling increased traffic and data without sacrificing performance.',
      icon: <FaDatabase size={24} />,
    },
    {
      title: 'Universal Accessibility',
      description:
        "I leverage web technology's inherent accessibility, creating solutions that work across devices with just a browser.",
      icon: <FaMobileAlt size={24} />,
    },
  ],

  currentExplorations: [
    {
      title: 'AI & Machine Learning',
      description:
        'Exploring the intersection of artificial intelligence with web development to create intelligent, adaptive user experiences.',
      icon: <FaBrain size={24} />,
    },
    {
      title: 'Theoretical Computer Science',
      description:
        'Studying Theory of Computation, Discrete Mathematics, and Information Theory to build more elegant and efficient solutions.',
      icon: <FaChalkboardTeacher size={24} />,
    },
  ],
};

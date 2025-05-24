import { Service } from '@/types/home/service.types';
import { FaCode, FaServer, FaPaintBrush, FaCloud, FaSearch, FaMobileAlt } from 'react-icons/fa';

export const servicesData: Service[] = [
  {
    icon: <FaCode size={24} />,
    title: 'Frontend Development',
    description:
      'Crafting pixel-perfect, responsive web interfaces with modern frameworks like React, Next.js, and TypeScript that deliver exceptional user experiences.',
  },
  {
    icon: <FaServer size={24} />,
    title: 'Backend & Database',
    description:
      'Building robust server-side applications and efficient database architectures that power your applications with security and scalability in mind.',
  },
  {
    icon: <FaPaintBrush size={24} />,
    title: 'UI/UX Design',
    description:
      'Creating intuitive and engaging user interfaces with a focus on usability, accessibility, and conversion-optimized user experiences.',
  },
  {
    icon: <FaCloud size={24} />,
    title: 'DevOps',
    description:
      'Implementing CI/CD pipelines, containerization, and cloud infrastructure to ensure your applications are deployed efficiently and run reliably.',
  },
  {
    icon: <FaSearch size={24} />,
    title: 'SEO Optimization',
    description:
      "Improving your site's visibility through technical SEO best practices, performance optimization, and search engine-friendly code structure.",
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: 'Responsive Development',
    description:
      'Ensuring your web applications look and function flawlessly across all devices, from desktops to smartphones.',
  },
];

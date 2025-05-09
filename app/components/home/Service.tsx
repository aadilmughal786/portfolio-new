'use client';

import { FaCode, FaServer, FaPaintBrush, FaCloud, FaSearch, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-lg border-t-4 shadow-lg bg-bg-primary border-text-tertiary"
    >
      <div className="mb-4 text-3xl text-text-tertiary">{icon}</div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description:
        'Crafting pixel-perfect, responsive web interfaces with modern frameworks like React, Next.js, and TypeScript that deliver exceptional user experiences.',
    },
    {
      icon: <FaServer />,
      title: 'Backend & Database',
      description:
        'Building robust server-side applications and efficient database architectures that power your applications with security and scalability in mind.',
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description:
        'Creating intuitive and engaging user interfaces with a focus on usability, accessibility, and conversion-optimized user experiences.',
    },
    {
      icon: <FaCloud />,
      title: 'DevOps',
      description:
        'Implementing CI/CD pipelines, containerization, and cloud infrastructure to ensure your applications are deployed efficiently and run reliably.',
    },
    {
      icon: <FaSearch />,
      title: 'SEO Optimization',
      description:
        "Improving your site's visibility through technical SEO best practices, performance optimization, and search engine-friendly code structure.",
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Development',
      description:
        'Ensuring your web applications look and function flawlessly across all devices, from desktops to smartphones.',
    },
  ];

  return (
    <section id="services" className="py-10 mb-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            My <span className="text-text-tertiary">Services</span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300">
            I deliver end-to-end web development solutions tailored to your specific needs. From
            concept to deployment, I handle every aspect of creating powerful digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 font-medium text-white rounded-lg transition-colors duration-300 cursor-pointer bg-text-tertiary"
          >
            Discuss Your Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

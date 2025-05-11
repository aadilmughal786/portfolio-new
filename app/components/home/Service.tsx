'use client';

import { useRef, useState, useEffect } from 'react';
import { FaCode, FaServer, FaPaintBrush, FaCloud, FaSearch, FaMobileAlt } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FaAnglesRight } from 'react-icons/fa6';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay,
  isVisible,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.2 + delay * 0.1 }}
      className="p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 border-text-tertiary/10 bg-white/5 hover:bg-text-tertiary/5"
    >
      <div className="flex gap-4 items-start">
        <div className="p-3 rounded-lg bg-text-tertiary/10 text-text-tertiary">{icon}</div>
        <div>
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <p className="text-text-primary/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const services = [
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

  return (
    <section ref={sectionRef} id="services" className="overflow-hidden relative py-24">
      <div className="container relative z-10 px-6 mx-auto">
        {/* Animated section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-text-tertiary/5 text-text-tertiary"
          >
            <span className="flex relative mr-1 w-3 h-3">
              <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
              <span className="inline-flex relative w-3 h-3 rounded-full bg-text-tertiary"></span>
            </span>
            What I Do
          </motion.div>
          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-text-tertiary">Services</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-3xl text-text-primary/80"
          >
            I deliver end-to-end web development solutions tailored to your specific needs. From
            concept to deployment, I handle every aspect of creating powerful digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex gap-2 items-center px-8 py-2 font-medium text-white rounded-md bg-text-tertiary/80 hover:bg-text-tertiary"
          >
            Discuss Your Project
            <FaAnglesRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './Hero';
import SectionHeading from './SectionHeading';
import { servicesData } from '@/data/home/service';

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
      className="p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 border-text-tertiary/10 bg-bg-primary/5 hover:bg-text-tertiary/5"
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
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} id="services" className="overflow-hidden relative py-12">
      <div className="container relative z-10 px-6 mx-auto">
        {/* Animated section heading */}
        <SectionHeading badge="Services" title="What I" highlightedTitle="Offer">
          I provide <span className="font-semibold text-text-tertiary">tailored</span> web
          development solutions, guiding projects from concept to launch. With a focus on{' '}
          <span className="font-semibold text-text-tertiary">user-friendly</span> design and modern
          technology, I create <span className="font-semibold text-text-tertiary">reliable</span>{' '}
          digital experiences that meet your goals.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-6 mx-auto max-w-4xl md:grid-cols-2">
          {servicesData.map((service, index) => (
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
          className="flex justify-center mt-16"
        >
          <Button href="/portfolio">Discuss Your Project</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import variants from '@/utils/motionVariants';
import { TStatBox } from '@/types/home/stats.types';
import { statsData } from '@/data/home/stats';
import SectionHeading from './SectionHeading';

const StatBox: React.FC<TStatBox> = ({ icon, value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: false, amount: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const incrementTime = Math.floor(2000 / end);
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    });

    return () => clearTimeout(timer);
  }, [value, isVisible]);

  return (
    <motion.div
      ref={countRef}
      variants={variants.fadeIn}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className="relative p-6 bg-gradient-to-br rounded-2xl border backdrop-blur-sm transition-all duration-500 group border-text-tertiary/20 from-bg-primary/10 to-bg-primary/5 hover:from-text-tertiary/10 hover:to-text-tertiary/5 hover:border-text-tertiary/30 hover:shadow-lg hover:shadow-text-tertiary/10"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br to-transparent rounded-2xl opacity-0 transition-opacity duration-500 from-text-tertiary/5 group-hover:opacity-100" />

      <div className="flex relative flex-col items-center text-center">
        <div className="p-3 mb-4 text-2xl rounded-xl transition-colors duration-300 transform bg-text-tertiary/10 text-text-tertiary group-hover:bg-text-tertiary/20 group-hover:scale-110">
          {icon}
        </div>
        <div className="flex gap-1 items-baseline mb-2">
          <span className="text-4xl font-bold transition-colors duration-300 text-text-primary group-hover:text-text-tertiary">
            {count}
          </span>
          {suffix && (
            <span className="text-2xl font-bold transition-colors duration-300 text-text-tertiary/80 group-hover:text-text-tertiary">
              {suffix}
            </span>
          )}
        </div>
        <p className="text-sm font-medium leading-relaxed transition-colors duration-300 text-text-primary/70 group-hover:text-text-primary/90">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="overflow-hidden relative px-4 py-16 mx-auto max-w-7xl sm:px-8 lg:px-16"
    >
      <div className="relative z-10">
        {/* Enhanced section heading */}
        <SectionHeading badge="Track Record" title="My Impact" highlightedTitle="By Numbers">
          These numbers represent milestones throughout my professional journey, reflecting my
          commitment to <span className="font-medium text-text-tertiary">quality</span>,{' '}
          <span className="font-medium text-text-tertiary">innovation</span>, and{' '}
          <span className="font-medium text-text-tertiary">continuous growth</span>.
        </SectionHeading>

        {/* Enhanced context section */}
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mx-auto mt-12 mb-16 max-w-4xl"
        >
          {/* Status badges */}
          <div className="flex flex-wrap gap-3 justify-center py-4">
            <motion.span
              variants={variants.slideInFromLeft}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-300 bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10 hover:bg-text-tertiary/10"
            >
              <span className="flex relative w-2 h-2">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </span>
              Continuously Learning
            </motion.span>

            <motion.span
              variants={variants.fadeInUp}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-300 bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10 hover:bg-text-tertiary/10"
            >
              <span className="flex relative w-2 h-2">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </span>
              Results-Driven
            </motion.span>

            <motion.span
              variants={variants.slideInFromRight}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-300 bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10 hover:bg-text-tertiary/10"
            >
              <span className="flex relative w-2 h-2">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </span>
              Available for Projects
            </motion.span>
          </div>
        </motion.div>

        {/* Enhanced stats grid */}
        <motion.div
          variants={variants.staggerChildren}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-8 mx-auto mb-16 max-w-5xl sm:grid-cols-2 lg:grid-cols-4"
        >
          {statsData.map((stat, index) => (
            <StatBox
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

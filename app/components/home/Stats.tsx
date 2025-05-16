'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import variants from '@/utils/motionVariants'; // Import the variants
import { TStatBox } from '@/types/home/stats.types';
import { statsData } from '@/data/home/stats';
import SectionHeading from './SectionHeading';

const StatBox: React.FC<TStatBox> = ({ icon, value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: false, amount: 0.3 });
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
      transition={{ duration: 0.5, delay: 1 }}
      className="p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 border-text-tertiary/10 bg-bg-primary/5 hover:bg-text-tertiary/5"
    >
      <div className="flex flex-col items-center">
        <div className="p-2 mb-3 text-xl rounded-lg bg-text-tertiary/10 text-text-tertiary">
          {icon}
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold text-text-primary">{count}</span>
          {suffix && <span className="text-2xl font-bold text-text-tertiary">{suffix}</span>}
        </div>
        <p className="mt-2 text-sm font-medium text-center text-text-primary/70">{label}</p>
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
      className="overflow-hidden relative px-4 py-12 mx-auto max-w-5xl sm:py-24 sm:px-8 lg:px-16"
    >
      <div className="relative z-10">
        {/* Animated section heading */}

        <SectionHeading badge="Track Record" title="My Impact" highlightedTitle="By Numbers">
          These numbers represent milestones throughout my professional journey, reflecting my
          commitment to <span className="font-medium text-text-tertiary">quality</span> and{' '}
          <span className="font-medium text-text-tertiary">excellence</span>.
        </SectionHeading>

        {/* Additional context */}
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mx-auto mt-8 mb-5 max-w-3xl text-center"
        >
          <div className="flex flex-wrap gap-2 justify-center py-2">
            {/* Using slideInFromLeft variant */}
            <motion.span
              variants={variants.slideInFromLeft}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="inline-flex gap-1 items-center px-3 py-1 text-sm font-medium rounded-full border bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10"
            >
              <span className="flex relative w-2 h-2">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </span>
              Continuously Learning
            </motion.span>

            {/* Using slideInFromRight variant */}
            <motion.span
              variants={variants.slideInFromRight}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="inline-flex gap-1 items-center px-3 py-1 text-sm font-medium rounded-full border bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10"
            >
              <span className="flex relative w-2 h-2">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </span>
              Results-Driven
            </motion.span>
          </div>
        </motion.div>

        {/* Stats grid with improved spacing - using the staggerChildren pattern for parent */}
        <motion.div
          variants={variants.staggerChildren}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-2 gap-6 mx-auto max-w-4xl sm:grid-cols-2 lg:grid-cols-4"
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

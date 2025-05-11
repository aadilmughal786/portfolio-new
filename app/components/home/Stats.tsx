'use client';

import { motion, useInView } from 'framer-motion';
import { FaCode, FaUserFriends, FaStar, FaCalendarAlt } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

interface StatBoxProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  duration?: number;
  suffix?: string;
  delay: number;
}

const StatBox: React.FC<StatBoxProps> = ({
  icon,
  value,
  label,
  duration = 2000,
  suffix = '',
  delay,
}) => {
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
    const incrementTime = Math.floor(duration / end);
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(counter);
      }, incrementTime);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, duration, isVisible, delay]);

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 border-text-tertiary/10 bg-white/5 hover:bg-text-tertiary/5"
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

  const stats = [
    {
      icon: <FaCalendarAlt />,
      value: 3,
      label: 'Years of Experience',
      suffix: '+',
      delay: 0,
    },
    {
      icon: <FaUserFriends />,
      value: 48,
      label: 'Happy Clients',
      suffix: '',
      delay: 200,
    },
    {
      icon: <FaCode />,
      value: 30,
      label: 'Projects Completed',
      suffix: '+',
      delay: 400,
    },
    {
      icon: <FaStar />,
      value: 1250,
      label: 'GitHub Stars',
      suffix: '+',
      delay: 600,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="overflow-hidden relative py-24 px-4 sm:px-8 lg:px-16"
    >
      <div className="container relative z-10">
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
            Track Record
          </motion.div>
          <h2 className="text-4xl font-bold md:text-5xl">
            My Impact <span className="text-text-tertiary">By Numbers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-primary/80">
            Key metrics highlighting my journey and achievements in web development.
          </p>
        </motion.div>

        {/* Introduction text before stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <p className="text-text-primary/90">
            These numbers represent milestones throughout my professional journey, reflecting my
            commitment to <span className="font-medium text-text-tertiary">quality</span> and{' '}
            <span className="font-medium text-text-tertiary">excellence</span>.
          </p>
        </motion.div>

        {/* Additional context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mx-auto mt-8 max-w-3xl text-center mb-5"
        >
          <div className="flex flex-wrap justify-center gap-2 py-2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="inline-flex gap-1 items-center px-3 py-1 text-xs font-medium rounded-full border bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10"
            >
              <span className="flex relative w-2 h-2">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </span>
              Continuously Growing
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="inline-flex gap-1 items-center px-3 py-1 text-xs font-medium rounded-full border bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10"
            >
              <span className="flex relative w-2 h-2">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </span>
              Results-Driven
            </motion.span>
          </div>
        </motion.div>

        {/* Stats grid with improved spacing */}
        <div className="grid grid-cols-2 gap-6 mx-auto max-w-4xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatBox
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

'use client';

import { motion } from 'framer-motion';
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
  const countRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = countRef.current; // Store ref value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use stored value in cleanup
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const incrementTime = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isInView]);

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
    >
      <div className="mb-4 text-3xl text-indigo-600 dark:text-indigo-400">{icon}</div>
      <h3 className="flex items-baseline mb-2 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
        {count}
        {suffix && <span className="ml-1 text-lg text-gray-600 dark:text-gray-300">{suffix}</span>}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{label}</p>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <FaCalendarAlt />,
      value: 3,
      label: 'Years of Experience',
      suffix: '+',
    },
    {
      icon: <FaUserFriends />,
      value: 48,
      label: 'Happy Clients',
      suffix: '',
    },
    {
      icon: <FaCode />,
      value: 30,
      label: 'Projects Completed',
      suffix: '+',
    },
    {
      icon: <FaStar />,
      value: 1250,
      label: 'GitHub Stars',
      suffix: '+',
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Impact</span> By Numbers
          </h2>
          <div className="mx-auto mb-6 w-24 h-1 bg-indigo-600 dark:bg-indigo-400"></div>
          <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300">
            Key metrics highlighting my journey and achievements in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatBox
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

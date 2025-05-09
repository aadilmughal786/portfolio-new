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
      value: 1,
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
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

        {/* Highlight section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 mt-16 bg-white rounded-xl shadow-lg dark:bg-gray-800"
        >
          <h3 className="mb-6 text-2xl font-bold text-center text-gray-900 dark:text-white">
            Career Highlights
          </h3>

          <div className="space-y-4">
            {[
              'Led development of a SaaS platform that increased client revenues by 35%',
              'Published 3 popular open-source libraries with over 1,000 combined GitHub stars',
              'Reduced application load times by 60% through performance optimization',
              'Speaker at 5 web development conferences across Europe and North America',
              'Mentored 20+ junior developers who have gone on to successful careers',
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <div className="flex flex-shrink-0 justify-center items-center mt-1 w-5 h-5 bg-indigo-100 rounded-full dark:bg-indigo-900">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full dark:bg-indigo-400"></div>
                </div>
                <p className="ml-4 text-gray-700 dark:text-gray-300">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

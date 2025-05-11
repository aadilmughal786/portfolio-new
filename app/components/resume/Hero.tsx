'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';

const ResumeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const experienceItems = [
    { value: '3+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Completed' },
    { value: '15+', label: 'Tech Stack' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="overflow-hidden relative">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          className="flex flex-col items-center mx-auto max-w-4xl"
        >
          {/* Title Section */}
          <motion.div variants={itemVariants} className="text-center">
            <span className="inline-flex gap-2 items-center px-4 py-1 mb-3 text-sm font-medium tracking-wider rounded-full bg-text-tertiary/5 text-text-tertiary">
              <span className="flex relative w-2 h-2">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </span>
              CURRICULUM VITAE
            </span>

            <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
              My Professional <span className="text-text-tertiary">Journey</span>
            </h1>

            <p className="mb-8 text-lg text-text-primary md:max-w-3xl">
              A comprehensive overview of my expertise in full-stack development, with a focus on
              creating high-performance, accessible web applications using modern technologies and
              frameworks.
            </p>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 mb-10 w-full max-w-lg"
          >
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 border-border-primary bg-white/50 dark:bg-gray-800/50"
              >
                <motion.span
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.5, type: 'spring' }}
                  className="text-3xl font-bold text-text-tertiary"
                >
                  {item.value}
                </motion.span>
                <span className="text-sm text-text-primary">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-2 font-medium text-white rounded-lg transition-colors duration-300 bg-text-tertiary/80 hover:bg-text-tertiary"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>

            <Link
              href="/contact"
              className="inline-flex gap-2 items-center px-6 py-2 font-medium rounded-lg transition-all duration-300 bg-text-tertiary/10 text-text-tertiary hover:bg-text-tertiary/20"
            >
              Contact Me <FaAnglesRight />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col items-center mb-15"
        >
          <span className="mb-2 text-sm text-text-primary"> Resume Details Below</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex justify-center pt-1 w-5 h-10 rounded-full border-2 border-border-primary"
          >
            <motion.div className="w-1 h-2 rounded-full bg-text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeHero;

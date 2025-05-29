'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import variants from '@/utils/motionVariants';
import { aboutMeData } from '@/data/home/about-me';
import { Button } from '../home/Hero';
import Link from 'next/link';
import { FaGoogleDrive } from 'react-icons/fa6';

const ResumeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const experienceItems = [
    { value: `${aboutMeData.yearsOfExperience}+`, label: 'Years Experience' },
    { value: `${aboutMeData.totalProjectsBuild}+`, label: 'Projects Build' },
    { value: `${aboutMeData.technologiesUsed}+`, label: 'Tech Stack' },
  ];

  return (
    <section className="relative">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={variants.staggerChildren}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          className="flex flex-col items-center mx-auto max-w-4xl"
        >
          {/* Title Section */}
          <motion.div variants={variants.fadeInUp} className="text-center">
            <motion.span
              variants={variants.fadeZoom}
              className="inline-flex gap-2 items-center px-4 py-2 mb-3 text-sm font-medium tracking-wider rounded-full bg-text-tertiary/5 text-text-tertiary"
            >
              <motion.span
                variants={variants.stringAnimation}
                animate="swing"
                className="flex relative w-2 h-2"
              >
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </motion.span>
              CURRICULUM VITAE
            </motion.span>

            <motion.h1
              variants={variants.fadeInUp}
              className="mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl"
            >
              My Professional <span className="text-text-tertiary">Journey</span>
            </motion.h1>

            <motion.p
              variants={variants.fadeInUp}
              className="mb-8 text-lg text-text-primary md:max-w-3xl"
            >
              A comprehensive overview of my expertise in full-stack development, with a focus on
              creating high-performance, accessible web applications using modern technologies and
              frameworks.
            </motion.p>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            variants={variants.fadeZoom}
            className="overflow-hidden mb-12 w-full max-w-2xl rounded-xl border backdrop-blur-sm border-text-tertiary/10 bg-bg-primary/5"
          >
            <div className="flex flex-col sm:flex-row">
              {experienceItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 py-5 px-4 text-center relative ${
                    index !== experienceItems.length - 1 ? 'sm:border-r border-border-primary' : ''
                  } ${index !== 0 ? 'border-t sm:border-t-0 border-border-primary' : ''}`}
                >
                  <motion.div
                    variants={
                      index % 2 === 0 ? variants.slideInFromLeft : variants.slideInFromRight
                    }
                    transition={{ delay: 0.3 + index * 0.15 }}
                    className="relative z-10"
                  >
                    <motion.span
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="block mb-1 text-3xl font-bold md:text-4xl text-text-tertiary"
                    >
                      {item.value}
                    </motion.span>
                    <span className="text-sm text-text-primary/80">{item.label}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons - Updated to use the new dropdown */}
          <motion.div
            variants={variants.fadeInUp}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                href={aboutMeData.resumeLink}
                target="_blank"
                className={`inline-flex gap-2 items-center px-4 py-1.5 font-medium  rounded-md transition-colors duration-300 text-white bg-text-tertiary/80 hover:bg-text-tertiary'
        }`}
              >
                <FaGoogleDrive />
                Download Resume
              </Link>
            </motion.div>

            <Button primary={false} href="/contact">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col items-center mb-15"
        >
          <span className="mb-2 text-sm text-gray-700 dark:text-gray-400">Scroll to Explore</span>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex justify-center pt-1 w-5 h-10 rounded-full border-2 border-gray-400"
          >
            <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeHero;

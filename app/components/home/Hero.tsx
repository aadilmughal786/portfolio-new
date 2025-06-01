'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaAnglesRight } from 'react-icons/fa6';
import { LiaSlackHash } from 'react-icons/lia';
import variants from '@/utils/motionVariants';
import ScrollIndicator from '../ui/ScrollIndicator';
import { developerInfo } from '@/data/dev-info';

export const Button = ({
  primary = true,
  children,
  href,
  noArrows = false,
}: {
  primary?: boolean;
  children: React.ReactNode;
  href: string;
  noArrows?: boolean;
}) => {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={`inline-flex gap-2 items-center px-4 py-1.5 font-medium  rounded-md transition-colors duration-300  
        ${
          primary
            ? 'text-white bg-text-tertiary/80 hover:bg-text-tertiary'
            : 'bg-text-tertiary/10 text-text-tertiary hover:bg-text-tertiary/20'
        }`}
      >
        {children}
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className={`${noArrows && 'hidden'}`}
        >
          <FaAnglesRight />
        </motion.span>
      </Link>
    </motion.div>
  );
};

const HeroSection = () => {
  const [animationsActive, setAnimationsActive] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    setAnimationsActive(true);
  }, []);

  return (
    <section className="overflow-hidden relative px-4 min-h-screen sm:px-8 lg:px-16">
      <div className="grid relative z-10 gap-6 items-center py-10 mx-auto sm:gap-12 sm:py-20 lg:grid-cols-2 lg:gap-16">
        {/* Left content area with heading and CTAs */}
        <div className="flex flex-col order-2 lg:order-1">
          {/* Developer role badge */}
          <motion.div
            initial="hidden"
            animate={animationsActive ? 'visible' : 'hidden'}
            variants={variants.fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-text-tertiary/5 text-text-tertiary">
              <LiaSlackHash size={18} />
              Full-Stack Developer & Problem Solver
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants.fadeInUp}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mb-4 text-4xl font-extrabold text-text-primary md:text-5xl lg:text-6xl"
          >
            Crafting Digital <span className="text-text-tertiary">Experiences</span> That Matter
          </motion.h1>

          {/* Descriptive text */}
          <motion.p
            initial="hidden"
            animate={animationsActive ? 'visible' : 'hidden'}
            variants={variants.fadeIn}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-6 text-lg text-text-primary"
          >
            I build high-performance web applications that drive business growth and deliver
            seamless user experiences. With expertise in the latest technologies and a passion for
            clean, maintainable code.
          </motion.p>

          {/* Call to action buttons */}
          <motion.div
            initial="hidden"
            animate={animationsActive ? 'visible' : 'hidden'}
            variants={variants.fadeInUp}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/contact">Start a Project</Button>
            <Button href="/projects" primary={false}>
              View Portfolio
            </Button>
          </motion.div>
        </div>

        {/* Right section with profile image and animated elements */}
        <div className="relative order-1 mb-10 sm:mb-20 lg:order-2 lg:mb-0">
          {/* Core profile visualization with orbital animations */}
          <motion.div
            initial="hidden"
            animate={animationsActive ? 'visible' : 'hidden'}
            variants={variants.fadeZoom}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto lg:mr-0"
          >
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              {/* Animated concentric circles - outermost */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  rotate: { repeat: Infinity, duration: 20, ease: 'linear' },
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-text-tertiary/20"
                style={{ transformOrigin: 'center' }}
              />

              {/* Second orbital ring */}
              <div
                className="absolute inset-4 rounded-full border border-text-tertiary/30"
                style={{ transformOrigin: 'center' }}
              />

              {/* Third orbital ring */}
              <div
                className="absolute inset-8 rounded-full border-2 border-text-tertiary/20"
                style={{ transformOrigin: 'center' }}
              />

              {/* Fourth orbital ring - Innermost */}
              <div
                className="absolute inset-12 rounded-full border border-text-tertiary/30"
                style={{ transformOrigin: 'center' }}
              />

              {/* Ambient glow effect behind profile */}
              <div className="absolute inset-16 rounded-full blur-3xl bg-text-tertiary/15"></div>

              {/* Orbiting tech icon - JavaScript */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 15,
                  ease: 'linear',
                }}
                className="absolute inset-0 z-10"
                style={{ transformOrigin: 'center' }}
              >
                <div
                  className="absolute -left-4 top-1/2 w-8 h-8 -translate-y-1/2"
                  style={{ transformOrigin: 'center right' }}
                >
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-text-tertiary">
                    <span className="text-xs font-bold text-white">JS</span>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting tech icon - TS */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                className="absolute inset-8 z-10"
                style={{ transformOrigin: 'center' }}
              >
                <div
                  className="absolute -left-4 top-1/2 w-8 h-8 -translate-y-1/2"
                  style={{ transformOrigin: 'center right' }}
                >
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-text-tertiary">
                    <span className="text-xs font-bold text-white">TS</span>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting tech icon - UI */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="absolute inset-0 z-10"
                style={{ transformOrigin: 'center' }}
              >
                <div
                  className="absolute top-0 left-1/2 w-8 h-8 -translate-x-1/2"
                  style={{ transformOrigin: 'bottom center' }}
                >
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-text-tertiary">
                    <span className="text-xs font-bold text-white">UI</span>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting tech icon - UX */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                className="absolute inset-0 z-10"
                style={{ transformOrigin: 'center' }}
              >
                <div
                  className="absolute top-6 left-1/2 w-8 h-8 -translate-x-1/2"
                  style={{ transformOrigin: 'bottom center' }}
                >
                  <div className="flex justify-center items-center w-full h-full rounded-full bg-text-tertiary">
                    <span className="text-xs font-bold text-white">UX</span>
                  </div>
                </div>
              </motion.div>

              {/* Profile image */}
              <div className="overflow-hidden absolute inset-16 z-20 rounded-full border-4 shadow-lg border-white/80">
                <Image
                  src="/portfolio-new/images/aadil.png"
                  alt="Professional Developer Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Code snippet badge */}
          <motion.div
            initial="hidden"
            animate={animationsActive ? 'visible' : 'hidden'}
            variants={variants.slideInFromRight}
            transition={{ delay: 1, duration: 0.8, type: 'spring', stiffness: 100, damping: 10 }}
            className="hidden absolute top-1/4 z-30 sm:block lg:-left-10 md:block"
          >
            <div className="p-3 rounded-lg border shadow backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border-white/30 dark:border-gray-700/30">
              <pre className="text-xs text-gray-800 dark:text-gray-200">
                <code>{`function createSolution() {
  return "elegant";
}`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Projects counter badge */}
          <motion.div
            initial="hidden"
            animate={animationsActive ? 'visible' : 'hidden'}
            variants={variants.slideInFromLeft}
            transition={{ delay: 1.2, duration: 0.8, type: 'spring', stiffness: 100, damping: 10 }}
            className="hidden absolute -bottom-5 z-30 p-4 rounded-xl border shadow backdrop-blur-md sm:block right-25 bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-700/30"
          >
            <span className="block text-2xl font-bold text-text-tertiary">
              {developerInfo.totalProjectsBuilt}+
            </span>
            <span className="block text-sm font-medium">Projects Build</span>
          </motion.div>

          {/* Availability badge */}
          <motion.div
            initial="hidden"
            animate={animationsActive ? 'visible' : 'hidden'}
            variants={variants.slideInFromLeft}
            transition={{ delay: 1.4, duration: 0.8, type: 'spring', stiffness: 100, damping: 10 }}
            className="absolute top-0 z-30 p-3 rounded-lg border shadow backdrop-blur-md sm:top-10 sm:right-0 md:right-10 bg-white/50 dark:bg-gray-800/40 border-white/30 dark:border-gray-700/30"
          >
            <div className="flex gap-2 items-center">
              {/* Pulsing availability indicator */}
              <span className="flex relative w-3 h-3">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-3 h-3 rounded-full bg-text-tertiary"></span>
              </span>
              <span className="text-sm font-medium text-text-tertiary">Available for Work</span>
            </div>
          </motion.div>

          {/* Experience badge */}
          <motion.div
            initial="hidden"
            animate={animationsActive ? 'visible' : 'hidden'}
            variants={variants.slideInFromRight}
            transition={{ delay: 1.6, duration: 0.8, type: 'spring', stiffness: 100, damping: 10 }}
            className="absolute bottom-4 right-10 z-30 p-2 rounded-lg border shadow backdrop-blur-md sm:right-0 w-50 sm:bottom-28 sm:left-0 md:left-10 bg-white/50 dark:bg-gray-800/40 border-white/30 dark:border-gray-700/30"
          >
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-text-tertiary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {developerInfo.yearsOfExperience}+ Years Experience
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator at the bottom */}
      <ScrollIndicator isActive={animationsActive} label="Scroll to Explore" />
    </section>
  );
};

export default HeroSection;

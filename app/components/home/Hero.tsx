'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaAnglesRight } from 'react-icons/fa6';
import { LiaSlackHash } from 'react-icons/lia';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="overflow-hidden relative min-h-screen px-4 sm:px-8 lg:px-16">
      <div className="container grid relative z-10 gap-6 sm:gap-12 items-center py-10 sm:py-20 mx-auto lg:grid-cols-2 lg:gap-16">
        {/* Content section */}
        <div className="flex flex-col order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7 }}
            className="mb-4"
          >
            <span className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-text-tertiary/5 text-text-tertiary">
              <LiaSlackHash size={18} />
              Full-Stack Developer & Problem Solver
            </span>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-4 text-4xl font-extrabold text-text-primary md:text-5xl lg:text-6xl"
            >
              Crafting Digital <span className="text-text-tertiary">Experiences</span> That Matter
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-6 text-lg text-text-primary"
          >
            I build high-performance web applications that drive business growth and deliver
            seamless user experiences. With expertise in the latest technologies and a passion for
            clean, maintainable code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="flex gap-2 items-center px-4 py-2 font-medium text-white rounded-md bg-text-tertiary/80 hover:bg-text-tertiary"
            >
              Start a Project
              <FaAnglesRight />
            </Link>
            <Link
              href="/blogs"
              className="inline-flex gap-2 items-center px-6 py-2 font-medium rounded-lg transition-all duration-300 bg-text-tertiary/10 text-text-tertiary hover:bg-text-tertiary/20"
            >
              View Portfolio
              <FaAnglesRight />
            </Link>
          </motion.div>
        </div>

        {/* Image and floating elements */}
        <div className="relative order-1 mb-10 sm:mb-20 lg:order-2 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mx-auto lg:mr-0"
          >
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              {/* Animated concentric circles with smoother rotation */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { repeat: Infinity, duration: 20, ease: 'linear' },
                  scale: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-text-tertiary/20"
                style={{ transformOrigin: 'center' }}
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: 'linear',
                }}
                className="absolute inset-4 rounded-full border border-text-tertiary/30"
                style={{ transformOrigin: 'center' }}
              />

              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  rotate: { repeat: Infinity, duration: 30, ease: 'linear' },
                  scale: { repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 },
                }}
                className="absolute inset-8 rounded-full border-2 border-text-tertiary/20"
                style={{ transformOrigin: 'center' }}
              />

              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  rotate: { repeat: Infinity, duration: 40, ease: 'linear' },
                  scale: { repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 2 },
                }}
                className="absolute inset-12 rounded-full border border-text-tertiary/30"
                style={{ transformOrigin: 'center' }}
              />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 35,
                  ease: 'linear',
                }}
                className="absolute inset-16 rounded-full border-2 border-dashed border-text-tertiary/20"
                style={{ transformOrigin: 'center' }}
              />

              {/* Glowing background effect */}
              <div className="absolute inset-16 bg-gradient-to-br rounded-full blur-3xl from-text-tertiary/15 to-blue-500/10"></div>

              {/* Orbit elements with fixed positions */}
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
                    <span className="text-xs font-bold text-white">PY</span>
                  </div>
                </div>
              </motion.div>

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
                    <span className="text-xs font-bold text-white">TS</span>
                  </div>
                </div>
              </motion.div>

              {/* Circular mask with animated arrow border for the image */}
              <div className="overflow-hidden absolute inset-16 z-20 rounded-full border-4 shadow-lg border-white/80">
                <Image
                  src="/portfolio-new/images/aadil.png"
                  alt="Professional Developer Portrait"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Animated arrow border */}
                <motion.div
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute inset-0 z-30 rounded-full"
                  style={{
                    background: 'none',
                    border: '2px dashed transparent',
                    backgroundImage: `conic-gradient(from 0deg, transparent, rgba(var(--text-tertiary-rgb), 0.7), transparent)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                    style={{ width: '100%', height: '100%' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Decorative code element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hidden absolute top-1/4 z-30 sm:block lg:-left-10 md:block"
          >
            <div className="p-3 rounded-lg border shadow backdrop-blur-md bg-white/20 dark:bg-gray-800/20 border-white/30 dark:border-gray-700/30">
              <pre className="text-xs text-gray-800 dark:text-gray-200">
                <code>{`function solve() {
  return "elegant";
}`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Project counter badge with improved glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden absolute -bottom-5 z-30 p-4 rounded-xl border shadow backdrop-blur-md sm:block right-25 bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-700/30"
          >
            <span className="block text-sm text-gray-700 dark:text-gray-300">Completed</span>
            <span className="block text-2xl font-bold text-gray-900 dark:text-white">30+</span>
            <span className="block text-sm font-medium text-text-tertiary">Projects</span>
          </motion.div>

          {/* Availability badge with improved glass effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute top-10 z-30 p-3 rounded-lg border shadow backdrop-blur-md sm:right-0 md:right-10 bg-white/50 dark:bg-gray-800/40 border-white/30 dark:border-gray-700/30"
          >
            <div className="flex gap-2 items-center">
              <span className="flex relative w-3 h-3">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-3 h-3 rounded-full bg-text-tertiary"></span>
              </span>
              <span className="text-sm font-medium text-text-tertiary">Available for Work</span>
            </div>
          </motion.div>

          {/* Extra tech badge with improved glass effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute right-0 bottom-4 z-30 p-2 rounded-lg border shadow backdrop-blur-md w-50 sm:bottom-28 sm:left-0 md:left-10 bg-white/50 dark:bg-gray-800/40 border-white/30 dark:border-gray-700/30"
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
                3+ Years Experience
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="flex flex-col items-center mb-5"
      >
        <span className="mb-2 text-sm text-gray-700 dark:text-gray-400">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center pt-1 w-5 h-10 rounded-full border-2 border-gray-400"
        >
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

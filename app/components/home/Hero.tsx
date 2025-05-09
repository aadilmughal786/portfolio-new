'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center px-4 py-10 min-h-screen bg-gray-50 dark:bg-gray-900 mb-15">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100/20 to-purple-100/20 dark:from-indigo-900/20 dark:to-purple-900/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl bg-indigo-300/10 dark:bg-indigo-600/10" />
        <div className="absolute right-1/4 bottom-1/4 w-80 h-80 rounded-full blur-3xl bg-purple-300/10 dark:bg-purple-600/10" />
      </div>

      <div className="container grid relative z-10 gap-12 items-center mx-auto max-w-6xl md:grid-cols-2">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col order-2 md:order-1"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block mb-2 text-sm font-medium tracking-wider text-indigo-600 uppercase dark:text-indigo-400"
          >
            Full-Stack Developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            Crafting Digital{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Experiences</span> That Matter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-6 text-lg text-gray-700 dark:text-gray-300"
          >
            {`I build modern, responsive web applications that focus on performance, accessibility,
            and user experience. Let's create something amazing together.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 font-medium text-white bg-indigo-600 rounded-lg transition-colors duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              {`Let's Work Together`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 font-medium text-gray-700 rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800"
            >
              View My Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex order-1 justify-center md:order-2"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/portfolio-new/images/aadil.png" // Replace with your actual image
              alt="Developer Portrait"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -right-6 -bottom-6 p-3 bg-white rounded-xl shadow-lg dark:bg-gray-800"
            >
              <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                Available for
              </span>
              <span className="block text-lg font-bold text-indigo-600 dark:text-indigo-400">
                New Projects
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import { FaWpforms } from 'react-icons/fa6';

const ResumeHero: React.FC = () => {
  return (
    <section className="overflow-hidden relative py-24 bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-100/20 to-blue-100/20 dark:from-indigo-900/20 dark:to-blue-900/20" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl bg-blue-300/10 dark:bg-blue-600/10" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl bg-indigo-300/10 dark:bg-indigo-600/10" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:space-x-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 max-w-2xl text-center md:text-left md:mt-0"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block px-4 py-1 mb-3 text-sm font-medium tracking-wider text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-300 dark:bg-indigo-900/50"
            >
              CURRICULUM VITAE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            >
              My Professional <span className="text-indigo-600 dark:text-indigo-400">Journey</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-8 text-lg text-gray-600 dark:text-gray-300"
            >
              A comprehensive overview of my skills, experiences, education, and professional
              accomplishments. Feel free to download my resume for your reference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 font-medium text-white bg-indigo-600 rounded-lg transition-colors duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 font-medium text-gray-700 rounded-lg border border-gray-300 transition-colors duration-300 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800"
              >
                <FaWpforms className="mr-2" />
                Contact
              </Link>
            </motion.div>
          </motion.div>

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-xs"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/portfolio-new/images/aadil.png" // Replace with your actual resume preview image
                alt="Resume Preview"
                fill
                className="object-cover rounded-lg shadow-2xl transform rotate-2"
                priority
              />
            </div>

            <div className="absolute -bottom-4 -left-4 p-3 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Last Updated
              </span>
              <span className="block font-bold text-indigo-600 dark:text-indigo-400">May 2025</span>
            </div>
          </motion.div>
        </div>

        {/* Resume highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mt-16"
        >
          {[
            'Full Stack Developer',
            '7+ Years Experience',
            'React Expert',
            'Typescript Enthusiast',
            'UI/UX Focus',
          ].map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full shadow-sm dark:bg-gray-800 dark:text-gray-300"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-gray-600 dark:text-gray-400">
            Resume Details Below
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600 dark:text-gray-400"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeHero;

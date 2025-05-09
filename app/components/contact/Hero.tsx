'use client';

import { motion } from 'framer-motion';

const ContactHero: React.FC = () => {
  return (
    <section className="overflow-hidden relative py-24 bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100/20 to-purple-100/20 dark:from-indigo-900/20 dark:to-purple-900/20" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl bg-indigo-300/10 dark:bg-indigo-600/10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl bg-purple-300/10 dark:bg-purple-600/10" />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block px-4 py-1 mb-3 text-sm font-medium tracking-wider text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-300 dark:bg-indigo-900/50"
          >
            GET IN TOUCH
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            {`Let's`} <span className="text-indigo-600 dark:text-indigo-400">Connect</span> and
            Create Something Amazing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-12 text-lg text-gray-600 dark:text-gray-300"
          >
            {`Have a project in mind or want to discuss potential opportunities? I'm always interested
            in hearing about new ideas and challenges. Reach out using any of the methods below, and
            I'll get back to you as soon as possible.`}
          </motion.p>
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
          <span className="mb-2 text-sm text-gray-600 dark:text-gray-400">Contact Form Below</span>
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

export default ContactHero;

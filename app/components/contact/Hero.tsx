'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';
import Link from 'next/link';

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] py-16 sm:py-24 overflow-hidden">
      <div className="container relative z-10 px-4 mx-auto max-w-7xl pb-15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-semibold tracking-wider rounded-full bg-text-tertiary/5 text-text-tertiary"
          >
            <GrContact size={18} />
            GET IN TOUCH
          </motion.span>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl"
          >
            Let&apos;s <span className="text-text-tertiary">Connect</span> and Create Something
            Amazing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-6 text-lg"
          >
            Have a project in mind or want to discuss potential opportunities? I&apos;m always
            interested in hearing about new ideas and challenges. Choose your preferred way to
            connect below.
          </motion.p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-1 gap-8 pt-10 mx-auto mt-12 max-w-4xl sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Email Card */}
          <motion.div
            whileHover={{
              y: -5,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}
            className="flex flex-col p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 dark:bg-gray-800/20 dark:border-gray-700/30 group border-text-tertiary/10 bg-white/5 hover:bg-text-tertiary/5"
          >
            <div className="flex justify-center items-center mb-5 w-14 h-14 rounded-full transition-colors duration-300 bg-text-tertiary/10 group-hover:bg-text-tertiary/20">
              <FaPaperPlane className="w-6 h-6 text-text-tertiary" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-primary">Email Me</h3>
            <p className="mb-4 text-text-primary">
              Drop me a line anytime to discuss your project needs
            </p>
            <Link
              href="mailto:aadil.mugal.dev@gmail.com
"
              className="flex gap-2 justify-center items-center px-4 py-2 mt-auto font-medium text-white rounded-md bg-text-tertiary/80 hover:bg-text-tertiary"
            >
              Email
            </Link>
          </motion.div>

          {/* Form Card */}
          <motion.div
            whileHover={{
              y: -5,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}
            className="flex flex-col p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 dark:bg-gray-800/20 dark:border-gray-700/30 group border-text-tertiary/10 bg-white/5 hover:bg-text-tertiary/5"
          >
            <div className="flex justify-center items-center mb-5 w-14 h-14 rounded-full transition-colors duration-300 bg-text-tertiary/10 group-hover:bg-text-tertiary/20">
              <FaFileAlt className="w-6 h-6 text-text-tertiary" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-primary">Fill the Form</h3>
            <p className="mb-4 text-text-primary">
              Share your details and ideas through our contact form
            </p>
            <Link
              href="#contact-form"
              className="flex gap-2 justify-center items-center px-4 py-2 mt-auto font-medium text-white rounded-md bg-text-tertiary/80 hover:bg-text-tertiary"
            >
              Go to Form
            </Link>
          </motion.div>

          {/* Book a Slot Card */}
          <motion.div
            whileHover={{
              y: -5,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }}
            className="flex flex-col p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 dark:bg-gray-800/20 dark:border-gray-700/30 group border-text-tertiary/10 bg-white/5 hover:bg-text-tertiary/5"
          >
            <div className="flex justify-center items-center mb-5 w-14 h-14 rounded-full transition-colors duration-300 bg-text-tertiary/10 group-hover:bg-text-tertiary/20">
              <FaCalendarAlt className="w-6 h-6 text-text-tertiary" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-text-primary">Book a Slot</h3>
            <p className="mb-4 text-text-primary">Schedule a meeting at your convenience</p>
            <Link
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 justify-center items-center px-4 py-2 mt-auto font-medium text-white rounded-md bg-text-tertiary/80 hover:bg-text-tertiary"
            >
              Book
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="flex flex-col items-center mb-15"
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

export default ContactHero;

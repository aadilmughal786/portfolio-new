'use client';

import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { GrContact } from 'react-icons/gr';
import Link from 'next/link';
import variants from '@/utils/motionVariants';
import { Variants } from 'framer-motion';
import { contactOptionsData } from '@/data/contact/contact-options';

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  linkTarget?: string;
  variants: {
    fadeInUp: Variants;
    swingAnimation: Variants;
  };
};

export const ContactCard = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  linkTarget = '_self',
  variants,
}: ContactCardProps) => {
  return (
    <motion.div
      variants={variants.fadeInUp}
      className="flex flex-col p-6 h-full rounded-xl border backdrop-blur-sm transition-all duration-300 dark:bg-gray-800/20 dark:border-gray-700/30 group hover:bg-text-tertiary/5 border-text-tertiary/10 bg-bg-primary/5"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="flex justify-center items-center mb-5 w-14 h-14 rounded-full transition-colors duration-300 bg-text-tertiary/10 group-hover:bg-text-tertiary/20"
      >
        <motion.div variants={variants.swingAnimation}>{icon}</motion.div>
      </motion.div>

      <h3 className="mb-2 text-xl font-bold text-text-primary">{title}</h3>
      <p className="mb-4 text-text-primary">{description}</p>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
        <Link
          href={linkHref}
          target={linkTarget}
          rel={linkTarget === '_blank' ? 'noopener noreferrer' : ''}
          className="flex gap-2 justify-center items-center px-4 py-2 w-full font-medium text-white rounded-md transition-all duration-300 bg-text-tertiary/80 hover:bg-text-tertiary"
        >
          {linkText}
        </Link>
      </motion.div>
    </motion.div>
  );
};

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] py-16 sm:pt-24 overflow-hidden">
      <div className="container relative z-10 px-4 mx-auto max-w-7xl pb-15">
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            variants={variants.fadeInUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-semibold tracking-wider rounded-full bg-text-tertiary/5 text-text-tertiary"
          >
            <GrContact size={18} />
            GET IN TOUCH
          </motion.span>

          <motion.h1
            variants={variants.fadeInUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl"
          >
            Let&apos;s <span className="text-text-tertiary">Connect</span> and Create Something
            Amazing
          </motion.h1>

          <motion.p
            variants={variants.fadeInUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-6 text-lg"
          >
            Have a project in mind or want to discuss potential opportunities? I&apos;m always
            interested in hearing about new ideas and challenges. Choose your preferred way to
            connect below.
          </motion.p>
        </motion.div>

        {/* Contact cards - Enhanced with better responsive design */}
        <motion.div
          variants={variants.staggerChildren}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-5 pt-10 mx-auto mt-12 max-w-5xl md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {contactOptionsData.map((option, index) => (
            <div
              key={index}
              className={`${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''} h-full`}
            >
              <ContactCard
                icon={option.icon}
                title={option.title}
                description={option.description}
                linkText={option.linkText}
                linkHref={option.linkHref}
                linkTarget={option.linkTarget}
                variants={variants}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={variants.fadeInUp}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="flex flex-col items-center mb-15"
      >
        <span className="mb-2 text-sm text-gray-700 dark:text-gray-400">Scroll to Explore</span>
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

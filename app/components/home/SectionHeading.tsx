'use client';

// SectionHeading.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  children?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedTitle,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-text-tertiary/5 text-text-tertiary"
        >
          <span className="flex relative mr-1 w-3 h-3">
            <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
            <span className="inline-flex relative w-3 h-3 rounded-full bg-text-tertiary"></span>
          </span>
          {badge}
        </motion.div>
      )}

      <h2 className="text-4xl font-bold md:text-5xl">
        {title} {highlightedTitle && <span className="text-text-tertiary">{highlightedTitle}</span>}
      </h2>

      {children && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 max-w-3xl text-base text-text-primary/80 md:text-lg"
        >
          {children}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;

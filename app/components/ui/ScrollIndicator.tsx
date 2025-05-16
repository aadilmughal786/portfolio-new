'use client';

// ScrollIndicator.tsx
import React from 'react';
import { motion } from 'framer-motion';
import variants from '@/utils/motionVariants';

interface ScrollIndicatorProps {
  isActive: boolean;
  label: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ isActive, label }) => {
  return (
    <motion.div
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
      variants={variants.fadeIn}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="flex flex-col items-center mb-5"
      aria-hidden="true" // This is decorative
    >
      <span className="mb-2 text-sm text-gray-700 dark:text-gray-400"> {label}</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="flex justify-center pt-1 w-5 h-10 rounded-full border-2 border-gray-400"
      >
        <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;

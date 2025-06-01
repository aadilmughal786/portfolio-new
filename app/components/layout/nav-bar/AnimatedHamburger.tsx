import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({ isOpen, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="flex relative justify-center items-center w-5 h-5 cursor-pointer"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div className="flex relative justify-center items-center w-full">
        {/* Top line */}
        <motion.span
          className="absolute h-0.5 w-5 bg-current rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -6,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            mass: 1,
          }}
        />

        {/* Middle line */}
        <motion.span
          className="absolute h-0.5 w-5 bg-current rounded-full"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
            delay: isOpen ? 0 : 0.1,
          }}
        />

        {/* Bottom line */}
        <motion.span
          className="absolute h-0.5 w-5 bg-current rounded-full"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? 0 : 6,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            mass: 1,
          }}
        />
      </div>
    </motion.button>
  );
};

export default AnimatedHamburger;

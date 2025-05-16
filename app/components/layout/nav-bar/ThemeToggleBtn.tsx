'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeToggleBtn = () => {
  const [isDark, setIsDark] = useState(false);
  const controls = useAnimation();

  // Check if the user has a saved preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
    // Initial animation on mount
    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 },
    });
  }, [controls]);

  // Function to toggle the theme
  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    // Trigger click animation
    controls.start({
      rotate: [0, -360],
      transition: { duration: 1 },
    });
  };

  return (
    <motion.div
      animate={controls}
      onClick={toggleTheme}
      className="flex justify-center items-center p-2 rounded-full transition-colors duration-300 cursor-pointer"
    >
      <motion.div
        key={isDark ? 'moon' : 'sunny'} // Key to trigger re-render for icon transition
      >
        {isDark ? <IoMoon className="w-5 h-5" /> : <IoSunny className="w-5 h-5" />}
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggleBtn;

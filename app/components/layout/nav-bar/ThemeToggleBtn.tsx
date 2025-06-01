'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeToggleBtn = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const controls = useAnimation();

  // Check theme on mount - read from DOM instead of localStorage
  useEffect(() => {
    setMounted(true);

    // The theme should already be applied by the script in layout.js
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    // Initial animation
    controls.start({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 },
    });
  }, [controls]);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch (e) {
        // Handle case where localStorage is not available
        console.warn('Could not save theme preference', e);
      }
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('theme', 'light');
      } catch (e) {
        console.warn('Could not save theme preference', e);
      }
    }

    // Trigger click animation
    controls.start({
      rotate: [0, -360],
      transition: { duration: 1 },
    });
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="flex justify-center items-center p-2 w-9 h-9 rounded-full">
        {/* Invisible placeholder to prevent layout shift */}
        <div className="w-5 h-5 opacity-0" />
      </div>
    );
  }

  return (
    <motion.div
      animate={controls}
      onClick={toggleTheme}
      className="flex justify-center items-center p-2 rounded-full transition-colors duration-300 cursor-pointer"
    >
      <motion.div
        key={isDark ? 'moon' : 'sunny'}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <IoMoon className="w-5 h-5" /> : <IoSunny className="w-5 h-5" />}
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggleBtn;

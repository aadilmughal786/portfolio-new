import React, { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeToggleBtn = () => {
  const [isDark, setIsDark] = useState(false);

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
  }, []);

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
  };

  return (
    <div onClick={toggleTheme}>
      {isDark ? <IoMoon className="icon" /> : <IoSunny className="icon" />}
    </div>
  );
};

export default ThemeToggleBtn;

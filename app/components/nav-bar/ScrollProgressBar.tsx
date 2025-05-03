'use client';

import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-[3px] bg-border-primary">
      <div
        className="h-full transition-all duration-100 ease-out bg-text-tertiary"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;

'use client';

import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useEffect } from 'react';

export default function BackgroundMask() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const background = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, var(--bg-mask), transparent 400px)`;

  useEffect(() => {
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [x, y]);

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none will-change-[background]"
      style={{ background }}
    />
  );
}

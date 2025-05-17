'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Bird = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const [relativePosition, setRelativePosition] = useState({ x: 0, y: 0 });
  const [isJawDropped, setIsJawDropped] = useState(false);
  const [wingsFlapping, setWingsFlapping] = useState(true); // Start with wings flapping
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Calculate position relative to container
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setRelativePosition({ x, y });

        // Trigger jaw drop on mouse movement
        setIsJawDropped(true);

        // Reset jaw animation after a short delay
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
        }

        animationTimeoutRef.current = setTimeout(() => {
          setIsJawDropped(false);
        }, 1500);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  // Continuous wing flapping animation
  useEffect(() => {
    // Wings will continuously flap regardless of mouse movement
    const wingInterval = setInterval(() => {
      setWingsFlapping(prev => !prev);
    }, 800); // Toggle wing position every 800ms

    return () => clearInterval(wingInterval);
  }, []);

  // Calculate eye movements based on mouse position
  const calculateEyeMovement = (eyeIndex: number) => {
    if (!containerRef.current) return { x: 0, y: 0 };

    const rect = containerRef.current.getBoundingClientRect();
    const eyeOffset = eyeIndex === 0 ? -20 : 20; // Left eye vs right eye

    // Calculate eye center position
    const eyeCenterX = rect.width / 2 + eyeOffset;
    const eyeCenterY = rect.height / 2 - 60; // Adjusted for bird's face position

    // Calculate direction from eye to mouse
    const deltaX = relativePosition.x - eyeCenterX;
    const deltaY = relativePosition.y - eyeCenterY;

    // Limit movement radius
    const radius = 5;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance <= radius) {
      return { x: deltaX, y: deltaY };
    } else {
      return {
        x: (deltaX / distance) * radius,
        y: (deltaY / distance) * radius,
      };
    }
  };

  const leftEyeMovement = calculateEyeMovement(0);
  const rightEyeMovement = calculateEyeMovement(1);

  return (
    <div ref={containerRef}>
      {/* Bird character with eyes that follow cursor */}
      <div className="relative w-30 h-30">
        {/* Main body circle */}
        <div className="absolute inset-0 bg-sky-400 rounded-full"></div>

        {/* Left wing - SMALLER with continuous animation */}
        <motion.div
          className="absolute -left-4 top-1/3 w-8 h-16 bg-sky-500 rounded-l-full -z-10"
          animate={{
            x: wingsFlapping ? -3 : 0,
            rotateZ: wingsFlapping ? -15 : 0,
          }}
          transition={{
            type: 'tween',
            duration: 0.4,
            ease: 'easeInOut',
          }}
        ></motion.div>

        {/* Right wing - SMALLER with continuous animation */}
        <motion.div
          className="absolute -right-4 top-1/3 w-8 h-16 bg-sky-500 rounded-r-full -z-10"
          animate={{
            x: wingsFlapping ? 3 : 0,
            rotateZ: wingsFlapping ? 15 : 0,
          }}
          transition={{
            type: 'tween',
            duration: 0.4,
            ease: 'easeInOut',
          }}
        ></motion.div>

        {/* Left eye container */}
        <div className="absolute w-12 h-12 bg-white rounded-full left-1/8 top-1/8">
          {/* Left pupil */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-6 h-6 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              x: leftEyeMovement.x,
              y: leftEyeMovement.y,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </div>

        {/* Right eye container */}
        <div className="absolute w-12 h-12 bg-white rounded-full top-1/8 right-1/8">
          {/* Right pupil */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-6 h-6 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              x: rightEyeMovement.x,
              y: rightEyeMovement.y,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        </div>

        {/* Beak/Jaw with triangular shape that connects properly */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            {/* Upper beak - triangular shape that stays in place */}
            <div className="relative">
              <div className="w-0 h-0 border-l-16 border-r-16 border-b-10 border-l-transparent border-r-transparent border-b-yellow-400"></div>
            </div>

            {/* Lower beak - triangular shape that drops down */}
            <motion.div
              animate={{
                y: isJawDropped ? 3 : 0, // Reduced gap
                scaleY: isJawDropped ? 1.2 : 1,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              style={{ marginTop: -1 }} // Connect the two triangles
              className="relative"
            >
              <div className="w-0 h-0 border-l-16 border-r-16 border-t-10 border-l-transparent border-r-transparent border-t-yellow-300"></div>
            </motion.div>
          </div>
        </div>

        {/* Legs - SMALLER */}
        <div className="absolute -bottom-4 left-1/3 w-1 h-6 bg-yellow-400 -z-10"></div>
        <div className="absolute -bottom-4 right-1/3 w-1 h-6 bg-yellow-400 -z-10"></div>

        {/* Feet - SMALLER */}
        <div className="absolute -bottom-4 left-1/3 -ml-2 w-5 h-1 bg-yellow-400"></div>
        <div className="absolute -bottom-4 right-1/3 -mr-2 w-5 h-1 bg-yellow-400"></div>
      </div>
    </div>
  );
};

export const EndPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 w-full">
      <div className="flex justify-center items-center mb-10 animate-bounce">
        <Bird />
      </div>
      <div className="px-6 max-w-xl text-center mt-15">
        <p className="mb-4 text-lg font-medium text-text-tertiary">
          You&apos;ve reached the end — thanks for scrolling!
        </p>
        <p className="mb-4 text-lg text-text-primary/70">
          Let&apos;s stay connected — follow me on{' '}
          <a
            href="https://www.linkedin.com/in/aadil-mugal-146bb818a"
            className="font-medium text-text-tertiary"
            target="_blank"
          >
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            className="font-medium text-text-tertiary"
            href="https://github.com/aadilmughal786"
          >
            GitHub
          </a>{' '}
          for more tech insights and creative projects.
        </p>
      </div>
    </div>
  );
};

export default EndPage;

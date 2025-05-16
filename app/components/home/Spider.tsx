'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SpiderProps {
  size?: number;
  color?: string;
  speed?: number;
  maxDistance?: number;
  initialPosition?: { x: number; y: number };
}

const Spider: React.FC<SpiderProps> = ({
  size = 40,
  color = 'black',
  speed = 0.08,
  maxDistance = 300,
  initialPosition = { x: 50, y: 50 },
}) => {
  // Spider position state
  const [position, setPosition] = useState(initialPosition);
  // Mouse/pointer position state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Direction the spider is facing (in degrees)
  const [rotation, setRotation] = useState(0);
  // Whether the spider is currently moving
  const [isMoving, setIsMoving] = useState(false);
  // Animation for leg movement
  const [legPhase, setLegPhase] = useState(0);
  // Reference to the container element
  const containerRef = useRef<HTMLDivElement>(null);

  // Update mouse position on mouse move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update touch position for mobile devices
  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (containerRef.current && event.touches[0]) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top,
        });
      }
    };

    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Move spider towards mouse position
  useEffect(() => {
    // Calculate distance to mouse
    const dx = mousePosition.x - position.x;
    const dy = mousePosition.y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Calculate angle to mouse (in degrees)
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    // Only move if mouse is further than a minimum distance
    if (distance > 5) {
      setIsMoving(true);
      setRotation(angle);

      // Move towards mouse, but limit by maxDistance
      const moveDistance = Math.min(distance, maxDistance);
      const moveRatio = moveDistance / distance;

      const animationFrame = requestAnimationFrame(() => {
        setPosition(prevPosition => ({
          x: prevPosition.x + dx * speed * moveRatio,
          y: prevPosition.y + dy * speed * moveRatio,
        }));
      });

      return () => cancelAnimationFrame(animationFrame);
    } else {
      setIsMoving(false);
    }
  }, [mousePosition, position, speed, maxDistance]);

  // Animate leg movement when spider is moving
  useEffect(() => {
    let animationFrameId: number;

    if (isMoving) {
      const animateLegs = () => {
        setLegPhase(prev => (prev + 0.15) % (2 * Math.PI));
        animationFrameId = requestAnimationFrame(animateLegs);
      };

      animationFrameId = requestAnimationFrame(animateLegs);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMoving]);

  // Calculate leg positions based on phase
  const leftLegAnimation = Math.sin(legPhase);
  const rightLegAnimation = Math.sin(legPhase + Math.PI); // Out of phase with left legs

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative w-full h-full"
      style={{ minHeight: '200px' }}
    >
      <motion.div
        className="absolute"
        style={{
          left: position.x - size / 2,
          top: position.y - size / 2,
          width: size,
          height: size,
          rotate: `${rotation}deg`,
          transformOrigin: 'center',
        }}
        animate={{
          x: position.x - size / 2,
          y: position.y - size / 2,
          rotate: rotation,
        }}
        transition={{ type: 'spring', damping: 20 }}
      >
        {/* Spider body */}
        <div className="relative" style={{ width: size, height: size }}>
          {/* Main body */}
          <div
            className="absolute rounded-full"
            style={{
              backgroundColor: color,
              width: size * 0.6,
              height: size * 0.4,
              left: size * 0.2,
              top: size * 0.3,
            }}
          />

          {/* Head */}
          <div
            className="absolute rounded-full"
            style={{
              backgroundColor: color,
              width: size * 0.3,
              height: size * 0.3,
              left: size * 0.7,
              top: size * 0.35,
            }}
          />

          {/* Eyes */}
          <div
            className="absolute rounded-full"
            style={{
              backgroundColor: 'white',
              width: size * 0.08,
              height: size * 0.08,
              left: size * 0.8,
              top: size * 0.32,
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              backgroundColor: 'white',
              width: size * 0.08,
              height: size * 0.08,
              left: size * 0.8,
              top: size * 0.5,
            }}
          />

          {/* Legs - Left side */}
          {[0.2, 0.4, 0.6, 0.8].map((pos, i) => (
            <div
              key={`left-leg-${i}`}
              className="absolute origin-left"
              style={{
                backgroundColor: color,
                height: size * 0.05,
                width: size * 0.4,
                left: size * 0.25,
                top: size * pos,
                transform: `rotate(${40 + leftLegAnimation * 20 * (i % 2 ? 1 : -1)}deg)`,
              }}
            />
          ))}

          {/* Legs - Right side */}
          {[0.2, 0.4, 0.6, 0.8].map((pos, i) => (
            <div
              key={`right-leg-${i}`}
              className="absolute origin-right"
              style={{
                backgroundColor: color,
                height: size * 0.05,
                width: size * 0.4,
                right: size * 0.25,
                top: size * pos,
                transform: `rotate(${-40 + rightLegAnimation * 20 * (i % 2 ? 1 : -1)}deg)`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Spider;

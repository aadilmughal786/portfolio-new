import { Variants } from 'framer-motion';

// Define proper TypeScript types for motion variants
interface MotionVariants {
  fadeInUp: Variants;
  fadeIn: Variants;
  slideInFromRight: Variants;
  slideInFromLeft: Variants;
  fadeZoom: Variants;
  staggerChildren: Variants;
  scaleUp: Variants;
  // New additions
  swingAnimation: Variants;
  stringAnimation: Variants;
}

// Create variants with proper TypeScript types
const variants: MotionVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideInFromRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  slideInFromLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeZoom: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  staggerChildren: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  scaleUp: {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  },
  // Adding the swing animation for the bird
  swingAnimation: {
    swing: {
      rotate: [0, 15, -15, 10, -10, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  },
  // Adding the string animation
  stringAnimation: {
    swing: {
      skewX: [0, 5, -5, 3, -3, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  },
};

export default variants;

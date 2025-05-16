'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import variants from '@/utils/motionVariants';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'InnovateX',
      image: '/portfolio-new/images/aadil.png',
      text: 'Working with this developer was a game-changer for our startup. They delivered a complex web application on time and within budget. Their attention to detail and ability to translate our vision into reality exceeded our expectations.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'TechFlow',
      image: '/portfolio-new/images/aadil.png',
      text: "I've worked with many developers over my career, but few have the technical skills combined with the business acumen that this developer brings. They don't just write code—they solve problems and add value to the overall product strategy.",
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthLabs',
      image: '/portfolio-new/images/aadil.png',
      text: 'Our website redesign project was seamless from start to finish. The developer was responsive, collaborative, and delivered a stunning website that perfectly captures our brand identity while driving higher conversion rates.',
    },
    {
      id: 4,
      name: 'David Okonkwo',
      role: 'Founder',
      company: 'LaunchPad',
      image: '/portfolio-new/images/aadil.png',
      text: 'An exceptional developer who brings both technical expertise and creative problem-solving to the table. They helped us build a scalable platform that has been crucial to our business growth. Highly recommended for any challenging web project.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Touch handling variables
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Minimum swipe distance threshold (in pixels)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // Auto rotate testimonials with improved timing
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);

    // Resume auto-rotation after a delay
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Handle touch start event
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
    setIsPaused(true);
  };

  // Handle touch move event
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isSwiping) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  // Handle touch end event
  const handleTouchEnd = () => {
    if (!isSwiping) return;

    // Calculate swipe distance
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    // Handle left swipe (go to next testimonial)
    if (isLeftSwipe) {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      setActiveIndex(nextIndex);
    }

    // Handle right swipe (go to previous testimonial)
    if (isRightSwipe) {
      const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
      setActiveIndex(prevIndex);
    }

    // Reset touch values and swipe state
    setTouchStart(0);
    setTouchEnd(0);
    setIsSwiping(false);

    // Resume auto-rotation after a delay
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Simple opacity transition with no movement
  const simpleTransition = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
      transition: {
        opacity: { duration: 1, ease: 'linear' },
      },
    },
    exit: {
      opacity: 0,
      transition: {
        opacity: { duration: 1, ease: 'linear' },
      },
    },
  };

  return (
    <section ref={sectionRef} id="testimonials" className="overflow-hidden relative py-16 md:py-24">
      <div className="container relative z-10 px-4 mx-auto md:px-6">
        {/* Animated section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-text-tertiary/5 text-text-tertiary"
          >
            <span className="flex relative mr-1 w-3 h-3">
              <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
              <span className="inline-flex relative w-3 h-3 rounded-full bg-text-tertiary"></span>
            </span>
            What Others Say
          </motion.div>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Client <span className="text-text-tertiary">Testimonials</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Testimonial Slider with touch functionality */}
          <div
            className="overflow-hidden relative p-1"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full cursor-grab active:cursor-grabbing">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={simpleTransition}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col p-8 w-full rounded-xl border backdrop-blur-sm border-border-primary bg-bg-primary/5"
                >
                  <div className="flex flex-col gap-6 items-center lg:flex-row lg:items-start md:gap-8 lg:gap-10">
                    <motion.div className="relative flex-shrink-0" variants={variants.fadeZoom}>
                      <div className="overflow-hidden relative z-10 w-44 h-44 rounded-2xl border-4 shadow-lg border-text-tertiary/20">
                        <Image
                          src="/portfolio-new/images/aadil.png"
                          alt="Professional Developer Portrait"
                          height={100}
                          width={100}
                          className="flex justify-center items-center w-full h-full text-4xl font-bold text-white bg-gradient-to-br from-text-tertiary/80 to-text-primary/80"
                        />
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -right-3 -bottom-3 z-0 w-full h-full rounded-2xl border-2 border-text-tertiary" />
                      <div className="flex absolute -top-3 -left-3 z-20 justify-center items-center w-8 h-8 text-white rounded-full sm:w-10 sm:h-10 bg-text-tertiary">
                        <FaQuoteLeft className="text-xs sm:text-sm" />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <div className="mb-4 md:mb-6">
                        <p className="text-base italic leading-relaxed sm:text-lg text-text-primary/80">
                          {testimonials[activeIndex].text}
                        </p>
                      </div>

                      <h3 className="text-lg font-bold sm:text-xl">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-sm sm:text-base text-text-primary/70">
                        {testimonials[activeIndex].role} at{' '}
                        <span className="text-text-tertiary">
                          {testimonials[activeIndex].company}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Enhanced dots indicator with progress animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex justify-center mt-6 space-x-3 sm:mt-8"
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className="relative group"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeIndex
                        ? 'bg-text-tertiary w-6'
                        : 'bg-text-tertiary/30 w-2 group-hover:bg-text-tertiary/50'
                    }`}
                  ></div>
                  {index === activeIndex && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full rounded-full bg-text-tertiary/20"
                      initial={{ scale: 1.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

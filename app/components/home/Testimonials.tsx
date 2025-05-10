'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
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
      rating: 5,
      text: 'Working with this developer was a game-changer for our startup. They delivered a complex web application on time and within budget. Their attention to detail and ability to translate our vision into reality exceeded our expectations.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'TechFlow',
      image: '/portfolio-new/images/aadil.png',
      rating: 5,
      text: "I've worked with many developers over my career, but few have the technical skills combined with the business acumen that this developer brings. They don't just write code—they solve problems and add value to the overall product strategy.",
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthLabs',
      image: '/portfolio-new/images/aadil.png',
      rating: 5,
      text: 'Our website redesign project was seamless from start to finish. The developer was responsive, collaborative, and delivered a stunning website that perfectly captures our brand identity while driving higher conversion rates.',
    },
    {
      id: 4,
      name: 'David Okonkwo',
      role: 'Founder',
      company: 'LaunchPad',
      image: '/portfolio-new/images/aadil.png',
      rating: 5,
      text: 'An exceptional developer who brings both technical expertise and creative problem-solving to the table. They helped us build a scalable platform that has been crucial to our business growth. Highly recommended for any challenging web project.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Check if on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto rotate testimonials
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

  const goToPrev = () => {
    const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    goToTestimonial(newIndex);
  };

  const goToNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    goToTestimonial(newIndex);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Client <span className="text-indigo-600 dark:text-indigo-400">Testimonials</span>
          </h2>
          <div className="mx-auto mb-6 w-24 h-1 bg-indigo-600 dark:bg-indigo-400"></div>
          <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300">
            {`Don't just take my word for it - see what my clients have to say about working together.`}
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop View - Multiple testimonials */}
          {!isMobile && (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <div className="overflow-hidden relative mr-4 w-16 h-16 bg-gray-200 rounded-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <FaQuoteLeft className="absolute top-0 left-0 -mt-2 -ml-1 text-3xl text-gray-200 dark:text-gray-700" />
                    <p className="pl-8 text-gray-700 dark:text-gray-300">{testimonial.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Mobile View - Carousel */}
          {isMobile && (
            <div className="overflow-hidden relative p-1">
              <div className="relative">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <div className="overflow-hidden relative mr-4 w-16 h-16 bg-gray-200 rounded-full">
                        <Image
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {testimonials[activeIndex].name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative">
                    <FaQuoteLeft className="absolute top-0 left-0 -mt-2 -ml-1 text-3xl text-gray-200 dark:text-gray-700" />
                    <p className="pl-8 text-gray-700 dark:text-gray-300">
                      {testimonials[activeIndex].text}
                    </p>
                  </div>
                </motion.div>

                {/* Navigation buttons */}
                <div className="flex absolute top-1/2 justify-between px-2 w-full -translate-y-1/2">
                  <button
                    onClick={goToPrev}
                    className="flex justify-center items-center p-2 text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    aria-label="Previous testimonial"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={goToNext}
                    className="flex justify-center items-center p-2 text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    aria-label="Next testimonial"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex
                        ? 'bg-indigo-600 dark:bg-indigo-400'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop View - Additional testimonials */}
        {!isMobile && (
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            {testimonials.slice(2, 4).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="overflow-hidden relative mr-4 w-16 h-16 bg-gray-200 rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <FaQuoteLeft className="absolute top-0 left-0 -mt-2 -ml-1 text-3xl text-gray-200 dark:text-gray-700" />
                  <p className="pl-8 text-gray-700 dark:text-gray-300">{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;

'use client';

import { motion } from 'framer-motion';
import variants from '@/utils/motionVariants';
import { Button } from '../home/Hero';
import { FaHandsClapping, FaQuoteLeft } from 'react-icons/fa6';
import Image from 'next/image';
import { runConfetti } from '@/utils/confetti';
import SectionHeading from '../home/SectionHeading';
import { useState } from 'react';

const AuthorBio = () => {
  const [isRunning, setIsRunning] = useState(false); // State to lock the button

  const handleConfettiClick = () => {
    if (isRunning) return; // Prevent multiple clicks
    setIsRunning(true);
    runConfetti();
    setTimeout(() => setIsRunning(false), 8 * 1000);
  };
  return (
    <section className="overflow-hidden relative py-16">
      <SectionHeading badge="Who I Am" title="About" highlightedTitle="Author" />
      <div className="container px-4 mx-auto">
        <motion.div
          className="p-8 mx-auto max-w-5xl rounded-2xl border backdrop-blur-sm bg-bg-primary/10 border-border-primary"
          variants={variants.fadeZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="flex flex-col gap-8 items-center lg:flex-row lg:items-start">
            {/* Author Image */}
            <motion.div className="relative" variants={variants.fadeZoom}>
              <div className="overflow-hidden relative z-10 w-40 h-40 rounded-2xl border-4 shadow-lg md:w-48 md:h-48 border-text-tertiary/20">
                {/* Replace with your actual image */}
                <Image
                  src="/portfolio-new/images/aadil.png"
                  alt="Professional Developer Portrait"
                  height={100}
                  width={100}
                  className="flex justify-center items-center w-full h-full text-4xl font-bold text-white bg-gradient-to-br from-text-tertiary/80 to-text-primary/80"
                />
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -right-3 -bottom-3 z-0 w-full h-full rounded-2xl border-2 border-text-tertiary"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              />
              <motion.button
                className="flex absolute -top-3 -left-3 z-20 justify-center items-center w-10 h-10 text-white rounded-full cursor-pointer bg-text-tertiary"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                onClick={handleConfettiClick}
                disabled={isRunning}
              >
                <FaHandsClapping className={isRunning ? 'opacity-50' : ''} />
              </motion.button>
            </motion.div>

            {/* Author Info */}
            <div className="flex-1">
              <div className="text-center md:text-left">
                <motion.span
                  variants={variants.slideInFromRight}
                  className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-text-tertiary/10 text-text-tertiary"
                >
                  Problem Solver
                </motion.span>
                <motion.h2
                  variants={variants.fadeInUp}
                  className="mb-2 text-3xl font-bold text-text-primary"
                >
                  Aadil Mughal
                </motion.h2>
                <motion.h3 variants={variants.fadeInUp} className="mb-4 text-xl text-text-tertiary">
                  Full-Stack Developer
                </motion.h3>
              </div>

              <motion.p
                variants={variants.fadeInUp}
                className="mb-6 text-center text-text-primary md:text-left"
              >
                {`Coding isn't just a skill—it's a superpower that transforms ideas into reality. With
                1+ years of experience in the MERN stack, I specialize in building scalable,
                user-centric web applications that deliver exceptional digital experiences. I embrace
                challenges and approach complex problems with a methodical mindset. My goal is to create
                clean, efficient, and maintainable code that scales well and delivers value to users
                and businesses alike.`}
              </motion.p>
            </div>
          </div>

          {/* Quote */}
          <motion.div
            className="pt-8 mt-8 border-t border-text-primary/10"
            variants={variants.fadeInUp}
          >
            <blockquote className="relative pl-6 italic text-text-primary/70">
              <FaQuoteLeft size={20} />

              <p className="ml-4">
                I believe multitasking is a myth. The human brain is not made like that. Do one
                thing at a time and do it best. If a problem is big, break it down into manageable
                pieces.
              </p>
            </blockquote>
          </motion.div>

          {/* CTA */}
          <motion.div className="flex justify-center mt-8" variants={variants.fadeZoom}>
            <Button href="/contact">Work With Me</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorBio;

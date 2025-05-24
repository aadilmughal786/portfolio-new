'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutMeData } from '@/data/home/about-me';
import variants from '@/utils/motionVariants';
import SectionHeading from './SectionHeading';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden relative px-4 pt-24 mx-auto max-w-5xl sm:px-8 lg:px-16"
    >
      <SectionHeading badge="Who I Am" title="About" highlightedTitle="Me">
        I’m a dedicated web developer crafting{' '}
        <span className="font-semibold text-text-tertiary">reliable</span> and{' '}
        <span className="font-semibold text-text-tertiary">user-friendly</span> digital solutions.
        With a passion for <span className="font-semibold text-text-tertiary">modern</span>{' '}
        technology and clear design, I build experiences that connect and deliver value.
      </SectionHeading>

      <div>
        {/* Introduction */}
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-12"
        >
          <motion.div
            variants={variants.fadeInUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold">Full-Stack Developer & Problem Solver</h3>

            <p className="text-lg leading-relaxed text-text-primary/90">
              I build fast, reliable web applications that help businesses grow and keep users
              happy. Using the latest technologies and clean code, I turn tough problems into
              simple, smart solutions.
            </p>

            <p className="leading-relaxed text-text-primary/80">
              My development philosophy is grounded in the transformative power of the web as the
              world&apos;s
              <span className="font-medium text-text-tertiary">
                {' '}
                most accessible technology
              </span>{' '}
              platform. All you need is a browser, and everything is instantly available—this
              democratization of technology is what continues to inspire my work.
            </p>

            <div className="flex flex-wrap gap-3 py-2">
              <motion.span
                variants={variants.slideInFromLeft}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="inline-flex gap-2 items-center px-4 py-1 text-sm font-medium rounded-full border bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10"
              >
                <span className="flex relative w-2 h-2">
                  <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                  <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
                </span>
                {aboutMeData.yearsOfExperience}+ Years Experience
              </motion.span>

              <motion.span
                variants={variants.slideInFromRight}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="inline-flex gap-2 items-center px-4 py-1 text-sm font-medium rounded-full border bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10"
              >
                <span className="flex relative w-2 h-2">
                  <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                  <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
                </span>
                {aboutMeData.totalProjectsBuild}+ Projects Build
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        {/* Value Props */}
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="mb-6 text-2xl font-bold">What I Bring to the Table</h3>

          <div className="grid gap-6 md:grid-cols-2">
            {aboutMeData.coreValuePropositions.map((prop, index) => (
              <motion.div
                key={index}
                variants={variants.fadeIn}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                className="p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 border-text-tertiary/10 bg-bg-primary/5 hover:bg-text-tertiary/5"
              >
                <div className="flex flex-col gap-4 items-start sm:flex-row">
                  <div className="p-3 rounded-lg bg-text-tertiary/10 text-text-tertiary">
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">{prop.title}</h4>
                    <p className="text-text-primary/70">{prop.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exploration areas */}
        <motion.div
          variants={variants.fadeInUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-15"
        >
          <h3 className="mb-6 text-2xl font-bold">Beyond Web Development</h3>

          <p className="mb-6 leading-relaxed text-text-primary/80">
            {`My curiosity extends beyond creating web applications. I'm passionate about exploring
              the theoretical foundations that underpin modern computing and using these insights to
              build better digital experiences.`}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {aboutMeData.currentExplorations.map((area, index) => (
              <motion.div
                key={index}
                variants={variants.fadeIn}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} // Staggered animation
                className="p-6 rounded-xl border transition-all duration-300 border-text-tertiary/10 bg-text-tertiary/5 hover:bg-text-tertiary/10"
              >
                <div className="flex flex-col gap-4 items-start sm:flex-row">
                  <div className="p-3 rounded-lg bg-text-tertiary/10 text-text-tertiary">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">{area.title}</h4>
                    <p className="text-text-primary/70">{area.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

'use client';

import { motion } from 'framer-motion';
import variants from '@/utils/motionVariants';
import { PiShootingStarFill } from 'react-icons/pi';

const ProjectsHero: React.FC = () => {
  return (
    <section className="overflow-hidden relative px-4 pt-16 pb-6 sm:px-8 lg:px-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants.staggerChildren}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={variants.fadeInUp} className="flex justify-center mb-3">
            <span className="inline-flex gap-2 items-center px-4 py-2 mb-3 text-sm font-medium tracking-wider rounded-full bg-text-tertiary/5 text-text-tertiary">
              <PiShootingStarFill size={16} />
              MY WORK
            </span>
          </motion.div>

          <motion.h1
            variants={variants.fadeInUp}
            className="mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl"
          >
            Explore My <span className="text-text-tertiary">Projects</span> Portfolio
          </motion.h1>

          <motion.p
            variants={variants.fadeIn}
            className="mb-12 text-lg text-gray-600 dark:text-gray-300"
          >
            Browse through a collection of my most significant projects, showcasing technical
            skills, problem-solving abilities, and creative solutions across different domains.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;

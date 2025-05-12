'use client';

import { motion } from 'framer-motion';

const ProjectsHero: React.FC = () => {
  return (
    <section className="overflow-hidden relative px-4 pt-16 pb-6 sm:px-8 lg:px-16">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center mb-3"
          >
            <span className="inline-flex gap-2 items-center px-4 py-2 mb-3 text-sm font-medium tracking-wider rounded-full bg-text-tertiary/5 text-text-tertiary">
              <span className="flex relative w-2 h-2">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
              </span>
              MY WORK
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl"
          >
            Explore My <span className="text-text-tertiary">Projects</span> Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
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

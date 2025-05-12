'use client';

import { motion } from 'framer-motion';
import { FaRss } from 'react-icons/fa';

const BlogHero: React.FC = () => {
  return (
    <section className="overflow-hidden relative pt-24">
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
              <FaRss /> BLOG & INSIGHTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl"
          >
            Tech <span className="text-text-tertiary">Insights</span> & Development Tips
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-10 text-lg text-gray-600 dark:text-gray-300"
          >
            Explore my articles on web development, coding best practices, tech trends, and lessons
            learned from real-world projects. Stay updated with the latest in the tech world.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;

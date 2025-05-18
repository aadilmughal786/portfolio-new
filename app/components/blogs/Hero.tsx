'use client';

import { motion } from 'framer-motion';
import variants from '@/utils/motionVariants';
import { FaRss } from 'react-icons/fa';

const BlogHero: React.FC = () => {
  return (
    <section className="overflow-hidden relative pt-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants.staggerChildren}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={variants.fadeZoom} className="flex justify-center mb-3">
            <span className="inline-flex gap-2 items-center px-4 py-2 mb-3 text-sm font-medium tracking-wider rounded-full bg-text-tertiary/5 text-text-tertiary">
              <FaRss /> BLOG & INSIGHTS
            </span>
          </motion.div>

          <motion.h1
            variants={variants.fadeInUp}
            className="mb-6 text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl"
          >
            Tech <span className="text-text-tertiary">Insights</span> & Development Tips
          </motion.h1>

          <motion.p
            variants={variants.fadeIn}
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

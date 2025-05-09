'use client';

import { motion } from 'framer-motion';
import { FaHashtag, FaRss } from 'react-icons/fa';

const BlogHero: React.FC = () => {
  const popularTags = [
    'React',
    'Next.js',
    'DevOps',
    'UI/UX',
    'JavaScript',
    'TypeScript',
    'Performance',
  ];

  return (
    <section className="overflow-hidden relative py-24 bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-100/20 to-indigo-100/20 dark:from-teal-900/20 dark:to-indigo-900/20" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl bg-teal-300/10 dark:bg-teal-600/10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl bg-indigo-300/10 dark:bg-indigo-600/10" />
      </div>

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
            <span className="inline-flex items-center px-4 py-1 text-sm font-medium tracking-wider text-indigo-700 bg-indigo-100 rounded-full dark:text-indigo-300 dark:bg-indigo-900/50">
              <FaRss className="mr-2" /> BLOG & INSIGHTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            Tech <span className="text-indigo-600 dark:text-indigo-400">Insights</span> &
            Development Tips
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

          {/* Popular Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex justify-center items-center mb-4 text-gray-700 dark:text-gray-300">
              <FaHashtag className="mr-2" />
              <h3 className="text-lg font-medium">Popular Topics</h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {popularTags.map((tag, index) => (
                <motion.a
                  key={tag}
                  href={`/blog/tag/${tag.toLowerCase()}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  #{tag}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;

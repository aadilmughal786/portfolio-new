'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa';
import { BlogPost } from '@/types/blogs/blogs.types';

interface FeaturedBlogsProps {
  blogs: BlogPost[];
}

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = ({ blogs }) => {
  const [visibleBlogs, setVisibleBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const updateVisibleBlogs = () => {
      const width = window.innerWidth;
      let limit = 3;
      if (width < 768) {
        limit = 2;
      } else if (width < 1024) {
        limit = 4;
      }
      setVisibleBlogs(blogs.slice(0, limit));
    };

    updateVisibleBlogs();
    window.addEventListener('resize', updateVisibleBlogs);
    return () => window.removeEventListener('resize', updateVisibleBlogs);
  }, [blogs]);

  return (
    <section id="featured-blogs" className="py-12 bg-gray-50 md:py-20 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Blogs</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-600 dark:text-gray-300 md:text-lg">
            Discover my latest articles sharing insights, tutorials, and industry knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center px-6 py-3 font-medium text-white bg-indigo-600 rounded-lg transition-colors duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            View All Blogs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const BlogCard: React.FC<{ blog: BlogPost; index: number }> = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const randomAngle = Math.random() * 12 - 6;
    controls.start({
      rotate: randomAngle,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      rotate: 0,
      scale: 1.02,
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    const randomAngle = Math.random() * 6 - 3;
    controls.start({
      rotate: randomAngle,
      scale: 1,
      transition: { duration: 0.3 },
    });
  };

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blogs/${blog.slug}`}>
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="overflow-hidden relative bg-white rounded-xl border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <div className="overflow-hidden relative aspect-video">
          <motion.div
            className="flex absolute inset-0 z-10 justify-center items-center bg-black bg-opacity-0 transition-all duration-300"
            animate={{
              backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)',
            }}
          >
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex space-x-4"
              >
                <FaBookOpen className="w-5 h-5 text-white" />
              </motion.div>
            )}
          </motion.div>

          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full"
          >
            <Image
              src={blog.coverImageUrl}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority={index < 2}
            />
          </motion.div>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-gray-900 md:text-xl dark:text-white">
              {blog.title}
            </h3>
          </div>

          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 md:text-base line-clamp-2">
            {blog.excerpt}
          </p>

          <div className="mb-4 text-xs text-gray-500 dark:text-gray-400">
            <span>By {blog.author}</span> • <span>{formattedDate}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {blog.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
            {blog.tags.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                +{blog.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default FeaturedBlogs;

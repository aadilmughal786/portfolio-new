'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa';
import { BlogPost } from '@/types/blogs/blogs.types';
import { FaAnglesRight } from 'react-icons/fa6';

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
    <section id="featured-blogs" className="py-12">
      <div className="container px-4 mx-auto">
        {/* Animated section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-text-tertiary/5 text-text-tertiary"
          >
            <span className="flex relative mr-1 w-3 h-3">
              <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
              <span className="inline-flex relative w-3 h-3 rounded-full bg-text-tertiary"></span>
            </span>
            My Articals
          </motion.div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Featured <span className="text-text-tertiary">Blogs</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-3xl text-base text-text-primary/80 md:text-lg"
          >
            Discover my latest articles sharing insights, tutorials, and industry knowledge.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blogs"
            className="inline-flex gap-2 items-center px-6 py-2 font-medium rounded-lg transition-all duration-300 bg-text-tertiary/10 text-text-tertiary hover:bg-text-tertiary/20"
          >
            View All Blogs
            <FaAnglesRight />
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

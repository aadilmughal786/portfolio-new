'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types/blogs/blogs.types';
import { FaAnglesRight } from 'react-icons/fa6';
import BlogCard from '../blogs/BlogCard';

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
      <div className="container px-8 mx-auto sm:px-16">
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

        <div className="grid grid-cols-1 gap-6 mx-auto max-w-5xl md:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map(blog => (
            <BlogCard key={blog.slug} blog={blog} />
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

export default FeaturedBlogs;

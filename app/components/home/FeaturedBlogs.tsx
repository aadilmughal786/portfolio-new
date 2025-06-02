'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types/blogs/blogs.types';
import BlogCard from '../blogs/BlogCard';
import SectionHeading from './SectionHeading';
import { Button } from './Hero';

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
        <SectionHeading badge="My Articles" title="Featured" highlightedTitle="Blogs">
          Dive into my latest articles sharing{' '}
          <span className="font-semibold text-text-tertiary">practical</span> insights and{' '}
          <span className="font-semibold text-text-tertiary">expert</span> tips on web development.
          Each piece reflects my commitment to{' '}
          <span className="font-semibold text-text-tertiary">clear</span> guidance and industry
          knowledge.
        </SectionHeading>

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
          <Button href="/blogs" primary={false}>
            View All Blogs
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;

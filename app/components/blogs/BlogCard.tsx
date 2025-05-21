'use client';

import { BlogPost } from '@/types/blogs/blogs.types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaCalendarAlt, FaEye, FaClock } from 'react-icons/fa';

const BlogCard: React.FC<{
  blog: BlogPost;
}> = ({ blog }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageVariants = {
    hover: {
      scale: 1.08,
      transition: { duration: 0.5 },
    },
    initial: {
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="overflow-hidden h-full rounded-xl border group bg-bg-primary border-border-primary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blogs/${blog.slug}`} className="flex flex-col h-full">
        <div className="overflow-hidden relative aspect-video">
          {/* Overlay with read icon */}
          <motion.div
            className="flex absolute inset-0 z-10 justify-center items-center bg-opacity-0"
            animate={{
              backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)',
            }}
          >
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 items-center px-4 py-2 rounded-full backdrop-blur-sm bg-bg-primary/90"
              >
                <FaEye className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Read Article</span>
              </motion.div>
            )}
          </motion.div>

          {/* Blog image */}
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate={isHovered ? 'hover' : 'initial'}
            className="relative w-full h-full"
          >
            <Image
              src={blog.coverImageUrl}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-col flex-grow p-6">
          {/* Reading time and date */}
          <div className="flex gap-4 mb-3 text-xs text-text-primary/70">
            <div className="flex gap-1 items-center">
              <FaCalendarAlt className="w-3 h-3" />
              <span>
                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            {blog.readingTime && (
              <div className="flex gap-1 items-center">
                <FaClock className="w-3 h-3" />
                <span>{Math.ceil(blog.content.length / 600)} min read</span>
              </div>
            )}
          </div>

          {/* Title with gradient hover effect */}
          <h3 className="mb-3 text-xl font-bold">{blog.title}</h3>

          <p className="text-text-primary/80 line-clamp-2">{blog.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;

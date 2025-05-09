import { BlogPost } from '@/types/blogs/blogs.types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaBookOpen } from 'react-icons/fa6';

const BlogCard: React.FC<{
  blog: BlogPost;
  index: number;
}> = ({ blog, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="overflow-hidden rounded-xl border shadow-lg bg-bg-primary border-border-primary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative aspect-video">
        <motion.div
          className="flex absolute inset-0 z-10 justify-center items-center bg-opacity-0 transition-all duration-300"
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

        {/* Project image */}
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index < 2}
          />
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-bold">{blog.title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">{blog.excerpt}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {blog.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {blog.tags.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
              +{blog.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;

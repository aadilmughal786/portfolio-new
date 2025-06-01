'use client';

import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { BlogPost } from '@/types/blogs/blogs.types';
import BlogCard from './BlogCard';
import SearchBar from '../projects/SearchBar';
import { Bird } from '../home/EndPage';
import { RiLoaderFill } from 'react-icons/ri';

interface BlogSearchProps {
  blogs: BlogPost[];
  itemsPerPage?: number;
}

const BlogSearch: React.FC<BlogSearchProps> = ({ blogs, itemsPerPage = 6 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedCount, setDisplayedCount] = useState(itemsPerPage);
  const [isLoading, setIsLoading] = useState(false);

  const popularTags = [
    'React',
    'Next.js',
    'DevOps',
    'UI/UX',
    'JavaScript',
    'TypeScript',
    'Performance',
  ];

  // Reset displayed count when search term changes
  useEffect(() => {
    setDisplayedCount(itemsPerPage);
  }, [searchTerm, itemsPerPage]);

  // Setup Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(blogs, {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'excerpt', weight: 1 },
        { name: 'tags', weight: 1.5 },
      ],
      threshold: 0.4,
      includeScore: true,
      ignoreLocation: true,
      useExtendedSearch: true,
    });
  }, [blogs]);

  // Get filtered blogs based on search term
  const filteredBlogs = useMemo(() => {
    if (!searchTerm.trim()) {
      return blogs;
    }

    const results = fuse.search(searchTerm);
    return results.map(result => result.item);
  }, [fuse, searchTerm, blogs]);

  // Get blogs to display (limited by displayedCount)
  const displayedBlogs = useMemo(() => {
    return filteredBlogs.slice(0, displayedCount);
  }, [filteredBlogs, displayedCount]);

  // Check if there are more blogs to load
  const hasMoreBlogs = displayedCount < filteredBlogs.length;

  // Load more blogs with fake delay
  const loadMoreBlogs = async () => {
    setIsLoading(true);
    // Fake 1 second delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setDisplayedCount(prev => prev + itemsPerPage);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col px-4 py-10 pt-16 mx-auto max-w-3xl sm:px-8 lg:px-16 md:max-w-4xl lg:max-w-6xl">
      {/* Search input */}
      <SearchBar onSearchChange={setSearchTerm} popularTags={popularTags} />

      {/* Blogs list */}
      <div className="pb-10 min-h-3/4">
        {displayedBlogs.length === 0 ? (
          <div className="flex flex-col items-center opacity-50">
            <Bird />
            <div className="p-4 mt-10 text-3xl text-center">No blogs found</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 gap-y-15 lg:grid-cols-3 md:grid-cols-2">
            {displayedBlogs.map(blog => (
              <BlogCard blog={blog} key={blog.slug} />
            ))}
          </div>
        )}
      </div>

      {/* Load More button */}
      {hasMoreBlogs && (
        <div className="flex justify-center py-8">
          <button
            onClick={loadMoreBlogs}
            disabled={isLoading}
            className={`px-3 py-1 font-medium text-white rounded transition-all duration-200 ${
              isLoading
                ? 'bg-text-tertiary/50'
                : 'cursor-pointer bg-text-tertiary/80 hover:bg-text-tertiary'
            }`}
          >
            {isLoading ? (
              <div className="flex gap-2 items-center">
                <RiLoaderFill size={18} className="animate-spin" />
                Loading
              </div>
            ) : (
              `Load More`
            )}
          </button>
        </div>
      )}

      {/* Show total count when all items are loaded */}
      {!hasMoreBlogs && filteredBlogs.length > 0 && (
        <div className="flex justify-center py-4">
          <p className="text-text-tertiary/70">
            Showing all {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogSearch;

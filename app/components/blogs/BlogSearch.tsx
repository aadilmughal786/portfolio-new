'use client';

import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { BlogPost } from '@/types/blogs/blogs.types';
import Link from 'next/link';

interface BlogSearchProps {
  blogs: BlogPost[];
  itemsPerPage?: number;
}

const BlogSearch: React.FC<BlogSearchProps> = ({ blogs, itemsPerPage = 6 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

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

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBlogs.slice(startIndex, endIndex);
  }, [filteredBlogs, currentPage, itemsPerPage]);

  // Navigate to previous page
  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  // Navigate to next page
  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  // Go to specific page
  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <div className="flex flex-col py-10">
      {/* Search input */}
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search blogs..."
          className="p-2 w-full rounded border-2 border-text-tertiary placeholder:text-text-mute md:w-1/2"
          aria-label="Search blogs"
        />
      </div>

      {/* Blogs list */}
      <div className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-3 md:grid-cols-2">
        {paginatedBlogs.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No blogs found</div>
        ) : (
          paginatedBlogs.map((blog, index) => (
            <Link
              href={`/blogs/${blog.slug}`}
              key={index}
              className="p-4 rounded border transition-shadow duration-200 cursor-pointer border-border-primary hover:shadow-md"
            >
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <div className="relative md:w-auto">
                  <div
                    className={`w-full h-40 rounded border md:w-full sm:w-80 border-border-primary`}
                    style={{
                      background: `url(${blog.coverImageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
                <div>
                  <div className="pb-2 font-semibold text-text-tertiary">{blog.title}</div>
                  <div className="text-sm line-clamp-2">{blog.excerpt}</div>
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="chip">
                          {tag}
                        </span>
                      ))}
                      {blog.tags.length > 3 && (
                        <span className="chip">+{blog.tags.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex gap-3 justify-between items-center py-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded ${
              currentPage === 1
                ? 'text-text-mute cursor-not-allowed'
                : 'cursor-pointer hover:bg-text-tertiary hover:text-white'
            }`}
          >
            Previous
          </button>

          {/* Page numbers */}
          <div className="flex gap-3">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show pages around current page
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`w-8 h-8 flex items-center justify-center rounded ${
                    currentPage === pageNum
                      ? 'bg-text-tertiary text-white cursor-not-allowed'
                      : 'border hover:bg-text-tertiary hover:text-white cursor-pointer'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded ${
              currentPage === totalPages
                ? 'text-text-mute cursor-not-allowed'
                : 'cursor-pointer hover:bg-text-tertiary hover:text-white'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogSearch;

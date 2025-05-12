import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillThunderbolt } from 'react-icons/ai';

interface SearchBarProps {
  onSearchChange: (term: string) => void;
  popularTags?: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange, popularTags = null }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center px-4 mb-20 w-full"
      >
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search projects..."
            className="py-2 pr-10 pl-5 w-full rounded-full border-2 backdrop-blur-sm transition-all duration-300 bg-bg-primary/10 border-text-tertiary/50 text-text-primary placeholder:text-text-mute focus:outline-none focus:ring-2 focus:ring-text-tertiary/20"
            aria-label="Search projects"
            id="search-bar"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="absolute right-3 top-1/2 rounded-full transition-colors duration-300 transform -translate-y-1/2 text-text-tertiary/70 focus:outline-none"
          >
            <AiFillThunderbolt size={26} />
          </motion.div>
        </div>
      </motion.div>

      {/* Popular Tags */}
      {popularTags && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="-mt-5 mb-15"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {popularTags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setSearchTerm(tag);
                  onSearchChange(tag);
                }}
              >
                <span className="inline-flex gap-2 items-center px-4 py-1 mb-3 text-sm font-medium tracking-wider rounded-full cursor-pointer bg-text-tertiary/5 text-text-tertiary">
                  <span className="flex relative w-2 h-2">
                    <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                    <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
                  </span>
                  {tag}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SearchBar;

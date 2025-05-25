'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaGoogleDrive } from 'react-icons/fa6';
import { downloadResumeData } from '@/data/resume/download-resume';
import { TResumeItem } from '@/types/resume/download-resume.types';

const DownloadResumeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const handleDownload = (item: TResumeItem) => {
    if (item.link && item.available) {
      window.open(item.link, '_blank');
    }
    setIsOpen(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="inline-block relative" ref={dropdownRef}>
      {/* Main Download Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex cursor-pointer gap-2 items-center px-4 py-1.5 font-medium  rounded-md transition-colors duration-300 text-white bg-text-tertiary/80 hover:bg-text-tertiary"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <FaGoogleDrive />
        Download Resume
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="overflow-y-auto absolute left-0 top-full z-20 mt-2 w-72 rounded-lg border shadow-lg backdrop-blur-sm border-border-primary bg-bg-primary/20"
          >
            {/* Download Options */}
            <div>
              {downloadResumeData.items.map(item => {
                const IconComponent = item.icon;
                const isDisabled = !item.available;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleDownload(item)}
                    disabled={isDisabled}
                    className={`
                      flex items-center justify-between group w-full px-4 py-3 text-left transition-colors duration-150
                      ${isDisabled ? 'opacity-50' : 'cursor-pointer hover:bg-text-tertiary/10'}
                    `}
                  >
                    <div className="flex flex-1 gap-3 items-center min-w-0">
                      <div
                        className={`
                        p-2 rounded-md transition-colors
                        ${isDisabled ? 'bg-text-mute' : 'bg-text-tertiary/20'}
                      `}
                      >
                        <IconComponent />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex gap-2 items-center mb-1">
                          <span
                            className={`
                            text-sm font-medium truncate
                            ${isDisabled && 'text-text-mute'}
                          `}
                          >
                            {item.type} Format
                          </span>
                          {item.tag && (
                            <span className="px-2 py-[2px] text-xs rounded-full bg-text-tertiary/5 text-text-tertiary">
                              {item.tag}
                            </span>
                          )}
                        </div>

                        {item.lastModified && (
                          <div className="text-xs text-text-mute">
                            Updated: {formatDate(item.lastModified)}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Download Icon */}
                    {!isDisabled && <FaDownload size={12} className="flex-shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DownloadResumeDropdown;

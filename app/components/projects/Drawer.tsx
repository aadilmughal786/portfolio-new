'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  position?: 'right' | 'left';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  size = 'md',
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Size maps for the drawer width
  const sizeClasses = {
    sm: 'max-w-xs',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full',
  };

  // Transform direction based on position
  const transformClass =
    position === 'right'
      ? `${isOpen ? 'translate-x-0' : 'translate-x-full'}`
      : `${isOpen ? 'translate-x-0' : '-translate-x-full'}`;

  // Position classes
  const positionClass = position === 'right' ? 'right-0' : 'left-0';

  // Handle clicking outside the drawer to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle ESC key to close the drawer
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 z-50 w-full h-full border shadow-lg transition-transform duration-300 ease-in-out transform border-border-primary bg-bg-primary ${positionClass} ${sizeClasses[size]} ${transformClass}`}
        aria-modal="true"
        role="dialog"
      >
        {/* Header */}
        <div className="flex sticky top-0 z-10 justify-between items-center px-5 pt-3 pb-4 border-b border-border-primary">
          <div className="flex gap-3 items-center font-semibold text-text-tertiary">
            <AiOutlineFundProjectionScreen size={22} /> {title}
          </div>
          <IoClose
            size={24}
            className="cursor-pointer hover:text-text-tertiary"
            onClick={onClose}
            aria-label="Close drawer"
          />
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100%-60px)]">{children}</div>
      </div>
    </>
  );
};

export default Drawer;

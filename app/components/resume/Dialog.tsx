"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { GrClose } from "react-icons/gr";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string | ReactNode;
  children: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Handle escape key to close
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscKey);
      // Prevent scrolling of the background when dialog is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center">
      {/* Backdrop with blur effect */}
      <div
        className="fixed inset-0 backdrop-blur-sm bg-black/30"
        aria-hidden="true"
      />

      <div className="p-4">
        {/* Dialog content */}
        <div
          ref={dialogRef}
          className={`relative z-10 w-full max-w-md rounded-lg border-2 shadow-xl bg-bg-primary border-border-primary`}
          role="dialog"
          aria-modal="true"
        >
          {/* Header with title and close button */}
          <div className="flex justify-between items-center p-4 border-b border-border-primary">
            {title && (
              <h3 className="text-lg font-medium text-text-tertiary">
                {title}
              </h3>
            )}
            <GrClose onClick={onClose} className="cursor-pointer" />
          </div>

          {/* Dialog body content */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;

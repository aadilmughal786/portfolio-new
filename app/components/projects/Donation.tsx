'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaHeart } from 'react-icons/fa';
import { MdQrCode2, MdClose } from 'react-icons/md';
import variants from '@/utils/motionVariants';
import { Bird } from '../home/EndPage';
import { developerInfo } from '@/data/dev-info';

// Define types for props
interface DonationButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'github';
}

// Optimized Bird component with string and swing animation
export const SwingingBird: React.FC = () => {
  // Swing animation for the bird
  const swingVariants = {
    swing: {
      rotate: [0, 15, -15, 10, -10, 5, -5, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut',
      },
    },
  };

  // String animation that follows the bird's movement
  const stringVariants = {
    swing: {
      skewX: [0, 5, -5, 3, -3, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-60">
        {/* The string attached to the top with visible joint */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bg-text-tertiary h-24 w-0.5 origin-top"
          variants={stringVariants}
          animate="swing"
        >
          {/* Joint at the bottom of string */}
          <div className="absolute -top-1 left-1/2 w-2 h-2 transform -translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-text-secondary" />
          </div>
        </motion.div>

        {/* The bird component at the end of the string */}
        <motion.div
          className="absolute top-24 left-1/2 transform -translate-x-1/2"
          variants={swingVariants}
          animate="swing"
        >
          <div className="w-30 h-30">
            <Bird />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Reusing Button component style from your HeroSection
const DonationButton: React.FC<DonationButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
}) => {
  const getButtonStyle = (): string => {
    switch (variant) {
      case 'primary':
        return 'text-white bg-text-tertiary/80 hover:bg-text-tertiary';
      case 'secondary':
        return 'bg-text-tertiary/10 text-text-tertiary hover:bg-text-tertiary/20';
      case 'github':
        return 'bg-gray-800 text-white hover:bg-gray-900';
      default:
        return 'text-white bg-text-tertiary/80 hover:bg-text-tertiary';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center px-4 py-1 font-medium rounded-md transition-colors duration-300 cursor-pointer ${getButtonStyle()}`}
    >
      {children}
    </button>
  );
};

interface DonationSectionProps {
  initialAnimationsActive?: boolean;
}

const DonationSection: React.FC<DonationSectionProps> = ({ initialAnimationsActive = true }) => {
  const [showQRModal, setShowQRModal] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [animationsActive, setAnimationsActive] = useState<boolean>(initialAnimationsActive);

  return (
    <section className="px-4 py-16 sm:px-8 lg:px-16 bg-bg-primary/5">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          animate={animationsActive ? 'visible' : 'hidden'}
          variants={variants.fadeInUp}
          className="flex relative flex-col gap-8 rounded-2xl border backdrop-blur-sm lg:flex-row border-border-primary bg-bg-primary/5"
        >
          <div className="h-48 lg:order-2">
            <motion.div
              variants={variants.fadeZoom}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <SwingingBird />
            </motion.div>
          </div>

          {/* Left side: Text content */}
          <div className="flex-1 p-6">
            <motion.div
              variants={variants.fadeInUp}
              transition={{ delay: 0.2 }}
              className="inline-flex gap-2 items-center px-4 py-1 mb-4 text-sm font-medium rounded-full bg-text-tertiary/10 text-text-tertiary"
            >
              <FaHeart className="text-text-tertiary" />
              Support My Work
            </motion.div>

            <motion.h2
              variants={variants.fadeInUp}
              transition={{ delay: 0.3 }}
              className="mb-4 text-2xl font-bold sm:text-3xl text-text-primary md:text-4xl"
            >
              Help Me Create <span className="text-text-tertiary">Impactful</span> Open Source
              Solutions
            </motion.h2>

            <motion.p
              variants={variants.fadeInUp}
              transition={{ delay: 0.4 }}
              className="mb-6 text-base sm:text-lg text-text-primary/80"
            >
              Your support enables me to dedicate more time to developing free, high-quality
              projects that help the developer community. Every contribution makes a difference.
            </motion.p>

            <motion.div
              variants={variants.fadeInUp}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <DonationButton onClick={() => setShowQRModal(true)}>
                <MdQrCode2 size={20} />
                Donate via UPI
              </DonationButton>
              <DonationButton
                onClick={() => window.open(developerInfo.github, '_blank')}
                variant="github"
              >
                <FaGithub size={20} />
                Sponsor on GitHub
              </DonationButton>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* UPI QR Code Modal */}
      {showQRModal && (
        <div className="flex fixed inset-0 z-50 justify-center items-center backdrop-blur-sm bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative p-4 mx-4 w-full max-w-md bg-white rounded-xl shadow-xl sm:p-6 dark:bg-gray-800"
          >
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full cursor-pointer hover:bg-text-tertiary/10"
            >
              <MdClose size={24} />
            </button>

            <div className="text-center">
              <h3 className="mb-4 text-xl font-bold sm:text-2xl">Support via UPI</h3>
              <p className="mb-4 text-sm sm:text-base text-text-primary/70">
                Scan this QR code with any UPI app to make a donation
              </p>

              <div className="flex justify-center items-center p-2 mx-auto mb-4 w-full max-w-xs rounded-lg border-2 aspect-square border-text-tertiary/30">
                {/* Replace with your actual UPI QR code */}
                <div className="relative w-full h-full">
                  <Image
                    src="/portfolio-new/images/projects/upi-qr.png"
                    alt="UPI QR Code"
                    fill
                    className="object-contain"
                    // Add a fallback placeholder in case the image is not available
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      (e.currentTarget as HTMLImageElement).src = '/api/placeholder/300/300';
                    }}
                  />
                </div>
              </div>

              <p className="mb-2 text-sm font-medium text-text-tertiary">
                {'aadilshe786@okhdfcbank'}
              </p>
              <p className="text-xs text-text-primary/60">Thank you for your support!</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default DonationSection;

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaHeart } from 'react-icons/fa';
import { MdQrCode2, MdContentCopy, MdCheck } from 'react-icons/md';
import variants from '@/utils/motionVariants';
import { Bird } from '../home/EndPage';
import { developerInfo } from '@/data/dev-info';
import Drawer from './Drawer'; // Import your existing Drawer component

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
  const [showQRDrawer, setShowQRDrawer] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [animationsActive] = useState<boolean>(initialAnimationsActive);

  const upiId = developerInfo.upiId;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

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
              <DonationButton onClick={() => setShowQRDrawer(true)}>
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

      {/* UPI QR Code Drawer */}
      <Drawer
        isOpen={showQRDrawer}
        onClose={() => setShowQRDrawer(false)}
        title="Support via UPI"
        icon={<MdQrCode2 size={20} />}
        position="right"
        size="md"
      >
        <div className="p-6">
          <div className="text-center">
            <p className="mb-6 text-base text-text-primary/70">
              Scan this QR code with any UPI app to make a donation
            </p>

            <div className="flex justify-center items-center p-4 mx-auto mb-6 w-full max-w-xs rounded-lg border-2 aspect-square border-text-tertiary/30">
              <div className="relative w-full h-full">
                <Image
                  src="/portfolio-new/images/projects/upi-qr.png"
                  alt="UPI QR Code"
                  fill
                  className="object-contain"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    (e.currentTarget as HTMLImageElement).src = '/api/placeholder/300/300';
                  }}
                />
              </div>
            </div>

            {/* UPI ID Copy Section */}
            <div className="flex justify-between items-center p-2 mb-4 rounded border bg-text-tertiary/10 border-text-tertiary/20">
              <div className="flex-1">
                <p className="font-mono text-sm font-medium break-all text-text-tertiary">
                  {upiId}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(developerInfo.upiId)}
                className={`flex gap-1 items-center px-3 py-2 ml-3 text-xs font-medium rounded transition-all duration-200 cursor-pointer bg-text-tertiary/20 text-text-tertiary hover:bg-text-tertiary/30`}
                disabled={isCopied}
              >
                {isCopied ? <MdCheck size={14} /> : <MdContentCopy size={14} />}
              </button>
            </div>

            <div className="p-3 mb-4 text-xs text-center text-text-primary/70">
              You can scan the QR code above or copy the UPI ID to use in your preferred UPI app
            </div>

            <div className="p-4">
              <p className="text-sm text-text-primary">
                Thank you for your support! Your contribution helps me continue building amazing
                open-source projects for the developer community.
              </p>
            </div>
          </div>
        </div>
      </Drawer>
    </section>
  );
};

export default DonationSection;

'use client';

import React, { JSX, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import variants from '@/utils/motionVariants';
import { FaCheckCircle } from 'react-icons/fa';
import { PiArchiveDuotone } from 'react-icons/pi';
import { RiProgress2Line } from 'react-icons/ri';

type ProjectStatus = 'active' | 'archived' | 'in-progress';

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

const ProjectStatusBadge: React.FC<ProjectStatusBadgeProps> = ({ status }) => {
  const [animationsActive, setAnimationsActive] = useState(false);

  useEffect(() => {
    // Trigger animations after component mount
    setAnimationsActive(true);
  }, []);

  // Enhanced status configurations with specific colors and labels
  const statusConfig: Record<
    ProjectStatus,
    {
      label: string;
      className: string;
      icon: JSX.Element;
    }
  > = {
    active: {
      label: 'Completed',
      className: 'bg-lime-400/10 text-lime-400 border-lime-400/10',
      icon: <FaCheckCircle />,
    },
    archived: {
      label: 'Archived',
      className: 'bg-gray-500/5 text-white border-gray-500/30',
      icon: <PiArchiveDuotone />,
    },
    'in-progress': {
      label: 'In Progress',
      className: 'bg-amber-300/20 text-amber-300 border-amber-300/30',
      icon: <RiProgress2Line className="animate-spin" />,
    },
  };

  const { label, className, icon } = statusConfig[status];

  return (
    <motion.span
      initial="hidden"
      animate={animationsActive ? 'visible' : 'hidden'}
      variants={variants.fadeInUp}
      transition={{ duration: 0.5 }}
      className={`inline-flex gap-2 items-center px-4 py-1 text-sm font-medium rounded-full border backdrop-blur-sm ${className}`}
      aria-label={`Project status: ${label}`}
    >
      {icon}
      {label}
    </motion.span>
  );
};

export default ProjectStatusBadge;

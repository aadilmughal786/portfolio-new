'use client';

// ProjectStatusBadge.tsx
import React from 'react';

type ProjectStatus = 'active' | 'archived' | 'in-progress';

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

const ProjectStatusBadge: React.FC<ProjectStatusBadgeProps> = ({ status }) => {
  // Status configurations with specific colors and labels
  const statusConfig: Record<
    ProjectStatus,
    {
      label: string;
      className: string;
    }
  > = {
    active: {
      label: 'Completed',
      className: 'bg-green-500/80 text-white',
    },
    archived: {
      label: 'Archived',
      className: 'bg-gray-500/80 text-white',
    },
    'in-progress': {
      label: 'WIP',
      className: 'bg-amber-500/80 text-white',
    },
  };

  const { label, className } = statusConfig[status];

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${className}`}
      aria-label={`Project status: ${label}`}
    >
      {label}
    </span>
  );
};

export default ProjectStatusBadge;

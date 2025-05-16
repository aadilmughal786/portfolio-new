'use client';

// ProjectCard.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { Project } from '@/types/projects/projects.types';
import ProjectStatusBadge from './ProjectStatusBadge';
import { FaInfo } from 'react-icons/fa6';

interface ProjectCardProps {
  project: Project;
  handleSelectProject?: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, handleSelectProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="overflow-hidden h-full rounded-xl border shadow-xs bg-bg-primary border-border-primary"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <div className="overflow-hidden relative aspect-video">
        {/* Status badge positioned absolutely on the image */}
        <div className="absolute top-3 right-3 z-20">
          <ProjectStatusBadge status={project.status} />
        </div>

        {/* Overlay on hover */}
        <motion.div
          className="flex absolute inset-0 z-10 justify-center items-center bg-opacity-0 transition-all duration-300"
          animate={{
            backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)',
          }}
        >
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              {handleSelectProject && (
                <button
                  onClick={() => handleSelectProject(project)}
                  className="flex justify-center items-center p-3 w-10 h-10 rounded-full transition-all cursor-pointer bg-white/10 text-white/80 hover:bg-white/20 hover:text-white hover:scale-110"
                >
                  <FaInfo className="w-5 h-5" />
                </button>
              )}

              {project.repoUrl && (
                <ProjectLink
                  href={project.repoUrl}
                  ariaLabel={`View ${project.title} source code on GitHub`}
                >
                  <FaGithub size={24} />
                </ProjectLink>
              )}

              {project.liveUrl && (
                <ProjectLink href={project.liveUrl} ariaLabel={`Visit ${project.title} live site`}>
                  <FaExternalLinkAlt size={18} />
                </ProjectLink>
              )}

              {project.caseStudySlug && (
                <ProjectLink
                  href={`/case-study/${project.caseStudySlug}`}
                  ariaLabel={`Read ${project.title} case study`}
                  isInternal
                >
                  <FaBookOpen size={20} />
                </ProjectLink>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Project image */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full"
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </motion.div>
      </div>

      <div className="p-5">
        <h3 className="mb-3 text-lg font-bold text-text-primary md:text-xl">{project.title}</h3>

        <p className="mb-4 text-sm text-text-primary/70 md:text-base line-clamp-2">
          {project.description}
        </p>

        <Tags tags={project.tags} />
      </div>
    </motion.div>
  );
};

// Helper component for project links
interface ProjectLinkProps {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
  isInternal?: boolean;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({
  href,
  children,
  ariaLabel,
  isInternal = false,
}) => (
  <Link
    href={href}
    target={isInternal ? undefined : '_blank'}
    rel={isInternal ? undefined : 'noopener noreferrer'}
    className="flex justify-center items-center p-3 w-10 h-10 rounded-full transition-all bg-white/10 text-white/80 hover:bg-white/20 hover:text-white hover:scale-110"
    aria-label={ariaLabel}
  >
    {children}
  </Link>
);

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.slice(0, 4).map((tag, i) => (
      <span
        key={i}
        className="px-2 py-1 text-xs font-medium rounded-full bg-text-tertiary/5 text-text-tertiary"
      >
        {tag}
      </span>
    ))}
    {tags.length > 4 && (
      <span className="px-2 py-1 text-xs font-medium rounded-full bg-text-tertiary/5 text-text-tertiary">
        +{tags.length - 4}
      </span>
    )}
  </div>
);

export default ProjectCard;

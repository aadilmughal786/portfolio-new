'use client';

import React, { useEffect, useState } from 'react';
import { TProject } from '@/types/projects/projects.types';
import { FaBookOpen, FaGithub, FaStar } from 'react-icons/fa6';
import { TbExternalLink } from 'react-icons/tb';
import { navBarData } from '@/data/nav-bar';
import RepoDetails from './RepoDetails';
import Link from 'next/link';
import ProjectStatusBadge from './ProjectStatusBadge';
import Image from 'next/image';

interface ProjectDetailsProps {
  project: TProject;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [repoName, setRepoName] = useState(project.repoName);

  useEffect(() => {
    setRepoName(project.repoName);
  }, [project]);

  return (
    <div className="flex flex-col min-h-full">
      {/* Project content */}
      <div className="flex-1 p-6">
        <div className="flex-1">
          <div className="overflow-hidden relative w-full rounded aspect-video">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />

            {/* Status badge positioned absolutely on the image */}
            <div className="absolute top-3 right-3 z-20">
              <ProjectStatusBadge status={project.status} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center py-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="flex gap-2 items-center px-2 py-1 text-sm font-medium text-white rounded transition-colors bg-text-tertiary/80 hover:bg-text-tertiary"
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub Repository"
            >
              <FaGithub size={16} />
              <span>GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="flex gap-2 items-center px-2 py-1 text-sm font-medium text-white rounded transition-colors bg-text-tertiary/80 hover:bg-text-tertiary"
              target="_blank"
              rel="noreferrer"
              aria-label="View Live Demo"
            >
              <TbExternalLink size={16} />
              <span>Try It Now</span>
            </a>
          )}

          {project.caseStudySlug && (
            <Link
              href={project.caseStudySlug}
              className="flex gap-2 items-center px-2 py-1 text-sm font-medium text-white rounded transition-colors bg-text-tertiary/80 hover:bg-text-tertiary"
              aria-label="Read Case Study"
            >
              <FaBookOpen size={16} />
              <span>Case Study</span>
            </Link>
          )}
        </div>

        {/* Project description */}
        <div className="pt-2 mb-6">
          <p>{project.description}</p>
        </div>

        {/* Tags */}
        <div className="mb-6 text-text-tertiary">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded bg-text-tertiary/5 text-text-tertiary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Additional information */}
        <div className="pt-4 border-t border-border-primary">
          <h3 className="mb-2 text-lg font-semibold">Live GitHub Repository Details</h3>
          <RepoDetails repoName={repoName ? repoName : 'portfolio-new'} />
        </div>
      </div>

      {/* Footer with actions */}
      <div className="p-4 pl-6 mt-auto border-t border-border-primary">
        {/* socail site icons */}
        <div className="flex gap-4 py-4">
          {navBarData.socialLinks.map(({ icon: Icon, id, link }) => (
            <a key={id} href={link} target="_blank" rel="noreferrer">
              <Icon className="icon" />
            </a>
          ))}
        </div>

        <div>
          Don’t forget to leave a{' '}
          <span className="flip">
            <FaStar className="text-yellow-500" />
          </span>{' '}
          on GitHub and follow for more updates!
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

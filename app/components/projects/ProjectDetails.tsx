'use client';

import React, { useEffect, useState } from 'react';
import { Project } from '@/types/projects/projects.types';
import { TiStarburst } from 'react-icons/ti';
import { statusStyles } from '@/utils/colors';
import { FaGithub } from 'react-icons/fa6';
import { TbExternalLink } from 'react-icons/tb';
import { navBarData } from '@/data/nav-bar';
import RepoDetails from './RepoDetails';

interface ProjectDetailsProps {
  project: Project;
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
        <div
          className="mb-4 w-full h-48 bg-center bg-cover rounded"
          style={{
            background: `url(${project.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Status badge */}
        <div className="flex justify-between items-center mb-4">
          <span
            className={`px-3 py-1 rounded text-sm font-medium inline-flex gap-1 items-center ${statusStyles[project.status]}`}
          >
            <TiStarburst /> {project.status}
          </span>
          <a href={project.repoUrl} className="link">
            <FaGithub size={20} />
          </a>
        </div>
        {(project.liveUrl || project.caseStudySlug) && (
          <div className="flex gap-3 items-center py-3 border-t border-b border-border-primary">
            {project.liveUrl && (
              <a href={project.liveUrl} className="flex gap-1 items-center link chip">
                Try It Now
                <TbExternalLink className="-mt-[3px] ml-1 inline-block sm:ml-0" size={16} />
              </a>
            )}
            {project.caseStudySlug && (
              <a href={project.caseStudySlug} className="flex gap-1 items-center link chip">
                Case Study
                <TbExternalLink className="-mt-[3px] ml-1 inline-block sm:ml-0" size={16} />
              </a>
            )}
          </div>
        )}

        {/* Project description */}
        <div className="pt-2 mb-6">
          <h3 className="mb-2 text-lg font-semibold text-text-tertiary">Description</h3>
          <p>
            {project.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            error voluptatem ullam explicabo repellat beatae odio eos illo atque voluptates animi
            placeat quod libero, excepturi autem maxime ratione dignissimos eligendi?
          </p>
        </div>

        {/* Tags */}
        <div className="mb-6 text-text-tertiary">
          <h3 className="mb-2 text-lg font-semibold">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span key={index} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Additional information */}
        <div className="pt-4 border-t border-border-primary">
          <h3 className="mb-2 text-lg font-semibold text-text-tertiary">
            Live GitHub Repository Details
          </h3>
          <RepoDetails repoName={repoName ? repoName : 'portfolio-new'} />
        </div>
      </div>

      {/* Footer with actions */}
      <div className="p-4 mt-auto border-t border-border-primary">
        {/* socail site icons */}
        <div className="flex gap-4 py-4">
          {navBarData.socialLinks.map(({ icon: Icon, id, link }) => (
            <a key={id} href={link} target="_blank" rel="noreferrer">
              <Icon className="icon" />
            </a>
          ))}
        </div>

        <div>
          Don’t forget to leave a <span className="flip">⭐</span> on GitHub and follow for more
          updates!
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

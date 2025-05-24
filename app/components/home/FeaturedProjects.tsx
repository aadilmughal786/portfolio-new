'use client';

// FeaturedProjects.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TProject } from '@/types/projects/projects.types';
import ProjectCard from '../projects/ProjectCard';
import SectionHeading from './SectionHeading';
import { Button } from './Hero';

interface FeaturedProjectsProps {
  projects: TProject[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  // Filter active projects and limit based on screen size
  const [visibleProjects, setVisibleProjects] = useState<TProject[]>([]);

  useEffect(() => {
    const updateVisibleProjects = () => {
      const width = window.innerWidth;
      let limit = 3; // Default for large screens
      if (width < 768) {
        limit = 2; // Small screens
      } else if (width < 1024) {
        limit = 4; // Medium screens
      }
      setVisibleProjects(projects.slice(0, limit));
    };

    updateVisibleProjects();
    window.addEventListener('resize', updateVisibleProjects);
    return () => window.removeEventListener('resize', updateVisibleProjects);
  }, [projects]);

  return (
    <section id="featured-projects" className="py-12">
      <div className="container px-8 mx-auto sm:px-16">
        <SectionHeading badge="My Work" title="Featured" highlightedTitle="Projects">
          Discover my recent projects showcasing{' '}
          <span className="font-semibold text-text-tertiary">creative</span> solutions and{' '}
          <span className="font-semibold text-text-tertiary">technical</span> expertise. Each work
          reflects a commitment to{' '}
          <span className="font-semibold text-text-tertiary">user-friendly</span> design and
          reliable performance.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-6 mx-auto max-w-5xl md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Button href="/projects" primary={false}>
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

'use client';

// FeaturedProjects.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaAnglesRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Project } from '@/types/projects/projects.types';
import ProjectCard from '../projects/ProjectCard';
import SectionHeading from './SectionHeading';

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  // Filter active projects and limit based on screen size
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);

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
      <div className="container px-4 mx-auto">
        <SectionHeading badge="My Work" title="Featured" highlightedTitle="Projects">
          Explore my latest projects that demonstrate innovative solutions and technical expertise.
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
          <Link
            href="/projects"
            className="inline-flex gap-2 items-center px-6 py-2 font-medium rounded-lg transition-all duration-300 bg-text-tertiary/10 text-text-tertiary hover:bg-text-tertiary/20"
            aria-label="View all projects"
          >
            View All Projects
            <FaAnglesRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

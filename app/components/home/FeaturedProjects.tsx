'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { Project } from '@/types/projects/projects.types';
import { FaAnglesRight } from 'react-icons/fa6';

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
      setVisibleProjects(projects.filter(project => project.status === 'active').slice(0, limit));
    };

    updateVisibleProjects();
    window.addEventListener('resize', updateVisibleProjects);
    return () => window.removeEventListener('resize', updateVisibleProjects);
  }, [projects]);

  return (
    <section id="featured-projects" className="pt-12 pb-24">
      <div className="container px-4 mx-auto">
        {/* Animated section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-text-tertiary/5 text-text-tertiary"
          >
            <span className="flex relative mr-1 w-3 h-3">
              <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
              <span className="inline-flex relative w-3 h-3 rounded-full bg-text-tertiary"></span>
            </span>
            My Work
          </motion.div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Featured <span className="text-text-tertiary">Projects</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-3xl text-base text-text-primary/80 md:text-lg"
          >
            Explore my latest projects that demonstrate innovative solutions and technical
            expertise.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 mx-auto max-w-4xl md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex gap-2 items-center px-6 py-2 font-medium rounded-lg transition-all duration-300 bg-text-tertiary/10 text-text-tertiary hover:bg-text-tertiary/20"
          >
            View All Projects
            <FaAnglesRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Generate random tilt angle on mount
  useEffect(() => {
    const randomAngle = Math.random() * 12 - 6; // Random angle between -3 and 3 degrees
    controls.start({
      rotate: randomAngle,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  // Handle hover to straighten card
  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      rotate: 0,
      scale: 1.02,
      transition: { duration: 0.3 },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    const randomAngle = Math.random() * 6 - 3;
    controls.start({
      rotate: randomAngle,
      scale: 1,
      transition: { duration: 0.3 },
    });
  };

  // Status badge styling - using the tertiary color scheme consistently
  const statusStyles = {
    active: 'bg-text-tertiary/10 text-text-tertiary',
    archived: 'bg-text-tertiary/5 text-text-primary/70',
    'in-progress': 'bg-text-tertiary/15 text-text-tertiary/90',
  };

  return (
    <motion.div
      animate={controls}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="overflow-hidden relative bg-white rounded-xl border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <div className="overflow-hidden relative aspect-video">
        {/* Overlay on hover */}
        <motion.div
          className="flex absolute inset-0 z-10 justify-center items-center bg-black bg-opacity-0 transition-all duration-300"
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
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-1 rounded-full transition-all text-white/80 hover:text-white"
              >
                <FaGithub size={28} />
              </Link>

              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center p-3 rounded-full transition-all text-white/80 hover:text-white"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </Link>
              )}

              {project.caseStudySlug && (
                <Link
                  href={`/${project.caseStudySlug}`}
                  className="flex justify-center items-center p-3 rounded-full transition-all text-white/80 hover:text-white"
                >
                  <FaBookOpen className="w-5 h-5" />
                </Link>
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
            priority={index < 2}
          />
        </motion.div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-text-primary md:text-xl">{project.title}</h3>
          <span
            className={`text-xs px-2 py-1 rounded-full capitalize ${statusStyles[project.status]}`}
          >
            {project.status.replace('-', ' ')}
          </span>
        </div>

        <p className="mb-4 text-sm text-text-primary/70 md:text-base line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium rounded-full bg-text-tertiary/5 text-text-tertiary"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-text-tertiary/5 text-text-tertiary">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;

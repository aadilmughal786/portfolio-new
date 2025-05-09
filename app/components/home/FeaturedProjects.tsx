'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { Project } from '@/types/projects/projects.types';

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
    <section id="featured-projects" className="py-12 bg-gray-50 md:py-20 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-600 dark:text-gray-300 md:text-lg">
            Explore my latest projects that demonstrate innovative solutions and technical
            expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 font-medium text-white bg-indigo-600 rounded-lg transition-colors duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
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

  // Status badge styling
  const statusStyles = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    archived: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
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
              className="flex space-x-4"
            >
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-3 text-white bg-indigo-600 rounded-full transition-all hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <FaGithub className="w-5 h-5" />
              </Link>

              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center p-3 text-white bg-indigo-600 rounded-full transition-all hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </Link>
              )}

              {project.caseStudySlug && (
                <Link
                  href={`/${project.caseStudySlug}`}
                  className="flex justify-center items-center p-3 text-white bg-indigo-600 rounded-full transition-all hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
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
          <h3 className="text-lg font-bold text-gray-900 md:text-xl dark:text-white">
            {project.title}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded-full capitalize ${statusStyles[project.status]}`}
          >
            {project.status.replace('-', ' ')}
          </span>
        </div>

        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 md:text-base line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjects;

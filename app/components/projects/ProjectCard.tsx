import { Project } from '@/types/projects/projects.types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaBookOpen, FaGithub, FaInfo } from 'react-icons/fa6';

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  handleSelectProject: (project: Project) => void;
}> = ({ project, index, handleSelectProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Status badge styling
  const statusStyles = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    archived: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  };

  return (
    <motion.div
      className="overflow-hidden rounded-xl border shadow-lg bg-bg-primary border-border-primary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative aspect-video">
        {/* Project image with overlay */}
        <motion.div
          className="flex absolute inset-0 z-10 justify-center items-center bg-opacity-0 transition-all duration-300"
          animate={{
            backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
          }}
        >
          {/* Links that appear on hover */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex space-x-4"
            >
              <button
                onClick={() => handleSelectProject(project)}
                className="flex justify-center items-center p-3 text-white rounded-full transition-all cursor-pointer bg-text-tertiary hover:bg-opacity-90"
              >
                <FaInfo className="w-5 h-5" />
              </button>

              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center p-3 text-white rounded-full transition-all bg-text-tertiary hover:bg-opacity-90"
              >
                <FaGithub className="w-5 h-5" />
              </Link>

              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center p-3 text-white rounded-full transition-all bg-text-tertiary hover:bg-opacity-90"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </Link>
              )}

              {project.caseStudySlug && (
                <Link
                  href={`/${project.caseStudySlug}`}
                  className="flex justify-center items-center p-3 text-white rounded-full transition-all bg-text-tertiary hover:bg-opacity-90"
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={index < 2}
          />
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${statusStyles[project.status]}`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>

        <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

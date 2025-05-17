'use client';

import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { TProject } from '@/types/projects/projects.types';
import Drawer from './Drawer';
import ProjectDetails from './ProjectDetails';
import ProjectCard from '@/components/projects/ProjectCard';
import SearchBar from './SearchBar';
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import { Bird } from '../home/EndPage';

interface ProjectSearchProps {
  projects: TProject[];
  itemsPerPage?: number;
  onSelectProject?: (project: TProject) => void;
}

const ProjectSearch: React.FC<ProjectSearchProps> = ({
  projects,
  itemsPerPage = 6,
  onSelectProject,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Setup Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(projects, {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'description', weight: 1 },
        { name: 'tags', weight: 1.5 },
        { name: 'status', weight: 2 },
        { name: 'type', weight: 2 },
      ],
      threshold: 0.4,
      includeScore: true,
      ignoreLocation: true,
      useExtendedSearch: true,
    });
  }, [projects]);

  // Get filtered projects based on search term
  const filteredProjects = useMemo(() => {
    if (!searchTerm.trim()) {
      return projects;
    }

    const results = fuse.search(searchTerm);
    return results.map(result => result.item);
  }, [fuse, searchTerm, projects]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage, itemsPerPage]);

  // Handle project selection
  const handleSelectProject = (project: TProject) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);

    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  // Close drawer
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Navigate to previous page
  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  // Navigate to next page
  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  // Go to specific page
  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <div className="flex flex-col px-4 py-10 pt-16 mx-auto max-w-3xl sm:px-8 lg:px-16 md:max-w-4xl lg:max-w-6xl">
      {/* Search input */}
      <SearchBar onSearchChange={setSearchTerm} />

      {/* Project list */}
      <div className="container pb-10 mx-auto min-h-3/4">
        {paginatedProjects.length === 0 ? (
          <div className="flex flex-col items-center opacity-50">
            <Bird />
            <div className="p-4 mt-10 text-3xl text-center">No projects found</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 gap-y-15 lg:grid-cols-3 md:grid-cols-2">
            {paginatedProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                handleSelectProject={handleSelectProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex gap-3 justify-between items-center py-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`flex gap-2 items-center px-3 py-1 font-medium text-white rounded-md bg-text-tertiary/80 ${
              currentPage === 1 ? 'opacity-50' : 'cursor-pointer hover:bg-text-tertiary'
            }`}
          >
            <FaAnglesLeft />
            Previous
          </button>

          {/* Page numbers */}
          <div className="flex gap-3">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show pages around current page
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md font-medium cursor-pointer ${
                    currentPage === pageNum
                      ? 'text-white bg-text-tertiary/80 hover:bg-text-tertiary'
                      : 'bg-text-tertiary/20 text-text-tertiary hover:bg-text-tertiary/20'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`flex gap-2 items-center px-3 py-1 font-medium text-white rounded-md bg-text-tertiary/80 hover:bg-text-tertiary ${
              currentPage === totalPages ? 'opacity-50' : 'cursor-pointer hover:bg-text-tertiary'
            }`}
          >
            Next <FaAnglesRight />
          </button>
        </div>
      )}

      {/* Project Drawer */}
      {selectedProject && (
        <Drawer
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          title={selectedProject.title}
          size="md"
          position="right"
        >
          <ProjectDetails project={selectedProject} />
        </Drawer>
      )}
    </div>
  );
};

export default ProjectSearch;

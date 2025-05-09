'use client';

import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { Project } from '@/types/projects/projects.types';
import Drawer from './Drawer';
import ProjectDetails from './ProjectDetails';
import ProjectCard from '@/components/projects/ProjectCard';

interface ProjectSearchProps {
  projects: Project[];
  itemsPerPage?: number;
  onSelectProject?: (project: Project) => void;
}

const ProjectSearch: React.FC<ProjectSearchProps> = ({
  projects,
  itemsPerPage = 6,
  onSelectProject,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
  const handleSelectProject = (project: Project) => {
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
    <div className="flex flex-col py-10">
      {/* Search input */}
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search projects..."
          className="p-2 w-full rounded border-2 border-text-tertiary placeholder:text-text-mute md:w-1/2"
          aria-label="Search projects"
        />
      </div>

      {/* Project list */}
      <div className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-3 md:grid-cols-2">
        {paginatedProjects.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No projects found</div>
        ) : (
          paginatedProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              index={project.id}
              handleSelectProject={handleSelectProject}
            />
          ))
        )}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex gap-3 justify-between items-center py-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded ${
              currentPage === 1
                ? 'text-text-mute cursor-not-allowed'
                : 'cursor-pointer hover:bg-text-tertiary hover:text-white'
            }`}
          >
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
                  className={`w-8 h-8 flex items-center justify-center rounded ${
                    currentPage === pageNum
                      ? 'bg-text-tertiary text-white cursor-not-allowed'
                      : 'border hover:bg-text-tertiary hover:text-white cursor-pointer'
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
            className={`px-3 py-1 border rounded ${
              currentPage === totalPages
                ? 'text-text-mute cursor-not-allowed'
                : 'cursor-pointer hover:bg-text-tertiary hover:text-white'
            }`}
          >
            Next
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

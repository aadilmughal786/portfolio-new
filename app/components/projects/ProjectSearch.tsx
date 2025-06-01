'use client';

import { useState, useMemo, useEffect } from 'react';
import Fuse from 'fuse.js';
import { TProject } from '@/types/projects/projects.types';
import Drawer from './Drawer';
import ProjectDetails from './ProjectDetails';
import ProjectCard from '@/components/projects/ProjectCard';
import SearchBar from './SearchBar';
import { Bird } from '../home/EndPage';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiLoaderFill } from 'react-icons/ri';

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
  const [displayedCount, setDisplayedCount] = useState(itemsPerPage);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Reset displayed count when search term changes
  useEffect(() => {
    setDisplayedCount(itemsPerPage);
  }, [searchTerm, itemsPerPage]);

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

  // Get projects to display (limited by displayedCount)
  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, displayedCount);
  }, [filteredProjects, displayedCount]);

  // Check if there are more projects to load
  const hasMoreProjects = displayedCount < filteredProjects.length;

  // Load more projects with fake delay
  const loadMoreProjects = async () => {
    setIsLoading(true);
    // Fake 1 second delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setDisplayedCount(prev => prev + itemsPerPage);
    setIsLoading(false);
  };

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

  return (
    <div className="flex flex-col px-4 py-10 pt-16 mx-auto max-w-3xl sm:px-8 lg:px-16 md:max-w-4xl lg:max-w-6xl">
      {/* Search input */}
      <SearchBar onSearchChange={setSearchTerm} />

      {/* Project list */}
      <div className="container pb-10 mx-auto min-h-3/4">
        {displayedProjects.length === 0 ? (
          <div className="flex flex-col items-center opacity-50">
            <Bird />
            <div className="p-4 mt-10 text-3xl text-center">No projects found</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 gap-y-15 lg:grid-cols-3 md:grid-cols-2">
            {displayedProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                handleSelectProject={handleSelectProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* Load More button */}
      {hasMoreProjects && (
        <div className="flex justify-center py-8">
          <button
            onClick={loadMoreProjects}
            disabled={isLoading}
            className={`px-3 py-1 font-medium text-white rounded transition-all duration-200 ${
              isLoading
                ? 'bg-text-tertiary/50'
                : 'cursor-pointer bg-text-tertiary/80 hover:bg-text-tertiary'
            }`}
          >
            {isLoading ? (
              <div className="flex gap-2 items-center">
                <RiLoaderFill size={18} className="animate-spin" />
                Loading
              </div>
            ) : (
              `Load More`
            )}
          </button>
        </div>
      )}

      {/* Show total count when all items are loaded */}
      {!hasMoreProjects && filteredProjects.length > 0 && (
        <div className="flex justify-center py-4">
          <p className="text-text-tertiary/70">
            Showing all {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
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
          icon={<AiOutlineFundProjectionScreen size={22} />}
        >
          <ProjectDetails project={selectedProject} />
        </Drawer>
      )}
    </div>
  );
};

export default ProjectSearch;

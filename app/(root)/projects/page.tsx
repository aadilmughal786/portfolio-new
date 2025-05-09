import ProjectsHero from '@/components/projects/Hero';
import ProjectSearch from '@/components/projects/ProjectSearch';
import { projectsData } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Aadil',
  description: 'Portfolio Website',
};

export default function Home() {
  return (
    <div className="relative px-4 pt-16 sm:px-8 lg:px-16">
      <ProjectsHero />
      <ProjectSearch projects={projectsData} />
    </div>
  );
}

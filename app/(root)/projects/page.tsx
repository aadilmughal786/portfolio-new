import DonationSection from '@/components/projects/Donation';
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
    <div>
      <ProjectsHero />
      <ProjectSearch projects={projectsData} />
      <DonationSection />
    </div>
  );
}

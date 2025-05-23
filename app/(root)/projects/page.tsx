import DonationSection from '@/components/projects/Donation';
import ProjectsHero from '@/components/projects/Hero';
import ProjectSearch from '@/components/projects/ProjectSearch';
import { projectsData } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore a portfolio of projects by Aadil Mughal, showcasing expertise in web development, programming, and creative problem-solving.',

  openGraph: {
    title: 'Projects | Aadil Mughal Portfolio',
    description:
      'Explore a portfolio of projects by Aadil Mughal, showcasing expertise in web development, programming, and creative problem-solving.',
  },
  twitter: {
    title: 'Projects | Aadil Mughal Portfolio',
    description:
      'Explore a portfolio of projects by Aadil Mughal, showcasing expertise in web development, programming, and creative problem-solving.',
  },
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

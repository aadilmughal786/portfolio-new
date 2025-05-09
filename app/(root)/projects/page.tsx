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
      <div>
        <h1 className="text-4xl font-semibold text-center text-text-tertiary">
          {"Things I've made trying to put my dent in the universe."}
        </h1>
        <p className="py-4">
          {`I've built a variety of projects over the years — some experimental, some practical — each
          one a step forward in my journey as a creator. Below are a few that I'm especially proud
          of. Many are open-source, so if something sparks your interest, dive into the code or
          contribute — I'd love to hear your ideas and collaborate on making them even better.`}
        </p>
      </div>
      <ProjectSearch projects={projectsData} />
    </div>
  );
}

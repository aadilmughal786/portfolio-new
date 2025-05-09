import FeaturedBlogs from '@/components/home/FeaturedBlogs';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Service from '@/components/home/Service';
import { projectsData } from '@/data/projects';
import { getAllPosts } from '@/lib/mdx';
import type { Metadata } from 'next';
import path from 'path';

const BLOGS_DIRECTORY = path.join(process.cwd(), '/app/data/blogs/mdx/');

export const metadata: Metadata = {
  title: 'Home - Aadil',
  description: 'Portfolio Website',
};

export default function Home() {
  const posts = getAllPosts(BLOGS_DIRECTORY);

  return (
    <>
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
      </div>
      <div>
        <FeaturedProjects projects={projectsData} />
      </div>
      <div className="relative pt-16 sm:px-8 lg:px-16">
        <Service />
      </div>
      <div>
        <FeaturedBlogs blogs={posts} />
      </div>
    </>
  );
}

import AboutMe from '@/components/home/AboutMe';
import FeaturedBlogs from '@/components/home/FeaturedBlogs';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Hero from '@/components/home/Hero';
import Service from '@/components/home/Service';
import Stats from '@/components/home/Stats';
import TechStack from '@/components/home/TechCategory';
import Testimonials from '@/components/home/Testimonials';
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
        <Hero />
      </div>
      <div className="relative pt-16 sm:px-8 lg:px-16">
        <AboutMe />
      </div>
      <div className="relative pt-16 sm:px-8 lg:px-16">
        <TechStack />
      </div>
      <div className="relative pt-16 sm:px-8 lg:px-16">
        <FeaturedProjects projects={projectsData} />
      </div>
      <div className="relative pt-16 sm:px-8 lg:px-16">
        <Service />
      </div>
      <div className="relative pt-16 sm:px-8 lg:px-16">
        <Testimonials />
        <FeaturedBlogs blogs={posts} />
        <Stats />
      </div>
    </>
  );
}

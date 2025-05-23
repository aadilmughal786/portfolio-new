import AboutMe from '@/components/home/AboutMe';
import FeaturedBlogs from '@/components/home/FeaturedBlogs';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Hero from '@/components/home/Hero';
import Service from '@/components/home/Service';
import EndPage from '@/components/home/EndPage';
import Stats from '@/components/home/Stats';
import TechStack from '@/components/home/TechCategory';
import Testimonials from '@/components/home/Testimonials';
import { projectsData } from '@/data/projects';
import { getAllPosts } from '@/lib/mdx';
import path from 'path';

const BLOGS_DIRECTORY = path.join(process.cwd(), '/app/data/blogs/mdx/');

export default function Home() {
  const posts = getAllPosts(BLOGS_DIRECTORY);

  return (
    <>
      <Hero />
      <AboutMe />
      <Stats />
      <FeaturedProjects projects={projectsData} />
      <TechStack />
      <Service />
      <Testimonials />
      <FeaturedBlogs blogs={posts} />
      <EndPage />
    </>
  );
}

import BlogSearch from '@/components/blogs/BlogSearch';
import BlogHero from '@/components/blogs/Hero';
import { getAllPosts } from '@/lib/mdx';
import { Metadata } from 'next';
import path from 'path';

const BLOGS_DIRECTORY = path.join(process.cwd(), '/app/data/blogs/mdx/');

export const metadata: Metadata = {
  title: 'Blogs - Aadil',
  description: 'Portfolio Website',
};

export default function GitHubDashboard() {
  const posts = getAllPosts(BLOGS_DIRECTORY);

  return (
    <main className="container px-4 py-8 mx-auto">
      <BlogHero />
      <BlogSearch blogs={posts} />
    </main>
  );
}

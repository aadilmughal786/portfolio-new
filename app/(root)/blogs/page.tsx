import AuthorBio from '@/components/blogs/AuthorBio';
import BlogSearch from '@/components/blogs/BlogSearch';
import BlogHero from '@/components/blogs/Hero';
import { getAllPosts } from '@/lib/mdx';
import { Metadata } from 'next';
import path from 'path';

const BLOGS_DIRECTORY = path.join(process.cwd(), '/app/data/blogs/mdx/');

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    'Read insightful articles, tutorials, and updates from Aadil Mughal’s blog on technology, programming, and the web development industry.',

  openGraph: {
    title: 'Blogs | Aadil Mughal Portfolio',
    description:
      'Read insightful articles, tutorials, and updates from Aadil Mughal’s blog on technology, programming, and the web development industry.',
  },
  twitter: {
    title: 'Blogs | Aadil Mughal Portfolio',
    description:
      'Read insightful articles, tutorials, and updates from Aadil Mughal’s blog on technology, programming, and the web development industry.',
  },
};

export default function GitHubDashboard() {
  const posts = getAllPosts(BLOGS_DIRECTORY);

  return (
    <main className="container px-4 py-8 mx-auto">
      <BlogHero />
      <BlogSearch blogs={posts} />
      <AuthorBio />
    </main>
  );
}

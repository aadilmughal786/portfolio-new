import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blogs/blogs.types';

export function getAllPostSlugs(postsDir: string): string[] {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map(fileName => fileName.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string, postsDir: string): BlogPost {
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const frontmatter = data as BlogPost;

  return {
    slug,
    content,
    author: frontmatter.author || 'Aadil Mugal',
    title: frontmatter.title,
    publishedAt: frontmatter.publishedAt,
    excerpt: frontmatter.excerpt,
    tags: frontmatter.tags || [],
    coverImageUrl: frontmatter.coverImageUrl,
    authorImage: frontmatter.authorImage || '/portfolio-new/images/aadil.png',
    readingTime: frontmatter.readingTime || '1 min',
    category: frontmatter.category || 'Web Dev',
  };
}

export function getAllPosts(postsDir: string): BlogPost[] {
  const slugs = getAllPostSlugs(postsDir);
  const posts = slugs.map(slug => getPostBySlug(slug, postsDir));

  return posts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

// lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostFrontmatter } from '@/types/blogs/blogs.types';

const POSTS_DIRECTORY = path.join(process.cwd(), '/app/data/blogs/mdx/');

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  return fileNames.map(fileName => fileName.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const frontmatter = data as BlogPostFrontmatter;

  return {
    slug,
    content,
    title: frontmatter.title,
    publishedAt: frontmatter.date,
    excerpt: frontmatter.excerpt,
    tags: frontmatter.tags || [],
    coverImageUrl: frontmatter.coverImage,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug));

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

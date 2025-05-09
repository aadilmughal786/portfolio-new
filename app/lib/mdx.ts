import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostFrontmatter } from '@/types/blogs/blogs.types';

export function getAllPostSlugs(postsDir: string): string[] {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map(fileName => fileName.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string, postsDir: string): BlogPost {
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const frontmatter = data as BlogPostFrontmatter;

  return {
    slug,
    content,
    author: 'Aadil Mugal',
    title: frontmatter.title,
    publishedAt: frontmatter.publishedAt,
    excerpt: frontmatter.excerpt,
    tags: frontmatter.tags || [],
    coverImageUrl: frontmatter.coverImageUrl,
  };
}

export function getAllPosts(postsDir: string): BlogPost[] {
  const slugs = getAllPostSlugs(postsDir);
  const posts = slugs.map(slug => getPostBySlug(slug, postsDir));

  return posts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

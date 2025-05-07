export type BlogPost = {
  title: string;
  slug: string; // for routing: e.g., /blog/[slug]
  excerpt: string; // short description or preview
  tags: string[];
  coverImageUrl?: string;
  publishedAt: string; // ISO string format
  author?: string;
  content: string;
};

export type BlogPostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  coverImage?: string;
};

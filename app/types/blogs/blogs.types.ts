export type BlogPost = {
  title: string;
  slug: string; // for routing: e.g., /blog/[slug]
  excerpt: string; // short description or preview
  tags: string[];
  coverImageUrl: string;
  publishedAt: string; // ISO string format
  author: string;
  authorImage: string;
  content: string;
  category: string;
  readingTime: string;
};

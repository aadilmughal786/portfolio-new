export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
  imageUrl: string;
  caseStudySlug?: string;
  status: 'active' | 'archived' | 'in-progress';
  repoName?: string;
};

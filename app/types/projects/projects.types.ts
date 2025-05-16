// types/projects/projects.types.ts
export type ProjectStatus = 'active' | 'archived' | 'in-progress';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  status: ProjectStatus;
  repoUrl?: string;
  repoName?: string;
  liveUrl?: string;
  caseStudySlug?: string;
}

// Updated TProject interface with categories array instead of single category
export type ProjectStatus = 'active' | 'archived' | 'in-progress';
export type ProjectCategory = 'web-development' | 'python-ai-ml' | 'ui-ux' | 'backend' | 'other';

export interface TProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  status: ProjectStatus;
  categories: ProjectCategory[]; // Changed from category to categories array
  year: number;
  featured?: boolean;
  repoUrl?: string;
  repoName?: string;
  liveUrl?: string;
  caseStudySlug?: string;
}

export interface TCategoryData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TOrganizedData {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: TProject[];
}

import { IconType } from 'react-icons';

export type TResumeItem = {
  id: number;
  type: 'PDF' | 'DOC' | 'LaTeX' | 'TEXT';
  link: string;
  icon: IconType;
  tag?: 'SOON' | 'NEW';
  lastModified?: string; // Date when the resume was last updated
  available: boolean; // Whether this format is available for download
};

export type TDownloadResumeSection = {
  title: string;
  icon: IconType;
  items: TResumeItem[];
};

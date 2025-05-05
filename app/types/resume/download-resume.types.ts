import { IconType } from 'react-icons';

export type TResumeFormat = {
  id: number;
  type: 'PDF' | 'DOC' | 'LaTeX' | 'TEXT';
  link: string;
  icon: IconType;
};

export type TDownloadResumeSection = {
  title: string;
  icon: IconType;
  formats: TResumeFormat[]; // renamed for clarity
};

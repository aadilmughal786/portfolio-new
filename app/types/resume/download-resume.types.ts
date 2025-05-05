import { IconType } from 'react-icons';

export type TResumeItem = {
  id: number;
  type: 'PDF' | 'DOC' | 'LaTeX' | 'TEXT';
  link: string;
  icon: IconType;
};

export type TDownloadResumeSection = {
  title: string;
  icon: IconType;
  items: TResumeItem[];
};

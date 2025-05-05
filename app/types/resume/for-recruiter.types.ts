import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type TFAQItem = {
  id: number;
  icon: ReactNode;
  question: string;
  answer: string[];
};

export type TForRecruiterSection = {
  title: string;
  icon: IconType;
  faqs: TFAQItem[];
};

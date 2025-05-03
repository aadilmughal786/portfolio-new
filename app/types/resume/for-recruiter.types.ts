import { ReactNode } from "react";
import { IconType } from "react-icons";

export type FAQItem = {
  id: number;
  icon: ReactNode;
  label: string;
  answer: string[];
};

export type ForRecruiterSection = {
  title: string;
  icon: IconType;
  faq: FAQItem[];
};

import { ReactNode } from "react";
import { IconType } from "react-icons";

export type FAQItem = {
  id: number;
  icon: ReactNode;
  label: string;
  answer: string[];
};

export type ResumeFormat = {
  id: number;
  type: "PDF" | "DOC" | "LaTeX" | "TEXT";
  link: string;
  icon: ReactNode;
};

export type ForRecruiterSection = {
  title: string;
  icon: IconType;
  faq: FAQItem[];
  downloadResume: ResumeFormat[];
};

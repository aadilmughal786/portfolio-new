import { IconType } from "react-icons";

export type ResumeFormat = {
  id: number;
  type: "PDF" | "DOC" | "LaTeX" | "TEXT";
  link: string;
  icon: IconType;
};

export type DownloadResumeSection = {
  title: string;
  icon: IconType;
  downloadResume: ResumeFormat[];
};

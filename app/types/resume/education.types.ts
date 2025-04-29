import { LucideIcon } from "lucide-react";

export type EducationItem = {
  id: number;
  icon: LucideIcon;
  educationType: string;
  instituteName: string;
  institutelocation?: string;
  description: string;
  completionyear: number;
  status: "Completed" | "Ongoing";
  courses: string[];
};

export type EducationSection = {
  title: string;
  icon: LucideIcon;
  items: EducationItem[];
};

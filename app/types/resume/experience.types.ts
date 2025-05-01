import { IconType } from "react-icons";

type TDateOrPresent = Date | "present";

type TJobPosition = {
  title: string;
  startDate: Date;
  endDate: TDateOrPresent;
  location: string;
};

export type TJobExperience = {
  id: number;
  hasMultipleRoles: boolean;
  companyLogo: IconType;
  companyName: string;
  positions: TJobPosition[];
  responsibilities: string[];
  technologiesUsed: string[];
};

export type TExperienceSection = {
  sectionTitle: string;
  sectionIcon: IconType;
  experiences: TJobExperience[];
};

import { IconType } from 'react-icons';

type TDateOrPresent = Date | 'present';

export type TJobPosition = {
  title: string;
  startDate: Date;
  endDate: TDateOrPresent;
  location: string;
};

export type TJobExperience = {
  id: number;
  company: {
    name: string;
    logo: IconType;
  };
  hasMultipleRoles: boolean;
  positions: TJobPosition[];
  responsibilities: string[];
  technologies: string[];
};

export type TExperienceSection = {
  title: string;
  icon: IconType;
  items: TJobExperience[];
};

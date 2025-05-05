import { IconType } from 'react-icons';

export type TVolunteeringItem = {
  id: number;
  icon: IconType;
  role: string;
  organization: string;
  organizationWebsite: string;
  cause: string;
  descriptions: string[];
};

export type TVolunteeringSection = {
  title: string;
  icon: IconType;
  iconSize?: number;
  items: TVolunteeringItem[];
};

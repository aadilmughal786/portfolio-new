import { JSX } from 'react';

export type ValueProposition = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export type ExplorationArea = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export type AboutMeData = {
  yearsOfExperience: number;
  totalProjectsBuild: number;
  technologiesUsed: number;
  resumeLink: string;
  coreValuePropositions: ValueProposition[];
  currentExplorations: ExplorationArea[];
};

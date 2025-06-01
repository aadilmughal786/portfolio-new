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
  coreValuePropositions: ValueProposition[];
  currentExplorations: ExplorationArea[];
};

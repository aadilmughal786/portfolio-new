import { projectsData } from './projects';

export type DeveloperInfo = {
  email: string;
  linkedIn: string;
  github: string;
  codePen: string;
  youtube: string;
  calendarBookingLink: string;

  yearsOfExperience: number;
  totalProjectsBuilt: number;
  technologiesUsed: number;
  GitHubContributions: number;
  resumeLink: string;
  upiId: string;
};

export const developerInfo: DeveloperInfo = {
  email: 'aadil.mugal.dev@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/dev-aadil',
  github: 'https://github.com/aadilmughal786',
  codePen: 'https://codepen.io/nevergiveup786',
  youtube: 'https://www.youtube.com/@techfunwithaadil',
  calendarBookingLink: 'https://cal.com/dev-aadil/15min',

  yearsOfExperience: 2,
  totalProjectsBuilt: projectsData.length + 5,
  technologiesUsed: 29,
  GitHubContributions: 124,
  resumeLink: 'https://drive.google.com/file/d/1X3VSlN6nPIfB8mLjt7e4B0P5Z7dQ_Ei3',
  upiId: 'aadilshe786@okhdfcbank',
};

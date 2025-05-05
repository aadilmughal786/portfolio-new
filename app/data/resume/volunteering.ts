import { TVolunteeringSection } from '@/types/resume/volunteering.types';
import { CgOrganisation } from 'react-icons/cg';
import { MdVolunteerActivism } from 'react-icons/md';

export const volunteeringData: TVolunteeringSection = {
  title: 'Volunteering',
  icon: MdVolunteerActivism,
  iconSize: 19,
  items: [
    {
      id: 1,
      icon: CgOrganisation,
      role: 'Volunteer - Online Tutor & Awareness Campaigner',
      organization: 'Youth Empowerment Foundation',
      organizationWebsite: 'https://yefindia.org',
      cause: 'Education and Awareness',
      descriptions: [
        'Provided online tutoring and educational support during the COVID-19 pandemic.',
        'Created informative posters and PowerPoint presentations to raise awareness about health and safety guidelines.',
        'Organized virtual sessions to engage and educate students and the community on important social topics.',
      ],
    },
  ],
};

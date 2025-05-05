import { MdVolunteerActivism } from 'react-icons/md';
import { CgOrganisation } from 'react-icons/cg';
import { TVolunteeringSection } from '@/types/resume/volunteering.types';

export const volunteeringData: TVolunteeringSection = {
  title: 'Volunteering',
  icon: MdVolunteerActivism,
  iconSize: 19,
  items: [
    {
      id: 1,
      icon: CgOrganisation,
      role: 'Volunteer',
      organization: 'Youth Empowerment Foundation',
      organizationWebsite: 'https://yefindia.org',
      cause: 'Education',
      descriptions: [
        'Volunteers do not necessarily have the time, they just have a Heart.',
        'There is no better exercise for your heart than reaching down and helping to lift someone up',
      ],
    },
  ],
};

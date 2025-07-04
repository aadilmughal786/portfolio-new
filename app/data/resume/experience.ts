import { BsPostcardHeartFill } from 'react-icons/bs';
import { CgOrganisation } from 'react-icons/cg';
import { TExperienceSection } from '@/types/resume/experience.types';

export const experienceData: TExperienceSection = {
  title: 'Experience',
  icon: BsPostcardHeartFill,
  items: [
    {
      id: 1,
      hasMultipleRoles: true,
      company: {
        name: 'Jalan Technology Consulting',
        logo: CgOrganisation,
      },

      positions: [
        {
          title: 'FullStack Web Developer Intern',
          startDate: new Date('2022-10-01'),
          endDate: new Date('2023-04-01'),
          location: 'Remote',
        },
        {
          title: 'FullStack Web Developer',
          startDate: new Date(2023, 5 - 1),
          endDate: new Date(2023, 10 - 1),
          location: 'Remote',
        },
      ],
      responsibilities: [
        'Developed, improved, and operated web-based software.',
        'Created responsive web apps.',
        'Collaborated with team members to implement feature updates.',
        'Wrote clean code, drove technical design, and took responsibility for technical delivery.',
        'Technologies used include Gatsby, Strapi, React, JavaScript, HTML, Git, CSS, etc.',
      ],
      technologies: [
        'TypeScript',
        'JavaScript',
        'BaseWeb',
        'Gatsby',
        'ReactJS',
        'NodeJS',
        'MongoDB',
        'Postman',
        'Mocha',
        'Express',
        'REST APIs',
      ],
    },
  ],
};

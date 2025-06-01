import { TContactSection } from '@/types/resume/contact.types';
import { FaStaylinked, FaGithub, FaLinkedin, FaCodepen, FaYoutube } from 'react-icons/fa';
import { IoIosPaperPlane } from 'react-icons/io';
import { developerInfo } from '../dev-info';

export const contactData: TContactSection = {
  title: 'Contact',
  icon: FaStaylinked,
  items: [
    {
      id: 1,
      icon: IoIosPaperPlane,
      label: 'aadil.mugal.dev@gmail.com',
      href: `mailto:${developerInfo.email}`,
    },
    {
      id: 2,
      icon: FaGithub,
      label: 'GitHub',
      href: developerInfo.github,
    },
    {
      id: 3,
      icon: FaLinkedin,
      label: 'Linkedin',
      href: developerInfo.linkedIn,
    },

    {
      id: 4,
      icon: FaCodepen,
      label: 'CodePen',
      href: developerInfo.codePen,
    },
    {
      id: 5,
      icon: FaYoutube,
      label: 'YouTube',
      href: developerInfo.youtube,
    },
  ],
};

import { ContactOptions } from '@/types/contact/contact-options.types';
import { FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa6';
import { developerInfo } from '../dev-info';

export const contactOptionsData: ContactOptions = [
  {
    icon: <FaPaperPlane className="w-6 h-6 text-text-tertiary" />,
    title: 'Email Me',
    description: 'Drop me a line anytime to discuss your project needs',
    linkText: 'Email',
    linkHref: `mailto:${developerInfo.email}`,
    linkTarget: '_self',
  },
  {
    icon: <FaFileAlt className="w-6 h-6 text-text-tertiary" />,
    title: 'Fill the Form',
    description: 'Share your details and ideas through our contact form',
    linkText: 'Go to Form',
    linkHref: '#contact-form',
    linkTarget: '_self',
  },
  {
    icon: <FaCalendarAlt className="w-6 h-6 text-text-tertiary" />,
    title: 'Book a Slot',
    description: 'Schedule a meeting at your convenience',
    linkText: 'Book',
    linkHref: developerInfo.calendarBookingLink,
    linkTarget: '_blank',
  },
];

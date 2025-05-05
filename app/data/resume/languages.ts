import { FaLanguage } from 'react-icons/fa';
import { TLanguageSection } from '@/types/resume/languages.types';

export const languageSectionData: TLanguageSection = {
  title: 'Language',
  icon: FaLanguage,
  size: 25,
  items: [
    {
      id: 1,
      language: 'English',
      proficiency: 'Professional working proficiency',
    },
    {
      id: 2,
      language: 'Hindi',
      proficiency: 'Native or bilingual proficiency',
    },
    {
      id: 3,
      language: 'Rajasthani',
      proficiency: 'Native or bilingual proficiency',
    },
  ],
};

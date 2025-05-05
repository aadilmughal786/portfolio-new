import { FaLanguage } from 'react-icons/fa';
import { TLanguageSection } from '@/types/resume/languages.types';

export const languageData: TLanguageSection = {
  title: 'Language',
  icon: FaLanguage,
  iconSize: 25,
  items: [
    {
      id: 1,
      name: 'English',
      proficiency: 'Professional working proficiency',
    },
    {
      id: 2,
      name: 'Hindi',
      proficiency: 'Native or bilingual proficiency',
    },
    {
      id: 3,
      name: 'Rajasthani',
      proficiency: 'Native or bilingual proficiency',
    },
  ],
};

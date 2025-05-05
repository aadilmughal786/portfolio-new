import { DownloadResumeSection } from '@/types/resume/download-resume.types';
import { FaFileAlt, FaGoogleDrive } from 'react-icons/fa';
import { FaFileCode, FaFilePdf, FaFileWord } from 'react-icons/fa6';

export const downloadResumeData: DownloadResumeSection = {
  title: 'Download Resume',
  icon: FaGoogleDrive,

  downloadResume: [
    {
      id: 1,
      type: 'PDF',
      link: '..',
      icon: FaFilePdf,
    },
    {
      id: 2,
      type: 'DOC',
      link: '..',
      icon: FaFileWord,
    },
    {
      id: 3,
      type: 'LaTeX',
      link: '..',
      icon: FaFileCode,
    },
    {
      id: 4,
      type: 'TEXT',
      link: '..',
      icon: FaFileAlt,
    },
  ],
};

import { TDownloadResumeSection } from '@/types/resume/download-resume.types';
import { FaGoogleDrive } from 'react-icons/fa';
import { FaFileCode, FaFilePdf, FaFileWord } from 'react-icons/fa6';

export const downloadResumeData: TDownloadResumeSection = {
  title: 'Download Resume',
  icon: FaGoogleDrive,

  items: [
    {
      id: 1,
      type: 'PDF',
      link: 'https://your-resume-link.pdf',
      icon: FaFilePdf,
      lastModified: '2024-01-15',
      available: true,
      tag: 'NEW',
    },
    {
      id: 2,
      type: 'DOC',
      link: 'https://your-resume-link.docx',
      icon: FaFileWord,
      lastModified: '2024-01-15',
      available: true,
    },

    {
      id: 3,
      type: 'LaTeX',
      link: '',
      icon: FaFileCode,
      tag: 'SOON',
      available: false,
    },
  ],
};

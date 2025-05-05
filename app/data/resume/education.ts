import { TEducationSection } from '@/types/resume/education.types';
import { FaUserGraduate, FaSchool, FaChalkboardUser, FaGraduationCap } from 'react-icons/fa6';

export const educationData: TEducationSection = {
  title: 'Education',
  icon: FaUserGraduate,
  iconSize: 16,
  items: [
    {
      id: 1,
      icon: FaGraduationCap,
      level: 'Undergraduate Education',
      institution: 'University Of Engineering & Management',
      location: 'Jaipur',
      description: 'I have completed my B.Tech in Computer Science. My average score was 8 GPA.',
      status: 'Completed',
      completionYear: 2023,
      courses: [
        'Data Structures and Algorithms',
        'Computer Networks',
        'Operating Systems',
        'Database Management Systems',
        'Discrete Mathematics',
        'Theory of Computation',
        'Object-Oriented Programming',
        'Software Engineering',
        'Artificial Intelligence',
        'Computer Graphics',
        'Compiler Design',
        'Machine Learning',
        'Digital Logic Design',
      ],
    },
    {
      id: 2,
      icon: FaSchool,
      level: 'Secondary Education',
      institution: 'Tagore Children Academy',
      location: 'Surajgarh',
      description:
        'I scored 94/100 marks in Mathematics and 96/100 marks in Physics. My overall score was 83.80 percentage.',
      status: 'Completed',
      completionYear: 2017,
      courses: [],
    },
    {
      id: 3,
      icon: FaChalkboardUser,
      level: 'Primary Education',
      institution: 'Vikas Public Sr. Sec. School',
      location: 'Surajgarh',
      description:
        'I scored 100/100 marks in Mathematics and 98/100 marks in Science. My overall score was 82.83 percentage.',
      status: 'Completed',
      completionYear: 2015,
      courses: [],
    },
  ],
};

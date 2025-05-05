import { contactData } from './contact';
import { courseData } from './course';
import { downloadResumeData } from './download-resume';
import { educationData } from './education';
import { experienceData } from './experience';
import { forRecruiterData } from './for-recruiter';
import { gameOfTheDayData } from './game-of-the-day';
import { githubSectionData } from './github';
import { hobbyData } from './hobbies';
import { languageData } from './languages';
import skillsData from './skill';
import { volunteeringData } from './volunteering';
import { youTubeData } from './youtube';

const resumeData = {
  educationSectionData: educationData,
  courseSectionData: courseData,
  hobbySectionData: hobbyData,
  languageSectionData: languageData,
  volunteeringSectionData: volunteeringData,
  gameOfTheDayData,
  youTubeSectionData: youTubeData,
  experienceSectionData: experienceData,
  contactData,
  skillsData,
  githubSectionData,
  forRecruiterData,
  downloadResumeData,
};

export default resumeData;

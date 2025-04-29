import { EducationSection } from "@/app/types/resume/education.types";
import { GraduationCap, School, University } from "lucide-react";

const socilaIconStyle =
  "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200";

const EducationSectionData: EducationSection = {
  title: "Education",
  icon: GraduationCap,
  items: [
    {
      id: 1,
      icon: University,
      educationType: "Undergraduate Education",
      instituteName: "University Of Engineering & Management",
      institutelocation: "Jaipur",
      description: "Currently, I am in 4th year. My average score is 8 GPA.",
      status: "Completed",
      completionyear: 2023,
      courses: [],
    },
    {
      id: 2,
      icon: School,
      educationType: "Secondary Education",
      instituteName: "Tagore Children Academy",
      institutelocation: "Surajgarh",
      description:
        "I scored 94/100 marks in Mathematics and 96/100 marks in Physics. My over roll score was 83.80 percentage.",
      status: "Completed",
      completionyear: 2017,
      courses: [],
    },
    {
      id: 3,
      icon: School,
      educationType: "Primary Education",
      instituteName: "Vikas Public Sr. Sec. School",
      institutelocation: "Surajgarh",
      description:
        "I scored 100/100 marks in Mathematics and 98/100 marks in Science. My over roll score was 82.83 percentage.",
      status: "Completed",
      completionyear: 2015,
      courses: [],
    },
  ],
};

export default EducationSectionData;

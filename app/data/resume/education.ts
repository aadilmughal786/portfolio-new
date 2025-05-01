import { TEducationSection } from "@/types/resume/education.types";
import { FaUserGraduate, FaSchool, FaChalkboardUser } from "react-icons/fa6";

export const EducationSectionData: TEducationSection = {
  title: "Education",
  icon: FaUserGraduate,
  items: [
    {
      id: 1,
      icon: FaUserGraduate,
      educationLevel: "Undergraduate Education",
      institutionName: "University Of Engineering & Management",
      institutionLocation: "Jaipur",
      description: "Currently, I am in 4th year. My average score is 8 GPA.",
      status: "Completed",
      completionYear: 2023,
      courses: [],
    },
    {
      id: 2,
      icon: FaSchool,
      educationLevel: "Secondary Education",
      institutionName: "Tagore Children Academy",
      institutionLocation: "Surajgarh",
      description:
        "I scored 94/100 marks in Mathematics and 96/100 marks in Physics. My over roll score was 83.80 percentage.",
      status: "Completed",
      completionYear: 2017,
      courses: [],
    },
    {
      id: 3,
      icon: FaChalkboardUser,
      educationLevel: "Primary Education",
      institutionName: "Vikas Public Sr. Sec. School",
      institutionLocation: "Surajgarh",
      description:
        "I scored 100/100 marks in Mathematics and 98/100 marks in Science. My over roll score was 82.83 percentage.",
      status: "Completed",
      completionYear: 2015,
      courses: [],
    },
  ],
};

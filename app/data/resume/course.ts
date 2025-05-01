import React from "react";
import { FaClipboardCheck } from "react-icons/fa";
import { HiLibrary } from "react-icons/hi";
import { TCourseSection } from "@/types/resume/course.types";
import { SiCoursera } from "react-icons/si";

export const courseSectionData: TCourseSection = {
  title: "Courses & Certificates",
  icon: FaClipboardCheck,
  items: [
    {
      id: 1,
      icon: SiCoursera,
      courseName: "HTML, CSS and Javascript for Web Developers",
      certificateLink:
        "https://www.coursera.org/account/accomplishments/certificate/H4S2GTZE8T2H",
      instituteName: "Johns Hopkins University",
      completionYear: "June 1, 2021",
    },
    {
      id: 2,
      icon: HiLibrary,
      courseName: "Problem Solving Through Programming In C",
      certificateLink:
        "https://drive.google.com/file/d/1rXepTEeaRCc39VIj0wbzaAiKCdPQ6cSO",
      instituteName: "IIT Kharagpur (NPTEL - 94% Topper)",
      completionYear: "Jan-Apr 2022",
    },
    {
      id: 3,
      icon: HiLibrary,
      courseName: "NDG Linux Unhatched",
      certificateLink:
        "https://drive.google.com/file/d/1Scfp18fqbzrpQUbz8TUAsdt9K-WnV6Uq",
      instituteName: "Cisco Virtual Academy",
      completionYear: "Jul 26, 2021",
    },
    {
      id: 4,
      icon: SiCoursera,
      courseName: "Version Control with Git",
      certificateLink:
        "https://www.coursera.org/account/accomplishments/certificate/JTQQ9QWBNB2J",
      instituteName: "Atlassian",
      completionYear: "June 20, 2021",
    },
  ],
};

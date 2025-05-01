import { TNavBarData } from "@/types/nav-bar/nav-bar.types";
import {
  FaHouseChimney,
  FaGithub,
  FaCodepen,
  FaLinkedin,
} from "react-icons/fa6";
import { HiMiniBeaker } from "react-icons/hi2";
import { IoIosRocket } from "react-icons/io";
import { IoDocument } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";

export const navBarData: TNavBarData = {
  navigationItems: [
    {
      id: 1,
      label: "Home",
      icon: FaHouseChimney,
      to: "/",
    },
    {
      id: 2,
      label: "Contact",
      icon: MdPeopleAlt,
      to: "/contact",
    },
    {
      id: 3,
      label: "Resume",
      icon: IoDocument,
      to: "/resume",
    },
    {
      id: 4,
      label: "Projects",
      icon: HiMiniBeaker,
      to: "/projects",
    },
    {
      id: 5,
      label: "Blogs",
      icon: IoIosRocket,
      to: "/blog",
    },
  ],

  socialLinks: [
    {
      id: 1,
      label: "GitHub",
      link: "https://github.com/aadilmughal786",
      icon: FaGithub,
    },
    {
      id: 2,
      label: "CodePen",
      link: "https://codepen.io/nevergiveup786",
      icon: FaCodepen,
    },
    {
      id: 3,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/aadil-mugal-146bb818a",
      icon: FaLinkedin,
    },
  ],
};

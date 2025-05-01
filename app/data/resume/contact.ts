import { ContactSection } from "@/types/resume/contact.types";
import {
  FaStaylinked,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaYoutube,
} from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";

export const contactData: ContactSection = {
  title: "Contact",
  icon: FaStaylinked,
  item: [
    {
      id: 1,
      icon: IoIosPaperPlane,
      label: "aadil.mugal.dev@gmail.com",
      href: "mailto:aadil.mugal.dev@gmail.com",
    },
    {
      id: 2,
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/aadilmughal786",
    },
    {
      id: 3,
      icon: FaLinkedin,
      label: "Linkedin",
      href: "https://www.linkedin.com/in/aadil-mugal-146bb818a",
    },

    {
      id: 4,
      icon: FaCodepen,
      label: "CodePen",
      href: "https://codepen.io/nevergiveup786",
    },
    {
      id: 5,
      icon: FaYoutube,
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCwu1NeYOe5r1La0A0VuCbIA",
    },
  ],
};

import { ForRecruiterSection } from "@/types/resume/for-recruiter.types";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

export const forRecruiterData: ForRecruiterSection = {
  title: "For Recruiter",
  icon: FaUserTie, // Represents professional or recruiter
  faq: [
    {
      id: 1,
      icon: <BsFillPatchQuestionFill size={20} />,
      label: "Why should you hire me?",
      answer: [
        "I don’t just write code—I solve problems with purpose and clarity.",
        "I adapt fast, learn faster, and deliver results that speak for themselves.",
        "My work ethic is strong, and my solutions are built to last.",
        "You’re not just hiring a developer—you’re adding a driven partner to your mission.",
      ],
    },
    {
      id: 2,
      icon: <BsFillPatchQuestionFill size={20} />,
      label: "What makes me a good team player?",
      answer: [
        "I believe great communication is just as important as great code.",
        "I value every perspective—diverse minds build better solutions.",
        "Helping teammates succeed is a win in my book.",
        "I show up, follow through, and celebrate the team’s wins—not just my own.",
      ],
    },
    {
      id: 3,
      icon: <BsFillPatchQuestionFill size={20} />,
      label: "How do I stay current in my field?",
      answer: [
        "I treat learning like a habit, not a chore.",
        "From bleeding-edge tech blogs to online deep dives—I’m always exploring.",
        "Hands-on projects, side hustles, and open-source keep me sharp.",
        "I thrive on curiosity and the excitement of what’s next.",
      ],
    },
    {
      id: 4,
      icon: <BsFillPatchQuestionFill size={20} />,
      label: "How do I handle challenges at work?",
      answer: [
        "I break down roadblocks, not just tasks.",
        "When things get tough, I stay calm and focused—not flustered.",
        "I ask the right questions, loop in the right people, and keep moving forward.",
        "Every challenge is a lesson in disguise—and I never miss a chance to grow.",
      ],
    },
    {
      id: 5,
      icon: <BsFillPatchQuestionFill size={20} />,
      label: "What are my core strengths?",
      answer: [
        "Sharp problem-solving instincts and a love for clean, scalable code.",
        "A quick learner with a hunger for improving every day.",
        "Strong communicator who bridges the gap between tech and people.",
        "Detail-obsessed, quality-focused, and proud of my craft.",
      ],
    },
  ],
};

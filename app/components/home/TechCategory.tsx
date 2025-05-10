'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGit } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGithubactions,
  SiVercel,
} from 'react-icons/si';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Categories for tabs
  const categories = ['Frontend', 'Backend', 'DevOps & Tools'];

  // Check if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current; // ✅ Capture current value

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Tech data
  const techData = {
    Frontend: [
      { name: 'React', icon: <FaReact />, proficiency: 95 },
      { name: 'Next.js', icon: <SiNextdotjs />, proficiency: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, proficiency: 85 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, proficiency: 95 },
      { name: 'Framer Motion', icon: <SiFramer />, proficiency: 80 },
    ],
    Backend: [
      { name: 'Node.js', icon: <FaNodeJs />, proficiency: 90 },
      { name: 'Express', icon: <SiExpress />, proficiency: 85 },
      { name: 'MongoDB', icon: <SiMongodb />, proficiency: 85 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, proficiency: 75 },
    ],
    'DevOps & Tools': [
      { name: 'Docker', icon: <FaDocker />, proficiency: 80 },
      { name: 'AWS', icon: <FaAws />, proficiency: 75 },
      { name: 'Git', icon: <FaGit />, proficiency: 90 },
      { name: 'GitHub Actions', icon: <SiGithubactions />, proficiency: 85 },
      { name: 'Vercel', icon: <SiVercel />, proficiency: 90 },
    ],
  };

  // Currently learning
  const learning = ['Rust', 'Three.js', 'AI Integration', 'WebAssembly', 'Svelte'];

  return (
    <section id="tech-stack" ref={sectionRef} className="overflow-hidden relative pb-20">
      <div className="container relative z-10 px-6 mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex gap-2 items-center px-4 py-2 mb-4 text-sm font-medium rounded-full bg-text-tertiary/5 text-text-tertiary"
          >
            <span className="flex relative mr-1 w-3 h-3">
              <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
              <span className="inline-flex relative w-3 h-3 rounded-full bg-text-tertiary"></span>
            </span>
            My Toolkit
          </motion.div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Tech <span className="text-text-tertiary">Stack</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Tabs Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex overflow-x-auto mb-8"
          >
            <div className="flex gap-3 p-1 mx-auto rounded-lg shadow-inner bg-text-tertiary/5">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 cursor-pointer text-sm font-medium rounded-md transition-all duration-300 ${
                    activeTab === category
                      ? 'bg-text-tertiary text-white shadow-md'
                      : 'hover:bg-text-tertiary/10'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tech Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {techData[activeTab].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 border-text-tertiary/10 bg-white/5 hover:bg-text-tertiary/5"
                >
                  <div className="mb-3 text-3xl text-text-tertiary">{tech.icon}</div>
                  <h4 className="mb-2 text-base font-medium text-center">{tech.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning & Exploring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-gradient-to-br rounded-xl border shadow-sm transition-all duration-300 border-text-tertiary/10 from-text-tertiary/5 to-blue-500/5"
          >
            <h3 className="mb-4 text-xl font-bold">Currently Learning & Exploring</h3>
            <div className="flex flex-wrap gap-3">
              {learning.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="inline-flex px-3 py-1 text-sm rounded-full border text-text-tertiary bg-text-tertiary/10 border-text-tertiary/10"
                >
                  <span className="flex relative mr-1.5 mt-1 w-1.5 h-1.5">
                    <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                    <span className="inline-flex relative w-1.5 h-1.5 rounded-full bg-text-tertiary"></span>
                  </span>
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

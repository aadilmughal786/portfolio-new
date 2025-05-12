'use client';

import { JSX, useEffect, useState } from 'react';

import { FaReact, FaNodeJs, FaDocker, FaAws, FaGit } from 'react-icons/fa';
import { motion } from 'framer-motion';
// Currently learning with descriptions and icons
import { SiRust, SiThreedotjs, SiOpenai, SiWebassembly, SiSvelte } from 'react-icons/si';

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

export type TechItem = {
  name: string;
  icon: JSX.Element;
  proficiency: number;
};

type LearningItem = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

export type TechCategory = {
  [category: string]: TechItem[];
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Categories for tabs
  const categories = ['Frontend', 'Backend', 'DevOps & Tools'];

  // Tech data
  const techData: TechCategory = {
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

  const learning: LearningItem[] = [
    {
      name: 'Rust',
      description: 'High-performance systems programming language',
      icon: <SiRust className="text-text-tertiary" size={48} />,
    },
    {
      name: 'Three.js',
      description: '3D graphics library for web applications',
      icon: <SiThreedotjs className="text-text-tertiary" size={48} />,
    },
    {
      name: 'AI Integration',
      description: 'Embedding AI capabilities into applications',
      icon: <SiOpenai className="text-text-tertiary" size={48} />, // or SiTensorflow for ML in general
    },
    {
      name: 'WebAssembly',
      description: 'Binary instruction format for browser execution',
      icon: <SiWebassembly className="text-text-tertiary" size={48} />,
    },
    {
      name: 'Svelte',
      description: 'Reactive component-based UI framework',
      icon: <SiSvelte className="text-text-tertiary" size={48} />,
    },
  ];

  return (
    <section id="tech-stack" className="py-20">
      <div className="container px-6 mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center">
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
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto mb-8">
            <div className="flex gap-3 p-1 mx-auto rounded-lg shadow-inner bg-text-tertiary/5">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 cursor-pointer text-sm font-medium rounded-md transition-all duration-300 ${
                    activeTab === category
                      ? 'bg-text-tertiary text-white shadow-md'
                      : 'hover:bg-text-tertiary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {techData[activeTab].map(tech => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 rounded-xl border transition-all duration-300 border-text-tertiary/10 bg-white/5 hover:bg-text-tertiary/5 hover:-translate-y-1"
                >
                  <div className="mb-3 text-3xl text-text-tertiary">{tech.icon}</div>
                  <h4 className="mb-2 text-base font-medium text-center">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Learning & Exploring - Improved UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-gradient-to-br rounded-xl border shadow-sm border-text-tertiary/10 from-text-tertiary/5 to-blue-500/5"
          >
            <h3 className="flex gap-3 items-center mb-6 text-xl font-bold">
              <span className="flex relative mr-1 w-3 h-3">
                <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                <span className="inline-flex relative w-3 h-3 rounded-full bg-text-tertiary"></span>
              </span>
              Currently Learning & Exploring
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {learning.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="w-full sm:w-64 group"
                >
                  <div className="flex overflow-hidden flex-col h-full rounded-lg border bg-text-tertiary/10 border-text-tertiary/10 hover:shadow-md hover:border-text-tertiary/30">
                    <div className="flex items-center p-4">
                      <div className="flex-shrink-0">
                        <div className="flex justify-center items-center p-2 rounded-md bg-text-tertiary/20">
                          {item.icon}
                        </div>
                      </div>

                      <div className="flex-1 ml-3">
                        <h3 className="text-sm font-semibold">{item.name}</h3>
                        <p className="mt-1 text-xs">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

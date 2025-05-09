'use client';

import { motion } from 'framer-motion';
import React, { JSX } from 'react';
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

interface TechCategory {
  name: string;
  technologies: {
    name: string;
    icon: JSX.Element;
    proficiency?: number; // Optional proficiency level (0-100)
  }[];
}

const TechStack: React.FC = () => {
  const techCategories: TechCategory[] = [
    {
      name: 'Frontend',
      technologies: [
        { name: 'React', icon: <FaReact />, proficiency: 95 },
        { name: 'Next.js', icon: <SiNextdotjs />, proficiency: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, proficiency: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, proficiency: 95 },
        { name: 'Framer Motion', icon: <SiFramer />, proficiency: 80 },
      ],
    },
    {
      name: 'Backend',
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs />, proficiency: 90 },
        { name: 'Express', icon: <SiExpress />, proficiency: 85 },
        { name: 'GraphQL', icon: <FaNodeJs />, proficiency: 80 },
        { name: 'MongoDB', icon: <SiMongodb />, proficiency: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, proficiency: 75 },
      ],
    },
    {
      name: 'DevOps & Tools',
      technologies: [
        { name: 'Docker', icon: <FaDocker />, proficiency: 80 },
        { name: 'AWS', icon: <FaAws />, proficiency: 75 },
        { name: 'Git', icon: <FaGit />, proficiency: 90 },
        { name: 'GitHub Actions', icon: <SiGithubactions />, proficiency: 85 },
        { name: 'Vercel', icon: <SiVercel />, proficiency: 90 },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Tech <span className="text-indigo-600 dark:text-indigo-400">Stack</span>
          </h2>
          <div className="mx-auto mb-6 w-24 h-1 bg-indigo-600 dark:bg-indigo-400"></div>
          <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300">
            The technologies, frameworks, and tools I use to bring digital products to life.
          </p>
        </motion.div>

        {/* Tech categories */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8 text-2xl font-bold text-center text-gray-900 dark:text-white">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-md dark:bg-gray-700"
                  >
                    <div className="mb-4 text-4xl text-indigo-600 dark:text-indigo-300">
                      {tech.icon}
                    </div>
                    <h4 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                      {tech.name}
                    </h4>

                    {tech.proficiency && (
                      <div className="mt-2 w-full h-2 bg-gray-200 rounded-full dark:bg-gray-600">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 0.8, delay: techIndex * 0.1 + 0.4 }}
                          viewport={{ once: true }}
                          className="h-2 bg-indigo-600 rounded-full dark:bg-indigo-400"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning & Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-6 mt-20 bg-gray-50 rounded-xl shadow-md dark:bg-gray-700"
        >
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Currently Learning & Exploring
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Rust', 'Three.js', 'AI Integration', 'WebAssembly', 'Svelte'].map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-3 py-1 text-sm text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

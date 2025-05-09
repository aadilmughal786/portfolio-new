'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDownload, FaLaptopCode, FaLightbulb, FaRocket } from 'react-icons/fa';

interface StrengthCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const StrengthCard: React.FC<StrengthCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="p-6 bg-white rounded-lg border-l-4 border-indigo-500 shadow-md dark:bg-gray-800 dark:border-indigo-400"
    >
      <div className="mb-4 text-3xl text-indigo-600 dark:text-indigo-400">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const AboutMe: React.FC = () => {
  const strengths = [
    {
      icon: <FaLaptopCode />,
      title: 'Technical Expertise',
      description:
        'Deep knowledge of full-stack development with modern frameworks and best practices for scalable applications.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Problem Solver',
      description:
        'Analyzing complex issues and finding elegant solutions that balance technical constraints and business needs.',
    },
    {
      icon: <FaRocket />,
      title: 'Fast Learner',
      description:
        'Quickly adapting to new technologies and methodologies to stay at the forefront of web development.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
        </motion.div>

        <div>
          {/* Bio section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">My Story</h3>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {`I'm a passionate full-stack developer with a mission to build digital solutions that
              make a positive impact. With over one years of experience in web development, I've had
              the privilege of working with startups, agencies, and enterprises across various
              industries.`}
            </p>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              My journey began with a fascination for creating things on the web, which quickly
              evolved into a professional career. I specialize in JavaScript ecosystems,
              particularly React and Next.js for frontend development, and Node.js for backend
              services.
            </p>

            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {`When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge through technical writing and mentoring.`}
            </p>

            <div className="flex flex-wrap gap-4 mt-auto">
              <Link
                href="/resume"
                className="inline-flex items-center px-6 py-3 font-medium text-white bg-indigo-600 rounded-lg transition-colors duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Strengths/Qualities */}
        <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3">
          {strengths.map((strength, index) => (
            <StrengthCard
              key={index}
              icon={strength.icon}
              title={strength.title}
              description={strength.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

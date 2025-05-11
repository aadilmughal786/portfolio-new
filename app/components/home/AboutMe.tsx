'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaBrain,
  FaChalkboardTeacher,
} from 'react-icons/fa';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // Core value propositions
  const valueProps = [
    {
      title: 'End-to-End Development',
      description:
        'I build complete web solutions from concept to deployment, ensuring all components work together seamlessly.',
      icon: <FaCode size={24} />,
      delay: 0.3,
    },
    {
      title: 'Performance Optimization',
      description:
        'I create high-performance applications that load quickly and run smoothly, providing an excellent user experience.',
      icon: <FaServer size={24} />,
      delay: 0.4,
    },
    {
      title: 'Scalable Architecture',
      description:
        'My solutions are designed to grow with your business, handling increased traffic and data without sacrificing performance.',
      icon: <FaDatabase size={24} />,
      delay: 0.5,
    },
    {
      title: 'Universal Accessibility',
      description:
        "I leverage web technology's inherent accessibility, creating solutions that work across devices with just a browser.",
      icon: <FaMobileAlt size={24} />,
      delay: 0.6,
    },
  ];

  // Areas of exploration
  const explorationAreas = [
    {
      title: 'AI & Machine Learning',
      description:
        'Exploring the intersection of artificial intelligence with web development to create intelligent, adaptive user experiences.',
      icon: <FaBrain size={24} />,
      delay: 0.5,
    },
    {
      title: 'Theoretical Computer Science',
      description:
        'Studying Theory of Computation, Discrete Mathematics, and Information Theory to build more elegant and efficient solutions.',
      icon: <FaChalkboardTeacher size={24} />,
      delay: 0.6,
    },
  ];

  return (
    <section ref={sectionRef} className="overflow-hidden relative px-4 pt-24 sm:px-8 lg:px-16">
      <div className="container relative z-10">
        {/* Animated section heading */}
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
            Who I Am
          </motion.div>
          <h2 className="text-4xl font-bold md:text-5xl">
            About <span className="text-text-tertiary">Me</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Full-Stack Developer & Problem Solver</h3>

              <p className="text-lg leading-relaxed text-text-primary/90">
                I build high-performance web applications that drive business growth and deliver
                seamless user experiences. With expertise in the latest technologies and a passion
                for clean, maintainable code, I transform complex problems into elegant solutions.
              </p>

              <p className="leading-relaxed text-text-primary/80">
                My journey in web development is driven by a fundamental belief in the power of the
                web as the most
                <span className="font-medium text-text-tertiary"> accessible technology</span>{' '}
                platform. All you need is a browser, and everything is instantly available—this
                democratization of technology is what continues to inspire my work.
              </p>

              <div className="flex flex-wrap gap-3 py-2">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full border bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10"
                >
                  <span className="flex relative w-2 h-2">
                    <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                    <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
                  </span>
                  3+ Years Experience
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="inline-flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-full border bg-text-tertiary/5 text-text-tertiary border-text-tertiary/10"
                >
                  <span className="flex relative w-2 h-2">
                    <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-text-tertiary"></span>
                    <span className="inline-flex relative w-2 h-2 rounded-full bg-text-tertiary"></span>
                  </span>
                  30+ Projects Completed
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="mb-6 text-2xl font-bold">What I Bring to the Table</h3>

            <div className="grid gap-6 md:grid-cols-2">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: prop.delay }}
                  className="p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 border-text-tertiary/10 bg-white/5 hover:bg-text-tertiary/5"
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-lg bg-text-tertiary/10 text-text-tertiary">
                      {prop.icon}
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold">{prop.title}</h4>
                      <p className="text-text-primary/70">{prop.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Exploration areas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-6 text-2xl font-bold">Beyond Web Development</h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 leading-relaxed text-text-primary/80"
            >
              {`My curiosity extends beyond creating web applications. I'm passionate about exploring
              the theoretical foundations that underpin modern computing and using these insights to
              build better digital experiences.`}
            </motion.p>

            <div className="grid gap-6 md:grid-cols-2">
              {explorationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: area.delay }}
                  className="p-6 bg-gradient-to-br rounded-xl border transition-all duration-300 border-text-tertiary/10 from-text-tertiary/5 to-blue-500/5 hover:from-text-tertiary/10 hover:to-blue-500/10"
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-3 rounded-lg bg-text-tertiary/10 text-text-tertiary">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold">{area.title}</h4>
                      <p className="text-text-primary/70">{area.description}</p>
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

export default AboutMe;

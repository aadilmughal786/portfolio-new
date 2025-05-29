'use client';

import { useEffect, useState } from 'react';
import Footer from './components/layout/footer/Footer';
import NavBar from './components/layout/nav-bar/NavBar';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import { Button } from './components/home/Hero';
import { Bird } from './components/home/EndPage';

export default function NotFound() {
  const [animationsActive, setAnimationsActive] = useState(false);

  useEffect(() => {
    setAnimationsActive(true);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen duration-150 ease-in">
      <NavBar />
      <main className="overflow-hidden bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:2rem_2rem]">
        <div className="overflow-hidden relative min-h-screen">
          <div className="flex flex-col justify-center items-center px-4 py-16 mx-auto max-w-4xl text-center sm:px-8 lg:px-16">
            <Bird />

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={animationsActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-12 mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl"
            >
              Oops! This Page Got
              <br />
              <span className="text-text-tertiary"> Lost in Space</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={animationsActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8 text-lg"
            >
              {`The page you're looking for seems to have wandered off into the digital void. Don't
              worry though – even the best explorers sometimes take a wrong turn.`}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={animationsActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button href="/" noArrows={true}>
                <FaHome />
                Go Home
              </Button>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

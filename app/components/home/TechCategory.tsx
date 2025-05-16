'use client';

import Image from 'next/image';
import MemoryGame from './MemoryGame';
import SectionHeading from './SectionHeading';

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-12">
      <div className="px-4 mx-auto max-w-4xl">
        {/* Section Heading */}
        <SectionHeading badge="My Toolkit" title="Tech" highlightedTitle="Stack">
          My current toolkit empowers me to craft high-quality, scalable products with a strong
          focus on <span className="font-medium text-text-tertiary">user experience</span> and
          performance. I <span className="font-medium text-text-tertiary">continuously</span>{' '}
          explore modern technologies and best practices to deliver{' '}
          <span className="font-medium text-text-tertiary">future-ready</span> solutions.
        </SectionHeading>

        <div className="mx-auto mb-20 max-w-xl">
          <div className="flex gap-4 p-3 mx-auto mb-10 max-w-2xl rounded-xl border transition-all duration-300 border-text-tertiary/10 bg-text-tertiary/5 hover:bg-text-tertiary/10">
            <Image
              src={'./portfolio-new/images/home/popcorn.gif'}
              alt="popcorn-gif"
              width={100}
              height={200}
              className="rounded-xl"
            />
            <div>
              <h2 className="mb-2 text-lg font-semibold">Discover the Tech I Used</h2>
              <p className="text-text-primary/70">
                {`While the popcorn muncher watches, it’s your turn to play! Flip the cards in this
                memory game and find out which technologies I’ve mastered.`}
              </p>
            </div>
          </div>

          <MemoryGame />
        </div>
      </div>
    </section>
  );
};

export default TechStack;

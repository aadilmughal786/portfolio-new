'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

// Tech Icons
import { FaReact, FaNodeJs, FaDocker, FaPython, FaVuejs } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiFirebase,
  SiAngular,
  SiSvelte,
  SiRedux,
  SiRust,
} from 'react-icons/si';
import { GrPowerReset } from 'react-icons/gr';
import { PiSealQuestionFill } from 'react-icons/pi';
import { runConfetti } from '@/utils/confetti';

// Types for the memory game
export type MemoryCard = {
  id: number;
  techName: string;
  icon: React.ReactNode;
  isFlipped: boolean;
  isMatched: boolean;
};

type CardProps = {
  card: MemoryCard;
  index: number;
  handleCardFlip: (index: number) => void;
};

// Memoized Card component for better performance
const Card = memo(({ card, index, handleCardFlip }: CardProps) => {
  return (
    <motion.div
      onClick={() => handleCardFlip(index)}
      className={`relative aspect-square cursor-pointer rounded-lg transition duration-300 ${
        card.isMatched ? 'bg-text-tertiary/20' : ''
      }`}
      whileHover={{ scale: card.isFlipped || card.isMatched ? 1 : 1.03 }}
    >
      <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
        <div
          className="absolute w-full h-full transition-transform duration-500"
          style={{
            transformStyle: 'preserve-3d',
            transform: card.isFlipped || card.isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Back of card (question mark) */}
          <div
            className="flex absolute justify-center items-center w-full h-full rounded-lg backdrop-blur-sm bg-text-secondary/20"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="text-lg font-bold text-text-secondary/50">
              <PiSealQuestionFill size={40} />
            </div>
          </div>

          {/* Front of card (icon) */}
          <div
            className="flex absolute flex-col justify-center items-center w-full h-full rounded-lg border bg-text-tertiary/10 border-text-tertiary/20"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="text-text-tertiary">{card.icon}</div>
            <div className="mt-1 text-xs font-medium">{card.techName}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

Card.displayName = 'Card';

// Tech icons data - moved outside component to prevent recreation on each render
const allTechIcons: Array<{ name: string; icon: React.ReactNode }> = [
  { name: 'React', icon: <FaReact size={28} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={28} /> },
  { name: 'TypeScript', icon: <SiTypescript size={28} /> },
  { name: 'Redux', icon: <SiRedux size={28} /> },
  { name: 'GraphQL', icon: <SiGraphql size={28} /> },
  { name: 'Firebase', icon: <SiFirebase size={28} /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={28} /> },
  { name: 'MongoDB', icon: <SiMongodb size={28} /> },
  { name: 'Python', icon: <FaPython size={28} /> },
  { name: 'Node.js', icon: <FaNodeJs size={28} /> },
  { name: 'Docker', icon: <FaDocker size={28} /> },
  { name: 'Rust', icon: <SiRust size={28} /> },
  { name: 'Vue.js', icon: <FaVuejs size={28} /> },
  { name: 'Angular', icon: <SiAngular size={28} /> },
  { name: 'Svelte', icon: <SiSvelte size={28} /> },
];

// Main component
const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCount, setFlippedCount] = useState<number>(0);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Number of pairs for the game (10 for a 5x4 grid)
  const numberOfPairs = 10;

  // Initialize game
  useEffect(() => {
    initializeGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check if game is complete
  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setTimeout(() => {
        setIsComplete(true);
        runConfetti();
      }, 500);
    }
  }, [cards]);

  // Handle flipped cards
  useEffect(() => {
    if (flippedCount === 2) {
      setIsProcessing(true);

      const checkMatchAndUpdate = (): void => {
        const flippedCards = flippedIndexes.map(index => cards[index]);

        if (flippedCards[0].techName === flippedCards[1].techName) {
          // Cards match - update without recreating the entire array
          setCards(prevCards =>
            prevCards.map((card, idx) =>
              flippedIndexes.includes(idx) ? { ...card, isMatched: true } : card
            )
          );

          // Reset flipped state
          setFlippedCount(0);
          setFlippedIndexes([]);
          setIsProcessing(false);
        } else {
          // Cards don't match - flip them back after a delay
          setTimeout(() => {
            setCards(prevCards =>
              prevCards.map((card, idx) =>
                flippedIndexes.includes(idx) ? { ...card, isFlipped: false } : card
              )
            );
            setFlippedCount(0);
            setFlippedIndexes([]);
            setIsProcessing(false);
          }, 1000);
        }
      };

      // Short delay to ensure UI updates before checking match
      setTimeout(checkMatchAndUpdate, 300);
    }
  }, [flippedCount, flippedIndexes, cards]);

  // Helper function to shuffle an array
  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  // Initialize game with shuffled cards
  const initializeGame = useCallback(() => {
    // Randomly select numberOfPairs of tech icons
    const shuffledIcons = shuffleArray([...allTechIcons]);
    const selectedIcons = shuffledIcons.slice(0, numberOfPairs);

    // Create pairs of the selected icons
    let id = 0;
    const duplicatedSelectedTech = [...selectedIcons, ...selectedIcons];

    // Shuffle the duplicated icons
    const shuffledCardsData = shuffleArray(duplicatedSelectedTech);

    // Create the cards array
    const newCards = shuffledCardsData.map(tech => ({
      id: id++,
      techName: tech.name,
      icon: tech.icon,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(newCards);
    setFlippedCount(0);
    setFlippedIndexes([]);
    setIsComplete(false);
    setIsProcessing(false);
  }, [shuffleArray]);

  // Handle card flip
  const handleCardFlip = useCallback(
    (index: number): void => {
      if (
        isProcessing ||
        flippedCount >= 2 ||
        cards[index].isFlipped ||
        cards[index].isMatched ||
        flippedIndexes.includes(index)
      ) {
        return;
      }

      // Flip the card - avoid recreating the entire array
      setCards(prevCards =>
        prevCards.map((card, idx) => (idx === index ? { ...card, isFlipped: true } : card))
      );

      // Update flipped indexes
      setFlippedIndexes(prev => [...prev, index]);
      setFlippedCount(prev => prev + 1);
    },
    [cards, flippedCount, flippedIndexes, isProcessing]
  );

  // Reset game
  const handleReset = useCallback((): void => {
    initializeGame();
  }, [initializeGame]);

  return (
    <div className="relative mx-auto w-full">
      {/* Game grid (5 columns by 4 rows = 20 cards) */}
      <div className="grid relative grid-cols-5 gap-2 p-2">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} handleCardFlip={handleCardFlip} />
        ))}

        {/* Game completion overlay */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex absolute inset-0 z-10 justify-center items-center rounded-lg bg-text-tertiary/40"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="flex flex-col items-center p-6"
              >
                <FaTrophy className="mb-4 text-6xl text-yellow-400 flip" />
                <h2 className="mb-2 text-xl font-bold text-white">Congratulations! 🎉</h2>
                <div className="mb-4 text-white">You completed the game!</div>
                <button
                  onClick={handleReset}
                  className={`flex gap-2 items-center px-4 py-1 font-medium text-white rounded-md transition-colors duration-300 cursor-pointer bg-text-tertiary/80 hover:bg-text-tertiary`}
                >
                  <GrPowerReset />
                  Play Again
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemoryGame;

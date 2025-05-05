'use client';

import React, { useState } from 'react';
import { TbExternalLink } from 'react-icons/tb';
import Card from './Card';
import CardItem from './CardItem';
import { formatDate } from '@/utils/resume-date';
import { TAchievementItem } from '@/types/resume/achievement.types';
import { achievementData as data } from '@/data/resume/achievement';
import confetti from 'canvas-confetti';

// Confetti function moved outside
const runConfetti = () => {
  const duration = 15 * 1000; // 15 seconds
  const end = Date.now() + duration;

  const colors = ['#00d5f6', '#007397', '#ffffff']; // You can customize the colors

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

type AchievementProps = {
  data: TAchievementItem;
};

const AchievementItem = ({ data }: AchievementProps) => {
  const { icon: Icon } = data;
  const [isRunning, setIsRunning] = useState(false); // State to lock the button

  const handleConfettiClick = () => {
    if (isRunning) return; // Prevent multiple clicks
    setIsRunning(true);
    runConfetti();
    setTimeout(() => setIsRunning(false), 15 * 1000); // Unlock after 15 seconds
  };

  return (
    <>
      <div className="flex flex-row gap-6 items-center">
        <Icon
          size={35}
          title="Press to praise Aadil"
          className={`flip text-amber-400 cursor-pointer ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleConfettiClick}
        />

        <div className="w-full">
          <div className="flex-row gap-1 items-center font-medium text-text-tertiary sm:flex">
            <a href={data.link} target="_blank" rel="noreferrer">
              {data.title}
            </a>
            <TbExternalLink className="-mt-[3px] ml-1 inline-block sm:ml-0" size={16} />
          </div>
          <div className="flex-row flex-wrap gap-x-8 justify-between items-center sm:flex">
            <div>{data.institute}</div>
            <div className="font-mono">{formatDate(data.issuedOn)}</div>
          </div>
        </div>
      </div>
      <div className="pt-3">{data.description}</div>
    </>
  );
};

const Achievement = () => {
  return (
    <Card icon={data.icon} title={data.title}>
      {data.items.map(item => (
        <CardItem key={item.id}>
          <AchievementItem data={item} />
        </CardItem>
      ))}
    </Card>
  );
};

export default Achievement;

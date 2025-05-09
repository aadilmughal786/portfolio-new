import React from 'react';
import { FaPlay } from 'react-icons/fa6';
import Card from './Card';
import { gameOfTheDayData as data } from '@/data/resume/game-of-the-day';

const GameOfTheDay = () => {
  const { icon: Icon } = data.game;
  return (
    <Card icon={data.icon} title={data.title} size={data.iconSize}>
      <div className="flex flex-col gap-3 items-center py-3 border-t border-border-primary">
        <div>{data.game.name}</div>
        <Icon size={60} />
        <a
          href={data.game.link}
          rel="noreferrer"
          target="_blank"
          className="flex flex-row gap-2 justify-center items-center pb-2"
        >
          <FaPlay />
          <div>Play</div>
        </a>
      </div>
    </Card>
  );
};

export default GameOfTheDay;

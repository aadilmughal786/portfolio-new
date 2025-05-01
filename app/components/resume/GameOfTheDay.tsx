import { TGameOfTheDay } from "@/types/resume/game-of-the-day.types";
import React from "react";
import { FaPlay } from "react-icons/fa6";

type GameOfTheDayProps = {
  data: TGameOfTheDay;
};

const GameOfTheDay = ({ data }: GameOfTheDayProps) => {
  const { gameIcon: Icon, gameName, gameLink } = data;
  return (
    <div className="flex flex-col gap-3 items-center">
      <div>{gameName}</div>
      <Icon size={60} />
      <a
        href={gameLink}
        rel="noreferrer"
        target="_blank"
        className="flex flex-row gap-2 justify-center items-center"
      >
        <FaPlay />
        <div>Play</div>
      </a>
    </div>
  );
};

export default GameOfTheDay;

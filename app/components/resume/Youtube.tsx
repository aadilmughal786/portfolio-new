import React from 'react';
import { FaBell, FaThumbsUp } from 'react-icons/fa6';
import Card from './Card';
import { youTubeData as data } from '@/data/resume/youtube';

const Youtube = () => {
  return (
    <Card icon={data.icon} title={data.title} size={data.iconSize}>
      <div>
        <div>
          <iframe src={data.videoLink} className="w-full border-0 aspect-video"></iframe>
        </div>
        <div className="flex flex-row gap-x-2 justify-center items-center px-6 py-1 border-t border-border-primary">
          <FaThumbsUp /> {'Like and'}
          <FaBell />
          {'Subscribe'}
        </div>
      </div>
    </Card>
  );
};

export default Youtube;

import { THobbyItem } from '@/types/resume/hobbies.types';
import React from 'react';

type EducationProps = {
  data: THobbyItem;
};

const Hobby = ({ data }: EducationProps) => {
  const { icon: Icon } = data;
  return (
    <div className="flex flex-row gap-x-4 items-center">
      <Icon size={25} />
      <div className="text-text-tertiary">{data.hobby}</div>
    </div>
  );
};

export default Hobby;

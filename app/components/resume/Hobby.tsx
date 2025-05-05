import { hobbyData as data } from '@/data/resume/hobbies';
import { THobbyItem } from '@/types/resume/hobbies.types';
import React from 'react';
import Card from './Card';
import CardItem from './CardItem';

type EducationProps = {
  data: THobbyItem;
};

const HobbyItem = ({ data }: EducationProps) => {
  const { icon: Icon } = data;
  return (
    <div className="flex flex-row gap-x-4 items-center">
      <Icon size={25} />
      <div className="text-text-tertiary">{data.name}</div>
    </div>
  );
};

const Hobby = () => {
  return (
    <Card icon={data.icon} title={data.title} size={data.iconSize}>
      {data.items.map(item => (
        <CardItem key={item.id}>
          <HobbyItem data={item} />
        </CardItem>
      ))}
    </Card>
  );
};

export default Hobby;

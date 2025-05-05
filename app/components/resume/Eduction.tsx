import { TEducationItem } from '@/types/resume/education.types';
import React from 'react';
import Card from './Card';
import CardItem from './CardItem';
import { educationData } from '@/data/resume/education';

type EducationProps = {
  data: TEducationItem;
};

const EducationItem = ({ data }: EducationProps) => {
  const { icon: Icon } = data;

  return (
    <div>
      <div className="flex gap-6 items-center pb-2">
        <div>
          <Icon size={35} />
        </div>
        <div className="w-full">
          <div className="flex flex-wrap gap-x-8 justify-between items-center">
            <div className="font-medium">{data.level}</div>
            <div className="font-mono">{data.completionYear}</div>
          </div>
          <div className="flex flex-wrap gap-x-8 justify-between items-center text-text-tertiary">
            <div>{`${data.institution}, ${data.location}`}</div>
            <div>{data.status}</div>
          </div>
        </div>
      </div>
      <div>{data.description}</div>
    </div>
  );
};

const Education = () => {
  return (
    <Card icon={educationData.icon} title={educationData.title} size={educationData.iconSize}>
      {educationData.items.map(item => (
        <CardItem key={item.id}>
          <EducationItem data={item} />
        </CardItem>
      ))}
    </Card>
  );
};

export default Education;

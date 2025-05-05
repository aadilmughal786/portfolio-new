import { skillsData as data } from '@/data/resume/skill';
import { TSkillCategory } from '@/types/resume/skill.types';
import React from 'react';
import Card from './Card';
import CardItem from './CardItem';

type SkillProps = {
  data: TSkillCategory;
};

const SkillItem = ({ data }: SkillProps) => {
  return (
    <div className="w-full">
      <div className="font-medium text-text-tertiary">{data.name}</div>

      <div className="grid grid-cols-2 gap-1 pt-3 lg:grid-cols-1 xl:grid-cols-2">
        {data.items.map(({ icon: Icon, title, id }) => (
          <div key={id} className="flex gap-3 items-center pb-2 text-sm">
            <Icon size={20} />
            <span>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <Card icon={data.icon} title={data.title}>
      {data.items.map(item => (
        <CardItem key={item.id}>
          <SkillItem key={item.id} data={item} />
        </CardItem>
      ))}
    </Card>
  );
};

export default Skill;

import { SkillCategory } from '@/types/resume/skill.types';
import React from 'react';

type SkillProps = {
  data: SkillCategory;
};

const Skill = ({ data }: SkillProps) => {
  return (
    <div className="w-full">
      <div className="font-medium text-text-tertiary">{data.label}</div>

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

export default Skill;

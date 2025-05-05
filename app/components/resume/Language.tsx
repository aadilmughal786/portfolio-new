import { languageData as data } from '@/data/resume/languages';
import { TLanguageItem } from '@/types/resume/languages.types';
import React from 'react';
import Card from './Card';
import CardItem from './CardItem';

type EducationItemProps = {
  data: TLanguageItem;
};

const LanguageItem = ({ data }: EducationItemProps) => {
  return (
    <div>
      <div className="font-medium">{data.name}</div>
      <div className="text-text-tertiary">{data.proficiency}</div>
    </div>
  );
};

const Language = () => {
  return (
    <Card icon={data.icon} title={data.title} size={data.iconSize}>
      {data.items.map(item => (
        <CardItem key={item.id}>
          <LanguageItem data={item} />
        </CardItem>
      ))}
    </Card>
  );
};

export default Language;

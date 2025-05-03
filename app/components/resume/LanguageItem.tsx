import { TLanguageItem } from '@/types/resume/languages.types';
import React from 'react';

type EducationItemProps = {
  data: TLanguageItem;
};

const Language = ({ data }: EducationItemProps) => {
  return (
    <div>
      <div className="font-medium">{data.language}</div>
      <div className="text-text-tertiary">{data.proficiency}</div>
    </div>
  );
};

export default Language;

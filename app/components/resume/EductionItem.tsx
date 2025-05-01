import { TEducationItem } from "@/types/resume/education.types";
import React from "react";

type EducationProps = {
  data: TEducationItem;
};

const Education = ({ data }: EducationProps) => {
  const {
    icon: Icon,
    educationLevel,
    completionYear,
    institutionName,
    institutionLocation,
    status,
  } = data;

  return (
    <div>
      <div className="flex gap-6 items-center pb-2">
        <div>
          <Icon size={35}/>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap gap-x-8 justify-between items-center">
            <div className="font-medium">{educationLevel}</div>
            <div className="font-mono">{completionYear}</div>
          </div>
          <div className="flex flex-wrap gap-x-8 justify-between items-center text-text-tertiary">
            <div>{`${institutionName}, ${institutionLocation}`}</div>
            <div>{status}</div>
          </div>
        </div>
      </div>
      <div>{data.description}</div>
    </div>
  );
};

export default Education;

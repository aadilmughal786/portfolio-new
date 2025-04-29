import { EducationItem } from "@/app/types/resume/education.types";
import React from "react";

type EducationProps = {
  data: EducationItem;
};

const Education = ({ data }: EducationProps) => {
  const {
    icon: Icon,
    educationType,
    completionyear,
    instituteName,
    institutelocation,
    status,
  } = data;

  return (
    <div>
      <div className="flex items-center gap-6 pb-2">
        <div>
          <Icon />
        </div>
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-x-8">
            <div className="font-medium">{educationType}</div>
            <div className="font-mono">{completionyear}</div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-8 text-sky-700 dark:text-sky-300">
            <div>{`${instituteName}, ${institutelocation}`}</div>
            <div className="btn">{status}</div>
          </div>
        </div>
      </div>
      <div className="text-sm">{data.description}</div>
    </div>
  );
};

export default Education;

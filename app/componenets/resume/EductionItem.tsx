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
      <div>
        <div>
          <Icon />
        </div>
        <div>
          <div>
            <div>{educationLevel}</div>
            <div>{completionYear}</div>
          </div>
          <div>
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

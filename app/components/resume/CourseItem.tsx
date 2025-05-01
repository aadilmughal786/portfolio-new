import { TCourseItem } from "@/types/resume/course.types";
import React from "react";
import { TbExternalLink } from "react-icons/tb";

type EducationProps = {
  data: TCourseItem;
};

const Course = ({ data }: EducationProps) => {
  const { icon: Icon } = data;

  return (
    <div className="flex flex-row gap-6 items-center">
      <Icon size={35} />
      <div className="w-full">
        <div className="flex-row gap-1 items-center font-medium text-text-tertiary sm:flex">
          <a href={data.certificateLink} target="_blank" rel="noreferrer">
            {data.courseName}
          </a>
          <TbExternalLink
            className="-mt-[3px] ml-1 inline-block sm:ml-0"
            size={16}
          />
        </div>
        <div className="flex-row flex-wrap gap-x-8 justify-between items-center sm:flex">
          <div>{data.instituteName}</div>
          <div className="font-mono">{data.completionYear}</div>
        </div>
      </div>
    </div>
  );
};

export default Course;

import { TJobExperience } from "@/types/resume/experience.types";
import {
  formateDate,
  getCurrentDateObject,
  getDiff,
} from "@/utils/resume-date";
import React from "react";

export type JobExperienceProps = {
  data: TJobExperience;
};

// for single role/position
const Single = ({ data }: JobExperienceProps) => {
  const { companyLogo: Logo } = data;
  return (
    <div className="flex gap-4 items-center mb-2">
      <Logo size={35} />
      <div className="flex-1">
        <div className="font-medium">{data.positions[0].title}</div>
        <div className="flex flex-wrap gap-x-8 justify-between font-medium">
          <div className="text-text-tertiary">{data.companyName}</div>

          <div className="font-mono">
            {data.positions[0].endDate === "present"
              ? getDiff(data.positions[0].startDate, getCurrentDateObject())
              : getDiff(data.positions[0].startDate, data.positions[0].endDate)}
          </div>
        </div>
        <div>{data.positions[0].location}</div>
        <div>{`${formateDate(data.positions[0].startDate)} - ${
          data.positions[0].endDate === "present"
            ? "present"
            : formateDate(data.positions[0].endDate)
        }`}</div>
      </div>
    </div>
  );
};

// for multiple role/position
const Multiple = ({ data }: JobExperienceProps) => {
  const { companyLogo: Logo } = data;

  return (
    <>
      <div className="flex gap-4 items-center mb-2">
        <Logo size={35} />

        <div className="flex-1">
          <div className="font-medium text-text-tertiary">
            {data.companyName}
          </div>
          <div className="flex flex-wrap gap-x-8 justify-between">
            <div>
              {`${formateDate(data.positions[0].startDate)} - ${
                data.positions[data.positions.length - 1].endDate === "present"
                  ? "present"
                  : formateDate(
                      data.positions[data.positions.length - 1].endDate as Date
                    )
              }`}
            </div>
            <div className="font-mono">
              {data.positions[data.positions.length - 1].endDate === "present"
                ? getDiff(data.positions[0].startDate, getCurrentDateObject())
                : getDiff(
                    data.positions[0].startDate,
                    data.positions[data.positions.length - 1].endDate as Date
                  )}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        {data.positions.map((position, index) => (
          <div className="pl-4" key={index}>
            <li className="font-medium">{position.title}</li>
            <div className="ml-[2px] border-l pl-6 border-border-primary">
              <div className="flex flex-wrap gap-x-8 justify-between">
                <div>
                  {`${formateDate(position.startDate)} - ${
                    position.endDate === "present"
                      ? "present"
                      : formateDate(position.endDate)
                  }`}
                </div>

                <div className="font-mono">
                  {position.endDate === "present"
                    ? getDiff(position.startDate, getCurrentDateObject())
                    : getDiff(position.startDate, position.endDate)}
                </div>
              </div>
              <div>{position.location}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Experience = ({ data }: JobExperienceProps) => {
  return (
    <div>
      {data.hasMultipleRoles ? (
        <Multiple data={data} />
      ) : (
        <Single data={data} />
      )}
      <div className="flex flex-col gap-1">
        {data.responsibilities.map((item, index) => (
          <div className="flex gap-3" key={index}>
            <span className="hidden font-semibold sm:inline text-text-tertiary">
              {"⤏"}
            </span>{" "}
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-2 pt-3">
        {data.technologiesUsed.map((item, index) => (
          <span
            key={index}
            className="rounded bg-sky-400/80 px-2 py-[2px] text-[10px] font-medium text-slate-800 dark:bg-sky-300 dark:text-black"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;

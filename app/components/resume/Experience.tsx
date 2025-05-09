import { TJobExperience } from '@/types/resume/experience.types';
import {
  formatDate,
  formatDurationFromDays,
  getCurrentDate,
  getDateDifferenceInDays,
} from '@/utils/date';
import React from 'react';
import Card from './Card';
import CardItem from './CardItem';
import { experienceData as data } from '@/data/resume/experience';

export type JobExperienceProps = {
  data: TJobExperience;
};

// For single role/position
const Single = ({ data }: JobExperienceProps) => {
  const { logo: Logo } = data.company;
  return (
    <div className="flex gap-4 items-center mb-2">
      <Logo size={35} />
      <div className="flex-1">
        <div className="font-medium">{data.positions[0].title}</div>
        <div className="flex flex-wrap gap-x-8 justify-between font-medium">
          <div className="text-text-tertiary">{data.company.name}</div>

          <div className="font-mono">
            {data.positions[0].endDate === 'present'
              ? getDateDifferenceInDays(data.positions[0].startDate, getCurrentDate())
              : getDateDifferenceInDays(data.positions[0].startDate, data.positions[0].endDate)}
          </div>
        </div>
        <div>{data.positions[0].location}</div>
        <div>{`${formatDate(data.positions[0].startDate)} - ${
          data.positions[0].endDate === 'present'
            ? 'present'
            : formatDate(data.positions[0].endDate)
        }`}</div>
      </div>
    </div>
  );
};

// for multiple role/position
const Multiple = ({ data }: JobExperienceProps) => {
  const { logo: Logo } = data.company;

  return (
    <>
      <div className="flex gap-4 items-center mb-2">
        <Logo size={35} />

        <div className="flex-1">
          <div className="font-medium text-text-tertiary">{data.company.name}</div>
          <div className="flex flex-wrap gap-x-8 justify-between">
            <div>
              {`${formatDate(data.positions[0].startDate)} - ${
                data.positions[data.positions.length - 1].endDate === 'present'
                  ? 'present'
                  : formatDate(data.positions[data.positions.length - 1].endDate as Date)
              }`}
            </div>

            <div className="font-mono">
              {data.positions[data.positions.length - 1].endDate === 'present'
                ? formatDurationFromDays(
                    getDateDifferenceInDays(data.positions[0].startDate, getCurrentDate())
                  )
                : formatDurationFromDays(
                    getDateDifferenceInDays(
                      data.positions[0].startDate,
                      data.positions[data.positions.length - 1].endDate as Date
                    )
                  )}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        {data.positions.map((position, index) => (
          <div className="pl-4" key={index}>
            <li className="font-medium text-text-tertiary">{position.title}</li>
            <div className="ml-[2px] border-l pl-6 border-border-primary">
              <div className="flex flex-wrap gap-x-8 justify-between">
                <div>
                  {`${formatDate(position.startDate)} - ${
                    position.endDate === 'present' ? 'present' : formatDate(position.endDate)
                  }`}
                </div>

                <div className="font-mono">
                  {position.endDate === 'present'
                    ? formatDurationFromDays(
                        getDateDifferenceInDays(position.startDate, getCurrentDate())
                      )
                    : formatDurationFromDays(
                        getDateDifferenceInDays(position.startDate, position.endDate)
                      )}
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

const ExperienceItem = ({ data }: JobExperienceProps) => {
  return (
    <div>
      {data.hasMultipleRoles ? <Multiple data={data} /> : <Single data={data} />}
      <div className="flex flex-col gap-1">
        {data.responsibilities.map((item, index) => (
          <div className="flex gap-3" key={index}>
            <span className="hidden font-semibold sm:inline text-text-tertiary">{'⤏'}</span> {item}
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap gap-2 pt-3">
        {data.technologies.map((item, index) => (
          <span key={index} className="chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <Card icon={data.icon} title={data.title}>
      {data.items.map(item => (
        <CardItem key={item.id}>
          <ExperienceItem data={item} />
        </CardItem>
      ))}
    </Card>
  );
};

export default Experience;

import { TCourseItem } from '@/types/resume/course.types';
import React from 'react';
import { TbExternalLink } from 'react-icons/tb';
import Card from './Card';
import CardItem from './CardItem';
import { courseData as data } from '@/data/resume/course';
import { formatDate } from '@/utils/date';

type CourseItemProps = {
  data: TCourseItem;
};

const CourseItem = ({ data }: CourseItemProps) => {
  const { icon: Icon } = data;

  return (
    <div className="flex flex-row gap-6 items-center">
      <Icon size={35} />
      <div className="w-full">
        <div className="flex-row gap-1 items-center font-medium text-text-tertiary sm:flex">
          <a href={data.certificateUrl} target="_blank" rel="noreferrer">
            {data.name}
          </a>
          <TbExternalLink className="-mt-[3px] ml-1 inline-block sm:ml-0" size={16} />
        </div>
        <div className="flex-row flex-wrap gap-x-8 justify-between items-center sm:flex">
          <div>{data.institute}</div>
          <div className="font-mono">{formatDate(data.issuedOn)}</div>
        </div>
      </div>
    </div>
  );
};

const Course = () => {
  return (
    <Card icon={data.icon} title={data.title}>
      {data.items.map(course => (
        <CardItem key={course.id}>
          <CourseItem data={course} />
        </CardItem>
      ))}
    </Card>
  );
};

export default Course;

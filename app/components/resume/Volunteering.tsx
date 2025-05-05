import { volunteeringData as data } from '@/data/resume/volunteering';
import { TVolunteeringItem } from '@/types/resume/volunteering.types';
import React from 'react';
import { TbExternalLink } from 'react-icons/tb';
import Card from './Card';
import CardItem from './CardItem';

type VolunteeringItemProps = {
  data: TVolunteeringItem;
};

const VolunteeringItem = ({ data }: VolunteeringItemProps) => {
  const { icon: Icon } = data;
  return (
    <div>
      <div className="flex flex-row gap-4 items-center">
        <Icon size={35} />
        <div className="mb-1">
          <div className="font-medium">{data.role}</div>
          <div className="flex flex-row flex-wrap gap-y-1 gap-x-2 text-text-tertiary">
            <a href={data.organizationWebsite} target="_blank" rel="noreferrer">
              <span>{data.organization}</span>
              <TbExternalLink className="-mt-[3px] ml-1 inline-block sm:ml-0" size={16} />
            </a>
          </div>
          <div>{data.cause}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {data.descriptions.map((description, index) => (
          <div key={index} className="flex gap-3">
            <span className="hidden font-semibold text-text-tertiary sm:inline">{'⤏'}</span>{' '}
            {description}
          </div>
        ))}
      </div>
    </div>
  );
};

const Volunteering = () => {
  return (
    <Card icon={data.icon} title={data.title} size={data.iconSize}>
      {data.items.map(item => (
        <CardItem key={item.id}>
          <VolunteeringItem data={item} />
        </CardItem>
      ))}
    </Card>
  );
};

export default Volunteering;

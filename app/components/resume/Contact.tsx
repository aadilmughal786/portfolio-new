import { contactData as data } from '@/data/resume/contact';
import { TContactItem } from '@/types/resume/contact.types';
import React from 'react';
import { TbExternalLink } from 'react-icons/tb';
import Card from './Card';
import CardItem from './CardItem';

type ContactProps = {
  data: TContactItem;
};

const ContactItem = ({ data }: ContactProps) => {
  const { icon: Icon } = data;
  return (
    <div className="flex gap-6 items-center link">
      <Icon size={20} />
      <div className="flex flex-row gap-1 items-center">
        <a href={data.href} target="_blank" rel="noreferrer">
          {data.label}
        </a>
        <TbExternalLink size={16} />
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <Card icon={data.icon} title={data.title}>
      {data.items.map(item => (
        <CardItem key={item.id}>
          <ContactItem data={item} />
        </CardItem>
      ))}
    </Card>
  );
};

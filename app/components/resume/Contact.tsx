import { ContactItem } from '@/types/resume/contact.types';
import React from 'react';
import { TbExternalLink } from 'react-icons/tb';

type ContactProps = {
  data: ContactItem;
};

const Contact = ({ data }: ContactProps) => {
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

export default Contact;

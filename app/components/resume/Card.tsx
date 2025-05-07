import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

type CardProps = {
  icon: IconType;
  title: string;
  children: ReactNode;
  size?: number;
};

const Card = ({ icon: Icon, title, children, size = 18 }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-md border glass border-border-primary">
      <div className="flex flex-row gap-2 justify-center items-center py-1.5">
        <Icon size={size} />
        <div>{title}</div>
      </div>
      {children}
    </div>
  );
};

export default Card;

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
    <div className="overflow-hidden rounded-md border backdrop-blur-sm glass border-text-tertiary/10 bg-bg-primary/5 hover:border-text-tertiary/30 hover:bg-text-secondary/5">
      <div className="flex flex-row gap-2 justify-center items-center py-2">
        <Icon size={size} />
        <div>{title}</div>
      </div>
      {children}
    </div>
  );
};

export default Card;

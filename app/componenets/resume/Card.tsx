import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type CardProps = {
  icon: IconType;
  title: string;
  children: ReactNode;
};

const Card = ({ icon: Icon, title, children }: CardProps) => {
  return (
    <div>
      <div>
        <Icon size={18} />
        <div>{title}</div>
      </div>
      {children}
    </div>
  );
};

export default Card;

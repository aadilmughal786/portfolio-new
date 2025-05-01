import { ReactNode } from "react";

type CardItemProps = {
  children: ReactNode;
};

const CardItem = ({ children }: CardItemProps) => {
  return <div>{children}</div>;
};

export default CardItem;

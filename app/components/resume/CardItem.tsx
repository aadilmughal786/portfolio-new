import { ReactNode } from "react";

type CardItemProps = {
  children: ReactNode;
};

const CardItem = ({ children }: CardItemProps) => {
  return (
    <div className="px-6 py-4 border-t border-border-primary">{children}</div>
  );
};

export default CardItem;

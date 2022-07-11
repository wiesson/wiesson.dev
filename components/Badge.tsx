import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Badge = ({ children }: Props) => {
  return <span className="badge">{children}</span>;
};

export default Badge;

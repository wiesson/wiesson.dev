import type { ComponentChildren } from "preact";

interface Props {
  children?: ComponentChildren;
}

const Badge = ({ children }: Props) => {
  return <span className="badge">{children}</span>;
};

export default Badge;

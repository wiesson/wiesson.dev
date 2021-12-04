import React from "react";
import { MetaFunction } from "remix";

type Props = {
  children: React.ReactNode;
};

export let meta: MetaFunction = () => {
  return {
    title:
      "Arne Wiese | Freier Entwickler mit Fokus auf Web-Technologien und APIs",
    description:
      "Fullstack · JavaScript · TypeScript · NodeJS · Python · Golang",
  };
};

function BaseLayout({ children }: Props) {
  return <main className="container">{children}</main>;
}

export default BaseLayout;

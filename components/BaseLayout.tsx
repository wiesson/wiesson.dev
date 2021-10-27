import React from "react";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

function BaseLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>
          Arne Wiese | Freier Entwickler mit Fokus auf Web-Technologien und APIs
        </title>
        <meta
          name="description"
          content="Fullstack · JavaScript · TypeScript · NodeJS · Python · Golang"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <main className="container">{children}</main>
    </>
  );
}

export default BaseLayout;

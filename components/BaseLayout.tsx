import React from "react";
import Head from "next/head";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const isProd = process.env.NODE_ENV === "production";

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
        {isProd && <script data-domain="arnewiese.de" src="/js/script.js" />}
        <link rel="canonical" href="https://www.arnewiese.de" />
      </Head>

      <SiteHeader />

      <main className="section">{children}</main>

      <SiteFooter />
    </>
  );
}

export default BaseLayout;

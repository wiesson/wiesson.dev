import type { ComponentChildren } from "preact";

// import Head from "next/head";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const isProd = import.meta.env.PROD;

type Props = {
  children: ComponentChildren;
};

function BaseLayout({ children }: Props) {
  return (
    <html lang="de">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <div>
          <title key="title">
            Arne Wiese | Freier Entwickler mit Fokus auf Web-Technologien und APIs
          </title>
          <meta
            name="description"
            key="description"
            content="Fullstack · JavaScript · TypeScript · NodeJS · Python · Golang"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />
          {isProd && <script data-domain="arnewiese.de" src="/js/script.js" />}
        </div>

        <SiteHeader />

        <main className="section space-y-24">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}

export default BaseLayout;

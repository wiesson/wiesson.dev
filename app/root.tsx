import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "remix";
import type { LinksFunction } from "remix";

import globalStylesUrl from "~/styles/global.css";
import darkStylesUrl from "~/styles/dark.css";
import BaseLayout from "~/components/BaseLayout";
import React from "react";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      href: darkStylesUrl,
      media: "(prefers-color-scheme: dark)",
    },
  ];
};

export default function App() {
  return (
    <Document>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const matches = useMatches();
  const includeScripts = matches.some((match) => match.handle?.hydrate);

  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        {includeScripts && <Scripts />}

        {process.env.NODE_ENV === "development" && <LiveReload />}
        <script defer src="/js/script.js" data-domain="arnewiese.de" />
      </body>
    </html>
  );
}

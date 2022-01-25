import { FC } from "react";

import Badge from "./Badge";
import { Listing } from "~/types/Listing";
import { formatDays, formatYear } from "~/utils/dateFormat";

interface Props {
  title: string;
  items: Listing[];
  showDetails?: boolean;
}

export const Title: FC = ({ children }) => (
  <div className="grid grid-layout">
    <div />
    <h2 className="text-xl page-title">{children}</h2>
  </div>
);

export const List = ({ items = [] }: { items: string[] }) => {
  if (items.length === 1) {
    return <div className="mb-2">{items[0]}</div>;
  }

  return (
    <div className="mb-2">
      <ul className="list-disc mb-0">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

const CvListing = ({ title, items, showDetails = false }: Props) => {
  return (
    <section>
      <Title>{title}</Title>

      {items.map((e) => {
        const key = e.from + e.to + e.position;
        const isEducation = e.type === "education";
        const showExtendedLayout = !(
          e.type === "side" || e.type === "education"
        );
        const from = showExtendedLayout
          ? formatDays(e.from)
          : formatYear(e.from);
        const to = showExtendedLayout ? formatDays(e.to) : formatYear(e.to);
        const dates = from === to ? from : `${from} - ${to}`;

        if (isEducation) {
          return (
            <section
              key={key}
              className="section grid grid-layout gap-8 page-break-avoid"
            >
              <div className="text-gray-500 text-right">
                {from} – {to}
              </div>
              <div>
                <div className="font-weight-500">{e.title}</div>
                <div className="text-gray-500 mb-2">{e.location}</div>
                {e.tasks && <List items={e.tasks} />}
              </div>
            </section>
          );
        }

        return (
          <div className="section grid grid-layout page-break-avoid" key={key}>
            <div className="text-gray-500 text-right">{dates}</div>
            <div>
              <header className="mb-2">
                {showExtendedLayout ? (
                  <div>
                    <span className="font-weight-500">{e.position}</span>
                    {" · "}
                    {e.company}
                    {" · "}
                    <span>
                      {e.type === "permanent"
                        ? "festangestellt"
                        : "freiberuflich"}
                    </span>
                  </div>
                ) : (
                  <div>
                    {e.project && (
                      <>
                        <span>{e.project}</span>
                        <span>{" · "}</span>
                      </>
                    )}

                    <span>{e.company}</span>
                  </div>
                )}

                {showDetails && (
                  <div className="text-gray-500">{e.location}</div>
                )}
              </header>

              {e.tasks && <List items={e.tasks} />}
              {e.technologies && (
                <div>
                  {e.technologies.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CvListing;

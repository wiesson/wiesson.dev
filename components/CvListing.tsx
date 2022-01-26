import { formatDays, formatYear } from "@/utils/dateFormat";
import Badge from "./Badge";

export interface Listing {
  company: string;
  project?: string;
  title?: string;
  position: string;
  location: string;
  type: "project" | "permanent" | "side" | "education";
  from: string;
  to: string;
  tasks: string[];
  technologies: string[];
}

interface Props {
  title: string;
  items: Listing[];
  showDetails?: boolean;
}

export const List = ({ items = [] }: { items: string[] }) => {
  if (items.length === 1) {
    return <div className="ml-4 mb-4">{items[0]}</div>;
  }

  return (
    <ul className="list-disc ml-4 mb-0">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
};

const CvListing = ({ title, items, showDetails = false }: Props) => {
  return (
    <section className="section">
      <h3 className="section-title">{title}</h3>

      <div className="space-y-8">
        {items.map((e) => {
          const isEducation = e.type === "education";
          const showExtendedLayout =
            e.type !== "side" && e.type !== "education";

          const from = showExtendedLayout
            ? formatDays(e.from)
            : formatYear(e.from);

          const to = showExtendedLayout ? formatDays(e.to) : formatYear(e.to);
          const dates = from === to ? from : `${from} - ${to}`;

          if (isEducation) {
            return (
              <section
                className="page-break-avoid grid grid-cols-3 gap-4"
                key={e.title}
              >
                <div className="text-gray-500 text-right col-span-1">
                  {from} – {to}
                </div>
                <div className="col-span-2">
                  <div className="font-weight-500">{e.title}</div>
                  <div className="text-gray-500">{e.location}</div>
                  {showDetails && <List items={e.tasks} />}
                </div>
              </section>
            );
          }

          return (
            <div
              className="page-break-avoid grid grid-cols-3 gap-4"
              key={e.title}
            >
              <div className="text-gray-500 text-right col-span-1">{dates}</div>
              <div className="col-span-2 space-y-4">
                <header className="mb-2">
                  {showExtendedLayout ? (
                    <div>
                      <span className="font-weight-500">{e.position}</span>
                      {" · "}
                      {e.company}
                      {" · "}
                      <span className="text-gray-500">
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

                {showDetails && <List items={e.tasks} />}

                {showDetails && (
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
      </div>
    </section>
  );
};

export default CvListing;

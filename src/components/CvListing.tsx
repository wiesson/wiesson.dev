import { formatDays, formatYear } from "@/utils/dateFormat";

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
    return <div class="mb-4">{items[0]}</div>;
  }

  return (
    <ul class="list-disc ml-4 mb-0">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
};

const CvListing = ({ title, items, showDetails = false }: Props) => {
  return (
    <section class="section">
      <h3 class="section-title">{title}</h3>

      <div class="space-y-8">
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
                class="page-break-avoid grid grid-cols-12 gap-4"
                key={e.title}
              >
                <div class="text-gray-500 text-right col-span-3 text-right">
                  {from} – {to}
                </div>
                <div class="col-span-9">
                  <div class="font-weight-500">{e.title}</div>
                  <div class="text-gray-500 text-sm mb-2">{e.location}</div>
                  {showDetails && <List items={e.tasks} />}
                </div>
              </section>
            );
          }

          return (
            <div
              class="page-break-avoid grid grid-cols-12 gap-4"
              key={e.project + "-" + e.company}
            >
              <div class="col-span-3 text-gray-500 text-right">{dates}</div>
              <div class="space-y-4 col-span-9">
                <header class="mb-2">
                  <div class="">{e.project || e.position}</div>
                  <div class="text-sm text-gray-500">{e.company}</div>
                  {showDetails && (
                    <div class="text-gray-500 text-sm">{e.location}</div>
                  )}
                </header>

                {showDetails && <List items={e.tasks} />}

                {showDetails && (
                  <div class="float-left -mx-1">
                    {e.technologies.map((text) => (
                      <div key={text} class="badge m-1">
                        {text}
                      </div>
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

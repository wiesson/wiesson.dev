import { formatDays, formatYear } from "@/utils/dateFormat";
import type { CollectionEntry } from "astro:content";

interface Props {
  title: string;
  items: CollectionEntry<"work">[];
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

const CvListing = ({ title, items, showDetails = false }: Props) => (
  <section class="section">
    <h3 class="section-title">{title}</h3>

    <div class="space-y-8">
      {items.map(({ data }) => {
        const isEducation = data.type === "education";
        const showExtendedLayout =
          data.type !== "side" && data.type !== "education";

        const from = showExtendedLayout
          ? formatDays(data.from)
          : formatYear(data.from);

        const to = showExtendedLayout
          ? formatDays(data.to)
          : formatYear(data.to);
        const dates = from === to ? from : `${from} - ${to}`;

        if (isEducation) {
          return (
            <section
              class="page-break-avoid grid grid-cols-12 gap-4"
              key={data.title}
            >
              <div class="text-gray-500 text-right col-span-3 text-right">
                {from} – {to}
              </div>
              <div class="col-span-9">
                <div class="font-weight-500">{data.title}</div>
                <div class="text-gray-500 text-sm mb-2">{data.location}</div>
                {showDetails && <List items={data.tasks} />}
              </div>
            </section>
          );
        }

        return (
          <div
            class="page-break-avoid grid grid-cols-12 gap-4"
            key={data.project + "-" + data.company}
          >
            <div class="col-span-3 text-gray-500 text-right">{dates}</div>
            <div class="space-y-4 col-span-9">
              <header class="mb-2">
                <div class="">{data.project || data.position}</div>
                <div class="text-sm text-gray-500">{data.company}</div>
                {showDetails && (
                  <div class="text-gray-500 text-sm">{data.location}</div>
                )}
              </header>

              {showDetails && <List items={data.tasks} />}

              {showDetails && (
                <div class="float-left -mx-1">
                  {data.technologies?.map((text) => (
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

export default CvListing;

import { formatDays, formatYear } from "@/utils/dateFormat";
import type { CollectionEntry } from "astro:content";
import ListingContent from "@/components/ListingContent";

interface Props {
  title: string;
  items: CollectionEntry<"work">[];
  showDetails?: boolean;
}

const CvWorkListing = ({ title, items, showDetails = false }: Props) => (
  <section class="section space-y-8">
    <h3 class="text-sm">{title}</h3>

    <div class="space-y-12">
      {items.map(({ data }) => {
        const showExtendedLayout =
          data.type !== "side" && data.contentType !== "education";

        const from = showExtendedLayout
          ? formatDays(data.from)
          : formatYear(data.from);

        const to = showExtendedLayout
          ? formatDays(data.to)
          : formatYear(data.to);
        const dates = from === to ? from : `${from} - ${to}`;

        return (
          <div
            class="page-break-avoid flex gap-2 text-sm"
            key={data.project + "-" + data.company}
          >
            <div class="flex-shrink-0 w-40 text-gray-500">{dates}</div>
            <div class="space-y-2">
              <header>
                <div class="font-medium">
                  {data.project || data.position} / {data.company}
                </div>
                {showDetails && (
                  <div class="text-gray-500 text-sm">{data.location}</div>
                )}
              </header>

              {showDetails && <ListingContent items={data.tasks} />}

              {showDetails && (
                <div>
                  <h3 class="text-xs">Technologien</h3>
                  <div class="float-left space-x-1">
                    {data.technologies?.map((text) => (
                      <span key={text} class="text-xs text-gray-500">
                        {text}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default CvWorkListing;

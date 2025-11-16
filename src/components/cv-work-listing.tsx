/** @jsxImportSource preact */

import { formatDays, formatYear } from "@/utils/dateFormat";
import type { CollectionEntry } from "astro:content";
import ListingContent from "@/components/listing-content";

interface Props {
  title: string;
  items: CollectionEntry<"work">[];
  showDetails?: boolean;
  showYearsOnly?: boolean;
  showBadges?: boolean;
  showIntro?: boolean;
}

const getBadgeLabel = (type: string, projectType: string): string => {
  if (type === "main" && projectType === "permanent") return "Festanstellung";
  if (type === "main" && projectType === "project") return "Freiberuflich";
  if (type === "side") return "Nebenprojekt";
  return "";
};

const CvWorkListing = ({
  title,
  items,
  showDetails = false,
  showYearsOnly = false,
  showBadges = true,
  showIntro = false,
}: Props) => (
  <section class="app-grid py-16">
    <div class="app-text-column">
      <h2 class="cv-h2 mb-6">{title}</h2>

      <div class="space-y-8">
        {items.map(({ data }) => {
          const showExtendedLayout =
            !showYearsOnly &&
            data.type !== "side" &&
            data.contentType !== "education";

          const from = showExtendedLayout
            ? formatDays(data.from)
            : formatYear(data.from);

          const to = showExtendedLayout
            ? formatDays(data.to)
            : formatYear(data.to);
          const dates = from === to ? from : `${from} - ${to}`;

          return (
            <div
              class="page-break-avoid flex gap-4 text-sm"
              key={data.project + "-" + data.company}
            >
              <div class="shrink-0 w-40 cv-text-meta">{dates}</div>
              <div class="space-y-2">
                <header>
                  <div class="cv-text-primary font-medium">
                    {data.project && (
                      <span>
                        {data.project}
                        <span class="cv-text-meta px-2">/</span>
                      </span>
                    )}

                    {data.company}
                  </div>
                  {data.position && (
                    <div class="cv-text-meta text-sm flex items-center gap-2">
                      {data.position}
                    </div>
                  )}
                  <div class="cv-text-meta text-sm flex items-center gap-2">
                    {data.location}
                    {showBadges && (
                      <span class="cv-badge">
                        {getBadgeLabel(data.type, data.projectType)}
                      </span>
                    )}
                  </div>
                </header>

                {showIntro && data.intro && (
                  <div class="prose prose-sm">
                    <p class="text-gray-700">{data.intro}</p>
                  </div>
                )}

                {showDetails && <ListingContent items={data.tasks} />}

                {showDetails && (
                  <div>
                    <h3 class="text-xs">Technologien</h3>
                    <div class="float-left space-x-1">
                      {data.technologies?.map((text: string) => (
                        <span key={text} class="cv-badge">
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
    </div>
  </section>
);

export default CvWorkListing;

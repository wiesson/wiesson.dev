import { CollectionEntry } from "astro:content";
import { formatYear } from "@/utils/dateFormat";
import ListingContent from "@/components/listing-content";

interface Props {
  title: string;
  items: CollectionEntry<"education">[];
  showDetails?: boolean;
}

const CvEducationListing = ({ title, items, showDetails = false }: Props) => (
  <div>
    <section class="app-grid space-y-4">
      <h3 class="cv-h2">{title}</h3>

      <div class="space-y-8">
        {items.map(({ data }) => {
          const from = formatYear(data.from);
          const to = formatYear(data.to);

          return (
            <section
              class="page-break-avoid flex gap-4 text-sm"
              key={data.title}
            >
              <div class="text-gray-500 shrink-0 w-40">
                {from} – {to}
              </div>
              <div>
                <div class="font-weight-500">{data.title}</div>
                <div class="text-gray-500 text-sm mb-2">{data.location}</div>
                {showDetails && <ListingContent items={data.tasks} />}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  </div>
);

export default CvEducationListing;

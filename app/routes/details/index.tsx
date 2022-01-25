import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json } from "remix";
import CvListing from "~/components/CvListing";
import { Listing } from "~/types/Listing";
import PageHeader from "~/components/PageHeader";

import { workExperience, education } from "~/content";

type IndexData = {
  work: Listing[];
  side: Listing[];
  education: Listing[];
};

export let loader: LoaderFunction = () => {
  let data: IndexData = {
    work: workExperience.filter((item) => item.type !== "side"),
    side: workExperience.filter((item) => item.type === "side"),
    education,
  };

  return json(data);
};

export let meta: MetaFunction = () => {
  return {
    title:
      "Arne Wiese | Freier Entwickler mit Fokus auf Web-Technologien und APIs",
    description:
      "Fullstack · JavaScript · TypeScript · NodeJS · Python · Golang",
  };
};

export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <>
      <PageHeader />

      <main>
        <CvListing title="Arbeitserfahrung" items={data.work} showDetails />
        <CvListing title="Nebenprojekte" items={data.side} showDetails />
        <CvListing title="Ausbildung" items={data.education} showDetails />
      </main>
    </>
  );
}

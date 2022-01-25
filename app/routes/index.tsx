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
    work: workExperience
      .filter((item) => item.type !== "side")
      .map((item) => ({
        position: item.position,
        company: item.company,
        project: item.project,
        location: item.location,
        type: item.type,
        from: item.from,
        to: item.to,
      })),
    side: workExperience
      .filter((item) => item.type === "side")
      .map((item) => ({
        position: item.position,
        company: item.company,
        project: item.project,
        location: item.location,
        type: item.type,
        from: item.from,
        to: item.to,
      })),
    education: education.map((item) => ({
      from: item.from,
      to: item.to,
      title: item.title,
      location: item.location,
      type: item.type,
      company: "",
      position: "",
    })),
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
        <CvListing title="Arbeitserfahrung" items={data.work} />
        <CvListing title="Nebenprojekte" items={data.side} />
        <CvListing title="Ausbildung" items={data.education} />
      </main>
    </>
  );
}

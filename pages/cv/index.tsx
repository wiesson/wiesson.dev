import BaseLayout from "@/components/BaseLayout";
import SiteHeader from "@/components/SiteHeader";
import CvListing from "../../components/CvListing";
import { education, workExperience } from "../../data";

function DetailCvPage() {
  return (
    <BaseLayout>
      <SiteHeader />

      <section className="section space-y-8">
        <p className="text-center">
          <a className="link" href="tel:+491751109743">
            +491751109743
          </a>{" "}
          · arne@wiese.me <br />
          Niederkasseler Str. 55, 40547 Düsseldorf <br />
          Deutsch (Muttersprache), Englisch (fließend)
        </p>

        <dl className="grid gap-8 grid-cols-3">
          <dt className="text-gray-500 mb-4 col-span-1 text-right">Frontend</dt>
          <dd className="space-x-2 space-y-2 col-span-2">
            JavaScript, React.js, Next.js, Preact, TypeScript, Svelte, Vue.js,
            SVG, HTML5, CSS3, Sass, Responsive Design, D3, Highcharts.js, Framer
            Motion,
          </dd>
        </dl>

        <dl className="grid gap-8 grid-cols-3">
          <dt className="text-gray-500 mb-4 col-span-1 text-right">Backend</dt>
          <dd className="space-x-2 space-y-2 col-span-2">
            Node.js, Django, Python, GraphQL, REST, TypeScript, Golang,
          </dd>
        </dl>

        <dl className="grid gap-8 grid-cols-3">
          <dt className="text-gray-500 mb-4 col-span-1 text-right">
            Datenbanken
          </dt>
          <dd className="space-x-2 space-y-2 col-span-2">
            Firebase, Cloud Firestore, PostgreSQL, MySQL, MongoDB,
          </dd>
        </dl>

        <dl className="grid gap-8 grid-cols-3">
          <dt className="text-gray-500 mb-4 col-span-1 text-right">
            Sonstiges
          </dt>
          <dd className="space-x-2 space-y-2 col-span-2">
            Agile, Docker, Git, TDD, CI, Scrum, Kanban, Figma, Sentry, GraphCMS,
          </dd>
        </dl>
      </section>

      <CvListing
        title="Arbeitserfahrung"
        items={workExperience.filter((item) => item.type !== "side")}
        showDetails
      />

      <CvListing
        title="Nebenprojekte"
        items={workExperience.filter((item) => item.type === "side")}
        showDetails
      />

      <CvListing title="Ausbildung" items={education} showDetails />
    </BaseLayout>
  );
}

export default DetailCvPage;

export const config = {
  unstable_runtimeJS: false,
};

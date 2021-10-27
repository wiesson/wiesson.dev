import BaseLayout from "@/components/BaseLayout";
import PageHeader from "@/components/PageHeader";
import CvListing from "@/components/CvListing";
import { education, workExperience } from "../data";

function CvPage() {
  return (
    <BaseLayout>
      <PageHeader />

      <CvListing
        title="Arbeitserfahrung"
        items={workExperience.filter((item) => item.type !== "side")}
      />

      <CvListing
        title="Nebenprojekte"
        items={workExperience.filter((item) => item.type === "side")}
      />

      <CvListing title="Ausbildung" items={education} />
    </BaseLayout>
  );
}

export default CvPage;

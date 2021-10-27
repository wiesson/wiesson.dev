import BaseLayout from "@/components/BaseLayout";
import PageHeader from "../../components/PageHeader";
import CvListing from "../../components/CvListing";
import { education, workExperience } from "../../data";

function DetailCvPage() {
  return (
    <BaseLayout>
      <PageHeader />

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
  unstable_runtimeJS: false
};

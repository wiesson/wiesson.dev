import BaseLayout from "@/components/BaseLayout";
import SiteHeader from "@/components/SiteHeader";
import CvListing from "@/components/CvListing";
import { education, workExperience } from "../data";

function CvPage() {
  return (
    <BaseLayout>
      <SiteHeader />

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

export const config = {
  unstable_runtimeJS: false,
};

export default CvPage;

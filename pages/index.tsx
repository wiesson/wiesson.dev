import BaseLayout from "@/components/BaseLayout";
import CvListing from "@/components/CvListing";
import { education, workExperience } from "../data";
import ProjectLogoList from "@/components/ProjectLogoList";

function CvPage() {
  return (
    <BaseLayout>
      <ProjectLogoList />
    </BaseLayout>
  );
}

export const config = {
  unstable_runtimeJS: false,
};

export default CvPage;

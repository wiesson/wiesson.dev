import BaseLayout from "@/components/BaseLayout";
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

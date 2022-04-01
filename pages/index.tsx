import React from "react";
import Head from "next/head";
import BaseLayout from "@/components/BaseLayout";
import ProjectLogoList from "@/components/ProjectLogoList";

function IndexPage() {
  return (
    <BaseLayout>
      <Head>
        <link rel="canonical" href="https://www.arnewiese.de" key="canonical" />
      </Head>
      <ProjectLogoList />
    </BaseLayout>
  );
}

export const config = {
  unstable_runtimeJS: false,
};

export default IndexPage;

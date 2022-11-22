import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="quickstartsdev/quickstarts.dev"
      repoId="R_kgDOIcYtqA"
      category="Announcements"
      categoryId="DIC_kwDOIcYtqM4CSrFQ"
      mapping="title"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="bottom"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}

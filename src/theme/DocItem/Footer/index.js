import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import GiscusComponent from "../../../components/GiscusComponent";

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <h3 className="commentHeader">Queries/ Comments/ Feedbacks</h3>
      <GiscusComponent />
    </>
  );
}

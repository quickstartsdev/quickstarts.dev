import clsx from "clsx";
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import styles from "./index.module.css";

const hotTopics = [
  {
    header: "Frontend",
    topics: [
      { title: "React JS", url: "react-js/overview" },
      { title: "Next JS", url: "next-js/overview" },
      { title: "Vue JS", url: "vue-js/overview" },
      { title: "Angular", url: "angular-js/overview" },
    ],
  },
  {
    header: "Mobile",
    topics: [
      { title: "React Native", url: "react-native/overview" },
      { title: "Flutter", url: "flutter/overview" },
      { title: "Ionic", url: "ionic/overview" },
      { title: "Swift", url: "swift/overview" },
      { title: "Android/Kotlin", url: "kotlin/overview" },
    ],
  },
  {
    header: "Backend",
    topics: [
      { title: "Node JS", url: "node-js/overview" },
      { title: "Python", url: "python/overview" },
      { title: "JAVA", url: "java/overview" },
      { title: "Rust", url: "rust/overview" },
      { title: "Go Lang", url: "go-lang/overview" },
    ],
  },
];

export default function Home() {
  return (
    <Layout title="Home | A guide to devs out there">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome to Quick Starts</h1>
          <div className="button-group">
            <Link className="button button--secondary button--md" to="/docs/react-js/overview">
              Get Started
            </Link>
            <Link className="button button--secondary button--md" to="/about">
              About Project
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={clsx(styles.sectionCentered)}>
          <div className="container">
            <h1>🔥 Hot Topics 🔥</h1>
            {hotTopics.map((topic, index) => {
              return (
                <React.Fragment key={index}>
                  <h4>{topic.header}</h4>
                  <div
                    className={
                      index === hotTopics.length - 1
                        ? "home-button-group"
                        : "home-button-group mb-3"
                    }
                  >
                    {topic.topics.map((item, idx) => (
                      <Link
                        key={idx}
                        className="button button--outline button--primary"
                        to={`/docs/${item.url}`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </section>
        <section
          className={clsx(styles.sectionCentered, styles.sectionCentereBlack)}
        >
          <div className="container">
            <h1>
              Black Lives Matter
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://support.eji.org/give/153413/#!/donation/checkout"
              >
                Support the Equal Justice Initiative
              </a>
            </h1>
          </div>
        </section>
        {/* <section className={clsx(styles.sectionCentered)}>
          <div className="container">
            <h1>🏅 Latest Blogs 🏅</h1>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}

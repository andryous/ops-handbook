import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContainer)}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Operational Knowledge Base</span>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Centralized documentation for systems, processes, and repeatable
            operational work. Built to stay clear, fast, and dependable.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--lg", styles.primaryButton)}
              to="/docs/intro"
            >
              Open Documentation
            </Link>
            <Link
              className={clsx("button button--lg", styles.secondaryButton)}
              to="/docs/intro"
            >
              Explore Getting Started
            </Link>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelDot} />
            <span className={styles.panelDot} />
            <span className={styles.panelDot} />
          </div>
          <div className={styles.panelBody}>
            <div className={styles.panelLine}>
              <span className={styles.panelLabel}>status</span>
              <span className={styles.panelValue}>stable</span>
            </div>
            <div className={styles.panelLine}>
              <span className={styles.panelLabel}>stack</span>
              <span className={styles.panelValue}>docusaurus / react</span>
            </div>
            <div className={styles.panelLine}>
              <span className={styles.panelLabel}>focus</span>
              <span className={styles.panelValue}>docs, workflows, runbooks</span>
            </div>
            <div className={styles.panelDivider} />
            <p className={styles.panelText}>
              A minimal documentation surface with a more polished front door
              for internal operations knowledge.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Ops Handbook"
      description="Internal documentation demo built with Docusaurus"
    >
      <HomepageHeader />
      <main className={styles.mainContent}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

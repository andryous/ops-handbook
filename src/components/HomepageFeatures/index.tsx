import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
  eyebrow: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Structured Documentation",
    eyebrow: "Architecture",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Clear sections and deliberate navigation keep operational references
        easy to locate and maintain.
      </>
    ),
  },
  {
    title: "Practical Workflows",
    eyebrow: "Operations",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Step-by-step guidance supports recurring tasks, handoffs, and routine
        updates without extra noise.
      </>
    ),
  },
  {
    title: "Built for Growth",
    eyebrow: "Platform",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Powered by Docusaurus and React, with a foundation that stays flexible
        as the handbook expands.
      </>
    ),
  },
];

function Feature({ title, Svg, description, eyebrow }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureColumn)}>
      <article className={styles.featureCard}>
        <div className={styles.featureVisual}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureBody}>
          <span className={styles.featureEyebrow}>{eyebrow}</span>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </article>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>Core Capabilities</span>
          <Heading as="h2" className={styles.sectionTitle}>
            A cleaner surface for operational knowledge
          </Heading>
          <p className={styles.sectionDescription}>
            The homepage now emphasizes clarity, discipline, and maintainability
            while staying fully aligned with the existing Docusaurus structure.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

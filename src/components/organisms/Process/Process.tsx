"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "@/components/atoms/Wrapper";
import styles from "./Process.module.scss";
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";
import ProcessCard from "@/components/molecules/ProcessCard";
import { Link } from "react-scroll";
import { SectionsId } from "@/lib/common/enums/sectionsId";
import clsx from "clsx";

interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: "ideation",
    title: "IDEATION",
    subtitle: "Innovate & Define",
    description:
        "Collaborate closely with our team to refine your concept, explore innovative solutions, and establish a clear vision that addresses market needs and user problems.",
  },
  {
    id: "prototyping",
    title: "PROTOTYPING",
    subtitle: "Build to Validate",
    description:
        "Create a minimum viable product (MVP) that allows you to gather rapid feedback from potential users, ensuring your ideas are aligned with market demands before full-scale development.",
  },
  {
    id: "branding",
    title: "BRANDING",
    subtitle: "Establish Your Identity",
    description:
        "Create a compelling brand identity that captures your startup’s essence, differentiates you from competitors, and fosters a connection with your audience.",
  },
  {
    id: "design",
    title: "DESIGN",
    subtitle: "Craft User Experiences",
    description:
        "Develop a user-centric design that enhances the overall experience, focusing on intuitive interfaces that resonate with your target audience and strengthen your brand identity.",
  },
  {
    id: "development",
    title: "DEVELOPMENT",
    subtitle: "Transform Ideas into Reality",
    description:
        "Build your product with a focus on quality, scalability, and performance, ensuring it meets the evolving needs of your users and stands out in the market.",
  },
  {
    id: "support",
    title: "SUPPORT",
    subtitle: "Navigate Growth Challenges",
    description:
        "Provide ongoing support in operations, finance, and strategy to help you scale effectively, addressing challenges as they arise and optimizing for long-term success.",
  },
  {
    id: "networking",
    title: "NETWORKING",
    subtitle: "Connect to Opportunities",
    description:
        "Leverage our extensive network to secure venture investments and strategic partnerships, enhancing your startup’s visibility and opening doors to new opportunities.",
  },
];

const Process = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [offsetValue, setOffsetValue] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tabsElement = document.querySelector(`.${styles.process__tabs}`);

    const handleScroll = () => {
      if (tabsElement) {
        const rect = tabsElement.getBoundingClientRect();
        setIsSticky(rect.top === 64);
      }
    };

    // Calculate offset dynamically
    setOffsetValue(-window.innerHeight / 3);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <section id={SectionsId.Process} className={styles.process}>
        <Wrapper>
          <div className={styles.process__inner}>
            <div className={styles.process__header}>
              <div className={styles.process__box}>
                <SectionSpan>Your Path with us</SectionSpan>
                <SectionTitle>From Idea to Scale</SectionTitle>
                <p className={styles.process__text}>
                  At aivo vc, we excel at turning ideas into thriving businesses
                  with our structured process.
                </p>
              </div>
            </div>

            <div
                className={clsx(styles.process__tabs, {
                  [styles["process__headerScroll"]]: isSticky,
                })}
            >
              {processSteps.map((step) => (
                  <Link
                      key={step.id}
                      to={step.id}
                      className={styles.process__tab}
                      duration={500}
                      offset={offsetValue}
                      smooth={true}
                      activeClass={styles["process__tab--active"]}
                      spy={true}
                  >
                    {step.id}
                  </Link>
              ))}
            </div>
            <div className={styles.process__content}>
              {processSteps.map((step) => (
                  <ProcessCard
                      key={step.id}
                      id={step.id}
                      title={step.title}
                      subtitle={step.subtitle}
                      text={step.description}
                  />
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
  );
};

export default Process;

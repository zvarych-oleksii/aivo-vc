import Wrapper from "@/components/atoms/Wrapper";
import styles from "./Process.module.scss";
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";
import ProcessCard from "@/components/molecules/ProcessCard";
interface ProcessStep {
  title: string;
  subtitle: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "IDEATION",
    subtitle: "Innovate & Define",
    description:
      "Collaborate closely with our team to refine your concept, explore innovative solutions, and establish a clear vision that addresses market needs and user problems.",
  },
  {
    title: "PROTOTYPING",
    subtitle: "Build to Validate",
    description:
      "Create a minimum viable product (MVP) that allows you to gather rapid feedback from potential users, ensuring your ideas are aligned with market demands before full-scale development.",
  },
  {
    title: "BRANDING",
    subtitle: "Establish Your Identity",
    description:
      "Create a compelling brand identity that captures your startup’s essence, differentiates you from competitors, and fosters a connection with your audience.",
  },
  {
    title: "DESIGN",
    subtitle: "Craft User Experiences",
    description:
      "Develop a user-centric design that enhances the overall experience, focusing on intuitive interfaces that resonate with your target audience and strengthen your brand identity.",
  },
  {
    title: "DEVELOPMENT",
    subtitle: "Transform Ideas into Reality",
    description:
      "Build your product with a focus on quality, scalability, and performance, ensuring it meets the evolving needs of your users and stands out in the market.",
  },
  {
    title: "SUPPORT",
    subtitle: "Navigate Growth Challenges",
    description:
      "Provide ongoing support in operations, finance, and strategy to help you scale effectively, addressing challenges as they arise and optimizing for long-term success.",
  },
  {
    title: "NETWORKING",
    subtitle: "Connect to Opportunities",
    description:
      "Leverage our extensive network to secure venture investments and strategic partnerships, enhancing your startup’s visibility and opening doors to new opportunities.",
  },
];

const Process = () => {
  return (
    <section className={styles.process}>
      <Wrapper>
        <div className={styles.process__inner}>
          <div className={styles.process__header}>
            <div className={styles.process__box}>
              <SectionSpan>Your Path with us</SectionSpan>
              <SectionTitle>Accelerate Your Ideas into Action</SectionTitle>
              <p className={styles.process__text}>
                At aivo vc, we excel at turning ideas into thriving businesses
                with our structured process.
              </p>
            </div>
          </div>
          <div className={styles.process__content}>
            {processSteps.map((step, index) => (
              <ProcessCard
                key={index}
                title={step.title}
                subtitle={step.subtitle}
                text={step.description}
                image=""
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Process;

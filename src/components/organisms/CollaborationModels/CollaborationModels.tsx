import Wrapper from "@/components/atoms/Wrapper";
import styles from "./CollaborationModels.module.scss";
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";
import CollaborationCard from "@/components/molecules/CollaborationCard";
import Button from "@/components/atoms/Button";
import { SectionsId } from "@/lib/common/enums/sectionsId";

const collaborationData = [
  {
    title: "Startup Pay Only",
    advantages: ["Full control", "Full ownership"],
    desc: "Full development rate paid by the startup, allowing for complete control and ownership of the project.",
    spotsNum: "unlimited",
  },
  {
    title: "Reduced Rate + Equity",
    advantages: ["Share the journey", "Share the success"],
    desc: "Enjoy a lower development rate in exchange for a share in company equity, aligning our interests for mutual success.",
    spotsNum: 10,
  },
  {
    title: "Equity + Advisory",
    advantages: ["Strategic growth", "Comprehensive support"],
    desc: "Benefit from a reduced rate, equity stake, and comprehensive advisory support to navigate your startup's growth journey effectively.",
    spotsNum: 2,
  },
];

const CollaborationModels = () => {
  return (
    <section id={SectionsId.Models} className={styles.collaborationModels}>
      <Wrapper>
        <div className={styles.collaborationModels__inner}>
          <div className={styles.collaborationModels__header}>
            <SectionSpan>collaboration models</SectionSpan>
            <SectionTitle>Unlocking Potential Together</SectionTitle>
            <p className={styles.collaborationModels__desc}>
              Explore our tailored collaboration models designed to meet the
              unique needs of startups while fostering mutual growth and
              success.
            </p>
          </div>
          <div className={styles.collaborationModels__content}>
            {collaborationData.map((data, index) => (
              <CollaborationCard
                key={index}
                title={data.title}
                advantages={data.advantages}
                desc={data.desc}
                spotsNum={data.spotsNum}
              />
            ))}
          </div>
          <div className={styles.collaborationModels__footer}>
            <Button className={styles.collaborationModels__btn}>
              Start Application
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CollaborationModels;

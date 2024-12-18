import Wrapper from "@/components/atoms/Wrapper";
import styles from "./InovationsCollab.module.scss";
import StatsCard from "@/components/molecules/StatsCard";
import SectionTitle from "@/components/atoms/SectionTitle";
import SectionSpan from "@/components/atoms/SectionSpan";

const InovationCollab = () => {
  const num1 = 200;
  const num2 = 100;
  const num3 = 5;
  const num4 = 40;
  return (
    <section className={styles.inovationCollab}>
      <Wrapper>
        <div className={styles.inovationCollab__inner}>
          <StatsCard
            num1={num1}
            num2={num2}
            num3={num3}
            num4={num4}
          ></StatsCard>
          <div className={styles.inovationCollab__box}>
            <SectionSpan className={styles.inovationCollab__span}>
              Innovation & Collaboration
            </SectionSpan>
            <SectionTitle className={styles.inovationCollab__title}>
              A headline the main vision and concept
            </SectionTitle>
            <p className={styles.inovationCollab__text}>
              A more detailed description of the company that emphasizes the
              headline and gives a more descriptive idea of the company`s
              mission.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default InovationCollab;

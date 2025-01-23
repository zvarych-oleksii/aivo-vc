import Wrapper from "@/components/atoms/Wrapper";
import styles from "./InovationsCollab.module.scss";
import StatsCard from "@/components/molecules/StatsCard";
import SectionTitle from "@/components/atoms/SectionTitle";
import SectionSpan from "@/components/atoms/SectionSpan";
import { SectionsId } from "@/lib/common/enums/sectionsId";

const InovationCollab = () => {
  const num1 = 200;
  const num2 = 100;
  const num3 = 5;
  const num4 = 40;
  return (
    <section id={SectionsId.Numbers} className={styles.inovationCollab}>
      <Wrapper>
        <div className={styles.inovationCollab__inner}>
          <StatsCard className={styles.inovationCollab__stats}
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
              Tailored Equity Services to Elevate Your Startup
            </SectionTitle>
            <p className={styles.inovationCollab__text}>
              To date, we have helped build 17 companies currently worth $ 45M in enterprise value. We have supported companies secure 60+ funding rounds and 98% of our companies have achieved their stated goals with us.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default InovationCollab;

import SectionSpan from "@/components/atoms/SectionSpan";
import styles from "./Approach.module.scss";
import SectionTitle from "@/components/atoms/SectionTitle";
import ServiceCard from "@/components/molecules/ServiceCard";

const Approach = ({id}: { id: string }) => {
    return (
        <section id={id} className={styles.approach}>
            <div className={styles.approach__inner}>
                <div className={styles.approach__header}>
                    <SectionSpan>OUR Approach</SectionSpan>
                    <SectionTitle>The Aivo Approach</SectionTitle>
                </div>
                <div className={styles.approach__content}>
                    <ServiceCard
                        className={styles.approach__item}
                        imageSrc="/images/ideation-with-purpose.svg"
                        title="Ideation with Purpose"
                        text="We begin by immersing ourselves in your vision, using a design thinking approach to ensure your idea aligns with user needs and market demands."
                    />
                    <ServiceCard
                        className={styles.approach__item}
                        imageSrc="/images/build-iterate-succeed.svg"
                        title="Build, Iterate, Succeed"
                        text="Our dedicated tech team builds your product with a focus on continuous improvement, adapting to feedback and market shifts while ensuring seamless operations—all funded by you."
                    />
                    <ServiceCard
                        className={styles.approach__item}
                        imageSrc="/images/flexible-investment.svg"
                        title="Flexible Investment"
                        text="We offer reduced rates in exchange for equity, ensuring our interests align and creating a partnership focused on mutual success."
                    />
                    <ServiceCard
                        className={styles.approach__item}
                        imageSrc="/images/strategic-partnership.svg"
                        title="Strategic Partnership"
                        text="Choose our strategic advisory package, which includes reduced rates and participation in your advisory board or board of directors for ongoing guidance as you scale."
                    />
                </div>
            </div>
        </section>
    );
};

export default Approach;

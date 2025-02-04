import Wrapper from "@/components/atoms/Wrapper";
import Card from "@/components/atoms/Card";
import Image from "next/image";  // ✅ Import Next.js Image component
import styles from './ForInvestors.module.scss'

const ForInvestors = ({id}: {id: string}) => {
    return (
        <section id={id} className={styles.forInvestors}>
            <Wrapper>
                <div className={styles.forInvestors__inner}>
                <Card className={styles.forInvestors__card}>
                    <h4 className={styles.forInvestors__title}>For Investors</h4>
                    <p className={styles.forInvestors__text}>
                        At aivo, we believe in fostering strong partnerships with investors who share our vision for innovation and growth. That’s why we focus exclusively on vetted startups, ensuring that every collaboration is built on a foundation of trust and potential success.
                    </p>
                    <span className={styles.forInvestors__divider}/>
                    <ul className={styles.forInvestors__featureList}>
                        <li className={styles.forInvestors__featureItem}>
                            <figure className={styles.forInvestors__imageWrapper}>
                                <Image
                                    src="/images/for-investors/vetting-process.jpg"
                                    alt="Rigorous Vetting Process"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </figure>
                            <h5 className={styles.forInvestors__featureTitle}>
                                Rigorous Vetting Process
                            </h5>
                            <p className={styles.forInvestors__featureDesc}>
                                We carefully assess each startup to ensure they meet our high standards for viability, innovation, and market fit.
                            </p>
                        </li>
                        <li className={styles.forInvestors__featureItem}>
                            <figure className={styles.forInvestors__imageWrapper}>
                                <Image
                                    src="/images/for-investors/curated-portfolio.jpg"
                                    alt="Curated Portfolio"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </figure>
                            <h5 className={styles.forInvestors__featureTitle}>
                                Curated <br/>
                                Portfolio
                            </h5>
                            <p className={styles.forInvestors__featureDesc}>
                                Gain access to a select group of promising startups that are ready to scale and require investment to reach their next milestone.
                            </p>
                        </li>
                        <li className={styles.forInvestors__featureItem}>
                            <figure className={styles.forInvestors__imageWrapper}>
                                <Image
                                    src="/images/for-investors/collaboration.jpg"
                                    alt="Opportunities for Collaboration"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </figure>
                            <h5 className={styles.forInvestors__featureTitle}>
                                Opportunities for Collaboration
                            </h5>
                            <p className={styles.forInvestors__featureDesc}>
                                Engage with startups at various stages, from ideation to growth, allowing you to invest in projects that align with your strategic goals.
                            </p>
                        </li>
                        <li className={styles.forInvestors__featureItem}>
                            <figure className={styles.forInvestors__imageWrapper}>
                                <Image
                                    src="/images/for-investors/exclusive-deals.jpg"
                                    alt="Exclusive Deals"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </figure>
                            <h5 className={styles.forInvestors__featureTitle}>
                                Exclusive <br/>
                                Deals
                            </h5>
                            <p className={styles.forInvestors__featureDesc}>
                                Sign up to receive early access to exclusive vetted startups and investment opportunities that are not available to the general public.
                            </p>
                        </li>
                    </ul>
                </Card>
                </div>
            </Wrapper>
        </section>
    )
}

export default ForInvestors;

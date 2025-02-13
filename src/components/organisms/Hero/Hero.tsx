import React from "react";
import styles from "./Hero.module.scss";
import Wrapper from "@/components/atoms/Wrapper";
import clsx from "clsx";
import {Link} from "react-scroll";
import DownArrow from "@/components/atoms/icons/DownArrow";
import {LandingSectionsId} from "@/lib/common/enums/landingSectionsId";
import LogoCarousel from "@/components/molecules/LogoCarousel/LogoCarousel";
import SectionTitle from "@/components/atoms/SectionTitle";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <video autoPlay muted loop className={styles.hero__background}>
                <source src="/videos/hero1.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            <Wrapper className={styles.hero__wrapper}>
                <div className={styles.hero__inner}>
                    <div className={styles.hero__box}>
                        <h1 className={clsx(styles.hero__title, styles.hero__highlight)}>
                            Building shared success
                        </h1>
                        <SectionTitle className={styles.hero__subTitle}>
                            One code line at a time
                        </SectionTitle>
                        <p className={styles.hero__text}>
                            With proven expertise in building and scaling successful software startups, we don’t just
                            code—we co-create. When we believe in your vision, we invest alongside you by reducing our
                            rates in exchange for a small equity stake.
                            <br/>
                            This means we’re as committed to your growth as you are, fully aligning our goals to achieve
                            scalable success together.
                        </p>
                    </div>
                    <div className={styles.hero__content}>
                        <p className={styles.hero__spots}>
              <span className={styles.hero__strong}>
                <span className={styles.hero__highlight}>10 </span> spots
                remaining <br/>
              </span>
                            for our <span className={styles.hero__bold}>equity-based </span>
                            services. <br/> All others will default to <br/>
                            <span className={styles.hero__bold}>startup pay only</span>.
                        </p>
                        <Link className={styles.hero__btn}
                              to={LandingSectionsId.Models}
                              smooth={true}
                              spy={true}
                              offset={-70}
                        >
                            <span>Collaboration Models</span>
                            <DownArrow/>
                        </Link>
                    </div>
                </div>
            </Wrapper>
            <LogoCarousel/>
        </section>
    );
};

export default Hero;

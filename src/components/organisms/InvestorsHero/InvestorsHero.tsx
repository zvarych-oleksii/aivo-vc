import React from "react";
import styles from "./InvestorsHero.module.scss";
import Wrapper from "@/components/atoms/Wrapper";
import clsx from "clsx";
import LogoCarousel from "@/components/molecules/LogoCarousel/LogoCarousel";
import {Link as LinkScroll} from "react-scroll";
import {InvestorsSectionsId} from "@/lib/common/enums/investorsSectionsId";

const InvestorsHero = () => {
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
                            Partnerships Built on <br/>
                            Trust and Innovation
                        </h1>
                        <p className={styles.hero__text}>
                            Lorem ipsum dolor sit amet business investigation.<br/> Stated the second line and the
                            third.
                        </p>
                    </div>
                    <div className={styles.hero__content}>
                            <LinkScroll
                                className={styles.hero__btn}
                                to={InvestorsSectionsId.ContactUs}
                                smooth={true}
                                spy={true}
                                offset={-70}
                            >
                                <span>Receive Investment Offer</span>
                            </LinkScroll>
                    </div>
                </div>
            </Wrapper>
            <LogoCarousel/>
        </section>
    );
};

export default InvestorsHero;

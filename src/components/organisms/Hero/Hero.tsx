import React from "react";
import styles from "./Hero.module.scss"; // Import the SCSS module
import Wrapper from "@/components/atoms/Wrapper";
import clsx from "clsx";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <video autoPlay muted loop className={styles.hero__background}>
        <source src="/videos/hero1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Wrapper className={styles.hero__wrapper}>
        <div className={styles.hero__inner}>
          <div className={styles.hero__box}>
            <h1 className={clsx(styles.hero__title, styles.hero__highlight)}>
              Tailored Equity <br />
              Services to Elevate <br />
              Your Startup
            </h1>
            <p>
              Lorem ipsum dolor sit amet business investigation.
              <br />
              Stated the second line and the third.
            </p>
          </div>
          <div className={styles.hero__content}>
            <p className={styles.hero__spots}>
              <span className={styles.hero__strong}>
                <span className={styles.hero__highlight}>10 </span> spots
                remaining <br />
              </span>
              for our <span className={styles.hero__bold}>equity-based </span>
              services. <br /> All others will default to <br />
              <span className={styles.hero__bold}>startup pay only</span>.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;

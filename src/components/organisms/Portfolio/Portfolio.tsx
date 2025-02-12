import React from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import Wrapper from "@/components/atoms/Wrapper";
import styles from './Portfolio.module.scss';
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";
import Image from "next/image";
import Tag from "@/components/atoms/Tag";
import {Navigation} from "swiper/modules";

import RightArrow from "@/components/atoms/icons/RightArrow";
import LeftArrow from "@/components/atoms/icons/LeftArrow";
import {AnimatedCard, CardAnimatedWrapper} from "@/components/atoms/AnimatedCards/AnimatedCards";

const portfolioSlides = [
    {
        id: 1,
        title: "Life Ltd: Creating Smarter Digital Connections",
        description: "We improved Life Ltd's digital engagement through UX optimization and workflow simplification, driving higher engagement and scalable growth.",
        logoSrc: "/images/portfolio/product-1-logo.png",
        imageSrc: "/images/portfolio/product-1.png",
        tags: ["UX/UI Design", "Digital Engagement", "Technology", "User-Centric Design", "Platform Optimization"]
    },
    {
        id: 2,
        title: "Life Ltd: Creating Smarter Digital Connections",
        description: "We improved Life Ltd's digital engagement through UX optimization and workflow simplification, driving higher engagement and scalable growth.",
        logoSrc: "/images/portfolio/product-1-logo.png",
        imageSrc: "/images/portfolio/product-1.png",
        tags: ["UX/UI Design", "Digital Engagement", "Technology", "User-Centric Design", "Platform Optimization"]
    },

    {
        id: 3,
        title: "Life Ltd: Creating Smarter Digital Connections",
        description: "We improved Life Ltd's digital engagement through UX optimization and workflow simplification, driving higher engagement and scalable growth.",
        logoSrc: "/images/portfolio/product-1-logo.png",
        imageSrc: "/images/portfolio/product-1.png",
        tags: ["UX/UI Design", "Digital Engagement", "Technology", "User-Centric Design", "Platform Optimization"]
    },

    {
        id: 4,
        title: "Life Ltd: Creating Smarter Digital Connections",
        description: "We improved Life Ltd's digital engagement through UX optimization and workflow simplification, driving higher engagement and scalable growth.",
        logoSrc: "/images/portfolio/product-1-logo.png",
        imageSrc: "/images/portfolio/product-1.png",
        tags: ["UX/UI Design", "Digital Engagement", "Technology", "User-Centric Design", "Platform Optimization"]
    },
];

const NavigationButtons = () => {
    const swiper = useSwiper();

    return (
        <div className={styles.portfolio__navButtons}>
            <button
                className={`${styles.portfolio__navButton} ${styles.portfolio__prevButton}`}
                onClick={() => swiper.slidePrev()}
            >
                <LeftArrow/>
            </button>
            <button
                className={`${styles.portfolio__navButton} ${styles.portfolio__nextButton}`}
                onClick={() => swiper.slideNext()}
            >
                <RightArrow/>
            </button>
        </div>
    );
};

const Portfolio = ({id}: { id: string }) => {

    return (
        <section className={styles.portfolio} id={id}>
            <Wrapper>
                <div className={styles.portfolio__header}>
                    <SectionSpan>Portfolio</SectionSpan>
                    <div className={styles.portfolio__box}>
                        <SectionTitle>Proven Success Stories</SectionTitle>
                        <p className={styles.portfolio__text}>
                            Our expertise is reflected in the success of the startups we’ve partnered with. Here are a
                            few examples of how we’ve helped turn innovative ideas into thriving businesses.
                        </p>
                    </div>
                </div>
            </Wrapper>
            <CardAnimatedWrapper className={styles.portfolio__inner}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                >

                    {portfolioSlides.map((slide) => (
                        <SwiperSlide key={slide.id} className={styles.portfolio__slideWrapper}>
                            <AnimatedCard className={styles.portfolio__slide}>
                                <div className={styles.portfolio__slideInner}>
                                    <div className={styles.portfolio__slideContent}>
                                        <figure className={styles.portfolio__slideLogo}>
                                            <Image
                                                src={slide.logoSrc}
                                                alt={`${slide.title} Logo`}
                                                fill={true}
                                            />
                                        </figure>
                                        <div className={styles.portfolio__slideDesc}>
                                            <h3 className={styles.portfolio__slideTitle}>
                                                {slide.title}
                                            </h3>
                                            <p className={styles.portfolio__slideText}>
                                                {slide.description}
                                            </p>
                                        </div>
                                        <div className={styles.portfolio__slideTags}>
                                            {slide.tags.map((tag, index) => (
                                                <Tag key={index}>{tag}</Tag>
                                            ))}
                                        </div>
                                    </div>
                                    <figure className={styles.portfolio__slideImageWrapper}>
                                        <Image
                                            src={slide.imageSrc}
                                            alt={slide.title}
                                            className={styles.portfolio__slideImage}
                                            layout="fill"
                                        />
                                    </figure>
                                </div>
                            </AnimatedCard>
                        </SwiperSlide>
                    ))}
                    <NavigationButtons/>
                </Swiper>
            </CardAnimatedWrapper>
        </section>
    );
};

export default Portfolio;

"use client";

import React, {useEffect, useState} from "react";
import Wrapper from "@/components/atoms/Wrapper";
import styles from "./Process.module.scss";
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";
import ProcessCard from "@/components/molecules/ProcessCard";
import {Link} from "react-scroll";
import clsx from "clsx";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Navigation} from "swiper/modules";
import LeftArrow from "@/components/atoms/icons/LeftArrow";
import RightArrow from "@/components/atoms/icons/RightArrow";

interface ProcessStep {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image?: string;
}

const processSteps: ProcessStep[] = [
    {
        id: "ideation",
        title: "IDEATION",
        subtitle: "Define the Problem",
        description:
            "We prepare your solution for growth by optimizing SEO, landing pages, and technical infrastructure to handle increased demand. Our team supports scaling sales, developing inbound marketing, running ads, and integrating payment systems and accounting software to streamline back-office operations. We create solutions to establish a robust finance and operational processes to support a maturing company.",
        image: '/images/process/ideation.svg'
    },
    {
        id: "prototyping",
        title: "PROTOTYPING",
        subtitle: "Test the Concept",
        description:
            "Our in-house development team rapidly builds a minimum viable product (MVP) to validate your assumptions. Sometimes, this means creating just one core component that tackles the key problem. We get the prototype in front of people quickly and cost-effectively, learning from real-world interactions to refine the idea and pivot where needed.",

        image: '/images/process/prototyping.svg'
    },
    {
        id: "design",
        title: "DESIGN",
        subtitle: "Shape User Experience",
        description:
            "Our in-house UX researchers and designers collaborate with you to create intuitive workflows and designs that unlock the full value of your solution. By focusing on ease of use and maximizing impact, we ensure your product delivers an exceptional experience.",

        image: '/images/process/design.svg'
    },
    {
        id: "branding",
        title: "BRANDING",
        subtitle: "Communicate Your Vision",
        description:
            "Our graphic design team develops a complete visual identity that resonates with your target audience. From logo design and UI components to marketing materials and website visuals, we craft a cohesive brand that communicates your solution clearly and effectively across all media.",

        image: '/images/process/branding.svg'
    },
    {
        id: "marketing",
        title: "PRODUCT-MARKET FI",
        subtitle: "Align and Refine",
        description:
            "We upgrade the MVP with our in-house developers using the branded UX to refine the product based on user feedback. Through embedded tracking, A/B testing, and rapid iterations, we validate the solution’s appeal and usability. This stage establishes reliable metrics, optimizes deployment processes, and ensures the product is sellable, scalable, and aligned with your audience.",
        image: '/images/process/product-market.svg'

    },

    {
        id: "scaling",
        title: "SCALING",
        subtitle: "Expand with Purpose",
        description:
            "We prepare your solution for growth by optimizing SEO, landing pages, and technical infrastructure to handle increased demand. Our team supports scaling sales, developing inbound marketing, running ads, and integrating payment systems and accounting software to streamline back-office operations. We create solutions to establish a robust finance and operational processes to support a maturing company",
        image: '/images/process/scaling.svg'
    },
    {
        id: "Funding",
        title: "FUNDING",
        subtitle: "Raise with Confidence",
        description:
            "We connect you with our network of investors, who trust our process and track record. Aivo VC supports you in preparing pitch decks, structuring deals, and navigating legal requirements, ensuring you secure the best possible terms. With proven metrics, a strong foundation, and our guidance, you’ll be well-positioned to raise funds. In some cases, we may invest alongside our network",
        image: '/images/process/funding.svg'
    },
    {
        id: "Success",
        title: "SUCCESS",
        subtitle: "Achieve the Vision",
        description:
            "We help scale your company to its full potential through additional funding rounds, continuous product improvements, and expanding capabilities. Together, we build a profitable, impactful business that reinvests in innovation, maximizing utility and delivering lasting value to the world.*",
        image: '/images/process/success.svg'
    },
];


const NavigationButtons = () => {
    const swiper = useSwiper();

    return (
        <div className={styles.process__navButtons}>
            <button
                className={`${styles.process__navButton} ${styles.process__prevButton}`}
                onClick={() => swiper.slidePrev()}
            >
                <LeftArrow/>
            </button>
            <button
                className={`${styles.process__navButton} ${styles.process__nextButton}`}
                onClick={() => swiper.slideNext()}
            >
                <RightArrow/>
            </button>
        </div>
    );
};

const Process = ({id}: { id: string }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [offsetValue, setOffsetValue] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const tabsElement = document.querySelector(`.${styles.process__tabs}`);

        const handleScroll = () => {
            if (tabsElement) {
                const rect = tabsElement.getBoundingClientRect();
                setIsSticky(rect.top === 64);
            }
        };

        // Calculate offset dynamically
        setOffsetValue(-window.innerHeight / 3);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id={id} className={styles.process}>
            <Wrapper>
                <div className={styles.process__inner}>
                    <div className={styles.process__header}>
                        <div className={styles.process__box}>
                            <SectionSpan>Your Path with us</SectionSpan>
                            <SectionTitle>From Idea to Scale</SectionTitle>
                            <p className={styles.process__text}>
                                At Aivo VC, we help software founders refine ideas, gain momentum, and scale. Think of
                                us as the cable railway on your entrepreneurial climb—hop on at any stage, and we’ll
                                fast-track your journey to the summit.
                                From branding to growth and scaling, we’re here to accelerate your success.
                            </p>
                        </div>
                    </div>

                    <div
                        className={clsx(styles.process__tabs, {
                            [styles["process__headerScroll"]]: isSticky,
                        })}
                    >
                        {processSteps.map((step) => (
                            <Link
                                key={step.id}
                                to={step.id}
                                className={styles.process__tab}
                                duration={500}
                                offset={offsetValue}
                                smooth={true}
                                activeClass={styles["process__tab--active"]}
                                spy={true}
                            >
                                {step.id}
                            </Link>
                        ))}
                    </div>
                    <div className={styles.process__content}>
                        {processSteps.map((step) => (
                            <ProcessCard
                                key={step.id}
                                id={step.id}
                                title={step.title}
                                subtitle={step.subtitle}
                                text={step.description}
                                image={step.image}
                            />
                        ))}
                    </div>
                    <div className={styles.process__slider}>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={"auto"}
                            loop={true}
                        >

                            {processSteps.map((step) => (
                                <SwiperSlide key={step.id} className={styles.process__slide}>
                                    <ProcessCard
                                        id={step.id}
                                        title={step.title}
                                        subtitle={step.subtitle}
                                        text={step.description}
                                        image={step.image}
                                    />
                                </SwiperSlide>
                            ))}
                            <NavigationButtons></NavigationButtons>
                        </Swiper>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Process;

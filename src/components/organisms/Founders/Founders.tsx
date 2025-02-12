import Card from "@/components/atoms/Card";
import styles from "./Founders.module.scss";
import Wrapper from "@/components/atoms/Wrapper";
import FounderProfile from "@/components/molecules/FounderProfile";
import Image from "next/image";

const foundersData = [
    {
        imageSrc: "/images/martin.jpeg",
        title: "Martin Höpperger",
        fullName: "Martin Höpperger",
        role: "Co-Founder",
        description:
            "With over [X years] of experience in the tech industry, Martin has a proven track record of driving innovation and delivering successful products. His expertise spans across [specific areas of expertise, e.g., product management, software development, etc.], and he has led multiple startups from concept to market. Martin is passionate about leveraging technology to solve real-world problems and has a keen eye for identifying market opportunities.",
        linkedInLink: "https://www.linkedin.com/in/martinhoepperger",
        facebookLink: "https://www.facebook.com/martinhoepperger",
    },
    {
        imageSrc: "/images/nor.jpeg",
        title: "Nor Newman",
        fullName: "Nor Newman",
        role: "Co-Founder",
        description:
            "With over [X years] of experience in the tech industry, Nor has a proven track record of driving innovation and delivering successful products. His expertise spans across [specific areas of expertise, e.g., product management, software development, etc.], and he has led multiple startups from concept to market. Nor is passionate about leveraging technology to solve real-world problems and has a keen eye for identifying market opportunities.",
        linkedInLink: "https://www.linkedin.com/in/nornewman",
        facebookLink: "https://www.facebook.com/nornewman",
    },
];

const teamRoles = [
    {
        title: "Creative Strategist",
        description:
            "Shapes your startup’s vision into a concrete, actionable plan while aligning with market trends and user needs.",
        imageSrc: "/images/team/strategist.svg",
    },
    {
        title: "Tech Architect",
        description:
            "Designs and builds scalable, future-proof solutions tailored to your technical challenges.",
        imageSrc: "/images/team/architect.svg",
    },
    {
        title: "UI/UX Innovator",
        description:
            "Delivers intuitive, user-centered designs that prioritize seamless functionality and engagement.",
        imageSrc: "/images/team/uxui.svg",
    },
    {
        title: "Growth Catalyst",
        description:
            "Drives market entry, branding, and growth strategies to maximize your product’s impact and reach.",
        imageSrc: "/images/team/growth.svg",
    },
    {
        title: "Product Manager",
        description:
            "Oversees the entire project lifecycle, ensuring milestones are met and quality remains uncompromised.",
        imageSrc: "/images/team/pm.svg",
    },
    {
        title: "Venture Advisor",
        description:
            "Provides financial and strategic insights to optimize resources, refine pitch decks, and attract investors.",
        imageSrc: "/images/team/advisor.svg",
    },
];

const Founders = ({id}: { id: string }) => {
    return (
        <section id={id} className={styles.founders}>
            <Wrapper>
                <Card className={styles.founders__inner}>
                    <div className={styles.founders__header}>
                        <h2 className={styles.founders__title}>
                            Meet Our <br/> Founders
                        </h2>
                        <p className={styles.founders__subTitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className={styles.founders__content}>
                        {foundersData.map((founder, index) => (
                            <FounderProfile
                                key={index}
                                className={styles.founders__founderItem}
                                imageSrc={founder.imageSrc}
                                title={founder.title}
                                fullName={founder.fullName}
                                role={founder.role}
                                description={founder.description}
                                linkedInLink={founder.linkedInLink}
                                facebookLink={founder.facebookLink}
                            />
                        ))}
                    </div>
                    <p className={styles.founders__joke}>
                        We wear many hats to ensure your startup thrives. Here’s how we
                        bring your vision to life:
                    </p>
                    <ul className={styles.founders__team}>
                        {teamRoles.map((role, index) => (
                            <li key={index} className={styles.founders__teamItem}>
                                <figure className={styles.founders__teamImageWrapper}>
                                    <Image
                                        src={role.imageSrc}
                                        alt={role.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className={styles.founders__teamImage}
                                    />
                                </figure>
                                <h5 className={styles.founders__teamTitle}>{role.title}</h5>
                                <p className={styles.founders__teamText}>{role.description}</p>
                            </li>
                        ))}
                    </ul>
                </Card>
            </Wrapper>
        </section>
    );
};

export default Founders;

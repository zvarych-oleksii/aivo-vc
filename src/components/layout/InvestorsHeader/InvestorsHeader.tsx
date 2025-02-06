"use client";
import Wrapper from "@/components/atoms/Wrapper";
import styles from "./InvestorsHeader.module.scss";
import Logo from "@/components/atoms/icons/Logo";
import {Link as LinkScroll} from "react-scroll";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import {InvestorsSectionsId} from "@/lib/common/enums/investorsSectionsId";
import clsx from "clsx";

const InvestorsHeader = () => {
    return (
        <header className={styles.header}>
            <Wrapper className={styles.header__wrapper}>
                <div className={styles.header__inner}>
                        <Link href={'/'} className={styles.header__logoContainer}>
                            <div className={styles.header__logo}>
                                <Logo/>
                            </div>
                            <span className={styles.header__logoText}>investors</span>
                        </Link>
                    <ul className={styles.header__navList}>
                        <li className={styles.header__navItem}>
                            <LinkScroll
                                to={InvestorsSectionsId.ForInvestors}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                activeClass={styles["header__navItem--active"]}
                            >
                                About
                            </LinkScroll>
                        </li>
                        <li className={styles.header__navItem}>
                            <LinkScroll
                                to={InvestorsSectionsId.Numbers}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                activeClass={styles["header__navItem--active"]}
                            >
                                Numbers
                            </LinkScroll>
                        </li>
                        <li className={styles.header__navItem}>
                            <LinkScroll
                                to={InvestorsSectionsId.Portfolio}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                activeClass={styles["header__navItem--active"]}
                            >
                                Portfolio
                            </LinkScroll>
                        </li>
                        <li className={styles.header__navItem}>
                            <LinkScroll
                                to={InvestorsSectionsId.Approach}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                activeClass={styles["header__navItem--active"]}
                            >
                                Approach
                            </LinkScroll>
                        </li>
                        <li className={styles.header__navItem}>
                            <LinkScroll
                                to={InvestorsSectionsId.Team}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                activeClass={styles["header__navItem--active"]}
                            >
                                Team
                            </LinkScroll>
                        </li>
                        <li className={styles.header__navItem}>
                            <LinkScroll
                                to={InvestorsSectionsId.FAQs}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                activeClass={styles["header__navItem--active"]}
                            >
                                FAQs
                            </LinkScroll>
                        </li>
                        <li className={clsx(styles.header__navItem, styles.header__inverstorsLink)}>
                            <Link href={"/"}>For Startups</Link>
                        </li>
                    </ul>
                    <Link href={"/secure-spot"}>
                        <Button type="button" className={styles.header__btn}>
                            Start Application
                        </Button>
                    </Link>
                </div>
            </Wrapper>
        </header>
    );
};

export default InvestorsHeader;

"use client";
import Wrapper from "@/components/atoms/Wrapper";
import styles from "./Header.module.scss";
import Logo from "@/components/atoms/icons/Logo";
import {Link as LinkScroll} from "react-scroll";
import Link from "next/link";
import {LandingSectionsId} from "@/lib/common/enums/landingSectionsId";
import Button from "@/components/atoms/Button";
import clsx from "clsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <Wrapper className={styles.header__wrapper}>
                <div className={styles.header__inner}>
                    <Link href="/">
                        <div className={styles.header__logoContainer}>
                            <div className={styles.header__logo}>
                                <Logo/>
                            </div>
                            <span className={styles.header__logoText}>startups</span>
                        </div>
                    </Link>

                    <ul className={styles.header__navList}>
                        <li className={styles.header__navItem}>
                            <LinkScroll
                                to={LandingSectionsId.Process}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                activeClass={styles["header__navItem--active"]}
                            >
                                Process
                            </LinkScroll>
                        </li>
                        <li className={styles.header__navItem}>
                            <LinkScroll
                                to={LandingSectionsId.Approach}
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
                                to={LandingSectionsId.Team}
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
                                to={LandingSectionsId.Numbers}
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
                                to={LandingSectionsId.Portfolio}
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
                                to={LandingSectionsId.Models}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                activeClass={styles["header__navItem--active"]}
                            >
                                Models
                            </LinkScroll>
                        </li>
                        <li className={styles.header__navItem}>
                            <LinkScroll
                                to={LandingSectionsId.FAQs}
                                smooth={true}
                                spy={true}
                                offset={-70}
                                activeClass={styles["header__navItem--active"]}
                            >
                                FAQs
                            </LinkScroll>
                        </li>
                        <li className={clsx(styles.header__navItem, styles.header__inverstorsLink)}>
                            <Link href={"/investors"}>For Investors</Link>
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

export default Header;

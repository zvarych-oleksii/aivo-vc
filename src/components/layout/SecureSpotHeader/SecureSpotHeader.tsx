"use client";
import Wrapper from "@/components/atoms/Wrapper";
import styles from "./SecureSpotHeader.module.scss";
import Logo from "@/components/atoms/icons/Logo";
import Link from "next/link";
import Button from "@/components/atoms/Button";

const SecureSpotHeader = () => {
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

export default SecureSpotHeader;

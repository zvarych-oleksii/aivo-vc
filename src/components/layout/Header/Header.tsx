import Wrapper from "@/components/atoms/Wrapper";
import styles from "./Header.module.scss";
import Link from "next/link";
import clsx from "clsx";
import Logo from "@/components/atoms/icons/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.header__inner}>
          <Link href={""}>
            <div className={styles.header__logoContainer}>
              <div className={styles.header__logo}>
                <Logo />
              </div>
              <span className={styles.header__logoText}>startups</span>
            </div>
          </Link>

          <ul className={styles.header__navList}>
            <li
              className={clsx(
                styles.header__navItem,
                styles["header__navItem--active"],
              )}
            >
              <Link href={""}>Process</Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href={""}>Approach</Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href={""}>Team</Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href={""}>Numbers</Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href={""}>Portfolio</Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href={""}>Models</Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href={""}>For Investors</Link>
            </li>
            <li className={styles.header__navItem}>
              <Link href={""}>FAQs</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;

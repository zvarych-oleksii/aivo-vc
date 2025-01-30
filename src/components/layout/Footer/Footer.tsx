import Wrapper from "@/components/atoms/Wrapper";
import styles from "./Footer.module.scss";
import Link from "next/link";
import LinkedIn from "@/components/atoms/icons/LinkedIn";
import Facebook from "@/components/atoms/icons/Facebook";
import Logo from "@/components/atoms/icons/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.footer__inner}>
          <Link href={""}>
            <div className={styles.footer__logo}>
              <Logo />
            </div>
          </Link>
          {/*<ul className={styles.footer__socialList}>*/}
          {/*  <li className={styles.footer__socialItem}>*/}
          {/*    <Link target={"_blank"} href={"https://www.linkedin.com/"}>*/}
          {/*      <div className={styles.footer__socialIcon}>*/}
          {/*        <LinkedIn />*/}
          {/*      </div>*/}
          {/*    </Link>*/}
          {/*  </li>*/}

          {/*  <li className={styles.footer__socialItem}>*/}
          {/*    <Link target={"_blank"} href={"https://www.facebook.com/"}>*/}
          {/*      <div className={styles.footer__socialIcon}>*/}
          {/*        <Facebook />*/}
          {/*      </div>*/}
          {/*    </Link>*/}
          {/*  </li>*/}
          {/*</ul>*/}
          <p className={styles.footer__copyrights}>
            Copyright &copy; 2024 aivo vc
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

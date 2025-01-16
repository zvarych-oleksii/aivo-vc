import styles from "./ContactUs.module.scss";
import Wrapper from "@/components/atoms/Wrapper";
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <Wrapper>
        <div className={styles.contactUs__inner}>
          <div className={styles.contactUs__header}>
            <SectionSpan>Contact us</SectionSpan>
            <SectionTitle>And That`s How It Works</SectionTitle>
          </div>
          <div className={styles.contactUs__content}>
            <div className={styles.contactUs__box}>
              <h3 className={styles.contactUs__title}>For Investors</h3>
              <p className={styles.contactUs__text}>
                At aivo, we believe in fostering strong partnerships with
                investors who share our vision for innovation and growth. That’s
                why we focus exclusively on vetted startups, ensuring that every
                collaboration is built on a foundation of trust and potential
                success.
              </p>
            </div>
            <div className={styles.contactUs__card}>
              <Input placeholder={"Your email"}></Input>
              <Button className={styles.contactUs__btn}>
                Receive Investment Offers
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactUs;

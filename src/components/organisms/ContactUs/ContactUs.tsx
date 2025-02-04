import styles from "./ContactUs.module.scss";
import Wrapper from "@/components/atoms/Wrapper";
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import { SendEmailData } from "@/lib/schemas/sendEmail";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";

const ContactUs = ({ id }: { id: string }) => {
    const form = useForm<SendEmailData>();
    const {
        formState: { errors },
        register,
        handleSubmit: rhfHandleSubmit,
    } = form;

    const [state, formspreeHandleSubmit] = useFormspree<SendEmailData>("xldgnaqg");

    const onSubmit = async (data: SendEmailData) => {
        await formspreeHandleSubmit(data);
    };

    return (
        <section id={id} className={styles.contactUs}>
            <Wrapper>
                <div className={styles.contactUs__inner}>
                    <div className={styles.contactUs__header}>
                        <SectionSpan>Contact us</SectionSpan>
                        <SectionTitle>And That’s How It Works</SectionTitle>
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
                        {/* Corrected form submission */}
                        <form onSubmit={rhfHandleSubmit(onSubmit)} className={styles.contactUs__card}>
                            <Input
                                {...register("email", { required: "Email is required" })}
                                error={errors.email?.message}
                                placeholder="Your email"
                            />
                            <Button type="submit" className={styles.contactUs__btn} disabled={state.submitting}>
                                {state.submitting ? "Submitting..." : "Receive Investment Offers"}
                            </Button>
                        </form>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default ContactUs;

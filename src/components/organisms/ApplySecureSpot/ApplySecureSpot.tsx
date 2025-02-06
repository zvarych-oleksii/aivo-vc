"use client";

import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import ApplySecureSpotForm from "@/components/molecules/ApplySecureSpotForm";
import styles from "./ApplySecureSpot.module.scss";
import Button from "@/components/atoms/Button";
import Wrapper from "@/components/atoms/Wrapper";
import { SecureSpotData } from "@/lib/schemas/secureSpot";
import CheckCircle from "@/components/atoms/icons/CheckCircle";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const ApplySecureSpot = () => {
    const form = useForm<SecureSpotData>();

    const {
        handleSubmit: rhfHandleSubmit,
    } = form;

    const [state, formspreeHandleSubmit] = useFormspree<SecureSpotData>("movjdgao");
    const [showConfetti, setShowConfetti] = useState(false);

    const onSubmit = async (data: SecureSpotData) => {
        await formspreeHandleSubmit(data);
    };

    useEffect(() => {
        if (state.succeeded) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 10000);
        }
    }, [state.succeeded]);

    if (state.succeeded) {
        return (
            <section className={styles.applySecureSpot}>
                {showConfetti && <Confetti />}
                <Wrapper>
                    <div className={styles.applySecureSpot__cardWrapper}>
                        <div className={styles.applySecureSpot__card}>
                            <CheckCircle />
                            <p>Thank you!</p>
                            <p>We will review your form as soon as possible</p>
                        </div>
                    </div>
                </Wrapper>
            </section>
        );
    }

    return (
        <section className={styles.applySecureSpot}>
            <Wrapper>
                <div className={styles.applySecureSpot__inner}>
                    <h1 className={styles.applySecureSpot__title}>
                        Apply now to secure your spot
                    </h1>

                    <form onSubmit={rhfHandleSubmit(onSubmit)}>
                        <ApplySecureSpotForm
                            className={styles.applySecureSpot__form}
                            form={form}
                        />
                        <Button
                            className={styles.applySecureSpot__btn}
                            type="submit"
                        >
                            {state.submitting ? "Submitting..." : "Next"}
                        </Button>
                    </form>
                </div>
            </Wrapper>
        </section>
    );
};

export default ApplySecureSpot;

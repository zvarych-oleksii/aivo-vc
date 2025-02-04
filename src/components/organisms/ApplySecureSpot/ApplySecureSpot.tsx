"use client";

import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import ApplySecureSpotForm from "@/components/molecules/ApplySecureSpotForm";
import styles from "./ApplySecureSpot.module.scss";
import Button from "@/components/atoms/Button";
import Wrapper from "@/components/atoms/Wrapper";
import { SecureSpotData } from "@/lib/schemas/secureSpot";
import CheckCircle from "@/components/atoms/icons/CheckCircle";

const ApplySecureSpot = () => {
    const form = useForm<SecureSpotData>({
        mode: "onChange",
    });

    const {
        formState: { isValid },
        handleSubmit: rhfHandleSubmit, // renamed for clarity
    } = form;

    const [state, formspreeHandleSubmit] = useFormspree<SecureSpotData>("movjdgao");

    const onSubmit = async (data: SecureSpotData) => {
        await formspreeHandleSubmit(data);
    };

    if (state.succeeded) {
        return (
            <section className={styles.applySecureSpot}>
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

                    {/* Properly wrapped handleSubmit */}
                    <form onSubmit={rhfHandleSubmit(onSubmit)}>
                        <ApplySecureSpotForm
                            className={styles.applySecureSpot__form}
                            form={form}
                        />
                        <Button
                            className={styles.applySecureSpot__btn}
                            type="submit"
                            disabled={state.submitting || !isValid}
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

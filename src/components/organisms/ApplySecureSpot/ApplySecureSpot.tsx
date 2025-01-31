"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import ApplySecureSpotForm from "@/components/molecules/ApplySecureSpotForm";
import styles from "./ApplySecureSpot.module.scss";
import Button from "@/components/atoms/Button";
import Wrapper from "@/components/atoms/Wrapper";
import {SecureSpotData} from "@/lib/schemas/secureSpot";
import CheckCircle from "@/components/atoms/icons/CheckCircle";

const ApplySecureSpot = () => {
    const form = useForm<SecureSpotData>({
        mode: "onChange",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data: SecureSpotData) => {
        console.log("Form Data:", data);
        setIsSubmitted(true);
    };

    return (
        <section className={styles.applySecureSpot}>
            <Wrapper>
                <div className={styles.applySecureSpot__inner}>
                    {!isSubmitted ? (
                        <>
                            <h1 className={styles.applySecureSpot__title}>
                                Apply now to secure your spot
                            </h1>

                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <ApplySecureSpotForm
                                    className={styles.applySecureSpot__form}
                                    form={form}
                                />
                                <Button
                                    className={styles.applySecureSpot__btn}
                                    type="submit"
                                    disabled={!form.formState.isValid}
                                >
                                    Next
                                </Button>
                            </form>
                        </>
                    ) : (
                        <div className={styles.applySecureSpot__cardWrapper}>
                            <div className={styles.applySecureSpot__card}>
                                <CheckCircle/>
                                <p>Thank you!</p>
                                <p>
                                    We will review your form as soon as <br/> possible
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </Wrapper>
        </section>
    );
};

export default ApplySecureSpot;

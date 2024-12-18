"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Wrapper from "@/components/atoms/Wrapper";
import ContactForm from "@/components/molecules/ContactForm";
import styles from "./ApplicationProcess.module.scss";
import contactFormSchema, {
  ContactFormInputs,
} from "@/lib/schemas/chontactFormSchema";
import Button from "@/components/atoms/Button";

const ApplicationProcess: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <section className={styles.applicationProcess}>
      <Wrapper>
        <div className={styles.applicationProcess__inner}>
          <div className={styles.applicationProcess__box}>
            <h2 className={styles.applicationProcess__title}>
              Start Application
            </h2>
            <p className={styles.applicationProcess__text}>
              We&apos;ll review your details and set up a call to discuss the
              details and choose a collaboration model
            </p>
          </div>

          <form
            className={styles.applicationProcess__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <ContactForm register={register} errors={errors} />
            <Button>Send Request</Button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default ApplicationProcess;

"use client";
import Wrapper from "@/components/atoms/Wrapper";
import styles from "./ApplicationProcess.module.scss";
import Button from "@/components/atoms/Button";
import StepCard from "@/components/molecules/StepCard";
import RightArrow from "@/components/atoms/icons/RightArrow";
import {useRouter} from "next/navigation";
import {FC} from "react";
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";

const ApplicationProcess: FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ContactFormInputs>({
  //   resolver: zodResolver(contactFormSchema),
  // });

  const router = useRouter();
  const handleApplyNowClick = () => {
    router.push("/secure-spot");
  };
  // const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
  //   console.log("Submitted data:", data);
  // };

  return (
    <section className={styles.applicationProcess}>
      <Wrapper>
        <div className={styles.applicationProcess__header}>
          <SectionSpan>Application Process</SectionSpan>
          <SectionTitle>And That`s How It Works</SectionTitle>
        </div>
        <div className={styles.applicationProcess__steps}>
          <StepCard
            number={1}
            title="Submit your idea"
            text="Describe your concept stage, team, target market, goals, problem insights, and team skills briefly."
            className={styles.applicationProcess__step}
          ></StepCard>
          <StepCard
            number={2}
            title="Discovery call to align vision"
            text="After submission, we'll review your proposal and schedule a call to talk about valuation, equity, and rate reductions."
            className={styles.applicationProcess__step}
          ></StepCard>
          <StepCard
            number={3}
            title="Collaborate to build and scale"
            text="Collaborate with our tech team to set project timelines and goals that match your vision. Prioritize clear communication and efficient execution to bring your idea to life."
            className={styles.applicationProcess__step}
          ></StepCard>
        </div>
        <div className={styles.applicationProcess__inner}>
          {/*<div className={styles.applicationProcess__box}>*/}
          {/*  <h2 className={styles.applicationProcess__title}>*/}
          {/*    Start Application*/}
          {/*  </h2>*/}
          {/*  <p className={styles.applicationProcess__text}>*/}
          {/*    We&apos;ll review your details and set up a call to discuss the*/}
          {/*    details and choose a collaboration model*/}
          {/*  </p>*/}
          {/*</div>*/}

          {/*<form*/}
          {/*  className={styles.applicationProcess__form}*/}
          {/*  onSubmit={handleSubmit(onSubmit)}*/}
          {/*>*/}
          {/*  <ContactForm register={register} errors={errors} />*/}
          {/*  <Button className={styles.applicationProcess__btn}>Send Request</Button>*/}
          {/*</form>*/}
          <div className={styles.applicationProcess__box}>
            <h3 className={styles.applicationProcess__boxTitle}>Ready to elevate your startup?<br/>
              Apply now to secure your spot.</h3>
            <p className={styles.applicationProcess__boxText}>We`ll review your details and set up <br/>
              a call to discuss the details and choose a collaboration model</p>
            <Button onClick={handleApplyNowClick} className={styles.applicationProcess__boxBtn}><span>Apply now</span><RightArrow/></Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ApplicationProcess;

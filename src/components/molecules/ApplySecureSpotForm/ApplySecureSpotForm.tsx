import Input from "@/components/atoms/Input";
import styles from "./ApplySecureSpotForm.module.scss";
import TextArea from "@/components/atoms/TextArea";
import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import { UseFormReturn } from "react-hook-form";
import { SecureSpotData } from "@/lib/schemas/secureSpot";

export interface ApplySecureSpotFormProps
  extends HTMLAttributes<HTMLDivElement> {
  form: UseFormReturn<SecureSpotData>;
}

const ApplySecureSpotForm: FC<ApplySecureSpotFormProps> = ({
  className,
  form,
  ...props
}) => {
  const {
    formState: { errors },
    register,
  } = form;

  return (
    <div className={clsx(styles.applySecureSpotForm, className)} {...props}>
      <Input
        className={styles.applySecureSpotForm__input}
        label="First Name"
        {...register("firstName", { required: "First name is required" })}
        error={errors.firstName?.message}
      />
      <Input
        className={styles.applySecureSpotForm__input}
        label="Last Name"
        {...register("lastName", { required: "Last name is required" })}
        error={errors.lastName?.message}
      />
      <Input
        className={styles.applySecureSpotForm__input}
        label="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })}
        error={errors.email?.message}
      />
      <Input
        className={styles.applySecureSpotForm__input}
        label="Company Name"
        {...register("companyName", { required: "Company name is required" })}
        error={errors.companyName?.message}
      />
      <Input
        className={styles.applySecureSpotForm__input}
        label="What stage are you in?"
        {...register("stage", { required: "Stage is required" })}
        error={errors.stage?.message}
      />
      <Input
        className={styles.applySecureSpotForm__input}
        label="What industry are you in?"
        {...register("industry", { required: "Industry is required" })}
        error={errors.industry?.message}
      />
      <TextArea
        className={styles.applySecureSpotForm__textarea}
        label="Describe your idea"
        placeholder={"Describe your product, current stage you are in, the progress you've made."}
        {...register("ideaDescription", {
          required: "Description is required",
        })}
        error={errors.ideaDescription?.message}
      />
    </div>
  );
};

export default ApplySecureSpotForm;

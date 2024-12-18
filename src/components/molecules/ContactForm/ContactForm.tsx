import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";
import { ContactFormInputs } from "@/lib/schemas/chontactFormSchema";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./ContactForm.module.scss";

interface ContactFormProps {
  register: UseFormRegister<ContactFormInputs>;
  errors: FieldErrors<ContactFormInputs>;
}

const ContactForm: React.FC<ContactFormProps> = ({ register, errors }) => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.contactForm__inputs}>
        {" "}
        <Input
          placeholder="Your name"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          placeholder="Your email"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <TextArea
        placeholder="Details"
        {...register("details")}
        error={errors.details?.message}
      />
    </div>
  );
};

export default ContactForm;

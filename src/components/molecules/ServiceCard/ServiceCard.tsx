import { FC, HTMLAttributes } from "react";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";

export interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  text: string;
  title: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  className = "",
  imageSrc,
  title,
  text,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <figure className={styles.serviceCard__imageWrapper}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={styles.serviceCard__image}
        />
      </figure>
      <h4 className={styles.serviceCard__title}>{title}</h4>
      <p className={styles.serviceCard__text}>{text}</p>
    </div>
  );
};

export default ServiceCard;

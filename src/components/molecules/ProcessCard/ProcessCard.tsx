import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./ProcessCard.module.scss";
import SectionSpan from "@/components/atoms/SectionSpan";
import SectionTitle from "@/components/atoms/SectionTitle";
import Image from "next/image";

export interface ProcessCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

const ProcessCard: FC<ProcessCardProps> = ({
  title,
  subtitle,
  text,
  image,
  className,
}) => {
  return (
    <div className={clsx(styles.processCard, className)}>
      <div className={styles.processCard__inner}>
        <div className={styles.processCard__content}>
          <SectionSpan>{title}</SectionSpan>
          <SectionTitle>{subtitle}</SectionTitle>
          <p>{text}</p>
        </div>
        <figure className={styles.processCard__imageWrapper}>
          <Image
            src={"/images/Container.jpg"}
            alt="Process Step"
            layout="fill"
            objectFit="cover"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProcessCard;

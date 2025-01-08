import Card from "@/components/atoms/Card";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./CollaborationCard.module.scss";
import Image from "next/image";

export interface CollaborationCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  advantages: string[];
  desc: string;
  spotsNum: number | string;
  imageSrc?: string;
}

const CollaborationCard: FC<CollaborationCardProps> = ({
  title,
  advantages,
  desc,
  spotsNum,
  imageSrc = "",
  className,
}) => {
  return (
    <Card className={clsx(styles.collaborationCard, className)}>
      <div className={styles.collaborationCard__inner}>
        <figure className={styles.collaborationCard__imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={styles.collaborationCard__image}
          />
        </figure>
        <div className={styles.collaborationCard__header}>
          <h3 className={styles.collaborationCard__title}>{title}</h3>
          <span className={styles.collaborationCard__advantages}>
            {advantages.join(", ")}
          </span>
        </div>
        <p className={styles.collaborationCard__desc}>{desc}</p>
        {spotsNum === "unlimited" ? (
          <p className={styles.collaborationCard__spots}>
            <span className={styles.collaborationCard__spotsNum}>
              {spotsNum}
            </span>{" "}
            spots
          </p>
        ) : (
          <p className={styles.collaborationCard__spots}>
            <span className={styles.collaborationCard__spotsNum}>
              {spotsNum}
            </span>{" "}
            spots remaining
          </p>
        )}
      </div>
    </Card>
  );
};

export default CollaborationCard;

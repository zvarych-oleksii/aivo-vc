import clsx from "clsx";
import {FC, HTMLAttributes} from "react";
import styles from "./CollaborationCard.module.scss";
import Image from "next/image";
import {AnimatedCard} from "@/components/atoms/AnimatedCards/AnimatedCards";

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
        <AnimatedCard className={clsx(styles.collaborationCard, className)}>
            <div className={styles.collaborationCard__inner}>
                { imageSrc &&
                <figure className={styles.collaborationCard__imageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className={styles.collaborationCard__image}
                    />
                </figure>
                }
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
        </AnimatedCard>
    );
};

export default CollaborationCard;

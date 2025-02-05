import styles from "./StepCard.module.scss";
import {FC, HTMLAttributes} from "react";
import clsx from "clsx";
import {AnimatedCard} from "@/components/atoms/AnimatedCards/AnimatedCards";

export interface StepCardProps extends HTMLAttributes<HTMLDivElement> {
    number: number;
    title: string;
    text: string;
}

const StepCard: FC<StepCardProps> = ({
                                         number,
                                         title,
                                         text,
                                         className,
                                         ...props
                                     }) => {
    return (
        <AnimatedCard className={clsx(styles.stepCard, className)} {...props}>
            <div className={styles.stepCard__inner}>
                <span className={styles.stepCard__number}>Step {number}</span>
                <div className={styles.stepCard__content}>
                    <h4 className={styles.stepCard__title}>{title}</h4>
                    <p className={styles.stepCard__text}>{text}</p>
                </div>
            </div>
        </AnimatedCard>
    );
};

export default StepCard;

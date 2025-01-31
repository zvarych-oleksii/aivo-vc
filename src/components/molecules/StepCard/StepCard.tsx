import Card from "@/components/atoms/Card";
import styles from "./StepCard.module.scss";
import {FC, HTMLAttributes} from "react";
import clsx from "clsx";

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
        <Card className={clsx(styles.stepCard, className)} {...props}>
            <div className={styles.stepCard__inner}>
                <span className={styles.stepCard__number}>Step {number}</span>
                <div className={styles.stepCard__content}>
                    <h4 className={styles.stepCard__title}>{title}</h4>
                    <p className={styles.stepCard__text}>{text}</p>
                </div>
            </div>
        </Card>
    );
};

export default StepCard;

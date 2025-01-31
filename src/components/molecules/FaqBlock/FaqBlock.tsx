import Card from "@/components/atoms/Card";
import styles from "./FaqBlock.module.scss";
import {FC} from "react";
import clsx from "clsx";
import IconButton from "@/components/atoms/IconButton";
import Minus from "@/components/atoms/icons/Minus";
import Plus from "@/components/atoms/icons/Plus";

export interface FaqBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    question: string;
    answer: string;
    open: boolean;
}

const FaqBlock: FC<FaqBlockProps> = ({question, answer, open, ...props}) => {
    return (
        <Card
            className={clsx(styles.faqBlock, {
                [styles["faqBlock--open"]]: open,
            })}
            {...props}
        >
            <div
                className={clsx(styles.faqBlock__inner, {
                    [styles["faqBlock__inner--open"]]: open,
                })}
            >
                <div className={clsx(styles.faqBlock__box)}>
                    <div className={styles.faqBlock__header}>
                        <h4 className={clsx(styles.faqBlock__title)}>{question}</h4>
                        <IconButton>{open ? <Minus/> : <Plus/>}</IconButton>
                    </div>
                    <p
                        className={clsx(styles.faqBlock__answer, {
                            [styles["faqBlock__answer--open"]]: open,
                        })}
                    >
                        {answer}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default FaqBlock;

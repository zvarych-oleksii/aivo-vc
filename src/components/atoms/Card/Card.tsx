import clsx from "clsx";
import styles from "./Card.module.scss";
import {FC} from "react";

const Card: FC<React.HTMLAttributes<HTMLDivElement>> = ({
                                                            children,
                                                            className,
                                                            ...props
                                                        }) => {
    return (
        <div className={clsx(styles.card, className)} {...props}>
            {children}
        </div>
    );
};

export default Card;

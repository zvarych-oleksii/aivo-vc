import clsx from "clsx";
import styles from "./IconButton.module.scss";
import {FC} from "react";

const IconButton: FC<React.HTMLAttributes<HTMLButtonElement>> = ({
                                                                     children,
                                                                     className,
                                                                     ...props
                                                                 }) => {
    return (
        <button className={clsx(styles.iconButton, className)} {...props}>
            {children}
        </button>
    );
};

export default IconButton;

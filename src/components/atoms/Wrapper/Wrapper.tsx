import clsx from "clsx";
import styles from "./Wrapper.module.scss";
import {FC} from "react";

const Wrapper: FC<React.HTMLAttributes<HTMLDivElement>> = ({
                                                               children,
                                                               className,
                                                               ...props
                                                           }) => {
    return (
        <div className={clsx(styles.wrapper, className)} {...props}>
            {children}
        </div>
    );
};

export default Wrapper;

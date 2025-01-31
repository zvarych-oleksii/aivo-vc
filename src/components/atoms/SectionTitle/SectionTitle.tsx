import clsx from "clsx";
import styles from "./SectionTitle.module.scss";
import {FC, HTMLAttributes} from "react";

const SectionTitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
                                                                  children,
                                                                  className,
                                                                  ...props
                                                              }) => {
    return (
        <h2 className={clsx(styles.sectionTitle, className)} {...props}>
            {children}
        </h2>
    );
};

export default SectionTitle;

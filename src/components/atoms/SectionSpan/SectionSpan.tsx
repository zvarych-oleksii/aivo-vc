import clsx from "clsx";
import styles from "./SectionSpan.module.scss";
import {FC, HTMLAttributes} from "react";

const SectionSpan: FC<HTMLAttributes<HTMLSpanElement>> = ({
                                                              children,
                                                              className,
                                                              ...props
                                                          }) => {
    return (
        <span className={clsx(styles.sectionSpan, className)} {...props}>
      {children}
    </span>
    );
};

export default SectionSpan;

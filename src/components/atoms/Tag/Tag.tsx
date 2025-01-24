import styles from './Tag.module.scss'
import {FC, HTMLAttributes} from "react";
import clsx from "clsx";


const Tag: FC<HTMLAttributes<HTMLSpanElement>> = ({children, className, ...props}) => {
    return (
        <span className={clsx(styles.tag, className)} {...props}>
            {children}
        </span>
    )
}

export default Tag;
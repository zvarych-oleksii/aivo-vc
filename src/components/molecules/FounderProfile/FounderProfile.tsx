import Image from "next/image";
import styles from "./FounderProfile.module.scss";
import {FC, HTMLAttributes} from "react";
import clsx from "clsx";
import Facebook from "@/components/atoms/icons/Facebook";
import LinkedIn from "@/components/atoms/icons/LinkedIn";

export interface FounderProfileProps extends HTMLAttributes<HTMLDivElement> {
    imageSrc: string;
    title: string;
    fullName: string;
    role: string;
    description: string;
    linkedInLink: string;
    facebookLink: string;
}

const FounderProfile: FC<FounderProfileProps> = ({
                                                     imageSrc,
                                                     title,
                                                     fullName,
                                                     role,
                                                     description,
                                                     className = "",
                                                     linkedInLink,
                                                     facebookLink,
                                                     ...props
                                                 }) => {
    return (
        <div className={clsx(styles.founderProfile, className)} {...props}>
            <figure className={styles.founderProfile__imageWrapper}>
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className={styles.founderProfile__image}
                />
            </figure>
            <div className={styles.founderProfile__general}>
                <h3 className={styles.founderProfile__fullName}>{fullName}</h3>
                <nav className={styles.founderProfile__socialLinks}>
                    <a className={styles.founderProfile__link} href={linkedInLink}>
                        <LinkedIn></LinkedIn>
                    </a>
                    <a className={styles.founderProfile__link} href={facebookLink}>
                        <Facebook></Facebook>
                    </a>
                </nav>
            </div>
            <span className={styles.founderProfile__role}>{role}</span>
            <p className={styles.founderProfile__desc}>{description}</p>
        </div>
    );
};

export default FounderProfile;

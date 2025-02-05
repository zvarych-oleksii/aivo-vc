import React, { useRef, ReactNode, MouseEvent } from "react";
import clsx from "clsx";
import styles from "./AnimatedCards.module.scss";

interface CardAnimatedWrapperProps {
    children: ReactNode;
    className?: string;
}

interface AnimatedCardProps {
    children?: ReactNode;
    className?: string;
}

const CardAnimatedWrapper: React.FC<CardAnimatedWrapperProps> = ({ children, className }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!wrapperRef.current) return;

        const cards = wrapperRef.current.querySelectorAll(`.${styles.card}`) as NodeListOf<HTMLDivElement>;
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            card.style.setProperty("--xPos", `${x}px`);
            card.style.setProperty("--yPos", `${y}px`);
        });
    };

    return (
        <div className={clsx(styles.cards, className)} ref={wrapperRef} onMouseMove={handleMouseMove}>
            {children}
        </div>
    );
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({ className, children }) => {
    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.cardContent}>{children}</div>
        </div>
    );
};

export { CardAnimatedWrapper, AnimatedCard };

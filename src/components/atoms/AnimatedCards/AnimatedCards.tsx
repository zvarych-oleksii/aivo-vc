import React, { useRef, ReactNode, MouseEvent } from "react";
import clsx from "clsx";
import styles from "./AnimatedCards.module.scss";

interface CardAnimatedWrapperProps {
    children: ReactNode;
    className?: string;
}

export interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
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

            // Оновлюємо головну картку
            card.style.setProperty("--xPos", `${x}px`);
            card.style.setProperty("--yPos", `${y}px`);

            // Отримуємо всі вкладені div і оновлюємо їх
            const nestedDivs = card.querySelectorAll("div") as NodeListOf<HTMLDivElement>;
            nestedDivs.forEach((nestedDiv) => {
                nestedDiv.style.setProperty("--xPos", `${x}px`);
                nestedDiv.style.setProperty("--yPos", `${y}px`);
            });
        });
    };


    return (
        <div className={clsx(styles.cards, className)} ref={wrapperRef} onMouseMove={handleMouseMove}>
            {children}
        </div>
    );
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({ className, children, ...props }) => {
    return (
        <div className={clsx(styles.card, className)} {...props}>
            <div className={styles.cardContent}>{children}</div>
        </div>
    );
};

export { CardAnimatedWrapper, AnimatedCard };

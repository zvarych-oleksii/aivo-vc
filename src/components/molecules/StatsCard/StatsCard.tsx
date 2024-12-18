import Card from "@/components/atoms/Card";
import styles from "./StatsCard.module.scss";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

export interface StatsCardProps extends HTMLAttributes<HTMLDivElement> {
  num1: number;
  num2: number;
  num3: number;
  num4: number;
}

const StatsCard: FC<StatsCardProps> = ({
  num1,
  num2,
  num3,
  num4,
  className,
  ...props
}) => {
  return (
    <Card className={clsx(styles.statsCard, className)} {...props}>
      <div className={styles.statsCard__inner}>
        <div className={styles.statsCard__box}>
          <p className={styles.statsCard__value}>${num1}M</p>
          <label className={styles.statsCard__label}>Number label</label>
        </div>
        <div className={styles.statsCard__box}>
          <p className={styles.statsCard__value}>{num2}+</p>
          <label className={styles.statsCard__label}>Number label</label>
        </div>
        <div className={styles.statsCard__box}>
          <p className={styles.statsCard__value}>{num3}+</p>
          <label className={styles.statsCard__label}>Number label</label>
        </div>
        <div className={styles.statsCard__box}>
          <p className={styles.statsCard__value}>{num4}%</p>
          <label className={styles.statsCard__label}>Number label</label>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;

import clsx from "clsx";
import styles from "./Button.module.scss";
import { FC } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "small" | "normal";
  color?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  size = "normal",
  color = "primary",
}) => {
  return (
    <button
      className={clsx(styles.button, styles[size], styles[color], className)}
    >
      {children}
    </button>
  );
};

export default Button;

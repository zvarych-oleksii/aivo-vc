import clsx from "clsx";
import styles from "./Button.module.scss";
import { FC } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  size?: "small" | "normal";
  color?: "primary" | "secondary";
  type?: "submit" | "button" | "reset";
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  className,
    disabled = false,
  size = "normal",
  color = "primary",
    ...props
}) => {
  return (
    <button
      className={clsx(styles.button, styles[size], styles[color], {[styles["button--disabled"]]: disabled}, className)}
      type={type}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

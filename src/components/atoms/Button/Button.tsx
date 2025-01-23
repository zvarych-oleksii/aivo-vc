import clsx from "clsx";
import styles from "./Button.module.scss";
import { FC } from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "small" | "normal";
  color?: "primary" | "secondary";
  type?: "submit" | "button" | "reset";
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  className,
  size = "normal",
  color = "primary",
    ...props
}) => {
  return (
    <button
      className={clsx(styles.button, styles[size], styles[color], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

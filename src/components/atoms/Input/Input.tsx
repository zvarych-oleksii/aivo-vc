import React, { forwardRef, useRef } from "react";
import { IMaskInput, IMaskInputProps } from "react-imask";
import InputError from "../InputError";
import style from "./Input.module.scss";
import clsx from "clsx";

export interface InputProps
  extends Omit<IMaskInputProps<HTMLInputElement>, "mask"> {
  placeholder?: string;
  label?: string;
  error?: string;
  mask?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label = "", placeholder = "", error, mask, className, ...props }, ref) => {
    const localRef = useRef<HTMLInputElement | null>(null);
    const inputRef = ref || localRef;

    return (
      <div className={style.input}>
        <div className={style.input__container}>
          {label && <label className={style.input__label}>{label}</label>}
          {mask ? (
            <IMaskInput
              className={clsx(style.input__field, className, {
                [style["input--error"]]: error,
              })}
              placeholder={placeholder}
              mask={mask}
              inputRef={inputRef as React.Ref<HTMLInputElement>}
            />
          ) : (
            <input
              className={clsx(style.input__field, className, {
                [style["input--error"]]: error,
              })}
              placeholder={placeholder}
              {...props}
              ref={inputRef}
            />
          )}
        </div>
        {error && <InputError error={error} />}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;

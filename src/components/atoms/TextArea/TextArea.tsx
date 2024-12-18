import React, { FC } from "react";
import style from "./TextArea.module.scss";
import clsx from "clsx";
import InputError from "../InputError";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
  error?: string;
}

const TextArea: FC<TextAreaProps> = ({
  label,
  error,
  className = "",
  ...textareaProps
}) => {
  return (
    <div className={clsx(style.textArea, className)}>
      {label && <label className={style.textArea__label}>{label}</label>}
      <textarea className={style.textArea__input} {...textareaProps} />

      {error && <InputError error={error} />}
    </div>
  );
};

export default TextArea;

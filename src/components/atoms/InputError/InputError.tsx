import style from "./InputError.module.scss";

export interface InputErrorProps {
  error: string;
}

const InputError: React.FC<InputErrorProps> = ({ error }) => {
  return <div className={style.inputError}>{error}</div>;
};

export default InputError;

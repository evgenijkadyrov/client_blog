import { FC, InputHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./input.module.scss";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const CustomInput: FC<CustomInputProps> = ({ className, ...props }) => {
    const inputClasses = classNames(styles.input, className);

    return <input className={inputClasses} {...props} />;
};

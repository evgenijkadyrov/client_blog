import { FC, TextareaHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./textarea.module.scss";

interface CustomTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
}

export const CustomTextArea: FC<CustomTextAreaProps> = ({ className, ...props }) => {
    const textAreaClasses = classNames(styles.textArea, className);

    return <textarea className={textAreaClasses} {...props} />;
};

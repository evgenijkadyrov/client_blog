import { FC, forwardRef, TextareaHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./textarea.module.scss";

interface CustomTextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    errorMessage?: string | undefined;
}

export const CustomTextArea: FC<CustomTextAreaProps> = forwardRef<
    HTMLTextAreaElement,
    CustomTextAreaProps
>(({ className, errorMessage, ...props }, ref) => {
    const textAreaClasses = classNames(styles.textArea, className);

    return (
        <>
            <textarea className={textAreaClasses} {...props} ref={ref} />;
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        </>
    );
});
CustomTextArea.displayName = "CustomTextArea";

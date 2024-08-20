import { FC, forwardRef } from "react";
import classNames from "classnames";

import { CustomTextAreaProps } from "./textarea.interface";

import styles from "./textarea.module.scss";

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

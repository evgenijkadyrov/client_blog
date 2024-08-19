import { forwardRef } from "react";
import classNames from "classnames";

import { InputProps } from "./input.interface";

import styles from "./input.module.scss";

export const CustomInput = forwardRef<HTMLInputElement, InputProps>(
    ({ className, errorMessage, ...props }, ref) => {
        const inputClasses = classNames(styles.input, className);
        return (
            <>
                <input className={inputClasses} {...props} ref={ref} />
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            </>
        );
    }
);
CustomInput.displayName = "CustomInput";

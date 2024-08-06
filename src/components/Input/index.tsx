import { forwardRef, PropsWithRef } from "react";
import classNames from "classnames";

import styles from "./input.module.scss";
import IntrinsicElements = React.JSX.IntrinsicElements;

interface InputProps extends PropsWithRef<IntrinsicElements["input"]> {
    className?: string;
    errorMessage?: string | undefined;
}

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

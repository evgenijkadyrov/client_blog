import { FC, forwardRef, SelectHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./select.module.scss";

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: { value: string; label: string }[];
    errorMessage?: string | undefined;
}

export const CustomSelect: FC<CustomSelectProps> = forwardRef<HTMLSelectElement, CustomSelectProps>(
    ({ name, label, options, errorMessage, ...props }, ref) => {
        const selectClasses = classNames(styles.select);

        return (
            <>
                <select name={name} className={selectClasses} {...props} ref={ref}>
                    <option value="" disabled>
                        {label}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            </>
        );
    }
);
CustomSelect.displayName = "CustomSelect";

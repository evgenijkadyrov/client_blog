import { FC, forwardRef } from "react";
import classNames from "classnames";

import { CustomSelectProps } from "components/ui/Select/select.interface";

import styles from "./select.module.scss";

export const CustomSelect: FC<CustomSelectProps> = forwardRef<
    HTMLSelectElement,
    CustomSelectProps
>(({ name, label, options, errorMessage, ...props }, ref) => {
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
});
CustomSelect.displayName = "CustomSelect";

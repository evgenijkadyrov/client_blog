import { ChangeEvent, FC } from "react";

import styles from "./select.module.scss";

interface CustomSelectProps {
    name: string;
    label: string;
    options: { value: string; label: string }[];

    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const CustomSelect: FC<CustomSelectProps> = ({ name, label, options, onChange }) => (
    <select name={name} onChange={onChange} className={styles.select}>
        <option value="" disabled selected>
            {label}
        </option>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);

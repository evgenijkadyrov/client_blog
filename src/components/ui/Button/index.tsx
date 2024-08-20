"use client";

import { CustomButtonProps } from "./button.interface";

import styles from "./button.module.scss";

export const Button = ({
    label,
    size = "medium",
    bgcolor,
    onClick,
    disabled,
    children,
    type = "button",
    ...props
}: CustomButtonProps) => {
    const buttonSizeClass = styles[`button-${size}`];
    const buttonColorClass = styles[`button-${bgcolor}`];
    const buttonDisabledClass = disabled && styles[`button-disabled`];
    return (
        <button
            type={type !== undefined ? type : "button"}
            disabled={disabled !== undefined ? disabled : false}
            className={`${styles.customButton} ${buttonSizeClass} ${buttonColorClass} ${buttonDisabledClass}`}
            onClick={onClick}
            {...props}>
            {label}
            {children}
        </button>
    );
};

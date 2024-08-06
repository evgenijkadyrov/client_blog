"use client";

import { MouseEvent, ReactNode } from "react";

import styles from "./button.module.scss";

interface CustomButtonProps {
    label?: string;
    bgcolor?: string;
    size?: "small" | "medium" | "large" | "full";
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
}

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
            /* eslint-disable react/jsx-props-no-spreading */
            {...props}>
            {label}
            {children}
        </button>
    );
};

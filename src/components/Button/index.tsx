"use client";

import { ReactNode } from "react";

import styles from "./button.module.scss";

interface CustomButtonProps {
    onClick?: () => void;
    label?: string;
    bgcolor?: string;
    size?: "small" | "medium" | "large";
    children?: ReactNode;
}

export const Button = ({
    label,
    size = "medium",
    bgcolor,
    children,
    ...props
}: CustomButtonProps) => {
    const buttonSizeClass = styles[`button-${size}`];
    const buttonColorClass = styles[`button-${bgcolor}`];

    return (
        <button
            type="button"
            className={`${styles.customButton} ${buttonSizeClass} ${buttonColorClass}`}
            /* eslint-disable react/jsx-props-no-spreading */
            {...props}>
            {label}
            {children}
        </button>
    );
};

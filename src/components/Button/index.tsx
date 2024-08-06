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
}

export const Button = ({
    label,
    size = "medium",
    bgcolor,
    onClick,
    children,
    type = "button",
    ...props
}: CustomButtonProps) => {
    const buttonSizeClass = styles[`button-${size}`];
    const buttonColorClass = styles[`button-${bgcolor}`];

    return (
        <button
            type={type !== undefined ? type : "button"}
            className={`${styles.customButton} ${buttonSizeClass} ${buttonColorClass}`}
            onClick={onClick}
            /* eslint-disable react/jsx-props-no-spreading */
            {...props}>
            {label}
            {children}
        </button>
    );
};

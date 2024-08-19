import { MouseEvent, ReactNode } from "react";

export interface CustomButtonProps {
    label?: string;
    bgcolor?: string;
    size?: "small" | "medium" | "large" | "full";
    children?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
}

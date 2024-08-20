import { SelectHTMLAttributes } from "react";

export interface CustomSelectProps
    extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: { value: string; label: string }[];
    errorMessage?: string | undefined;
}

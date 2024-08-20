import { TextareaHTMLAttributes } from "react";

export interface CustomTextAreaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    errorMessage?: string | undefined;
}

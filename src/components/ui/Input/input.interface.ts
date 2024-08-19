import { PropsWithRef } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;

export interface InputProps extends PropsWithRef<IntrinsicElements["input"]> {
    className?: string;
    errorMessage?: string | undefined;
}

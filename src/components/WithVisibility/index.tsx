"use client";

import { ReactNode } from "react";
import classNames from "classnames";
import { useVisibility } from "hook/useVisibility";

import styles from "./infinityScroll.module.scss";

interface WithVisibilityProps {
    children: ReactNode;
}

export const WithVisibility = ({ children }: WithVisibilityProps) => {
    const [elementRef, isVisible] = useVisibility();

    return (
        <div
            ref={elementRef}
            className={classNames(
                styles.item,
                isVisible && styles.itemVisible,
                !isVisible && styles.itemNotVisible
            )}>
            {children}
        </div>
    );
};

export default WithVisibility;

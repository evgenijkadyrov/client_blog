"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "navigation";

import styles from "./language.module.scss";

interface LocaleSwitcherProps {
    children: ReactNode;
    defaultValue: string;
    label: string;
}

export const LocaleSwitcherSelect = ({
    children,
    defaultValue,
    label,
}: LocaleSwitcherProps) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value as "en" | "be" | undefined;
        startTransition(() => {
            router.replace({ pathname }, { locale: nextLocale });
        });
    }

    return (
        <label className={styles.label} htmlFor="select" aria-label="select">
            <p className="sr-only">{label}</p>
            <div className={styles.selectContainer}>
                <select
                    className={styles.select}
                    defaultValue={defaultValue}
                    disabled={isPending}
                    onChange={onSelectChange}>
                    {children}
                </select>
                <span className={styles.span}>⌄</span>
            </div>
        </label>
    );
};

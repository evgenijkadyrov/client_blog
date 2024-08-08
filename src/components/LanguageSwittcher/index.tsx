"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { usePathname, useRouter } from "navigation";
import { useParams } from "next/navigation";

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
    const params = useParams();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
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

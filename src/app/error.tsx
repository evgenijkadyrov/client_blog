"use client";

import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "components/Button";

import styles from "./error.module.scss";

interface ErrorProps {
    error: Error & { digest?: string };
}

const Error: FC<ErrorProps> = ({ error }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);
    const router = useRouter();
    const clickHandler = (): void => {
        router.back();
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Something went wrong!</h2>
            <Button bgcolor="yellow" size="large" onClick={clickHandler}>
                Go back
            </Button>
        </section>
    );
};

export default Error;

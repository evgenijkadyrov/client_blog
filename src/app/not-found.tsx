"use client";

import { AppRoutes } from "constants/routerPath";
import Link from "next/link";

import { Button } from "components/Button";

import styles from "./notFound.module.scss";

const NotFound = () => (
    <html lang="en">
        <body>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.title}>404</h1>
                    <h2 className={styles.subTitle}>
                        Sorry, This page is not available.
                    </h2>
                    <p className={styles.text}>
                        You are trying to get page that not created yet. But we
                        are working on it.
                    </p>
                    <Button bgcolor="yellow" size="large">
                        <Link href={AppRoutes.HOME}>Home</Link>
                    </Button>
                </div>
            </section>
        </body>
    </html>
);
export default NotFound;

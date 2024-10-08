"use client";

import { AppRoutes } from "constants/routerPath";
import Link from "next/link";

import { Button } from "components/ui/Button";

import styles from "./notFound.module.scss";

const ERROR_TEXT = "Sorry, This page is not available.";
const ERROR_TEXT_2 =
    " You are trying to get page that not created yet. But we\n" +
    "                        are working on it.";

const NotFound = () => (
    <html lang="en">
        <body>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.title}>404</h1>
                    <h2 className={styles.subTitle}>{ERROR_TEXT}</h2>
                    <p className={styles.text}>{ERROR_TEXT_2}</p>
                    <Button bgcolor="yellow" size="large">
                        <Link href={AppRoutes.HOME}>Home</Link>
                    </Button>
                </div>
            </section>
        </body>
    </html>
);
export default NotFound;

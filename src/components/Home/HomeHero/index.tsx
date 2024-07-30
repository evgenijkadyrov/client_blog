import React from "react";
import { AppRoutes } from "constants/routerPath";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "components/Button";

import styles from "./homeHero.module.scss";

export const HomeHero = () => {
    const t = useTranslations("HomeHero");
    return (
        <section className={styles.top}>
            <div className={styles.imageFirst} />
            <div className={styles.topBackground} />
            <div className={styles.topInner}>
                <h5 className={styles.heroLabel}>
                    {t("heroLabel")}
                    <span>{t("heroLabelSpan")}</span>
                </h5>
                <h1 className={styles.heroTitle}>{t("heroTitle")}</h1>
                <p className={styles.heroCreatedAt}>
                    {t("heroCreatedAt.begin")}
                    <span>{t("heroCreatedAt.colorSpan")}</span>
                    {t("heroCreatedAt.end")}
                </p>
                <p className={styles.heroCreatedAt}>{t("heroDescription")}</p>
                <div className={styles.buttonWrapper}>
                    <Button bgcolor="yellow">
                        <Link href={`${AppRoutes.POSTS}/1`} className={styles.link}>
                            {t("buttonText")}
                        </Link>
                    </Button>
                </div>
            </div>
            <div />
        </section>
    );
};

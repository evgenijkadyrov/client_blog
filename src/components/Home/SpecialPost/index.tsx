import React from "react";
import { AppRoutes } from "constants/routerPath";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "components/Button";

import styles from "./specialPost.module.scss";

export const SpecialPost = () => {
    const t = useTranslations("HomeHero");
    return (
        <section className={styles.whyWeStarted}>
            <div className={styles.whyWeStartedImage} />
            <div className={styles.whyWeStartedContent}>
                <h5 className={styles.whyWeStartedSupTitle}>{t("WhyWeStarted.subTitle")}</h5>
                <h1 className={styles.whyWeStartedTitle}>{t("WhyWeStarted.title")}</h1>
                <p className={styles.whyWeStartedText}>{t("WhyWeStarted.description")}</p>
                <Button size="large" bgcolor="yellow">
                    <Link href={`/${AppRoutes.ABOUT}`} className={styles.link}>
                        {t("WhyWeStarted.buttonText")}
                    </Link>
                </Button>
            </div>
        </section>
    );
};

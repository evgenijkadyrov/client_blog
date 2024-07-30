import React from "react";
import { AppRoutes } from "constants/routerPath";
import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./aboutUs.module.scss";

export const AboutUs = () => {
    const t = useTranslations("HomeHero");
    return (
        <>
            <div className={styles.blocks}>
                <div className={styles.whiteBlock} />
                <div className={styles.yellowBlock} />
                <div className={styles.purpleBlock} />
            </div>
            <section className={styles.about}>
                <div className={styles.articleWrapper}>
                    <article className={styles.aboutArticle}>
                        <h5 className={styles.aboutSubTitle}>{t("AboutUs.subTitleFirst")}</h5>
                        <h2 className={styles.aboutTitle}>{t("AboutUs.titleFirst")}</h2>
                        <p className={styles.aboutDescription}>{t("AboutUs.descriptionFirst")}</p>
                    </article>
                    <article className={styles.aboutArticle}>
                        <h5 className={styles.aboutSubTitle}>{t("AboutUs.subTitleSecond")}</h5>
                        <h2 className={styles.aboutTitle}>{t("AboutUs.titleSecond")}</h2>
                        <p className={styles.aboutDescription}>{t("AboutUs.descriptionSecond")}</p>
                    </article>
                </div>
                <Link href={`${AppRoutes.ABOUT}`} className={styles.aboutLink}>
                    {t("AboutUs.linkText")}
                </Link>
            </section>
        </>
    );
};

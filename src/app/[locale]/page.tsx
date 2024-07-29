import { AppRoutes } from "constants/routerPath";
import Link from "next/link";
import { useTranslations } from "next-intl";

import styles from "./home.module.scss";

const Page = () => {
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
                <button type="button" className={styles.button}>
                    <Link href={`${AppRoutes.POSTS}/1`} className={styles.link}>
                        {t("buttonText")}
                    </Link>
                </button>
            </div>
            <div />
        </section>
    );
};

export default Page;

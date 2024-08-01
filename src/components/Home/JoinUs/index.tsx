import { AppRoutes } from "constants/routerPath";
import { Link } from "navigation";
import { useTranslations } from "next-intl";

import { Button } from "components/Button";

import styles from "./joinUs.module.scss";

export const JoinUsHome = () => {
    const t = useTranslations("JoinUs");
    return (
        <section className={styles.inner}>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.description}>{t("description")}</p>
            <Button bgcolor="yellow">
                <Link href={AppRoutes.CONTACT}>{t("buttonText")}</Link>
            </Button>
        </section>
    );
};

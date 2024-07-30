import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./categoryItem.module.scss";

interface CategoryItemProps {
    category: string;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
    const t = useTranslations("HomeHero");
    return (
        <div className={styles.categoryBlock} key={`${category}.title`}>
            <Image
                className={styles.categoryBlockIcon}
                alt="icon"
                src={t(`${category}.icon`)}
                width={48}
                height={48}
            />
            <h3 className={styles.categoryBlockTitle}>{t(`${category}.title`)}</h3>
            <p className={styles.categoryBlockDescription}>{t(`${category}.description`)}</p>
        </div>
    );
};

"use client";

import { KeyboardEvent } from "react";
import classNames from "classnames";
import { AppRoutes } from "constants/routerPath";
import { useRouter } from "navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

import styles from "./categoryItem.module.scss";

interface CategoryItemProps {
    category: string;
    id: string;
    full?: boolean;
}

export const CategoryItem = ({
    category,
    id,
    full = true,
}: CategoryItemProps) => {
    const t = useTranslations("HomeHero");
    const router = useRouter();
    const handleClickCategory = (): void => {
        router.push(`/${AppRoutes.CATEGORIES}/${id}`);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            handleClickCategory();
        }
    };
    return (
        <div
            className={classNames(
                styles.categoryBlock,
                !full && styles.categoryBlockShort
            )}
            key={id}
            onClick={handleClickCategory}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button">
            <Image
                className={styles.categoryBlockIcon}
                alt="icon"
                src={t(`${category}.icon`)}
                width={48}
                height={48}
            />
            <h3 className={styles.categoryBlockTitle}>
                {t(`${category}.title`)}
            </h3>
            {full && (
                <p className={styles.categoryBlockDescription}>
                    {t(`${category}.description`)}
                </p>
            )}
        </div>
    );
};

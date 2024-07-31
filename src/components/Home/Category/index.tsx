import React from "react";
import { useTranslations } from "next-intl";

import { CategoryItem } from "./CategoryItem";

import styles from "./category.module.scss";

const keysCategory = [
    "Category.Cards.business",
    "Category.Cards.startUp",
    "Category.Cards.economy",
    "Category.Cards.technology",
];

export const CategoryHome = () => {
    const t = useTranslations("HomeHero");

    return (
        <div className={styles.category}>
            <h2 className={styles.categoryTitle}>{t("Category.title")}</h2>
            <section className={styles.categoryRow}>
                {keysCategory.map((category) => (
                    <CategoryItem key={category} category={category} />
                ))}
            </section>
        </div>
    );
};

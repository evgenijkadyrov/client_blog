import React from "react";

import { CategoryItem } from "./CategoryItem";

import styles from "./category.module.scss";

const keysCategory = [
    "Category.Cards.business",
    "Category.Cards.startUp",
    "Category.Cards.economy",
    "Category.Cards.technology",
];

export const CategoryHome = () => (
    <div className={styles.category}>
        <section className={styles.categoryRow}>
            {keysCategory.map((category) => (
                <CategoryItem key={category} category={category} />
            ))}
        </section>
    </div>
);

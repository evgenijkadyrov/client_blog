import { keysCategory } from "constants/keysCategory";

import { CategoryItem } from "./CategoryItem";

import styles from "./category.module.scss";

export const CategoryHome = () => (
    <div className={styles.category}>
        <section className={styles.categoryRow}>
            {keysCategory.map(({ category, id }) => (
                <CategoryItem key={id} category={category} id={id} />
            ))}
        </section>
    </div>
);

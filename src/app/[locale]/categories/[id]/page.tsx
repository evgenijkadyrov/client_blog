import { keysCategory } from "constants/keysCategory";
import { POSTS_LIST } from "constants/posts";
import { getTranslations } from "next-intl/server";

import Container from "components/Container";
import { PostsFiltered } from "components/PostsFiltered";

import "styles/globals.scss";
import styles from "./category.module.scss";

interface CategoryProps {
    params: {
        id: string;
    };
}

const Category = async ({ params: { id } }: CategoryProps) => {
    const t = await getTranslations("HomeHero");
    const foundCategory = keysCategory.find((el) => el.id === id);
    const { category } = foundCategory || { category: "" };
    const postsFiltered = POSTS_LIST.filter(
        ({ category }) => category.toLowerCase() === id
    );
    return (
        <>
            <section className={styles.top}>
                <div className={styles.topInner}>
                    <h1 className={styles.topInnerTitle}>
                        {t(`${category}.title`)}
                    </h1>
                    <p className={styles.topInnerDescription}>
                        {t(`${category}.description`)}
                    </p>
                    <h5 className={styles.topInnerBroadcast}>
                        {" "}
                        BLOG &gt; {id}
                    </h5>
                </div>
            </section>
            <Container>
                <PostsFiltered posts={postsFiltered} />
            </Container>
        </>
    );
};

export default Category;

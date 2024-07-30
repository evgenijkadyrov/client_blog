import { HOME_POSTS } from "constants/homePosts";
import { AppRoutes } from "constants/routerPath";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "components/Button";

import styles from "./featuredPosts.module.scss";

export const FeaturedPosts = () => {
    const t = useTranslations("HomeHero");
    return (
        <section className={styles.postsWrapper}>
            <article className={styles.featuredPost}>
                <h2 className={styles.featuredPostTitle}>{t("Posts.postsTitle")}</h2>
                <div className={styles.featuredPostContent}>
                    <div className={styles.featuredPostImage} />
                    <p className={styles.featuredPostAuthor}>{t("Posts.postAuthor")}</p>
                    <h3 className={styles.featuredPostTitle}>{t("Posts.postTitle")}</h3>
                    <p className={styles.featuredPostText}>{t("Posts.postContent")}</p>
                    <Button bgcolor="yellow">
                        <Link href={`${AppRoutes.POSTS}/2`} className={styles.link}>
                            {t("buttonText")}
                        </Link>
                    </Button>
                </div>
            </article>
            <div className={styles.allPosts}>
                <div className={styles.allPostsHeader}>
                    <h2> {t("AllPosts.mainTitle")}</h2>
                    <Link href={`/${AppRoutes.POSTS}`} className={styles.allPostsLink}>
                        {t("AllPosts.linkView")}
                    </Link>
                </div>
                <div className={styles.allPostsColumn}>
                    {HOME_POSTS.map(({ id, author, date, title }) => (
                        <div key={id} className={styles.post}>
                            <p className={styles.postAuthor}>
                                By {author} | {date}
                            </p>
                            <h4 className={styles.featuredPostTitle}>{title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

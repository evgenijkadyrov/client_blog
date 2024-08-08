import { PostsProps } from "constants/posts";
import { AppRoutes } from "constants/routerPath";
import { getRandomElements } from "helpers/randomAuthorList";
import { Link } from "navigation";
import { getTranslations } from "next-intl/server";

import { Button } from "components/Button";
import { PostLink } from "components/PostLink";

import styles from "./featuredPosts.module.scss";

interface FeaturedPostsProps {
    posts: PostsProps[];
}
export const FeaturedPosts = async ({ posts }: FeaturedPostsProps) => {
    const t = await getTranslations("HomeHero");

    const currentPosts = getRandomElements(posts, 4);

    return (
        <section className={styles.postsWrapper}>
            <article className={styles.featuredPost}>
                <h2 className={styles.featuredPostTitle}>
                    {t("Posts.postsTitle")}
                </h2>
                <div className={styles.featuredPostContent}>
                    <div className={styles.featuredPostImage} />
                    <p className={styles.featuredPostAuthor}>
                        {t("Posts.postAuthor")}
                    </p>
                    <h3 className={styles.featuredPostTitle}>
                        {t("Posts.postTitle")}
                    </h3>
                    <p className={styles.featuredPostText}>
                        {t("Posts.postContent")}
                    </p>
                    <Button bgcolor="yellow">
                        <Link
                            href={`${AppRoutes.POSTS}/9`}
                            className={styles.link}>
                            {t("buttonText")}
                        </Link>
                    </Button>
                </div>
            </article>
            <div className={styles.allPosts}>
                <div className={styles.allPostsHeader}>
                    <h2> {t("AllPosts.mainTitle")}</h2>
                    <Link
                        href={AppRoutes.POSTS}
                        className={styles.allPostsLink}>
                        {t("AllPosts.linkView")}
                    </Link>
                </div>
                <div className={styles.allPostsColumn}>
                    {currentPosts.map(({ id, author, createdAt, title }) => (
                        <PostLink
                            key={id}
                            title={title}
                            id={id}
                            createdAt={createdAt}
                            author={author}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

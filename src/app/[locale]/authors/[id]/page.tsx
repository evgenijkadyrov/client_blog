import { AUTHORS } from "constants/authors";
import { POSTS_LIST } from "constants/posts";
import { Link } from "navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import Container from "components/Container";
import { PostItem } from "components/Post";

import "styles/globals.scss";
import styles from "./author.module.scss";

interface AuthorPageProps {
    params: { id: string };
}

const AuthorPage = async ({ params: { id } }: AuthorPageProps) => {
    const t = await getTranslations("Author");
    const authorInfo = AUTHORS.find((author) => author.id === parseInt(id, 10));
    if (!authorInfo) {
        return null;
    }
    const { name, socials, description, img, posts } = authorInfo;

    const authorPosts = posts
        .map((id) => {
            const post = POSTS_LIST.find((post) => post.id === id);
            if (!post) {
                return null;
            }
            return post;
        })
        .filter(Boolean) as (typeof POSTS_LIST)[number][];
    return (
        <>
            <section className={styles.top}>
                <div className={styles.topInner}>
                    <Image src={img} alt="author" loading="lazy" className={styles.topImage} />
                    <div className={styles.topContent}>
                        <h1 className={styles.topTitle}>
                            {t("top.title.firstPart")}
                            {name}
                            {t("top.title.secondPart")}
                        </h1>
                        <p className={styles.topText}>{description}</p>
                        <div className={styles.socials}>
                            {socials.map(({ id, href, icon }) => {
                                const { alt, darkIcon } = icon;
                                return (
                                    <Link key={id} href={href}>
                                        <Image src={darkIcon} alt={alt} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.yellowBlock} />
                    <div className={styles.purpleBlock} />
                </div>
            </section>
            <Container>
                <section className={styles.posts}>
                    {authorPosts.length > 0 ? (
                        <>
                            <h2 className={styles.postsTitle}>{t("posts.title")}</h2>
                            <div className={styles.postsRow}>
                                {authorPosts.map((post) => (
                                    <PostItem key={post.id} post={post} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <h2 className={styles.postsSecondTitle}>{t("posts.secondTitle")}</h2>
                    )}
                </section>
            </Container>
        </>
    );
};

export default AuthorPage;

import AvatarDefault from "assets/icons/Profile picture.svg";
import { POSTS_LIST } from "constants/posts";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "components/Container";
import { JoinUsHome } from "components/Home/JoinUs";
import { PostItem } from "components/Post";

import "styles/globals.scss";
import styles from "./post.module.scss";

interface PostProps {
    params: {
        id: string;
    };
}
const Post = ({ params: { id } }: PostProps) => {
    const t = useTranslations("Post");

    const { title, img, category, content, author, createdAt } = POSTS_LIST.find(
        (item) => item.id === parseInt(id, 10)
    )!;
    const otherPosts = POSTS_LIST.filter((item) => item.category === category)
        .slice(0, 3)
        .filter((item) => item.id !== parseInt(id, 10));

    return (
        <Container>
            <section className={styles.content}>
                <div className={styles.authorItem}>
                    <Image
                        src={AvatarDefault as string}
                        alt={author}
                        className={styles.authorItemAvatar}
                    />
                    <div className={styles.authorItemInfo}>
                        <h3 className={styles.authorItemInfoName}>{author}</h3>
                        <p className={styles.authorItemInfoCreated}>{createdAt}</p>
                    </div>
                </div>
                <h1 className={styles.contentTitle}>{title}</h1>
                <div className={styles.contentCategory}>
                    {/* <Image src={categoryInfo.icon} alt={categoryInfo.title} loading="lazy" /> */}
                    <h4>{category}</h4>
                </div>

                <Image
                    src={img}
                    alt={title}
                    loading="lazy"
                    className={styles.contentImage}
                    layout="responsive"
                />

                {content.map(({ title, text, id }) => (
                    <article key={id} className={styles.post}>
                        <h2 className={styles.postTitle}>{title}</h2>
                        <p className={styles.postText}>{text}</p>
                    </article>
                ))}
            </section>
            <section className={styles.posts}>
                <h3 className={styles.postsTitle}>{t("postsTitle")}</h3>
                <div className={styles.postsRow}>
                    {otherPosts.map((post) => (
                        <PostItem key={post.id} post={post} column small />
                    ))}
                </div>
            </section>
            <JoinUsHome />
        </Container>
    );
};

export default Post;

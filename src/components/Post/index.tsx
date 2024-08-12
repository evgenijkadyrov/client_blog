"use client";

import classNames from "classnames";
import { POSTS_LIST } from "constants/posts";
import { AppRoutes } from "constants/routerPath";
import { useRouter } from "navigation";
import Image from "next/image";

import styles from "./post.module.scss";

export interface PostItemProps {
    post: (typeof POSTS_LIST)[0];
    column?: boolean;
    small?: boolean;
}
export const PostItem = ({
    post: { img, title, description, category, id, createdAt, author },
    column,
    small,
}: PostItemProps) => {
    const router = useRouter();

    const clickHandler = () => {
        router.push(`/${AppRoutes.POSTS}/${id}`);
    };

    return (
        <div
            className={classNames(styles.post, column && styles.postColumn)}
            onClick={clickHandler}
            data-cy="item"
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}>
            <Image
                src={img}
                alt={title}
                loading="lazy"
                className={classNames(
                    styles.postImage,
                    small && styles.postImageSmall
                )}
            />
            <div className={styles.postContent}>
                {column ? (
                    <p>
                        By {author} | {createdAt}
                    </p>
                ) : (
                    <h5 className={styles.postCategory}>{category}</h5>
                )}
                <h2 className={styles.postTitle}>{title}</h2>
                <p className={styles.postText}>{description}</p>
            </div>
        </div>
    );
};

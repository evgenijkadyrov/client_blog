"use client";

import { AppRoutes } from "constants/routerPath";
import { useRouter } from "navigation";

import styles from "./postLink.module.scss";

interface PostLinkProps {
    id: number;
    author: string;
    createdAt: string;
    title: string;
}

export const PostLink = ({ id, author, createdAt, title }: PostLinkProps) => {
    const router = useRouter();
    const handleClickPost = (id: number): void => {
        router.push(`/${AppRoutes.POSTS}/${id}`);
    };
    return (
        <div
            key={id}
            className={styles.post}
            onClick={() => handleClickPost(id)}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}>
            <p className={styles.postAuthor}>
                By {author} | {createdAt}
            </p>
            <h4 className={styles.title}>{title}</h4>
        </div>
    );
};

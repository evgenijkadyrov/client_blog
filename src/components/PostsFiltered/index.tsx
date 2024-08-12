"use client";

import React, {
    KeyboardEvent,
    SyntheticEvent,
    useEffect,
    useState,
} from "react";
import classNames from "classnames";
import { keysCategory } from "constants/keysCategory";
import { PostsProps } from "constants/posts";
import { TAGS } from "constants/tags";
import { useTranslations } from "next-intl";

import { CategoryItem } from "components/Home/Category/CategoryItem";
import { PostItem } from "components/Post";
import { Search } from "components/Search";

import styles from "./postedFiltered.module.scss";

interface PostsFilteredProps {
    posts: PostsProps[];
}
export const PostsFiltered = ({ posts }: PostsFilteredProps) => {
    const t = useTranslations("HomeHero");
    const [value, setValue] = useState<string>("");
    const [activeTags, setActiveTags] = useState<string[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<PostsProps[]>(posts);

    const onTagClickHandler = (e: SyntheticEvent) => {
        const { innerText } = e.target as HTMLElement;

        if (activeTags.includes(innerText)) {
            setActiveTags(activeTags.filter((tag) => tag !== innerText));
        } else {
            setActiveTags([...activeTags, innerText]);
        }
    };
    useEffect(() => {
        let copyPosts = posts;
        if (value) {
            copyPosts = posts.filter((post) =>
                post.tags.join(" ").toLowerCase().includes(value.toLowerCase())
            );
        }
        if (activeTags.length > 0) {
            copyPosts = posts.filter((post) =>
                post.tags.some((r) => activeTags.includes(r))
            );
        }

        setFilteredPosts([...copyPosts]);
    }, [activeTags, value]);
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setActiveTags([]);
        }
    };
    return (
        <div className={styles.wrapper}>
            {filteredPosts.length === 0 ? (
                <div>Posts not found</div>
            ) : (
                <div>
                    {filteredPosts.map((post) => (
                        <div className={styles.postWrapper} key={post.id}>
                            <PostItem post={post} />
                        </div>
                    ))}
                </div>
            )}

            <div className={styles.tagsBlock}>
                <Search
                    setInputValue={setValue}
                    placeholderText={t("Category.searchPlaceholder")}
                />
                <div className={styles.categories}>
                    <h2 className={styles.categoriesTitle}>
                        {t("Category.titleForCategories")}
                    </h2>
                    <div className={styles.categoriesRow}>
                        {keysCategory.map(({ category, id }) => (
                            <CategoryItem
                                key={id}
                                category={category}
                                id={id}
                                full={false}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.tags}>
                    <h2 className={styles.tagsTitle}>{t("Tags.title")}</h2>
                    {TAGS.map(({ id, title }) => (
                        <div
                            className={classNames(
                                styles.tagsItem,
                                activeTags.includes(title) &&
                                    styles.tagsItemActive
                            )}
                            key={id}
                            onClick={onTagClickHandler}
                            onKeyDown={handleKeyPress}
                            tabIndex={0}
                            role="button"
                            data-cy="tag">
                            {title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

"use client";

import React, { useState } from "react";
import { POSTS_LIST } from "constants/posts";

import { PostItem } from "components/Post";

import styles from "./posts.module.scss";

const POSTS_ON_PAGE = 5;

export const Posts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = POSTS_ON_PAGE;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = POSTS_LIST.slice(indexOfFirstPost, indexOfLastPost);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className={styles.postsWrapper}>
            {currentPosts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
            <div className={styles.buttonWrapper}>
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={styles.button}>{`< Prev`}</button>
                <button
                    onClick={handleNextPage}
                    disabled={indexOfLastPost >= POSTS_LIST.length}
                    className={styles.button}>{`Next >`}</button>
            </div>
        </div>
    );
};

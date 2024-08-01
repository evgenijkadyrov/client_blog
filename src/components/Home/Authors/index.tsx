import React from "react";
import { Author } from "constants/authors";
import { useTranslations } from "next-intl";

import { AuthorItem } from "components/Home/Authors/AuthorItem";

import styles from "./authors.module.scss";

interface AuthorsBlockProps {
    authors: unknown[];
}

export const AuthorsBlock = ({ authors }: AuthorsBlockProps) => {
    const t = useTranslations("HomeHero");

    return (
        <section className={styles.listOfAuthors}>
            <h2 className={styles.listOfAuthorsTitle}>{t("ListOfAuthor.title")}</h2>
            <div className={styles.listOfAuthorsBlock}>
                {(authors as Author[]).map(({ img, name, role, socials, id }) => (
                    <AuthorItem key={id} author={{ name, role, socials, img, id }} />
                ))}
            </div>
        </section>
    );
};

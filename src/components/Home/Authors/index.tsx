import { Author } from "constants/authors";
import { getTranslations } from "next-intl/server";

import { AuthorItem } from "components/Home/Authors/AuthorItem";

import styles from "./authors.module.scss";

interface AuthorsBlockProps {
    authors: unknown[];
}

export const AuthorsBlock = async ({ authors }: AuthorsBlockProps) => {
    const t = await getTranslations("HomeHero");

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

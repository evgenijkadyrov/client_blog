import { AppRoutes } from "constants/routerPath";
import { Link } from "navigation";
import { getTranslations } from "next-intl/server";

import { CategoryHome } from "components/Home/Category";
import { JoinUsHome } from "components/Home/JoinUs";
import { Posts } from "components/Posts";
import { Button } from "components/ui/Button";

import "styles/globals.scss";
import styles from "./posts.module.scss";

const Blog = async () => {
    const t = await getTranslations("Posts");
    return (
        <>
            <section className={styles.top}>
                <div className={styles.topInner}>
                    <h5 className={styles.subTitle}>{t("postSubtitle")}</h5>
                    <h2 className={styles.title}>{t("postTitle")}</h2>
                    <p className={styles.createdBy}>{t("postAuthor")}</p>
                    <p className={styles.createdBy}>{t("postContent")}</p>
                    <div className={styles.buttonWrapper}>
                        <Button bgcolor="yellow">
                            <Link
                                href={`${AppRoutes.POSTS}/2`}
                                className={styles.link}>
                                {t("buttonText")}
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className={styles.imageFirst} />
            </section>
            <div className={styles.testimonials}>
                <h1 className={styles.blockTitle}>{t("postsBlockTitle")}</h1>
            </div>
            <div className={styles.testimonials}>
                <Posts />
            </div>
            <div className={styles.testimonials}>
                <h2 className={styles.title}>{t("allCategories")}</h2>
                <CategoryHome />
            </div>
            <div className={styles.testimonials}>
                <JoinUsHome />
            </div>
        </>
    );
};

export default Blog;

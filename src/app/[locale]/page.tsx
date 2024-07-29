import {HOME_POSTS} from "constants/homePosts";
import {AppRoutes} from "constants/routerPath";
import Image from 'next/image'
import Link from "next/link";
import {useTranslations} from "next-intl";

import 'styles/globals.scss'
import styles from "./home.module.scss";

const Page = () => {
    const t = useTranslations("HomeHero");
    const keysCategory = ['Category.Cards.business', 'Category.Cards.startUp', 'Category.Cards.economy', 'Category.Cards.technology']
    return (
        <>
            <section className={styles.top}>
                <div className={styles.imageFirst}/>
                <div className={styles.topBackground}/>
                <div className={styles.topInner}>
                    <h5 className={styles.heroLabel}>
                        {t("heroLabel")}
                        <span>{t("heroLabelSpan")}</span>
                    </h5>
                    <h1 className={styles.heroTitle}>{t("heroTitle")}</h1>
                    <p className={styles.heroCreatedAt}>
                        {t("heroCreatedAt.begin")}
                        <span>{t("heroCreatedAt.colorSpan")}</span>
                        {t("heroCreatedAt.end")}
                    </p>
                    <p className={styles.heroCreatedAt}>{t("heroDescription")}</p>
                    <button type="button" className={styles.button}>
                        <Link href={`${AppRoutes.POSTS}/1`} className={styles.link}>
                            {t("buttonText")}
                        </Link>
                    </button>
                </div>
                <div/>
            </section>
            <div style={{margin: '80px'}}>
                <section className={styles.posts}>
                    <article className={styles.featuredPost}>
                        <h2 className={styles.postsTitle}>{t("Posts.postsTitle")}</h2>
                        <div className={styles.featuredPostContent}>
                            <div className={styles.featuredPostImage}/>
                            <p className={styles.featuredPostAuthor}>
                                {t("Posts.postAuthor")}
                            </p>
                            <h3 className={styles.featuredPostTitle}>
                                {t("Posts.postTitle")}
                            </h3>
                            <p className={styles.featuredPostText}>
                                {t("Posts.postContent")}
                            </p>
                            <button type="button" className={styles.button}>
                                <Link href={`${AppRoutes.POSTS}/2`}
                                      className={styles.link}>
                                    {t("buttonText")}
                                </Link>
                            </button>
                        </div>
                    </article>
                    <div className={styles.allPosts}>
                        <div className={styles.allPostsHeader}>
                            <h2> {t("AllPosts.mainTitle")}</h2>
                            <Link
                                href={`/${AppRoutes.POSTS}`}
                                className={styles.allPostsLink}>
                                {t("AllPosts.linkView")}
                            </Link>
                        </div>
                        <div className={styles.allPostsColumn}>
                            {HOME_POSTS.map(({id, author, date, title}) => (
                                <div key={id} className={styles.post}>
                                    <p className={styles.postAuthor}>
                                        By {author} | {date}
                                    </p>
                                    <h4 className={styles.featuredPostTitle}>{title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div className={styles.aboutContainer}>
                <div className={styles.blocks}>
                    <div className={styles.whiteBlock}/>
                    <div className={styles.yellowBlock}/>
                    <div className={styles.purpleBlock}/>
                </div>
                <section className={styles.about}>
                    <div className={styles.articleWrapper}>
                        <article className={styles.aboutArticle}>
                            <h5 className={styles.aboutSubTitle}>{t('AboutUs.subTitleFirst')}</h5>
                            <h2 className={styles.aboutTitle}>{t('AboutUs.titleFirst')}</h2>
                            <p className={styles.aboutDescription}>{t('AboutUs.descriptionFirst')}</p>
                        </article>
                        <article className={styles.aboutArticle}>
                            <h5 className={styles.aboutSubTitle}>{t('AboutUs.subTitleSecond')}</h5>
                            <h2 className={styles.aboutTitle}>{t('AboutUs.titleSecond')}</h2>
                            <p className={styles.aboutDescription}>{t('AboutUs.descriptionSecond')}</p>
                        </article>
                    </div>
                    <Link href={`${AppRoutes.ABOUT}`} className={styles.aboutLink}>
                        {t("AboutUs.linkText")}
                    </Link>
                </section>
            </div>
            <div className={styles.category}>
                <h2 className={styles.categoryTitle}>{t('Category.title')}</h2>
                <section className={styles.categoryRow}>

                    {keysCategory.map((key) => (
                        <div className={styles.categoryBlock} key={`${key}.title`}>
                            <Image className={styles.categoryBlockIcon} alt="icon"
                                   src={t(`${key}.icon`)} width={48} height={48}/>
                            <h3 className={styles.categoryBlockTitle}>{t(`${key}.title`)}</h3>
                            <p className={styles.categoryBlockDescription}>{t(`${key}.description`)}</p>
                        </div>
                    ))}
                </section>


            </div>


        </>
    );
};

export default Page;

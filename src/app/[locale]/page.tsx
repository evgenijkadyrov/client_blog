import { AUTHORS } from "constants/authors";
import { LOGOS } from "constants/logos";
import { Link } from "navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { AboutUs } from "components/Home/About";
import { CategoryHome } from "components/Home/Category";
import { FeaturedPosts } from "components/Home/FeaturedPosts";
import { HomeHero } from "components/Home/HomeHero";
import { JoinUsHome } from "components/Home/JoinUs";
import { SpecialPost } from "components/Home/SpecialPost";
import { Testimonials } from "components/Testimonials";

import "styles/globals.scss";
import styles from "./home.module.scss";

const Page = () => {
    const t = useTranslations("HomeHero");

    return (
        <>
            <HomeHero />

            <div style={{ margin: "80px" }}>
                <FeaturedPosts />
            </div>
            <div className={styles.aboutContainer}>
                <AboutUs />
            </div>
            <div className={styles.category}>
                <CategoryHome />
            </div>
            <div className={styles.wrapperWhyWeStarted}>
                <SpecialPost />
            </div>
            <div>
                <section className={styles.listOfAuthors}>
                    <h2 className={styles.listOfAuthorsTitle}>{t("ListOfAuthor.title")}</h2>
                    <div className={styles.listOfAuthorsBlock}>
                        {AUTHORS.map(({ img, name, role, socials }) => (
                            <div className={styles.card} key={name}>
                                <div className={styles.imageWrapper}>
                                    <Image src={img} alt={name} loading="lazy" />
                                </div>
                                <h3 className={styles.name}>{name}</h3>
                                <p className={styles.role}>{role}</p>
                                <div className={styles.socials}>
                                    {socials.map(({ id, href, icon }) => (
                                        <Link key={id} href={href}>
                                            <Image
                                                src={icon.darkIcon}
                                                alt={icon.alt}
                                                loading="lazy"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div className={styles.wrapperFeatured}>
                <div className={styles.logos}>
                    <div className={styles.logosTitle}>
                        <p>We are</p>
                        <h4>Featured in</h4>
                    </div>
                    {LOGOS.map(({ id, img, alt }) => (
                        <Image
                            key={id}
                            src={img}
                            alt={alt}
                            className={styles.logosItem}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
            <div className={styles.testimonials}>
                <Testimonials />
            </div>
            <div className={styles.testimonials}>
                <JoinUsHome />
            </div>
        </>
    );
};

export default Page;

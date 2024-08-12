import ImageBgr from "assets/images/about/background.jpg";
import Image_1 from "assets/images/about/ground-group-growth-hands-461049.jpg";
import Image_2 from "assets/images/about/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.jpg";
import { AUTHORS } from "constants/authors";
import { getRandomElements } from "helpers/randomAuthorList";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import Container from "components/Container";
import { AuthorsBlock } from "components/Home/Authors";
import { JoinUsHome } from "components/Home/JoinUs";

import "styles/globals.scss";
import styles from "./about.module.scss";

const About = async () => {
    const t = await getTranslations("About");
    const authors = getRandomElements(AUTHORS, 8);

    return (
        <Container>
            <section className={styles.top}>
                <div className={styles.topHeaders}>
                    <h5 className={styles.topSubTitle}>{t("top.subTitle")}</h5>
                    <h1 className={styles.topTitle}>{t("top.title")}</h1>
                </div>
                <div className={styles.topContent}>
                    <p className={styles.topText}>{t("top.text")}</p>
                </div>
            </section>
            <section className={styles.stats}>
                <Image
                    src={ImageBgr}
                    alt="ImageBgr"
                    loading="lazy"
                    className={styles.statsImage}
                />
                <div className={styles.whiteBlock} />
                <div className={styles.yellowBlock} />
                <div className={styles.purpleBlock} />
                <div className={styles.statsRow}>
                    <div className={styles.statsBlock}>
                        <h1 className={styles.statsTitle}>12+</h1>
                        <p className={styles.statsText}>{t("stats.blogs")}</p>
                    </div>
                    <div className={styles.statsBlock}>
                        <h1 className={styles.statsTitle}>18K+</h1>
                        <p className={styles.statsText}>{t("stats.views")}</p>
                    </div>
                    <div className={styles.statsBlock}>
                        <h1 className={styles.statsTitle}>30K+</h1>
                        <p className={styles.statsText}>{t("stats.users")}</p>
                    </div>
                </div>
            </section>
            <section className={styles.misionVision}>
                <div className={styles.misionVisionRow}>
                    <article className={styles.misionVisionBlock}>
                        <h5 className={styles.misionVisionSupTitle}>
                            {t("misionVision.block_1.supTitle")}
                        </h5>
                        <h3 className={styles.misionVisionTitle}>
                            {t("misionVision.block_1.title")}
                        </h3>
                        <p className={styles.misionVisionText}>
                            {t("misionVision.block_1.text")}
                        </p>
                    </article>
                    <article className={styles.misionVisionBlock}>
                        <h5 className={styles.misionVisionSupTitle}>
                            {t("misionVision.block_2.supTitle")}
                        </h5>
                        <h3 className={styles.misionVisionTitle}>
                            {t("misionVision.block_2.title")}
                        </h3>
                        <p className={styles.misionVisionText}>
                            {t("misionVision.block_2.text")}
                        </p>
                    </article>
                </div>
            </section>
            <section className={styles.descriptionRow}>
                <article className={styles.descriptionContent}>
                    <h2 className={styles.descriptionTitle}>
                        {t("description.block_1.title")}
                    </h2>
                    <h4 className={styles.descriptionSubTitle}>
                        {t("description.block_1.subTitle")}
                    </h4>
                    <p className={styles.descriptionText}>
                        {t("description.block_1.text")}
                    </p>
                </article>
                <div className={styles.descriptionImage}>
                    <Image
                        src={Image_1}
                        alt="ground-group-growth-hands"
                        loading="lazy"
                    />
                    <div className={styles.figure_1} />
                </div>
            </section>
            <section className={styles.descriptionRow}>
                <div className={styles.descriptionImage}>
                    <Image
                        src={Image_2}
                        alt="three-persons-sitting-on-the-stairs"
                        loading="lazy"
                    />
                    <div className={styles.figure_2} />
                </div>
                <article className={styles.descriptionContent}>
                    <h2 className={styles.descriptionTitle}>
                        {t("description.block_1.title")}
                    </h2>
                    <h4 className={styles.descriptionSubTitle}>
                        {t("description.block_2.subTitle")}
                    </h4>
                    <p className={styles.descriptionText}>
                        {t("description.block_1.text")}
                    </p>
                </article>
            </section>
            <Container>
                <AuthorsBlock authors={authors} />
            </Container>
            <Container>
                <JoinUsHome />
            </Container>
        </Container>
    );
};

export default About;

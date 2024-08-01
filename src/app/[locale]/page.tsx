import React from "react";
import { AUTHORS } from "constants/authors";
import { getRandomElements } from "helpers/randomAuthorList";
import { useTranslations } from "next-intl";

import Container from "components/Container";
import FeaturedIn from "components/FeaturedIn";
import { AboutUs } from "components/Home/About";
import { AuthorsBlock } from "components/Home/Authors";
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
    const currentAuthors = getRandomElements(AUTHORS, 4);

    return (
        <>
            <HomeHero />
            <Container>
                <FeaturedPosts />
            </Container>
            <div className={styles.aboutContainer}>
                <AboutUs />
            </div>
            <Container>
                <h2 className={styles.categoryTitle}>{t("Category.title")}</h2>
                <CategoryHome />
            </Container>
            <Container>
                <SpecialPost />
            </Container>
            <Container>
                <AuthorsBlock authors={currentAuthors} />
            </Container>
            <Container>
                <FeaturedIn />
            </Container>
            <Container>
                <Testimonials />
            </Container>
            <Container>
                <JoinUsHome />
            </Container>
        </>
    );
};

export default Page;

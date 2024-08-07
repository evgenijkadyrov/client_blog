import { AUTHORS } from "constants/authors";
import { PostsProps } from "constants/posts";
import { getRandomElements } from "helpers/randomAuthorList";
import { getTranslations } from "next-intl/server";
import { getPosts } from "service/getData";

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
import { WithVisibility } from "components/WithVisibility";

import "styles/globals.scss";
import styles from "./home.module.scss";

const Page = async () => {
    const t = await getTranslations("HomeHero");
    const posts: PostsProps[] = (await getPosts()) as PostsProps[];
    const currentAuthors = getRandomElements(AUTHORS, 4);
    return (
        <>
            <HomeHero />
            <WithVisibility>
                <Container>
                    <FeaturedPosts posts={posts} />
                </Container>
            </WithVisibility>
            <WithVisibility>
                <Container>
                    <AboutUs />
                </Container>
            </WithVisibility>
            <WithVisibility>
                <Container>
                    <h2 className={styles.categoryTitle}>{t("Category.title")}</h2>
                    <CategoryHome />
                </Container>
            </WithVisibility>
            <WithVisibility>
                <Container>
                    <SpecialPost />
                </Container>
            </WithVisibility>
            <WithVisibility>
                <Container>
                    <AuthorsBlock authors={currentAuthors} />
                </Container>
            </WithVisibility>
            <WithVisibility>
                <Container>
                    <FeaturedIn />
                </Container>
            </WithVisibility>
            <WithVisibility>
                <Container>
                    <Testimonials />
                </Container>
            </WithVisibility>
            <WithVisibility>
                <Container>
                    <JoinUsHome />
                </Container>
            </WithVisibility>
        </>
    );
};

export default Page;

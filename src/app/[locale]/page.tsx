import { AUTHORS } from "constants/authors";
import { PostsProps } from "constants/posts";
import { getRandomElements } from "helpers/randomAuthorList";
import { getTranslations } from "next-intl/server";
import { getPosts } from "service/getData";

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

const POSTS_ON_BLOCK = 4;

const Page = async () => {
    const t = await getTranslations("HomeHero");
    const posts: PostsProps[] = (await getPosts()) as PostsProps[];
    const currentAuthors = getRandomElements(AUTHORS, POSTS_ON_BLOCK);
    return (
        <>
            <HomeHero />
            <WithVisibility>
                <FeaturedPosts posts={posts} />
            </WithVisibility>
            <WithVisibility>
                <AboutUs />
            </WithVisibility>
            <WithVisibility>
                <h2 className={styles.categoryTitle}>{t("Category.title")}</h2>
                <CategoryHome />
            </WithVisibility>
            <WithVisibility>
                <SpecialPost />
            </WithVisibility>
            <WithVisibility>
                <AuthorsBlock authors={currentAuthors} />
            </WithVisibility>
            <WithVisibility>
                <FeaturedIn />
            </WithVisibility>
            <WithVisibility>
                <Testimonials />
            </WithVisibility>
            <WithVisibility>
                <JoinUsHome />
            </WithVisibility>
        </>
    );
};

export default Page;

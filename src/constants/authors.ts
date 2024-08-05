import AuthorImage_3 from "assets/images/authors/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling.svg";
import AuthorImage_1 from "assets/images/authors/content-baker-with-delicious-puff-in-cafeteria.svg";
import AuthorImage_2 from "assets/images/authors/content-unshaven-man-covering-eye-with-yellow-flower.svg";
import AuthorImage_6 from "assets/images/authors/fashion-woman-cute-shoes.svg";
import AuthorImage_4 from "assets/images/authors/man-in-yellow.svg";
import AuthorImage_5 from "assets/images/authors/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses.svg";
import AuthorImage_8 from "assets/images/authors/woman-in-white.svg";
import AuthorImage_7 from "assets/images/authors/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses.svg";
import { BLOG_SOCIAL_LINKS, SocialsIcons } from "constants/socials";

export const AUTHORS_LINKS = [
    [
        "https://www.facebook.com/1",
        "https://twitter.com/1",
        "https://www.instagram.com/1",
        "https://www.linkedin.com/1",
    ],
    [
        "https://www.facebook.com/2",
        "https://twitter.com/2",
        "https://www.instagram.com/2",
        "https://www.linkedin.com/2",
    ],
    [
        "https://www.facebook.com/3",
        "https://twitter.com/3",
        "https://www.instagram.com/3",
        "https://www.linkedin.com/3",
    ],
    [
        "https://www.facebook.com/4",
        "https://twitter.com/4",
        "https://www.instagram.com/4",
        "https://www.linkedin.com/4",
    ],
    [
        "https://www.facebook.com/5",
        "https://twitter.com/5",
        "https://www.instagram.com/5",
        "https://www.linkedin.com/5",
    ],
    [
        "https://www.facebook.com/6",
        "https://twitter.com/6",
        "https://www.instagram.com/6",
        "https://www.linkedin.com/6",
    ],
    [
        "https://www.facebook.com/7",
        "https://twitter.com/7",
        "https://www.instagram.com/7",
        "https://www.linkedin.com/7",
    ],
    [
        "https://www.facebook.com/8",
        "https://twitter.com/8",
        "https://www.instagram.com/8",
        "https://www.linkedin.com/8",
    ],
];

export interface Author {
    id: number;
    name: string;
    role: string;
    socials: { id: number; icon: SocialsIcons; href: string }[];
    img: string;
    posts: number[];
    description: string;
}

export const AUTHORS: Author[] = [
    {
        id: 1,
        name: "Natalie Chen",
        role: "Travel Blogger",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[0][index],
        })),
        img: AuthorImage_1 as string,
        posts: [1],
        description:
            "Passionate about exploring the world and sharing travel experiences. Join me on my adventures to discover hidden gems and travel tips!",
    },
    {
        id: 2,
        name: "David Kim",
        role: "Tech Specialist",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[1][index],
        })),
        img: AuthorImage_2 as string,
        posts: [2],
        description:
            "Dedicated to decoding the latest in technology. From gadgets to software, I provide insights and reviews to keep you updated in the digital world.",
    },
    {
        id: 3,
        name: "Mike Baker",
        role: "Food Blogger",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[2][index],
        })),
        img: AuthorImage_3 as string,
        posts: [3, 10],
        description:
            "Exploring the culinary world one recipe at a time. Join me in discovering delicious dishes, cooking hacks, and restaurant reviews!",
    },
    {
        id: 4,
        name: "Alexandr Woods",
        role: "Photographer",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[3][index],
        })),
        img: AuthorImage_4 as string,
        posts: [4],
        description:
            "Capturing moments through the lens is my passion. Experience the world through my photography as I freeze time in stunning images.",
    },
    {
        id: 5,
        name: "Daniel Rivera",
        role: "Fitness Coach",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[4][index],
        })),
        img: AuthorImage_5 as string,
        posts: [5],
        description:
            "Empowering individuals to achieve their fitness goals. Join me on a journey to a healthier lifestyle through exercise and nutrition tips.",
    },
    {
        id: 6,
        name: "Isabella Cruz",
        role: "Fashion Stylist",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[5][index],
        })),
        img: AuthorImage_6 as string,
        posts: [6],
        description:
            "Curating trends and creating unique styles. Explore the world of fashion with me as I showcase the latest in clothing and accessories.",
    },
    {
        id: 7,
        name: "Ryan Mitchell",
        role: "Investment Advisor",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[6][index],
        })),
        img: AuthorImage_7 as string,
        posts: [7, 9],
        description:
            "Navigating the complex world of investments. Stay informed on financial strategies and market insights to secure your financial future.",
    },
    {
        id: 8,
        name: "Olivia Bennett",
        role: "Lifestyle Blogger",
        socials: BLOG_SOCIAL_LINKS.map((link, index) => ({
            ...link,
            href: AUTHORS_LINKS[7][index],
        })),
        img: AuthorImage_8 as string,
        posts: [8],
        description:
            "Sharing stories and tips on living a fulfilling life. Join me as I explore various aspects of lifestyle, wellness, and personal development.",
    },
];

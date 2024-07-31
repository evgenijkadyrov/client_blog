import darkFacebook from "assets/icons/socials/dark/Facebook.svg";
import darkInstagram from "assets/icons/socials/dark/Instagram.svg";
import darkLinkedIn from "assets/icons/socials/dark/LinkedIn.svg";
import darkTwitter from "assets/icons/socials/dark/Twitter.svg";
import lightFacebook from "assets/icons/socials/light/Facebook.svg";
import lightInstagram from "assets/icons/socials/light/Instagram.svg";
import lightLinkedIn from "assets/icons/socials/light/LinkedIn.svg";
import lightTwitter from "assets/icons/socials/light/Twitter.svg";

enum SocialsName {
    FACEBOOK = "Facebook",
    TWITTER = "Twitter",
    INSTAGRAM = "Instagram",
    LINKEDIN = "LinkedIn",
}

const BlogSocialPages = {
    FACEBOOK: "https://www.facebook.com/",
    TWITTER: "https://twitter.com",
    INSTAGRAM: "https://www.instagram.com/",
    LINKEDIN: "https://www.linkedin.com/",
};
interface SocialsIcons {
    id: number;
    darkIcon: string;
    lightIcon: string;
    alt: SocialsName;
}
export const SOCIALS_ICONS: SocialsIcons[] = [
    {
        id: 1,
        darkIcon: darkFacebook as string,
        lightIcon: lightFacebook as string,
        alt: SocialsName.FACEBOOK,
    },
    {
        id: 2,
        darkIcon: darkTwitter as string,
        lightIcon: lightTwitter as string,
        alt: SocialsName.TWITTER,
    },
    {
        id: 3,
        darkIcon: darkInstagram as string,
        lightIcon: lightInstagram as string,
        alt: SocialsName.INSTAGRAM,
    },
    {
        id: 4,
        darkIcon: darkLinkedIn as string,
        lightIcon: lightLinkedIn as string,
        alt: SocialsName.LINKEDIN,
    },
];

export const BLOG_SOCIAL_LINKS = [
    {
        id: 1,
        icon: SOCIALS_ICONS[0],
        href: BlogSocialPages.FACEBOOK,
    },
    {
        id: 2,
        icon: SOCIALS_ICONS[1],
        href: BlogSocialPages.TWITTER,
    },
    {
        id: 3,
        icon: SOCIALS_ICONS[2],
        href: BlogSocialPages.INSTAGRAM,
    },
    {
        id: 4,
        icon: SOCIALS_ICONS[3],
        href: BlogSocialPages.LINKEDIN,
    },
];

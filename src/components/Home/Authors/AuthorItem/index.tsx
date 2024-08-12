"use client";

import { AppRoutes } from "constants/routerPath";
import { SocialsIcons } from "constants/socials";
import { Link, useRouter } from "navigation";
import Image from "next/image";

import styles from "./authorItem.module.scss";

interface AuthorItemProps {
    author: {
        id: number;
        name: string;
        role: string;
        img: string;
        socials: { id: number; icon: SocialsIcons; href: string }[];
    };
}

export const AuthorItem = ({
    author: { name, role, img, socials, id },
}: AuthorItemProps) => {
    const router = useRouter();

    const clickHandlerAuthor = (): void => {
        router.push(`/${AppRoutes.AUTHORS}/${id}`);
    };
    return (
        <div
            className={styles.card}
            key={name}
            onClick={clickHandlerAuthor}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}>
            <div className={styles.imageWrapper}>
                <Image src={img} alt={name} loading="lazy" />
            </div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.role}>{role}</p>
            <div className={styles.socials}>
                {socials.map(({ id, href, icon }) => {
                    const { darkIcon, alt } = icon;
                    return (
                        <Link key={id} href={href}>
                            <Image src={darkIcon} alt={alt} loading="lazy" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

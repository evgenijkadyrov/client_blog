"use client";

import React, { ReactElement } from "react";
import classNames from "classnames";
import { LINKS } from "constants/navPanelItems";
import { AppRoutes } from "constants/routerPath";
import { Link, usePathname } from "navigation";
import { useTranslations } from "next-intl";

import styles from "./navPanel.module.scss";

interface NavPanelProps {
    full?: boolean;
}

export const NavPanel = ({ full }: NavPanelProps) => {
    const t = useTranslations("NavPanel");
    const pathname = usePathname();

    const renderNav = (): ReactElement[] => {
        const links: typeof LINKS = full ? [...LINKS] : [...LINKS.slice(0, -1)];

        return links.map(({ id, title, href }) => (
            <Link
                key={id}
                href={href}
                className={classNames(styles.link, {
                    [styles.linkActive]: (pathname as AppRoutes) === href,
                })}>
                {t(title)}
            </Link>
        ));
    };

    return (
        <div className={styles.row}>
            <Link href={`/${AppRoutes.HOME}`} className={styles.homeLink}>
                {t("appName")}
            </Link>

            {/* <input id="menuToggle" type="checkbox"/> */}
            {/* <label */}
            {/*    className={classNames(styles.menuBtn, full && styles.menuBtnFull)} */}
            {/*    htmlFor="menuToggle"> */}
            {/*    <span/> */}
            {/* </label> */}
            <nav className={classNames(styles.nav, full && styles.navFull)}>
                {renderNav()}
            </nav>
        </div>
    );
};
